const Express = require('express');
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");

router.get('/game/', (res, req)=> {
    res.send ('first test')
})



module.exports = router;