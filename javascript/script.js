var text;
console.log(text);
const container =document.createElement("div");
container.setAttribute('class',"container");

const f = document.createElement("form");
f.setAttribute('method', "post");
f.setAttribute('action', "");

const heading = document.createElement("h1");
heading.innerHTML = "Search A Topic on YOUTUBE";

const i = document.createElement("input");
i.setAttribute('type', "text");
i.setAttribute('name', "username");
i.setAttribute('class',"input1")

const s = document.createElement("input");
s.setAttribute('type', "submit");
s.setAttribute('value', "Submit");
s.setAttribute('class',"submit-btn")

const imp = document.createElement("div");
imp.setAttribute('id',"important");


f.appendChild(heading);
f.appendChild(i);
f.appendChild(s);

container.appendChild(f);

document.body.appendChild(container);
document.body.appendChild(imp);

function onAddForm(e) {
    e.preventDefault();
    text = i.value;
    console.log(text);
    if(text === ""){
        alert("Please Enter Topic Before Submitting.");
        return false;
    }
    fetchingFromAPI("");
}
f.addEventListener("submit", onAddForm);
