var Promise = require('promise');
const Experience = require("./experience");
var mongoose = require('mongoose');

function findExperiences() {
  return new Promise(function (succeed, failed) {
    Experience.find(function (err, books) {
      if (err) {
        failed('database failure');
      } else {
        succeed(books);
      }
    })
  });
};

exports.findExperiences = findExperiences;