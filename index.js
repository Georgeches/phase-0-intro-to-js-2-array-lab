// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.append("Ralph")
}

function destructivelyPrependCat(name){
    cats.prepend("Bob")
}

function destructivelyRemoveLastCat(){
    cats.splice(4, 4)
}

function removeFirstCat(){
    let new_arr = cats.splice(0,1)
}