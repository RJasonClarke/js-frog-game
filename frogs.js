const score = {
    frogs: 1
}

increment = () => {
    document.getElementById("score").innerHTML = score.frogs
    score.frogs += 1
}