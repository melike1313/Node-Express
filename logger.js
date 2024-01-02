const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`);
    next();
  };

  module.exports=logger