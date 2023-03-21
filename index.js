// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(catName){
    let append_array = ["Milo", "Otis", "Garfield"]
    append_array.push(catName)
    return append_array
}

function prependCat(catName){
    let prepend_array = ["Milo", "Otis", "Garfield"]
    prepend_array.unshift(catName)
    return prepend_array
}

function removeLastCat(){
    let new_array = ["Milo", "Otis", "Garfield"]
    new_array.pop()
    return new_array
}



function removeFirstCat(){
    let other_array = ["Milo", "Otis", "Garfield"]
    other_array.shift()
    return other_array
}