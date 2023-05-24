// Import required dependencies
const inquirer = require('inquirer');
const fs = require('fs');
// Import shapes module from './lib/shapes'
const shapes = require('./lib/shapes');

// Define questions for inquirer.prompt
const questions = [
    // Question to enter up to three characters
    {
        type: 'input',
        message: 'Enter up to three characters',
        name: 'text',
    },
    // Question to select text color
    {
        type: 'input',
        message: 'What color do you want the text to be (OR a hexadecimal number)',
        name: 'text-color',
    },
    // Question to select logo shape
    {
        type: 'list',
        message: 'What shape do you want the logo to be',
        name: 'logo shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    // Question to select logo color
    {
        type: 'input',
        message: 'What color do you want the logo to be (OR a hexadecimal number)',
        name: 'logo-color',
    }
];

// Svg class for creating svg elements
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    // render method to return svg string
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    // Set text element of the svg
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    // Set shape element of the svg
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Function to write data to a file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        // Console log successful creation message
        console.log("Logo created successfully!");
    });
}

// Function to initialize the application
const init = async () => {
    // Use inquirer to ask the user a series of questions
    const answers = await inquirer.prompt(questions);
    const { text, 'text-color': textColor, 'logo-color': logoColor, 'logo shape': logoShape } = answers;

    // Check if text length is between 1 and 3 characters
    if (!(text.length > 0 && text.length < 4)) {
        console.log("Invalid. Please enter up to three characters");
        return;
    }

    // Create the logo shape based on user's choice
    let shape;
    switch (logoShape) {
        case 'Circle':
            shape = new shapes.Circle();
            break;
        case 'Square':
            shape = new shapes.Square();
            break;
        case 'Triangle':
            shape = new shapes.Triangle();
            break;
        default:
            console.log("Invalid shape!");
            return;
    }

    // Set the color of the logo shape
    shape.setColor(logoColor);

    // Create a new Svg instance and set its text and shape elements
    const svg = new Svg();
    svg.setTextElement(text, textColor);
    svg.setShapeElement(shape);

    // Render the svg string
    const svgString = svg.render();

    console.log(`Created logo: \n${svgString}`);
    
    // Write the svg string to file "logo.svg"
    writeToFile("logo.svg", svgString);
}

// Start the application
init();
