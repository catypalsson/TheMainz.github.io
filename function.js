function Search() {
  var searchTerm = document.getElementById("search-input").value;
  var elements = document.querySelectorAll("#search-results *:contains(" + searchTerm + ")");
  alert("It worked")
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("highlight");
  }
}

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  window.location.href = 'marketplace.html';
});

const about = document.getElementById('about');
about.addEventListener('click', () => {
  window.location.href = 'aboutUs.html';
});

