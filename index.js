const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want the text to be',
        name: 'text-color',
    },
    {
        type: 'list',
        message: 'What shape do you want the logo to be',
        name: 'logo shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What color do you want the logo to be',
        name: 'logo-color',
    }
];
