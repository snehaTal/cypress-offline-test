import { browsers } from "./browser/browserCheck";
import chromeNetworkManager from "./browser/chrome";
import edgeNetworkManager from "./browser/edge";
import firefoxNetworkManager from "./browser/firefox";
import safariNetworkManager from "./browser/safari";
import ieNetworkManager from "./browser/ie";
import operaNetworkManager from "./browser/opera";
import unknownNetworkManager from "./browser/unknown";
import electronNetworkManager from "./browser/electron";

export const compatibleBrowsers = [
  browsers.EDGE,
  browsers.CHROME,
  browsers.ELECTRON,
];

export const networkManagers = {
  [browsers.CHROME]: chromeNetworkManager,
  [browsers.EDGE]: edgeNetworkManager,
  [browsers.FIREFOX]: firefoxNetworkManager,
  [browsers.SAFARI]: safariNetworkManager,
  [browsers.OPERA]: operaNetworkManager,
  [browsers.MSIE]: ieNetworkManager,
  [browsers.UNKNOWN]: unknownNetworkManager,
  [browsers.ELECTRON]: electronNetworkManager,
};
