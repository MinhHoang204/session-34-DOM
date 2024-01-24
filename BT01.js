const items = ["List item number 1", "List item number 2", "List item number 3"];
const list = document.getElementById("myList");

items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});