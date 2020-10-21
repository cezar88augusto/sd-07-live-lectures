const fetchJoke = () => {
  
}

const requestJoke = (callback) => {
  setTimeout(() => {
    callback("Antes Deus e eu sabia o que esse código fazia. Agora só Deus sabe!");
  }, 3000);
}

window.onload = fetchJoke();