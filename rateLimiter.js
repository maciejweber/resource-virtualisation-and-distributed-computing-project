const rateLimit = require("express-rate-limit");

const windowMs = process.env.WINDOW_MS || 15 * 60 * 1000;
const maxRequestsPerWindow = process.env.MAX_REQUEST_PER_WINDOW || 10;

const limiter = rateLimit({
  windowMs: windowMs,
  max: maxRequestsPerWindow,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

module.exports = limiter;
