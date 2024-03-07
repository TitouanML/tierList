const cards = document.querySelectorAll('.card');

const onDragStart = (event) => {
    console.log('dragging the element');
    event.dataTransfer.setData('id',event.target.id);
}

const onDragEnd = (event) => {
    console.log('ended the drag');
}

cards.forEach((card) =>{
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})