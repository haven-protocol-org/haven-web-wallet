import {logM} from "../../../../utility/utility";
import {ipcRenderer} from "electron";
import {CommunicationChannels} from "../ipc-types";


// @ts-ignore
const ipcRender:typeof ipcRenderer= window.ipcRenderer;




export function openWalletRPC(params:object) {
    return callRpc("open_wallet", params)
}

export function restoreWalletRPC(params: object) {
  return callRpc("restore_deterministic_wallet", params);
}

export function getBalanceRPC(params: object) {
  return callRpc("get_balance", params);
}

export function queryMnemonicKeyRPC() {
    return callRpc("query_key", { key_type: "mnemonic" });
}

export function transferRPC(params: object) {
  return callRpc("transfer", params);
}

export function getTransferRPC(params: object) {
  return callRpc('get_transfers', params);
}

export function createWalletRPC(params: object) {
  return callRpc("create_wallet", params);
}

export function getHeightRPC() {
  return callRpc('get_height');
}

export function refreshRPC(start_height = 0) {
  return callRpc('refresh' ,{start_height});
}


export function onshoreRPC(params: object) {
    return callRpc('onshore', params)
}

export function offshoreRPC(params: object) {
    return callRpc('offshore', params)
}

export function getOffshoreBalanceRPC() {

    return callRpc('get_offshore_balance')

}

export function getOffshoreTransfersRPC(params: object) {
    return callRpc('get_offshore_transfers', params)
}


export function offshoreTransferRPC(params: object) {
    return callRpc('offshore_transfer', params)
}


export function getLastBlockHeaderRPC() {

    return callRpc('get_last_block_header');

}
export function getBlockHeaderByHeightRPC(params: object) {

    return callRpc('get_block_header_by_height');

}

export function getInfoRPC() {

    return callRpc('get_info');

}



function callRpc(method: string, params: object | undefined = undefined) {

    // const rpcUrl = process.env.REACT_APP_RPC_URL;
    const objRequest = {
        id: 0,
        jsonrpc: "2.0",
        method: method,
        params: params
    };


    logM(objRequest);


    return ipcRender.invoke(CommunicationChannels.RPC, objRequest)
        .then(response => handleError(response));

}



export const handleError = async (response: any) => {


    // intercept error on protocol level

    if (response.data.error)
        return Promise.reject (response.data.error);


    return response.data.result;

};
