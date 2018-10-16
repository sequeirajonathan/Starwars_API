const results = document.querySelector(".results")

let planetImages = {
  "Alderaan" : "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",
  "Yavin IV" : "https://vignette.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170712005330",
  "Hoth": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322",
  "Dagobah": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146",
  "Bespin": "https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20170709211642",
  "Endor": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605",
  "Naboo": "https://vignette.wikia.nocookie.net/swg/images/e/ea/NabooFromSpace.jpg/revision/latest?cb=20060903011613",
  "Coruscant":  "https://vignette.wikia.nocookie.net/jdr-psw/images/e/ec/Coruscant.jpg/revision/latest?cb=20150926073733&path-prefix=fr",
  "Kamino": "https://vignette.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
  "Tatooine": "https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
}

class StarWars{
  constructor(planetImages){
    this.planetImages = planetImages;
    this.getMultiple(6);
  }
  getInfo(url){
    $.ajax({
      url: url,
      dataType: "json",
      success: (data)=>{
        this.displayInfo(data)
      },
      error: (error)=>{
        console.log("There was an error")
      }
    })
  }

  getMultiple(num){
    results.innerHTML = "";
    if(num <= 0){
      return;
    }
    for(var i = 1; i <= num; i++){
      this.getInfo(`https://swapi.co/api/planets/${i}/`)
    }
  }

  displayInfo(data) {
    results.innerHTML += ` 
    <div class="container">
      <img src="${this.planetImages[data.name]}" alt="Planet">
      <div class="body">
        <div class="names">
          <p>Names</p>
          <p>Population</p>
          <p>Diameter</p>
          <p>Climate</p>
        </div>
        <div class="values">
        <p>${data.name}</p>
        <p>${data.population}</p>
        <p>${data.diameter}</p>
        <p>${data.climate}</p>
        </div>
      </div>
    </div>
    `
  }

}

const starwars = new StarWars(planetImages);
