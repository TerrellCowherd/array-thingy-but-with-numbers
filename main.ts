let arrayLoop: number[] = []

for (let index = 0; index < 4; index++) {
    
    arrayLoop[index] = index *2
}

for(let i = 0; i < 4; i++) {

    game.splash(i + "multiplied times two is: " + arrayLoop[i])
}