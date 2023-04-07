const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', './views')

// for accesing the public folder
app.use(express.static('public'));

const loadForm = require("./controllers/formController");

app.get('/', loadForm.renderForm);
app.post('/', loadForm.postForm)
app.get('/home', loadForm.getFromData);
app.post('/delete-customer', loadForm.DeleteCustData);

app.listen(3000, () => console.log("server is running..."))