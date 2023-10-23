let list = document.getElementsByTagName("LI");
let i;
for (i = 0; i < list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    list[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = display;
}

let ul = document.querySelector('ul');
ul.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function display() {
    console.log(this)
    let div = this.parentElement;
    div.style.display = "none";
}
console.log(close.length)

const textInput = document.getElementById('myInput');
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    newElement();
    // Perform desired actions here
  }
});

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let textNode = document.createTextNode(inputValue)
    li.appendChild(textNode);
    if (inputValue === ' ') {
        alert('enter a task');

    } else {
        document.getElementById("myUL").appendChild(li);

    }
    document.getElementById("myInput").value = ' ';

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    li.appendChild(span);
    console.log(close.length)
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}