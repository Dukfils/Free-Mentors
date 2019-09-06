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
  bio: 'hard work beats talent when talent does not work!',
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
      .send({ email: 'gdu@gmail.com', password: 'success' })
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
it('should fail to sign up', (done) => {
  chai.request(server)
    .post('/api/v1/auth/signup')
    .end((err, res) => {
      expect(res.body).to.have.property('error');
      expect(res.body).to.have.status(400);
      done();
    });
});
it('expect user to fail login', (done) => {
  chai.request(server)
    .post('/api/v1/auth/signin')
    .end((err, res) => {
      expect(res.body).to.have.status(400);
      expect(res.body).to.have.property('error');
      done();
    });
});

describe('Admin change user to mentor', () => {
  it('should change normal user to mentor', (done) => {
    chai.request(server)
      .patch('/api/v1/user/2')
      .end((err, res) => {
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('isMentor').equals(true);
        done();
      });
  });

  it('should fail to change user to mentor', (done) => {
    chai.request(server)
      .patch('/api/v1/user/8')
      .end((err, res) => {
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.property('status').equals(404);
        done();
      });
  });
});

describe('expect Authorized user to see all mentor', () => {
  it('expect user see all mentor ', (done) => {
    chai.request(server)
      .get('/api/v1/mentors')
      .end((err, res) => {
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('status').equals(200);
        done();
      });
  });
});
describe('Expects user to see a specific mentor', () => {
  it('expect user see Spesfic mentor ', (done) => {
    chai.request(server)
      .get('/api/v1/mentors/1')
      .end((err, res) => {
        expect(res.body).to.have.property('status').equals(200);
        expect(res.body).to.have.property('data').is.an('object');
        done();
      });
  });

  it('should fail to see mentor', (done) => {
    chai.request(server)
      .get('/api/v1/mentors/20')
      .end((err, res) => {
        expect(res.body).to.have.property('status').equals(404);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
