// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
// Requiring our models
var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (data) {
            // We have access to the todos as an argument inside of the callback function
            var burgerObject = {
                burgers: data
            };
            res.render("index", burgerObject);
        });
    });

};