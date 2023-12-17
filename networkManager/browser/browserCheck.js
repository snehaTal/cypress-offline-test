export const browsers = {
  EDGE: "EDGE",
  FIREFOX: "FIREFOX",
  CHROME: "CHROME",
  MSIE: "MSIE",
  UNKNOWN: "UNKNOWN",
  OPERA: "OPERA",
  SAFARI: "SAFARI",
  ELECTRON: "ELECTRON",
};
//Electron
export const getBrowser = () => {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return browsers.OPERA;
  } else if (navigator.userAgent.indexOf("Electron") != -1) {
    return browsers.ELECTRON;
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    return browsers.EDGE;
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return browsers.CHROME;
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return browsers.SAFARI;
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return browsers.FIREFOX;
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    return browsers.MSIE;
  } else {
    return browsers.UNKNOWN;
  }
};
