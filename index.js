// Packages being imported
import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of available licenses

const licenses = [
    'No License',
    'Apache license 2.0',
    'Artistic license 2.0',
    'Boost Software License 1.0',
    'BSD 2-Clause License',
    'BSD 3-Clause License',
    'Creative Commons Zero v1.0 Universal',
    'Creative Commons Attribution 4.0',
    'Creative Commons Attribution ShareAlike 4.0',
    'Do What The F*ck You Want To Public License',
    'Eclipse Public License 1.0',
    'GNU General Public License v2.0',
    'GNU General Public License v3.0',
    'GNU Affero General Public License v3.0',
    'GNU Lesser General Public License v3.0',
    'ISC',
    'MIT',
    'Mozilla Public License 2.0',
    'SIL Open Font License 1.1',
    'The Unlicense',
    'zLib License'
    ]

// Questions Array for Inquirer
const questions = [
    {
        type: "input",
        message: colors.brightMagenta("What is the title of your project?"),
        name: "title",
    },
    {
        type: "input",
        message: colors.brightMagenta("Please give a description for your project:"),
        name: "description",
    },
    {
        type: "input",
        message: colors.brightMagenta("What are the installation instructions for your project?"),
        name: "installation",
    },
    {
        type: "input",
        message: colors.brightMagenta("What is the usage for your project?"),
        name: "usage",
    },
    {
        type: "list",
        message: colors.brightMagenta("What is the license your project uses?"),
        choices: licenses,
        name: "licensePick",
    },
    {
        type: "input",
        message: colors.brightMagenta("What are the contribution guidelines for your project?"),
        name: "contribution",
    },
    {
        type: "input",
        message: colors.brightMagenta("What are the tests you`ve used in your project?"),
        name: "tests",
    },
    {
        type: "input",
        message: colors.brightMagenta("What is your GitHub username?"),
        name: "username",
    },
    {
        type: "input",
        message: colors.brightMagenta("What is your email address?"),
        name: "email",
    }
];

let answers = {};

function writeToFile(fileName, answers) { 
    
// README Template

let readMeTemplate = generateMarkdown(answers);
    fs.writeFile(`output/${fileName}`, 
            readMeTemplate, 
    (err) =>
        err ? console.error(err) : console.log(colors.brightGreen('Success!')))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', answers);
}

// Function call to initialize app and start inquirer

inquirer
.prompt(
    questions,
)
.then(
    (response) => {
        answers = response;
        init();
    }
)