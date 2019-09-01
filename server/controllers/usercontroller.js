import Joi from '@hapi/joi';
import User from '../models/usermodel';
import Mentors from '../models/mentorsModel';

class UserController {
    signUpControll = (req, res) => {
      const model = {
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().min(6).required(),
        address: Joi.string().required(),
        bio: Joi.string().required(),
        occupation: Joi.string().required(),
        expertise: Joi.string().required(),
        mentorrole: Joi.boolean().default(false),
        adminrole: Joi.boolean().default(false),
      };
      const result = Joi.validate(req.body, model);
      if (result.error === null) {
        if (User.existEmail(req.body.email)) {
          return res.status(409).send({ status: 409, error: `${req.body.email}  already exist` });
        }
        const user = User.signUp(req.body);
        return res.status(201).send(user);
      }
      return res.status(400).send({ status: 400, error: `${result.error.details[0].message}` });
    };

    signIn = (req, res) => {
      const schema = {
        email: Joi.string().email().required(),
        password: Joi.required(),
      };
      const result = Joi.validate(req.body, schema);
      if (result.error === null) {
        const user = User.login(req.body);
        if (user.status === 200) {
          res.set('X-auth-token', user.data.token);
          return res.status(200).send(user);
        }
        return res.status(401).send(user);
      }
      return res.status(400).send({ status: 400, error: `${result.error.details[0].message}` });
    }

      
}
export default UserController;
