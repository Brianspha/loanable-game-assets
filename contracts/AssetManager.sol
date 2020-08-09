pragma solidity >=0.5.10;
import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "./Sablier.sol";
import "./Assets.sol";
import "./shared-contracts/interfaces/ICERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";


/**
@dev Stream Manager Contract Definition
@notice Responsible for managing all user sablier streams
 */

contract AssetManager is Initializable {
    using SafeMath for uint256;
    /**=========================================================== struct definition start/**=========================================================== */
    struct Asset {
        bytes32 rental_id;
        uint256 asset_id;
        address asset_owner;
        uint256 currentStream;
        address currentRenter;
        address[] renters;
        uint256[] stream_ids;
        uint256 accumalatedIncome;
        bool canMove;
        bool active;
    }
    /*=========================== Events definition Start =========================== */
    event AssetMovement(bytes32 indexed id, bool indexed renteredOut);
    /**=========================================================== contract variables definition start/**=========================================================== */
    mapping(bytes32 => Asset) registeredAssets;
    bytes32[] assetKeys;
    address addressTokenContract;
    address owner;
    Sablier sablierContract;
    Assets assetsContract;

    function init(address tokenAddress, address sablierAddress)
        public
        initializer
    {
        require(
            sablierAddress != address(0) ||
                sablierAddress != tokenAddress ||
                sablierAddress != msg.sender,
            "Invalid sablier address"
        );
        require(msg.sender != address(0), "Invalid sender address");
        require(
            tokenAddress != address(0) || msg.sender != tokenAddress,
            "Invalid token address"
        );
        sablierContract = Sablier(sablierAddress);
        assetsContract = Assets(tokenAddress);
        owner = msg.sender;
    }

    function registerAssetMovement(
        address assetOwner,
        uint256 asset_index,
        uint256 rentalAmount,
        uint256 startDate,
        uint256 endDate,
        address tokenAddress
    ) public {
        require(
            tokenAddress != address(0) ||
                tokenAddress != msg.sender ||
                owner != tokenAddress,
            "Invalid tokenAddress"
        );
        require(msg.sender != address(0), "invalid sender address");
        require(
            !assetsContract.exists(asset_index) ||
                assetsContract.isApprovedOrOwner(assetOwner, asset_index),
            "asset does not exists"
        );
        require(rentalAmount > 0, "rental amount cannot be 0");
        bytes32 id = keccak256(
            abi.encodePacked(
                msg.sender,
                assetOwner,
                asset_index,
                block.timestamp
            )
        );
        require(
            !registeredAssets[id].active,
            "Asset cannot be moved in the same block time"
        );
        IERC20 standardToken = IERC20(tokenAddress);
        require(
            standardToken.approve(address(sablierContract), rentalAmount),
            "Something went wrong whilst approving token"
        );
        uint256 stream_id = sablierContract.createStream(
            owner,
            rentalAmount,
            address(standardToken),
            startDate,
            endDate
        );
        registeredAssets[id].active = true;
        registeredAssets[id].canMove = false;
        registeredAssets[id].rental_id = id;
        registeredAssets[id].renters.push(msg.sender);
        registeredAssets[id].asset_id = asset_index;
        registeredAssets[id].currentStream = stream_id;
        registeredAssets[id].currentRenter = msg.sender;
        registeredAssets[id].accumalatedIncome = registeredAssets[id]
            .accumalatedIncome
            .add(rentalAmount);
        assetKeys.push(id);
        emit AssetMovement(id, true);
    }

    function rentalPeriodOver(bytes32 asset_id) public returns (bool) {
        require(msg.sender != address(0), "invalid sender address");
        require(
            registeredAssets[asset_id].active,
            "Asset movement hasnt been registered"
        );
        registeredAssets[asset_id].canMove = true;
    }

    function getAllAssetKeys() public view returns (bytes32[] memory) {
        return assetKeys;
    }

    function getAssetDetails(bytes32 asset_id)
        public
        view
        returns (
            address[] memory,
            uint256[] memory,
            uint256,
            bool
        )
    {
        return (
            registeredAssets[asset_id].renters,
            registeredAssets[asset_id].stream_ids,
            registeredAssets[asset_id].accumalatedIncome,
            registeredAssets[asset_id].canMove
        );
    }
}
