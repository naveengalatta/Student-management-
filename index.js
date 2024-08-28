const express = require("express");
const bodyParser = require("body-parser"); 

const { StudentController } = require("./controller/StudentDetailsController.js");
const sequelize = require('./util/Database.js');
const Student = require('./model/StudentDetails.js')

const app = express();
app.use(bodyParser.json({limit : "10mb"})); 

global.returnResponse = (req, res, promise) => {
    res.type("application/json");
    promise.then(result => {
        res.status(200);
        res.json(result);
    }).catch(err => {
        res.status(500);
        res.json(err.message || err);
    });
}

var studentRouter = express.Router();
app.use("/student", StudentController.init(studentRouter), function (req,res) {
    res.status(404);
    res.json('Invalid Url');
}); 

sequelize.sync({force : true}).then(result => {
    console.log("Connection established");
    console.log(result);
    app.listen(8080);
}).catch(error => {
    console.log(error);
});
