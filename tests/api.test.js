const request = require('supertest');
const app = require('../src/server'); // the express server

/*
  declare the token variable in a scope accessible
  by the entire test suite
*/
let token;

beforeAll((done) => {
  request(app)
    .post('/loginUsuario')
    .send({
      usuario: "samuel",
      contraseña: "bustamante",
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

describe('GET /', () => {
  // token not being sent - should respond with a 401
  test('It should require authorization', () => {
    return request(app)
      .get('/obtenerPeliculas')
      .then((response) => {
        expect(response.statusCode).toBe(401);
      });
  });
  // send the token - should respond with a 200
  test('It responds with JSON', () => {
    return request(app)
      .get('/obtenerPeliculas')
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
  });
});
