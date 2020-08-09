/*global artifacts, contract, it*/
/**/
// For documentation please see https://framework.embarklabs.io/docs/contracts_testing.html
const Assets = artifacts.require("Assets");
const Token = artifacts.require("ERC20");
const Sablier = artifacts.require("Sablier");
const AssetManager = artifacts.require("AssetManager");

let accounts1,
  tokenAmount,
  startDate,
  balance,
  endDate,
  deposit,
  streamId,
  keys,
  tokenID,
  decimals;
const bigNumber = require("bignumber.js");
config(
  {
    contracts: {
      deploy: {
        AssetManager: {
          args: [],
        },
        ERC20: {
          args: [],
        },
        CTokenManager: {
          args: [],
        },
        Sablier: {
          deps: ["ERC20"],
          args: ["$CTokenManager"],
        },
        Assets: {
          args: [],
        },
      },
    },
  },
  (err, accs) => {
    accounts = accs;
  }
);

contract("ERC720", async () => {
  it("should init  token contract and mint tokens", async () => {
    var receipt = await Token.methods
      .initialize(
        "TestToken",
        "TT",
        18,
        new bigNumber(20000000000000000000000000000).toFixed()
      )
      .send({
        gas: 6000000,
      });
    assert.strictEqual(receipt != null, true);
    // console.log('receipt: ', receipt.events.Approval.returnValues)
  });
  it("should approve the sablier token", async () => {
    var receipt = await Token.methods
      .approve(
        Sablier.options.address,
        new bigNumber(1000000000000000000000000000000)
      )
      .send({
        gas: 6000000,
      });
    assert.strictEqual(receipt != null, true);
    // console.log('receipt: ', receipt.events.Approval.returnValues)
  });
 /**/ it("should transfer 100000000000000000000000", async () => {
    var receipt = await Token.methods
      .transfer(accounts[1], new bigNumber(200000000000000000000000000))
      .send({
        gas: 6000000,
      });
    assert.strictEqual(receipt != null, true);
    // console.log('receipt: ', receipt.events.Approval.returnValues)
  });
});
/*
contract("Sablier", async function() {
  it("should create a stream", async () => {
    decimals = await Token.methods.decimals().call({
      gas: 6000000,
    });
    tokenAmount = new bigNumber(Math.round(Math.random() * 500));
    tokenAmount = tokenAmount.multipliedBy(new bigNumber(10).pow(decimals));
    startDate = new bigNumber(
      new Date(new Date().setMinutes(new Date().getMinutes() + 1)).getTime()
    ).toFixed();
    endDate = new bigNumber(
      new Date(new Date().setDate(new Date().getDate() + 5)).getTime()
    ).toFixed(); //5 days from now
    startDate = Math.round(startDate / 1000);
    endDate = Math.round(endDate / 1000);
    console.log("startDate: ", startDate);
    console.log("endDate: ", endDate);
    var timeDelta = new bigNumber(endDate - startDate).toFixed();
    deposit = calculateDeposit(timeDelta, tokenAmount);
    console.log("deposit: ", deposit);
  });

  it("should start a new stream", async function() {
    var receipt = await Sablier.methods
      .createStream(
        accounts[1],
        deposit,
        Token.options.address,
        startDate,
        endDate
      )
      .send({
        gas: 6000000,
        from: accounts[0],
      });
    console.log(
      "startStream: ",
      receipt.events.CreateStream.returnValues.streamId
    );
    streamId = receipt.events.CreateStream.returnValues.streamId;
    await increaseTime(200);
  });

  it("should check the balance of user since stream started", async () => {
    var balance = await Sablier.methods.balanceOf(streamId, accounts[1]).call({
      gas: 6000000,
    });
    console.log("balance: ", balance);
    assert.strictEqual(balance > 0, true);
    // console.log('receipt: ', receipt.events.Approval.returnValues)
  });
});
*/
contract("Assets", async function() {
  it("should init the asset contract", async () => {
    var receipt = await Assets.methods
      .init("Asset", "A", accounts[0])
      .send({ gas: 6000000 });
    assert.strictEqual(receipt != null, true);
  });
  it("should  create a new asset", async () => {
    const assetMetaData = JSON.stringify(`{
      name: "BMW X5",
      avatarURL: "https://www.bmw.co.za/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-exterior-interior-gallery-l-02.jpg",
      value: ${Math.random() * 1000000}$
    }`);

    const receipt = await Assets.methods
      .createNewAsset(assetMetaData)
      .send({ gas: 6000000 });
    console.log("added asset: ", receipt.events.Transfer.returnValues);
    tokenID = receipt.events.Transfer.returnValues.tokenId;
    assert.strictEqual(receipt != null, true);
  });

  it("should check if the asset id exists", async () => {
    var exists = await Assets.methods.exists(tokenID).call({ gas: 6000000 });
    console.log("exists: ", exists);
    assert.strictEqual(exists, true);
  });

  it("should check if caller owns or is aproved to transfer", async () => {
    var isApprovedOrOwner = await Assets.methods
      .isApprovedOrOwner(accounts[0], tokenID)
      .call({ gas: 6000000 });
    console.log("isApprovedOrOwner: ", isApprovedOrOwner);
    assert.strictEqual(isApprovedOrOwner, true);
  });
});

contract("AssetManager", async () => {
  it("should init the assetManager contract", async () => {
    var receipt = await AssetManager.methods
      .init(Assets.options.address, Sablier.options.address)
      .send({ gas: 6000000 });
    assert.strictEqual(receipt != null, true);
  });
  it("should register an asset rental", async () => {
    decimals = await Token.methods.decimals().call({
      gas: 6000000,
    });
    tokenAmount = new bigNumber(Math.round(Math.random() * 200));
    tokenAmount = tokenAmount.multipliedBy(new bigNumber(10).pow(decimals));
    startDate = new bigNumber(
      new Date(new Date().setHours(new Date().getHours() + 5)).getTime()
    ).toFixed();
    endDate = new bigNumber(
      new Date(new Date().setDate(new Date().getDate() + 5)).getTime()
    ).toFixed(); //5 days from now
    startDate = Math.round(startDate / 1000);
    endDate = Math.round(endDate / 1000);
    console.log("startDate: ", startDate);
    console.log("endDate: ", endDate);
    var timeDelta = new bigNumber(endDate - startDate).toFixed();
    console.log('timeDelta: ',timeDelta)
    deposit = calculateDeposit(timeDelta, tokenAmount);
    var bal = await Token.methods.balanceOf(accounts[1]).call({ gas: 6000000 });
    console.log(deposit, bal, bal > deposit);
    var receipt = await AssetManager.methods
      .registerAssetMovement(
        accounts[0],
        tokenID,
        deposit,
        startDate,
        endDate,
        Token.options.address
      )
      .send({ gas: 6000000, from: accounts[1] });
      console.log(receipt.events.Balance.returnValues)
    assert.strictEqual(receipt !== null, true);
  });
});
function calculateDeposit(delta, deposit) {
  var diff = deposit.minus(deposit.minus(deposit.mod(delta)));
  deposit = new bigNumber(deposit).minus(diff);
  console.log("deposit.toFixed(): ", deposit.toFixed());
  return deposit.toFixed();
}
