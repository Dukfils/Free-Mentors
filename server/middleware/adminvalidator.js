import jwt from 'jsonwebtoken';

const admin = (req, res, next) => {
  const token = req.header('X-auth-token');


  try {
    const decoded = jwt.verify(token, 'secretkey');
    if (!decoded.adminrole) {
      return res.status(403).send({ status: 403, error: 'user does not exist' });
    }
    next();
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.message });
  }
};

export default admin;
