const Square = require("../lib/square");

describe("Square", () => {
    describe("properties", () => {
        it("should have correct text, textColor, and shapeColor properties", () => {
            const square = new Square("XYZ", "green", "yellow");
            expect(square.text).toEqual("XYZ");
            expect(square.textColor).toEqual("green");
            expect(square.shapeColor).toEqual("yellow");
        });
    });

    describe("render()", () => {
        it("should render the correct SVG code for the square shape", () => {
            const square = new Square("XYZ", "green", "yellow");
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200"  fill="yellow" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">XYZ</text></svg>`;
            expect(square.render()).toEqual(expectedSVG);
        });
    });
});
