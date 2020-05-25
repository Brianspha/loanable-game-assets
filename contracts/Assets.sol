pragma solidity >=0.5.10;
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Enumerable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Metadata.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721MetadataMintable.sol";


contract Assets is
    Initializable,
    ERC721,
    ERC721Enumerable,
    ERC721Metadata,
    ERC721MetadataMintable
{
    /*=========================== Structs definition Start =========================== */
    struct Asset {
        bytes32 rental_id;
        uint256 asset_id;
        address asset_owner;
        address[] renters;
        uint256[] stream_ids;
        uint256 accumalatedIncome;
        bool canMove;
        bool active;
    }
    /*=========================== Events definition Start =========================== */
    event AssetMovement(bytes32 indexed id);
    /*=========================== Modfiers definition Start =========================== */

    /*=========================== Contract Variables definition Start =========================== */

    mapping(bytes32 => Asset) registeredAssets;
    bytes32[] assetKeys;

    /*=========================== Contract function definition Start =========================== */

    function init(
        string memory name,
        string memory symbol,
        address minter
    ) public initializer {
        ERC721.initialize();
        ERC721Enumerable.initialize();
        ERC721Metadata.initialize(name, symbol);
        // Initialize the minter and pauser roles, and renounce them
        ERC721MetadataMintable.initialize(address(this));
        _removeMinter(address(this));
        _addMinter(minter);
    }

    function registerAssetMovement(
        address renter,
        uint256 stream_id,
        uint256 asset_id,
        uint256 rentalAmount
    ) public {
        require(address(0) != renter, "invalid renter address");
        require(msg.sender != address(0), "invalid sender address");
        require(!_exists(asset_id), "asset does not exists");
        require(rentalAmount > 0, "rental amount cannot be 0");
        bytes32 id = keccak256(
            abi.encodePacked(
                renter,
                msg.sender,
                stream_id,
                asset_id,
                block.timestamp
            )
        );
        require(
            !registeredAssets[id].active,
            "Asset cannot be moved in the same block time"
        );
        registeredAssets[id].active = true;
        registeredAssets[id].canMove = false;
        registeredAssets[id].rental_id = id;
        registeredAssets[id].renters.push(renter);
        registeredAssets[id].stream_ids.push(stream_id);
        registeredAssets[id].asset_id = asset_id;
        registeredAssets[id].accumalatedIncome = registeredAssets[id]
            .accumalatedIncome
            .add(rentalAmount);
        assetKeys.push(id);
        emit AssetMovement(id);
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
