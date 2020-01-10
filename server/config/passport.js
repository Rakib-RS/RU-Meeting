const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require("mongoose");
const User = require('../models/loginModel');


const opt = {}