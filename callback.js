const callMe = (text) => {
    console.log(text)
};

const calling = (callback, text) => {
    callback(text)
};

calling(callMe, "Hello");