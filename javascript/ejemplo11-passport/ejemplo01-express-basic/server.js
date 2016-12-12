//Express
var express = require('express');
var app = express();
//---------------------

//Passport
//Necesitamos seguridad
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
//---------------------


passport.use(new Strategy((username, password, done)=>{
    console.log('Username: ' + username + '\nPassword: ' + password);
    //Aqui dentro evaluo si el usuario existe!
    if(username == 'jonathan' && password == 'steven'){
        done(null, true);
    }
    else{
        done(null, false);
    }
}));

app.get('/home',/*Cuando lances home primero autenticate*/ passport.authenticate('basic', {session:false}), (req, res)=>{
    console.log('Acceso permitido');
    res.send("Acceso concedido");
});

app.listen(8080);