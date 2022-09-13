var express = require("express");
var router = express.Router();
var credential = {
    email:"admin@gmail.com",
    password:"admin123"
}

//login user
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
       //res.end("login sucessful");
       console.log("login sucessful");
    } else {
        res.end("Invalid Username or Password");
    }
});

//route for dashboard
router.get('/dashboard', (req,res) => {
    if(req.session.user){
        res.render('dashboard', {user: req.session.user});
    } else {
        res.send("Unauthorize user");
    }
});

//route for logout
router.get('/logout', (req,res)=> {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("error");
        } else {
            res.render('base', {title : "Login System", logout: "Logout Sucessfully"});
            console.log("logout");
        }
    })
});

module.exports = router;