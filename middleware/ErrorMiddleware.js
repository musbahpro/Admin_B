const ErrorMiddleware = (err , req, res , next)=>{
    err.statusCode = err.statusCode || 500 ; 
    err.status = err.status ||"error";
    res.status(err.statusCode).json({
      status : err.status,
      error : err ,
      massage : err.massage ,
      stack : err.stack
    })
}

module.exports = ErrorMiddleware