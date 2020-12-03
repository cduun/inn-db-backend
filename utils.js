

  
const welcomeMessage = "Welcome to IBM Cloud DevOps using containers. Let\'s go use the Continuous Delivery Service";
const portMessage = "Application Running on port";

const getWelcomeMessage = () => {
    return welcomeMessage;
};

const getPortMessage = () => {
    return portMessage;
};

exports.getWelcomeMessage = getWelcomeMessage;
exports.getPortMessage = getPortMessage;