class ApiError extends Error {
    constructor(massage , statusCode){
        super(massage);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "Error"
        
    }
}

module.exports = ApiError