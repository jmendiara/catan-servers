var houseService = require("../lib/houseService"),
    resourceService = require("../lib/resourceService"),
    restTools = require("../lib/restTools");

exports.listDesigns = function(req, res) {
    houseService.listDesigns(function (error, designResult) {
        if (error) {
            res.json(500, restTools.generateError("001", error));
        } else {
            res.json(200, designResult);
        }
    });
};

exports.getResources = function(req, res){
    resourceService.list(function (error, resourceList) {
        if (error) {
            res.json(500, restTools.generateError("002", error));
        } else {
            res.json(200, resourceList);
        }
    });
};

exports.listHouses = function(req, res){
    houseService.listHouses(function (error, designResult) {
        if (error) {
            res.json(500, restTools.generateError("003", error));
        } else {
            res.json(200, designResult);
        }
    });
};

exports.createHouse = function(req, res){
    houseService.buyHouse(
        req.body.login,
        req.body.designId,
        req.body.resources,
        function (error, designResult) {
            if (error) {
                res.json(500, restTools.generateError("004", error));
            } else {
                res.json(200, designResult);
            }
        });
};

exports.deleteDesign = function(req, res){
    houseService.removeDesign(req.body.id, function (error, designResult) {
        if (error) {
            res.json(500, restTools.generateError("005", error));
        } else {
            res.json(200, designResult);
        }
    });
};

exports.createDesign = function(req, res){
    houseService.listHouses(
        req.body.type,
        req.body.resources,
        req.body.value,
        function (error, designResult) {
            if (error) {
                res.json(500, restTools.generateError("006", error));
            } else {
                res.json(200, designResult);
            }
        });
};