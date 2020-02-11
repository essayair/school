module.exports = (err, req, res, next) => {
    if (err.name === "ValidationError") {
        return res.status(400).json(err.message);
    }
    
    return res.status(500).json('something unexpected happend');
}


// function formatResponse(res, statusCode, result, message) {
//     res.status(statusCode).json(xxxx)
// }
/** often writen in utils */