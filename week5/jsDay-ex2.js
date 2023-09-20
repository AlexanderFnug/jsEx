const SERVER_URL = "https://countries.plaul.dk/api/countries";
 document.getElementById('map-container').addEventListener("click", getACountry);
 document
  .getElementById("map-container")
     .addEventListener("mouseover", colorchange);
document.getElementById("map-container").addEventListener("mouseout", colorchange2);
    
function colorchange2(event) {
    if(document.getElementById(event.target.id).style.fill !=
        "blue") {
        
            document.getElementById(event.target.id).style.fill = "#dcdcdc";
        }
}
  
function colorchange(event) {
        console.log(event.target.id);
      document.getElementById(event.target.id).style.fill =
          "lightblue";
    
    }


function getACountry(event) {
      document.getElementById(event.target.id).style.fill =
        "blue";
     fetch(SERVER_URL + "/" + event.target.id)
         .then(res =>
         { console.log(res, "res");
            return res.json()
         })
         .then(country => {
             console.log(country, "country");
             const countryInfo = `
             <img src="${country.flag}" alt="flag">
             <br/>
             Name: ${country.name.common}
                <br/>
            Capital: ${country.capital}
            <br/>
            UN Member?: ${country.unMember}
            <br/>
            Currency: ${JSON.stringify(country.currencies, null, 2)}`
             
             console.log(countryInfo, "table");
             document.getElementById("info").innerHTML = countryInfo;
         })
        .catch(err => console.log(err))
}