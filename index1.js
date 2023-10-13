const closure = function () {
    let x = 9;

    return () => {
        return x
    }
}

const displayX = closure()

console.log(displayX())





