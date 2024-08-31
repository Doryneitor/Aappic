let dropZone_morning = document.getElementsByClassName('drop-zone')[0];
let dropZone_evening = document.getElementsByClassName('drop-zone')[1];
let dropZone_night = document.getElementsByClassName('drop-zone')[2];

let selectedBox;

document.body.addEventListener('dragstart', function(event) {
  selectedBox = event.target;
  event.dataTransfer.setData('text/html', event.target)
  console.log(event) 
})

// Mañana

dropZone_morning.addEventListener('dragover', function(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = "move";
})

dropZone_morning.addEventListener('drop', function(event) {
  this.appendChild(selectedBox)
})


// Tarde 

dropZone_evening.addEventListener('dragover', function(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = "move";
})

dropZone_evening.addEventListener('drop', function(event) {
  this.appendChild(selectedBox)
})

// Noche 

dropZone_night.addEventListener('dragover', function(event) {
  event.preventDefault()
  event.dataTransfer.dropEffect = "move";
})

dropZone_night.addEventListener('drop', function(event) {
  this.appendChild(selectedBox)

})




