const request = require('supertest');
const app     = require('../src/server');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE2NjlmZTE1MmVjZjE5NWQyZmJjOCIsImlhdCI6MTYzMTY3OTUwNSwiZXhwIjoxNjMxNjgyMTA1fQ.bcaPpGM47RPKIyZ20hC1jM9ZQl4rKVjALkBS_ujheQY";
/*
Testing endpoints
*/
describe("GET /obtenerPeliculas", () => {
    it('Responde un json con todas las peliculas', done => {
        request(app)
            .get("/obtenerPeliculas")
            .set('Accept', "application/json")
            .set("Authorization", token)
            .expect("Content-Type", /json/)
            .expect(201, done);
    });
});

describe("GET /obtenerPeliculasPorId", () => {
    it("Responde un json si encuntra la pelicula con el id especificado", (done) => {
        request(app)
            .get("/obtenerPeliculaPorId")
            .set("Accept", "application/json")
            .set("Authorization", token)
            .expect("Content-Type", /json/)
            .expect(201, done)
    });
    
});

describe("POST /agregarPelicula", () => {
    it("Responde con 201 pelicula agregada", (done) => {
        
    const data = {
        nombre : "Harry Potter",
        director: "asdasd",
        imageUrl : "asdasdasd"
    }
    request(app)
        .post("/agregarPelicula")
        .send(data)
        .set("Accept", "application/json")
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err) => {
            if(err) return done(err);
            done();
        })

    });
});

describe("DELETE /borrarPelicula/:id", () => {
    it("Responde con 201 pelicula borrada", (done) => {
        const id = 1;
        request(app)
            .delete("/borrarPelicula")
            .set("Accept", "application/json")
            .set("Authorization", token)
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    
        });
});

describe("PUT /editarPelicula/:id", () => {
    it("Responde con 201 pelicula editada", (done) => {
        const id = 1;
        request(app)
            .put("/editarPelicula")
            .set("Accept", "application/json")
            .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE2NjlmZTE1MmVjZjE5NWQyZmJjOCIsImlhdCI6MTYzMTY3OTUwNSwiZXhwIjoxNjMxNjgyMTA1fQ.bcaPpGM47RPKIyZ20hC1jM9ZQl4rKVjALkBS_ujheQY")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    
        });
});