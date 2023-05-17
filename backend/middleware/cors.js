const corsMiddleware = (_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
};

module.exports = { corsMiddleware };
