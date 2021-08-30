const indexController = {};

indexController.firstTest = (req, res) => {
    const data  = {
        "name" : "samuel",
        "website" : "samuel.com",
        "age" : 25,
        "lastName" : "Bustamante",
    };

    res.json(data);
};

indexController.secondTest = (rqe, res) => {
    res.json({
        "name" : "segunda prueba",
    });
}

module.exports = indexController;