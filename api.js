const spot = document.getElementById('image')
console.log("hello begin")

const url = "https://randomfox.ca/floof/"

fetch(url)
    .then((response) => {
      const proms = response.json()
      console.log(proms)
      console.log(response)
      proms.then((object) => {
        console.log(object)
        console.log("rd promise complete")
        console.log(object);
        spot.insertAdjacentHTML('beforeend', `<img src=${object.image}>`);
        console.log("done with fetch")
      });
    })

    console.log("done done")


const x = console.log("santi")
console.log(x)
