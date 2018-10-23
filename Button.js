class Button {
    constructor(label, x, y){
        this.label = label
        this.x = x
        this.y = y
        console.log("Button created!")
        console.log("label : " + label)
        console.log("x : " + x)
        console.log("y : " + y)
    }
    draw(){
        rect(this.x, this.y, 100, 30)

        textAlign(CENTER)
        text(this.label, this.x + 50, this.y + 20)
    }
}