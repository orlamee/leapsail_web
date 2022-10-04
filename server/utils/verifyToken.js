import jwt from 'jsonwebtoken';
import { handleError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(handleError(401, 'Unauthorized.'));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(handleError(403, 'token not valid'));

    req.user = user;
    next();
  });
};
