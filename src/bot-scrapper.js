const puppeteer = require('puppeteer');

console.time('prueba');


(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page    = await browser.newPage();
    await page.goto('https://cuevana3.io/');

    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('.home-movies .MovieList li div a');

        const links = [];
        elements.forEach((element) => links.push(element.href));

        return links;
    });

    //funcion para obtener el enlace de cada reproductor
    for (const enlace of enlaces) {
        await page.goto(enlace);
        //console.log(enlace);
        const peliculas = await page.evaluate(() => {
            const pelicula = {
                nombre : document.querySelector('.Title').innerHTML,
                imgUrl : document.querySelector('img').getAttribute("src"),
                genero : document.querySelector('.AAIco-adjust a').innerHTML,
                director : document.querySelector('.AAIco-adjust span').innerHTML,
                sinopsis : document.querySelector('.Description p').innerHTML,
            }
            return pelicula;
        });
        await console.log(peliculas);
    }

    await browser.close();
    console.timeEnd('prueba');
})();
