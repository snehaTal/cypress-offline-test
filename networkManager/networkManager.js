import { getBrowser } from "./browser/browserCheck";
import { networkManagers, compatibleBrowsers } from "./config";

const getNetworkManager = () => {
  const currentBrowser = getBrowser();
  if (!compatibleBrowsers.includes(currentBrowser)) {
    console.error(`${currentBrowser} is not compatible for offline testing.`);
  }

  return networkManagers[currentBrowser];
};

const networkManager = getNetworkManager();

export default networkManager;
