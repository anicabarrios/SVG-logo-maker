const inquirer = require("inquirer"); 
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const fs = require("fs");

// Define questions for user input
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

// Prompt the user for input
inquirer.prompt(questions)
    .then(data => {
        let shape;

        // Instantiate the appropriate shape class based on user input
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

        // Generate SVG code
        const svgCode = shape.render();

        // Write SVG code to a file with a dynamic filename
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
