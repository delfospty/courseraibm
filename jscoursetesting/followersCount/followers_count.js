let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML=count;
}   

function checkCountValue() {
  if (count % 10 == 0) {
    alert("Count is multiple of 10");
  } 
}

function resetCount() {
  count = 0;
  displayCount();
  alert("Count has been reset to zero");
}
