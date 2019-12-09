import { AnyAction, combineReducers } from "redux";
// Reducers
import theme from "shared/reducers/currentTheme.js";
import address from "shared/reducers/address.js";
import { transferProcess } from "./transferProcess";
import { priceHistory } from "shared/reducers/priceHistory";
import notification from "shared/reducers/notification";
import walletCreation from "./walletCreation";
import { CLOSE_WALLET } from "shared/actions/types";
import { chain } from "./chain";
import { simplePrice } from "shared/reducers/simplePrice";
import { walletSession } from "./walletSession";
import forex from "../../../shared/reducers/forex";
import { blockHeaderExchangeRate } from "./blockHeaderExchangeRates";
import { xBalance } from "shared/reducers/xBalance";
import { xTransferList } from "shared/reducers/xTransferList";
import { offshoreProcess } from "./offshoreProcess";
import { daemonStates } from "./daemonStates";

const appReducer = combineReducers({
  theme,
  address,
  xBalance,
  transferProcess,
  xTransferList,
  forex,
  blockHeaderExchangeRate,
  walletCreation,
  offshoreProcess,
  notification,
  walletSession,
  daemonStates,
  priceHistory,
  chain,
  simplePrice
});

const rootReducer = (state: any, action: AnyAction) => {
  const {daemonStates} = state;
  if (action.type === CLOSE_WALLET) {
    state = {daemonStates};
  }

  return appReducer(state, action);
};

export default rootReducer;

export type DesktopAppState = ReturnType<typeof rootReducer>;
