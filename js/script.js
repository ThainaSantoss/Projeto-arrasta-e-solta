let areas = {
    a: null,
    b: null,
    c: null,
  };
  
  // Initial date
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("dragstart", dragStart); //  é acionado quando o usuário começa a arrastar um item.
    item.addEventListener("dragend", dragEnd); //  acionado quando o usuário termina de arrastar um item.
  });
  
  // events
  document.querySelectorAll(".area").forEach((area) => {
    area.addEventListener("dragover", dragOver); //quando o item arrastado está sobre a área.
    area.addEventListener("dragleave", dragLeave); // saindo da area
    area.addEventListener("drop", drop); // solto no local
  });
  
  // Functions Item
  function dragStart(e) {
    e.currentTarget.classList.add("dragging");
  }
  
  function dragEnd(e) {
    e.currentTarget.classList.remove("dragging");
  }
  
  document
    .querySelector(".neutralArea")
    .addEventListener("dragover", dragOverNeutral);
  document
    .querySelector(".neutralArea")
    .addEventListener("dragleave", dragLeaveNeutral);
  document.querySelector(".neutralArea").addEventListener("drop", dropNeutral);
  
  // Functions Area
  function dragOver(e) {
    if (e.currentTarget.querySelector(".item") === null) {
      e.preventDefault();
      e.currentTarget.classList.add("hover");
    }
  }
  
  function dragLeave(e) {
    e.currentTarget.classList.remove("hover");
  }
  
  function drop(e) {
    e.currentTarget.classList.remove("hover");
  
    if (e.currentTarget.querySelector(".item") === null) {
      let dragItem = document.querySelector(".item.dragging");
      e.currentTarget.appendChild(dragItem);
      updateAreas()
    }
  }
  
  // functions neutral Area
  
  function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
  
  function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove("hover");
  }
  
  function dropNeutral(e) {
    e.currentTarget.classList.remove("hover");
    let dragItem = document.querySelector(".item.dragging"); // item arrastando
    e.currentTarget.appendChild(dragItem); // adicionar no item
    updateAreas()
  }
  
  function updateAreas() {
  document.querySelectorAll('.area').forEach (area => {
      let name = area.getAttribute('data-name');
  
      if(area.querySelector('.item') !== null) {
          areas[name] = area.querySelector('.item').innerHTML;
  
      } else {
          areas[name] = null
      }
  });
  
          if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
              document.querySelector('.areas').classList.add('correct');
          } else {
              document.querySelector('.areas').classList.remove('correct')
          }
  }