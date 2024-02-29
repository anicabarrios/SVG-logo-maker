class Shape{
    constructor(text,textColor,shapeColor){
     this.text=text
     this.textColor=textColor
     this.shapeColor=shapeColor
    }
    render(){
        return new Error("the child must create its logo shape")
    }
}

module.exports=Shape