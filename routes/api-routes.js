// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
// Requiring our models
var db = require("../models");

module.exports = function (app) {

    app.get("/burgers", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (data) {
            // We have access to the todos as an argument inside of the callback function
            var burgerObject = {
                burgers: data
            };
            res.render("index", burgerObject);
        });
    });

    app.post("/api/burgers", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Burger.create({
            burger: req.body.burger
        }).then(function (data) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(data);
            console.log(data);
        })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        },
            {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                res.redirect("/burgers");
            });
    });

};