import jwt from 'jsonwebtoken';

require('dotenv').config();

const auth = (req, res, next) => {
  const token = req.header('user-token');
  if (!token) return res.status(401).send('You can\'t access this ');
  try {
    const passed = jwt.verify(token, process.env.JWT_SECRET);
    req.user = passed;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
  return console.log(token);
};

export default auth;
