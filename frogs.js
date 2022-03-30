const score = {
    frogs: 0,
    catchers: 0
}

// increase frogs per interval based off of catchers and refresh frogs counter after purchase of a catcher

setInterval(() => {
    console.log("tick")
}, 1000); //1000ms = 1 second

increment = () => {
    document.getElementById("score").innerHTML = score.frogs + 1
    score.frogs += 1
}

buyCatchers = () => {
    if(score.frogs >= 5){
        document.getElementById("catchers").innerHTML = score.catchers + 1
        score.catchers += 1
        score.frogs -= 5
    }
}