const closure = function () {
    let x = 9;

    function incrementVariable () {
        x-=1;
    }

    function getList () {
        incrementVariable();
        return x;
    }

    return getList;
}

const incrementVariable = closure();

console.log(incrementVariable());