const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name = "", id = "", email = "", school) {
    super(name, id, email);
    this.school = school;
    this.type = "Intern";
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return this.type;
  }
}

module.exports = Intern;
