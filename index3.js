const closure = function () {
    let x = 3;

    function displayX () {
        return x
    }

    function changeX(arg){
        x = arg
    }

    return [displayX, changeX]
}

const [displayX, changeX] = closure()

console.log(displayX())
changeX(6)
console.log(displayX())