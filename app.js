require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");

// app.use(Express.json());


// app.use(require('./middleware/headers'));

 const controller = require("./controller");

// app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"));
 app.use("/game", controller.gameController);


dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(4000, () => {
    console.log(`[Server]: App is listening on 4000.`);
    });
})
.catch((err) => {
console.log(`[Server]: Server crashed. Error = ${err}`);
});

