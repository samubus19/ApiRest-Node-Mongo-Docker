const {Router} = require("express");

const router = Router();

router.get("/test", (req, res) => {
    const data  = {
        "name" : "samuel",
        "website" : "samuel.com",
        "age" : 25,
        "lastName" : "Bustamante"
    };

    res.json(data);
});


module.exports = router;