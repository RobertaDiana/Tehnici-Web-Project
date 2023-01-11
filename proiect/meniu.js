function randomColorGen(){
    let r=(Math.random()*100)%256
    let g=(Math.random()*100)%256
    let b=(Math.random()*100)%256
    return "rgb(" +r+","+g+","+b+")"
}

window.addEventListener("load",()=>{
    document.getElementsByClassName("a")[0].style.color=randomColorGen()
})
