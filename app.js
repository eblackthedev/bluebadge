const Express = require("express");
const app = Express();
const dbConnection = require("./db");

require("dotenv").config();
app.use(Express.json());

app.use(require('./middleware/headers'));

const controller = require("./controller");

app.use("/user", controllers.userController);

app.use(require("./middleware/validate-jwt"));
app.use("/game", controllers.gameController);


/*dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(3000, () => {
    console.log(`[Server]: App is listening on 3000.`);
    });
})
.catch((err) => {
console.log(`[Server]: Server crashed. Error = ${err}`);
});

*/