const express = require("express");
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4: uuidv4} = require("uuid");
const router = require('./router');

const app = express();
const port = 3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.set('view engine','ejs');

//load static assests
app.use('/static', express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialize: true,
}));

app.use('/route', router);


//home route
app.get("/",(req, res) => {
  res.render('base', {title:"Login System"});
})

app.listen(port, () => {
  console.log(`your app is running on port: http://localhost:${port} `)
});


