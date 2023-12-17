export const goOffline = () => {
  cy.log("**go offline**")
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.enable",
      });
    })
    .then(() => {
      //console.log("executing offline code");
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
      return true;
    });
};

export const goOnline = () => {
  // disable offline mode, otherwise we will break our tests :)
  cy.log("**go online**")
    .then(() => {
      // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    })
    .then(() => {
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.disable",
      });
      return true;
    });
};

export const simulateNetworkCondition = (
  latency,
  downloadThroughput,
  uploadThroughput
) => {
  cy.log(
    `**Simulated Condition** latency: ${latency}, downloadThroughput: ${downloadThroughput}, uploadThroughput: ${uploadThroughput}`
  )
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: "Network.enable",
      });
    })
    .then(() => {
      console.log("executing slow2GNetwork");
      Cypress.automation("remote:debugger:protocol", {
        command: "Network.emulateNetworkConditions",
        params: {
          offline: false,
          latency,
          downloadThroughput,
          uploadThroughput,
        },
      });
      return true;
    });
};

export const slow2GSimultaion = () => {
  cy.log("**slow2GSimultaion**");
  simulateNetworkCondition(300, 0.25, 0.05);
};

export const average3GSimultaion = () => {
  cy.log("**average3GSimultaion**");
  simulateNetworkCondition(100, 1, 0.5);
};

export const fast4GSimultaion = () => {
  cy.log("**fast4GSimultaion**");
  simulateNetworkCondition(20, 20, 10);
};

export const unsupportedNetworkManager = () => {
  return {
    goOffline: () => {
      throw "Browser is Not Comapatible";
    },
    goOnline: () => {
      throw "Browser is Not Compatible";
    },
    simulateNetworkCondition: () => {
      throw "Browser is Not Compatible";
    },
    slow2GSimultaion: () => {
      throw "Browser is Not Compatible";
    },
    average3GSimultaion: () => {
      throw "Browser is Not Compatible";
    },
    fast4GSimultaion: () => {
      throw "Browser is Not Compatible";
    },
  };
};
