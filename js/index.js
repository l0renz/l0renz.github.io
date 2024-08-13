function goToPage() {
  window.location.href = "recipees.html"; 
}

function defineHeaderStatics(){
  fetch('components/head.html')
  .then(response => response.text())
  .then(data => {
    document.head.innerHTML += data;
  });
}