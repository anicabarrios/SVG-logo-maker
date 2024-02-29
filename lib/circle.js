const Shape= require("./shapes")

class Circle extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
         
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
   
    }
}

module.exports=Circle