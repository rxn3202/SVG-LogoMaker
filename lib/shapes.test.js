// Import shape classes from './shapes'
const { Circle, Square, Triangle } = require('./shapes');

// Start describing the test suite for 'Shape classes'
describe('Shape classes', () => {
    // Test case for Circle class
    test('Circle', () => {
        // Create a new instance of Circle class
        const circle = new Circle();
        // Set the color of the circle
        circle.setColor('#ff0000');
        // Check if the render method of circle returns the expected SVG string
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#ff0000"/>');
    });

    // Test case for Square class
    test('Square', () => {
        // Create a new instance of Square class
        const square = new Square();
        // Set the color of the square
        square.setColor('#00ff00');
        // Check if the render method of square returns the expected SVG string
        expect(square.render()).toEqual('<rect x="50" height="200" width="200" fill="#00ff00"/>');
    });

    // Test case for Triangle class
    test('Triangle', () => {
        // Create a new instance of Triangle class
        const triangle = new Triangle();
        // Set the color of the triangle
        triangle.setColor('#0000ff');
        // Check if the render method of triangle returns the expected SVG string
        expect(triangle.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="#0000ff"/>');
    });
});
