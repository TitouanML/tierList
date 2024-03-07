const rows = document.querySelectorAll(".row");

const onDragOver = (event) => {
    event.preventDefault();
};

const onDrop = (event) => {
    event.preventDefault();
    console.log("dropped the element");
};
rows.forEach((row) => {
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
});