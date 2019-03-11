const logTime = (req, res, next) => {
    req.requestTime = Date();
    console.log(`time request: ${req.requestTime}`);
    next();
};
export default logTime;



