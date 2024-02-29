const inquirer = require("inquirer"); 
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const fs = require("fs");


const questions = [
    {
        type: "list",
        message: "Choose the shape:",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Enter up to three characters for text:",
        name: "text",
        validate: function(input) {
            return input.length > 0 && input.length <= 3 ? true : "Please enter up to three characters.";
        }
    },
    {
        type: "input",
        message: "Enter text color (keyword or hexadecimal):",
        name: "textColor"
    },
    {
        type: "input",
        message: "Enter shape color (keyword or hexadecimal):",
        name: "shapeColor"
    }
];


inquirer.prompt(questions)
    .then(data => {
        let shape;

       
        switch (data.shape) {
            case "circle":
                shape = new Circle(data.text, data.textColor, data.shapeColor);
                break;
            case "triangle":
                shape = new Triangle(data.text, data.textColor, data.shapeColor);
                break;
            case "square":
                shape = new Square(data.text, data.textColor, data.shapeColor);
                break;
            default:
                console.error("Invalid shape selected.");
                return;
        }

       
        const svgCode = shape.render();

        const filename = `./examples/${data.shape}.svg`;
        fs.writeFile(filename, svgCode, err => {
            if (err) {
                console.error("Error writing SVG file:", err);
            } else {
                console.log(`Generated ${filename}`);
            }
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
