const closure = function () {
    let x = 9;

    function incrementVariable () {
        x++
    }

    function getList () {
        incrementVariable();
        return x;
    }

    return getList;
}

const incrementVariable = closure();

console.log(incrementVariable());
