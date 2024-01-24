//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project.',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installations instuctions.',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Please enter usage information.',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines.',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Please enter the test instructions.',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Which license would you like to add?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPL v3','Mozilla Public License 2.0','BSD 3-Clause License']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub name.',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    }
];

//Function runs the question prompt
async function readmeDetails() {
    const data = await inquirer.prompt(questions);
    const genReadme = generateMarkdown(data);
    writeToFile('./README-Sample/README.md', genReadme);
};

//function writes README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};

//function initializes app
function init() {
    readmeDetails();
};

// Function call initializes app
init();


