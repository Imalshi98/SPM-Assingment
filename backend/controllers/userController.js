const express = require('express');
const router = express.Router();
var _ = require("underscore");
const bcrypt = require('bcrypt');
let User = require('../models/user')
const saltRounds = 10;
module.exports = function () {


    //Dulanji

    router.get('/get_all_Users', function (req, res) {
        console.log(req.body)
        User.find(function (err, data) {
            if (!err) {


               
                var data = {
                    Status: "Sucess",
                    Message: "user Data Retrived",
                    data: data
                }
                res.status(200).send(data);

            } else {
                var data = {
                    Status: "Fail",
                    Message: "Unexpected Error PLease Contact System Admin"
                }
                res.status(200).send(data);
            }
        })
    })

    return router;
}