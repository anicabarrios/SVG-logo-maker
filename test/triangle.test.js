const Triangle = require("../lib/triangle");

describe("Triangle", () => {
    describe("properties", () => {
        it("should have correct text, textColor, and shapeColor properties", () => {
            const triangle = new Triangle("ABC", "red", "blue");
            expect(triangle.text).toEqual("ABC");
            expect(triangle.textColor).toEqual("red");
            expect(triangle.shapeColor).toEqual("blue");
        });
    });

    describe("render()", () => {
        it("should render the correct SVG code for the triangle shape", () => {
            const triangle = new Triangle("ABC", "red", "blue");
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`;
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });
});