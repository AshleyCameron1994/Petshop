const CreatePet = document.querySelector('#create');


const createPet = () => {
    fetch("https://petstore.swagger.io/v2/pet", {
        method: 'POST',
        body: JSON.stringify({
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "Rover"
                },
                "name": "doggie",
                "photoUrls": [
                  let img document.createElement("img")

                  img.src = "cute_doge.png"
                  let src = document.getElementById("image")

                  src.appendChild(img)
                ],
                "status": "available"
              }),
              headers: {
                  "Content-Type": "application/json"
              }
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err => console.error("Error please stop what you're doing")))
    
}