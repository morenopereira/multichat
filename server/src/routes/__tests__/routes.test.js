const request = require('supertest');
const app = require('../../app');

describe('HeathCheck', () => {
  it('heathCheck', done => {
    request(app)
      .get('/heathCheck')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Users', () => {
  it('Get all users', done => {
    request(app)
      .get('/users')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('POST responds with json', async done => {
    request(app)
      .post('/users')
      .send({ name: 'john' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Messages', () => {
  it('Get all messages', done => {
    request(app)
      .get('/messages')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('POST responds with json', async done => {
    request(app)
      .post('/messages')
      .send({ value: 'hi', author: 'john' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('compare value and author of message', done => {
    request(app)
      .post('/messages')
      .send({ value: 'hi', author: 'john' })
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.message.value = 'hi';
        res.body.message.author = 'john';
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Rooms', () => {
  it('GET', done => {
    request(app)
      .get('/rooms')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('POST create a room', async done => {
    request(app)
      .post('/rooms')
      .send({ name: 'exemple', messages: [] })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Get room by name', done => {
    request(app)
      .get('/rooms/exemple')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
