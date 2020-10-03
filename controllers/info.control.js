const model = require('../models/info.model');
const control = require("./index");
//const views = require('../views/index');

exports.getInfo = async function(req, res) {

    await model.getInfo(req, res, control.callbackResultWithLog);
    //res.send("hello~github");

}