export class AppError extends Error{
     constructor(message,status) 
     {
        super(message)
        this.status=status
     }  
}
const catchAsyncError = (fn) => (req, res, next) => 
{
    fn(req, res, next).catch((error) => next(error));
};

export default catchAsyncError