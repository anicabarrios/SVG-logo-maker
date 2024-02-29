const Shape =require("./shapes")

class Square extends Shape{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
        
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200"  fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports=Square