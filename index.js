const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./dist/pageTemplate");

const inquirer = require("inquirer");
const fs = require("fs");
let employeeData = [];

promptQues("manager");


async function promptQues(type) {
  let ques = {
    manager: [
      {
        type: "text",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "text",
        name: "id",
        message: "What is your Manager's employee Id?",
      },
      {
        type: "text",
        name: "email",
        message: "What is your Manager's email address?",
      },
      {
        type: "text",
        name: "officeNumber",
        message: "What is your Manager's office number?",
      },
      {
        type: "confirm",
        name: "addOrFinish",
        message: "Would you like to add more members to the team?",
      },
      {
        type: "list",
        name: "addType",
        message: "Would you like to add engineer or intern?",
        choices: ["engineer", "intern"],
        when: (answer) => answer.addOrFinish
      },
    ],

    engineer: [
      {
        type: "text",
        name: "name",
        message: "What is your Engineer's name?",
      },
      {
        type: "text",
        name: "id",
        message: "What is your Engineer's employee Id?",
      },
      {
        type: "text",
        name: "email",
        message: "What is your Engineer's email address?",
      },
      {
        type: "text",
        name: "github",
        message: "What is your Engineer's Github Username?",
      },
      {
        type: "confirm",
        name: "addOrFinish",
        message: "Would you like to add more members to the team?",
      },
      {
        type: "list",
        name: "addType",
        message: "Would you like to add engineer or intern?",
        choices: ["engineer", "intern"],
        when: (answer) => answer.addOrFinish
      },
    ],

    intern: [
      {
        type: "text",
        name: "name",
        message: "What is your Intern's name?",
      },
      {
        type: "text",
        name: "id",
        message: "What is your Intern's employee Id?",
      },
      {
        type: "text",
        name: "email",
        message: "What is your Intern's email address?",
      },
      {
        type: "text",
        name: "school",
        message: "What is your Intern's school?",
      },
      {
        type: "confirm",
        name: "addOrFinish",
        message: "Would you like to add more members to the team?",
      },
      {
        type: "list",
        name: "addType",
        message: "Would you like to add engineer or intern?",
        choices: ["engineer", "intern"],
        when: (answer) => answer.addOrFinish
      },
    ],
  };

  inquirer.prompt(ques[type]).then((answer) => {
    processAnswer(answer, type);
  });
}

function processAnswer(data, type) {
  switch (type) {
    case "manager":
      employeeData.push(
        new Manager(data.name, data.id, data.email, data.officeNumber)
      );
      if (data.addOrFinish) {
        promptQues(data.addType);
        break;
      }
      pageGenerate();
      break;

    case "engineer":
      employeeData.push(
        new Engineer(data.name, data.id, data.email, data.github)
      );
      if (data.addOrFinish) {
        promptQues(data.addType);
        break;
      }
      pageGenerate();
      break;

    case "intern":
      employeeData.push(
        new Intern(data.name, data.id, data.email, data.school)
      );
      if (data.addOrFinish) {
        promptQues(data.addType);
        break;
      }
      pageGenerate();
      break;

    default:
      break;
  }
}





function pageGenerate() {
  let html = generateHtml(employeeData);

  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      throw Error("code incorrect");
    }
    console.log("htmlpage created");
  });
}
