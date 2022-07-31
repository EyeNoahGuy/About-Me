export default class Ball{
    constructor(BallElm){
        this.BallElm = BallElm
    }
}
get x(){
    return parseFloat(getComputedStyle(this.BallElm).getPropertyValue("--x"))
}

set x(value){
    this.BallElm.style.setProperty("--x", value)
}

update(delta){

}