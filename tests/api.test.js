const request = require('supertest');
const app     = require('../src/server');

/*
Testing endpoints
*/
describe("GET /obtenerPeliculas", () => {
    it('Responde un json con todas las peliculas', done => {
        request(app)
            .get("/obtenerPeliculas")
            .set('Accept', "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});

describe("GET /obtenerPeliculasPorId", () => {
    it("Responde un json si encuntra la pelicula con el id especificado", (done) => {
        request(app)
            .get("/obtenerPeliculaPorId/001")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
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
            .delete("/borrarPelicula/1")
            .send(data)
            .set("Accept", "application/json")
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
            .delete("/editarPelicula/1")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    
        });
});