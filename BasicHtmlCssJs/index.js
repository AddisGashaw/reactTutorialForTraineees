var heading = document.getElementById('heading');
var originalText = heading.innerText;

document.getElementById('changeColorBtn').onclick = function() {
  if (heading.style.color === 'red') {
    heading.style.color = 'blue';
    heading.innerText = originalText;
  } else {
    heading.style.color = 'red';
    heading.innerText = "We're hoping all goes well for you.";
  }
};