

document.body.addEventListener("click", (event) => {

    if(event.target.classList.contains("button-add-to-bag")) {
        updateTotal();
    }


    
});

const createArr =() => {
    const randInt = (max) => Math.floor(Math.random() * max);

    const arr = [];
    for (let i = randInt(10); i--;) {
        arr.push(randInt(100));
        console.log(i);
        console.log(arr);

    }
    return arr;
}

console.log(...createArr());