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

    /*=========================== Events definition Start =========================== */
    /*=========================== Modfiers definition Start =========================== */

    /*=========================== Contract Variables definition Start =========================== */
    Counters.Counter tokenCount;

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

    function createNewAsset(string memory meta_data) onlyMinter public returns (uint256) {
        uint256 tokenId = tokenCount.current();
        require(
          mintWithTokenURI(msg.sender, tokenId, meta_data),
            "error minting new asset"
        );
        return tokenId;
    }

    function exists(uint256 asset_index) public view returns (bool) {
        return _exists(asset_index);
    }

    function isApprovedOrOwner(address assetOwner, uint256 asset_index)
        public view
        returns (bool)
    {
        return _isApprovedOrOwner(assetOwner, asset_index);
    }
}
