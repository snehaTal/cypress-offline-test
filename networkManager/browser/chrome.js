import {
  goOffline,
  goOnline,
  slow2GSimultaion,
  average3GSimultaion,
  fast4GSimultaion,
  simulateNetworkCondition,
} from "./common";
const networkManager = () => {
  return {
    goOffline,
    goOnline,
    slow2GSimultaion,
    average3GSimultaion,
    fast4GSimultaion,
    simulateNetworkCondition,
  };
};
const chromeNetworkManager = networkManager();
export default chromeNetworkManager;
