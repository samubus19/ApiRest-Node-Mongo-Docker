const {Router} = require("express");

const router = Router();

router.get("/test", (req, res) => {
    const data  = {
        "name" : "samuel",
        "website" : "samuel.com"
    };

    res.json(data)
});


module.exports = router;