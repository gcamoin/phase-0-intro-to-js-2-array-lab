// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(Name) {
    cats.push(Name);
}

function destructivelyPrependCat(Name) {
    cats.unshift(Name);
}

function destructivelyRemoveLastCat(Name) {
    cats.pop(Name);
}

function destructivelyRemoveFirstCat(Name) {
    cats.shift(Name);
}


function appendCat(Name) {
    const cats_1 = [...cats, Name]
    return cats_1
    }

function prependCat(Name) {
    const cats_2 = [Name, ...cats]
    return cats_2
}

function removeLastCat(Name) {
    const cats_3 = cats.slice(0, cats.length - 1)
    return cats_3
}

function removeFirstCat(Name) {
    const cats_4 = cats.slice(1)
    return cats_4
}