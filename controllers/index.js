const views = require("../views/index");

exports.callbackResultWithLog = async function(req, res){

    views.sendJson(res);
    
}