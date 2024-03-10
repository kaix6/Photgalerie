let imgArray = ['img/02.jpg'];

function render() {
  let imgContainer = document.getElementById("imgcontainer");
  imgContainer.innerHTML = "";
  imgContainer.innerHTML += /*html*/ `<h1>September</h1>`;

  for (let i = 0; i < imgArray.length; i++) {
    // Erstelle ein img-Element
    let imgElement = document.createElement("img");

    // Setze den Bildpfad als src-Attribut
    imgElement.src = imgArray[i];

    // Erstelle ein div-Element mit der Klasse "imgbox" und füge das img-Element hinzu
    let imgBox = document.createElement("div");
    imgBox.className = "imgbox";
    imgBox.appendChild(imgElement);

    // Füge das div-Element zur imgContainer-Div hinzu
    imgContainer.appendChild(imgBox);
  }
}

// Rufe die render-Funktion auf
render();

