const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'data.json'
);

const getdataFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Register {
  constructor(id, name, email, dob, password, phone, country, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.password = password;
    this.phone = phone;
    this.country = country;
    this.address = address
  }

  save() {
    getdataFromFile(customers => {
        this.id = Math.random().toString();
        customers.push(this);
        fs.writeFile(p, JSON.stringify(customers), err => {
          console.log(err);
        });
    });
  }

  static deleteById(id) {
    getdataFromFile(customers => {
      const updatedcustomers = customers.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedcustomers), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getdataFromFile(cb);
  }
}