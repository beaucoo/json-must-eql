/*jshint node: true, expr:true */
/*global require */


var Must = require("must");
var diff = require('difflet')({indent: 2});
require('colors');


Must.prototype.jsonEql = function (expectedJson) {

    try {
        if (!this.actual) {
            throw "must.js needs to be required";
        }

        this.actual.must.eql(expectedJson);
    } catch (err) {
        if (!err.showDiff) {
            throw err;
        }

        throw "\n".white + diff.compare(this.actual, expectedJson);
    }
};