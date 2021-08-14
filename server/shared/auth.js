const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "nitrosnail";
const expiration = "2h";

module.exports = {
  // autheticated requests validation happens here
  authMiddleware: function ({ req }) {
    // token is recieved here
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }
    // Verify tokens validity and get the token data
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Token not valid");
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};