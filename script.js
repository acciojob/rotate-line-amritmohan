//your JS code here. If required.
const line = document.getElementById('line');

let angle = 0;
function rotateLine() {
  // Increase the angle by 2 degrees
  angle += 2;
  
  // Apply the rotation using the CSS transform property
  line.style.transform = `rotate(${angle}deg)`;
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);
