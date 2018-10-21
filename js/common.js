// function for changing classes

function changeClass (target, classToAdd, classToRemove){
    console.log(target);
    let el = document.querySelector(target);
    if(classToRemove) {
        el.classList.remove(classToRemove);
    }
    el.classList.add(classToAdd);
}

