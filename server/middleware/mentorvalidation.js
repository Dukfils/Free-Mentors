import jwt from 'jsonwebtoken';

const mentor = (req, res, next) => {
  const token = req.header('x-auth-token');


  try {
    const mentordecoded = jwt.verify(token, 'secretkey');
    if (!mentordecoded.mentorrole) {
      return res.status(403).send({ status: 403, error: 'user does not exist' });
    }
    next();
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.message });
  }
};

export default mentor;
