var stakingNFT_abi = require("./ABI/staking.json");
var nft_abi = require("./ABI/nft.json");

export const config = {
    chainId: 137, //Fuji testnet : 43113, mainnet : 43114.  bsctestnet : 97, Rikeby: 4
    mainNetUrl: 'https://polygon-rpc.com/',

    StakingAddress: '0xdD3901bB32B7C4E2e53DB6ec59E676bD83908832',
    StakingAbi: stakingNFT_abi,
    nftAddress: '0x23E4081CD2b218B18be74cC903bbd6579A863495', 
    nftAbi: nft_abi,
    INFURA_ID: 'e6943dcb5b0f495eb96a1c34e0d1493e'
}
