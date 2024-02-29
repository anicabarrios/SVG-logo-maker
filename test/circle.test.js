const Circle = require("../lib/circle");

describe("Circle", () => {
    describe("properties", () => {
        it("should have correct text, textColor, and shapeColor properties", () => {
            const circle = new Circle("AIB", "blue", "black");
            expect(circle.text).toEqual("AIB");
            expect(circle.textColor).toEqual("blue");
            expect(circle.shapeColor).toEqual("black");
        });
    });

    describe("render()", () => {
        it("should render the correct SVG code for the circle shape", () => {
            const circle = new Circle("AIB", "blue", "black");
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">AIB</text></svg>`;
            expect(circle.render()).toEqual(expectedSVG);
        });
    });
});
