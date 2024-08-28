// Initial date
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart); // disparado quando vc começa a arrastar
    item.addEventListener('dragend', dragEnd); // termino de arrastar 

});

// Functions Item
function dragStart (e) {
    e.currentTarget.classList.add('dragging');
}


function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');

}



// Functions Area