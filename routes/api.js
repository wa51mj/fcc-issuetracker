/*
*       Complete the API routing below
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

const connectDb = require('../connectDb')
const {get, post, put, del} = require('./routes')

let db = connectDb();


// 5d728efe62999b173447e768
module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      get(req, res);
    })
    
    .post( function (req, res){
      post(req, res);
    })
    
    .put( function (req, res){
      put(req, res);
    })
    
    .delete( function (req, res){
      del(req, res);
    });
    
};