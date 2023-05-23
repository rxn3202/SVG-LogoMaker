const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want the text to be (OR a hexadecimal number)',
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
        message: 'What color do you want the logo to be (OR a hexadecimal number)',
        name: 'logo-color',
    }
];

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Logo created successfully!");
    });
}



init();
