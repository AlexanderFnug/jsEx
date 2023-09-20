const SERVER_URL = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all")
    .addEventListener("click", getAllCars);
    document
      .getElementById("btn-find-car")
        .addEventListener("click", getACar);
document.getElementById("add-car").addEventListener("click", addCar);

function addCar() { 
    
      const brand = document.getElementById("brand").value;
      const model = document.getElementById("model").value;
      const pricePrDay = parseFloat(
        document.getElementById("pricePrDay").value
      );
      const bestDiscount = parseInt(
        document.getElementById("bestDiscount").value
      );

      const newCar = {
        brand: brand,
        model: model,
        pricePrDay: pricePrDay,
        bestDiscount: bestDiscount,
      };

      console.log(newCar); // You can process or send this data as needed
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
    }
    fetch(SERVER_URL, options)
        .then(res => res.json())
        .then(carRes => { document.getElementById("new-car-response").innerText = JSON.stringify(carRes, null, 2) })
        .catch(err => console.log(err))
    }


      
function getACar() {
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL + "/" + id)
        .then(res => {
            if (!res.ok) {
                alert("No car with id: " + id)
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then(car => {
            document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
        })
    }
        

function getAllCars() {
    alert("clicked")    
    fetch(SERVER_URL).then(res => res.json())
        .then(cars => {
            console.log(cars);
            const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
            `)
            const rowsAsStr = tableRows.join("")
            document.getElementById("tbody").innerHTML = rowsAsStr; //Remember XSS
        })
    }
