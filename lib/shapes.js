// Define base Shape class
class Shape {
    constructor() {
        // Set default color to black
        this.color = '#000000';
    }

    // Method to set the color
    setColor(color) {
        this.color = color;
    }
}

// Define Circle class which extends from Shape
class Circle extends Shape {
    // Method to render the Circle object to a SVG string
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// Define Square class which extends from Shape
class Square extends Shape {
    // Method to render the Square object to a SVG string
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

// Define Triangle class which extends from Shape
class Triangle extends Shape {
    // Method to render the Triangle object to a SVG string
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

// Export the Circle, Square, and Triangle classes
module.exports = {
    Circle,
    Square,
    Triangle
};
