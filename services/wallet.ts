import { ethers, } from "ethers";
import ERC20ABI from "./ERC20.json";

export const connectWallet = async () => {
    if (window.ethereum) {
        const account = await window.ethereum.request({ method: "eth_accounts" });
        if (account.length == 0) {
            const connectAccount = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("Account:", await connectAccount.toString().substr(0, 8));
        }     
    }
};

export const checkIfUserIsConnected = async () => {
    var result = 'false';
    if (window.ethereum) {
        const account = await window.ethereum.request({ method: "eth_accounts" });
        if (account.length == 0) {
            result = 'false';
        } else {
            result = 'true';
        }       
    }
    return result;
}

export const getUserAddress = async () => {
    var result;
    if (window.ethereum) {
        const account = await window.ethereum.request({ method: "eth_accounts" });
        if (account.length != 0) {
            result = account[0]
        }      
    }
    return result;
}

export const getUserBalance = async () => {
    const account = await window.ethereum.request({ method: "eth_accounts" });
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    const MATIC_ADDRESS = "0x0000000000000000000000000000000000001010";
    const MATIC = new ethers.Contract(MATIC_ADDRESS, ERC20ABI, provider);
    const balance = await MATIC.balanceOf(account[0]);
    console.log("dentro", ethers.utils.formatEther(balance))

    return ethers.utils.formatEther(balance);
}