import _ from 'lodash';
import generateToken from '../helpers/token';

class User {
  constructor() {
    this.users = [
      {
        id: 1,
        firstname: 'dukuzumuremyi',
        lastname: 'gilbert',
        email: 'gdukfils@gmail.com',
        password: 'success',
        address: 'kigali',
        bio: 'hard work beats talent when talent does not work',
        occupation: 'student',
        expertise: 'programmer',
        mentorrole: 'false',
        adminrole: 'true',
      },

    ];
  }

    signUp = (req) => {
      const existid = this.users.length + 1;
      let newUser = {
        token: generateToken(existid, req.mentorrole, req.adminrole),
        id: existid,
        firstname: req.firstname,
        lastname: req.lastname,
        email: req.email,
        password: req.password,
        address: req.address,
        bio: req.bio,
        occupation: req.occupation,
        expertise: req.expertise,
        mentorrole: false,
        adminrole: false,
      };
      this.users.push(newUser);
      newUser = {
        status: 201,
        message: 'user created successfully',
        data: _.pick(newUser, ['token', 'id']),
      };
      return newUser;
    }

    login = (payload) => {
      // check if user email and password exists
      // in our user array
      // eslint-disable-next-line max-len
      const user = this.users.find((Wuser) => (Wuser.email === payload.email) && ((Wuser.password === payload.password)));
      if (!user) { return { status: 401, error: 'email or password is incorrect' }; }
      let result = {
        token: generateToken(user.id, user.mentorrole, user.adminrole),
        id: user.id,
      };

      result = {
        status: 200,
        message: 'user is successfully logged in',
        data: result,
      };
      return result;
    };

      mentor = (res, id) => {
        // eslint-disable-next-line radix
        const mentorUser = this.users.find((user) => user.id === parseInt(id));
        if (mentorUser) return true;
      }


    existEmail = (email) => this.users.find((user) => user.email === email);
}

export default new User();
