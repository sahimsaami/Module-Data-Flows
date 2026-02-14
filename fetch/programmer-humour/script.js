function loadComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
      console.log(data); // For debugging purposes

      const img = document.getElementById("comic");
      img.src = data.img;
      img.alt = data.alt;
    })
    .catch(error => {
      document.getElementById("error").textContent =
        "Something went wrong!";
      console.error(error);
    });
}

// The comic will be loaded when the page is loaded
loadComic();

