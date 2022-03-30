const score = {
    frogs: 1
}

setInterval(() => {
    console.log("tick")
}, 1000); //1000ms = 1 second

increment = () => {
    document.getElementById("score").innerHTML = score.frogs
    score.frogs += 1
}

autoClick = () => {
    if(score.frogs >= 5){
        score.frogs
    }
}