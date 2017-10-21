let block = Array.from(document.querySelectorAll('.block'));

for(cont=0; cont<28; cont++) {
    block[cont].addEventListener("click", function changeForRed() {
        this.classList.add("red");
    });
};