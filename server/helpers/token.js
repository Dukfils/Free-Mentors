import jwt from 'jsonwebtoken';

const generateToken = (id, mentor, admin) => {
  const generatedToken = jwt.sign({ id, mentorrole: mentor, adminrole: admin }, 'secretkey');
  return generatedToken;
};
export default generateToken;
