let Input = document.getElementById("InputValue");

let Zero = () => {
    Input.value += 0;
}

let One = () => {
    Input.value += 1;
}

let Two = () => {
    Input.value += 2;
}

let Three = () => {
    Input.value += 3;
}

let Four = () => {
    Input.value += 4;
}

let Five = () => {
    Input.value += 5;
}

let Six = () => {
    Input.value += 6;
}

let Seven = () => {
    Input.value += 7;
}

let Eight = () => {
    Input.value += 8;
}

let Nine = () => {
    Input.value += 9;
}

let Plus = () => {
    Input.value += "+";
}

let Minus = () => {
    Input.value += "-";
}

let Multiply = () => {
    Input.value += "*";
}

let Divide = () => {
    Input.value += "/";
}

let Decimal = () => {
    Input.value += ".";
}

let EqualsTo = () => {
    Input.value = eval(Input.value);
}

let Clear = () => {
    Input.value = "";
}

let Backspace = () => {
}

let Square = () => {
    Input.value = Input.value * Input.value;
}

let SquareRoot = () => {
    Input.value = Math.sqrt(Input.value);
}