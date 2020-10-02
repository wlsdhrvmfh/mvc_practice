var express = require('express');

exports.sendJson = function(res){

    res.json(res.result);

}

exports.sendText = function(res){
    
    res.send(res.result);

}