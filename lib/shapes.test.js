const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    test('Circle', () => {
        const circle = new Circle();
        circle.setColor('#ff0000');
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#ff0000"/>');
    });

    test('Square', () => {
        const square = new Square();
        square.setColor('#00ff00');
        expect(square.render()).toEqual('<rect x="50" height="200" width="200" fill="#00ff00"/>');
    });

    test('Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('#0000ff');
        expect(triangle.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="#0000ff"/>');
    });
});
