import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

import server from '../index';

const { expect } = chai;
chai.use(chaiHttp);

const newUser = {
  firstname: 'dukuzumuremyi',
  lastname: 'gilbert',
  email: 'gdu@gmail.com',
  password: 'success',
  address: 'kigali',
  bio: 'hard work beats talent when talent does not work',
  occupation: 'student',
  expertise: 'programmer',
  mentorrole: false,
  adminrole: true,
};

describe('user should sign up', () => {
  it('expect user to sign up', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.have.status(201);
        expect(res.body).to.be.an('Object');
        done();
      });
  });
});
describe('user should sign in', () => {
  it('expect user to sign in', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signin')
      .send({email:'gdu@gmail.com', password:'success'})
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
