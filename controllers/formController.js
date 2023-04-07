const Register = require("../models/modelForm")

const renderForm = async (req, res) => {

    try {
        res.render('registrationForm');
    } catch (error) {
        console.log(error.message);
    }
}

const postForm = (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const dob = req.body.dob;
        const password = req.body.password;
        const phone = req.body.phone;
        const country = req.body.country;
        const address = req.body.address;
        const register = new Register(
            null,
            name,
            email,
            dob,
            password,
            phone,
            country,
            address
        );
        register.save();
        res.redirect("/home");
    } catch (error) {
        console.log(error.message);
    }
};

const getFromData = (req, res) => {
    Register.fetchAll((data) => {
      res.render("home", {
        customer: data,
        path: "/home",
      });
    });
  };

const DeleteCustData = (req, res) => {
    const custId = req.body.userId;
    Register.deleteById(custId);
    res.redirect("/home");
  };

module.exports = { renderForm, postForm, getFromData, DeleteCustData };


