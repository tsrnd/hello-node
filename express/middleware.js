exports.Log = function (req, res, next) {
    console.log("=".repeat(60), "\n\nRequest:", {
        time: Date.now(),
        method: req.method,
        path: req.path,
        params: req.body || {},
        query: req.query || {},
        file: req.files || null
    });
    console.log("\n", "=".repeat(60), "\n");
    next();
};
