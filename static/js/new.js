
const rateSpan = document.querySelector("#rateSpan")
const rateForm = document.querySelector("#rateForm")
//console.log(rateSpan)
const baseUrl = "http://apilayer.net/api"
const apiKey = "28851dac7733a3d2f0409f37f95ac9c9" // Add your API Key here
let data; // undefined



 async function getNumber(pno){
    const endpoint = "/validate" 
    
    const response = await fetch(`${baseUrl}${endpoint}?access_key=${apiKey}&number=${pno}`)
    

    const data = await response.json() 

     console.log(data.carrier)
     
     let rate= data.carrier

     rateSpan.innerHTML= `<strong>${rate}<strong>`
    // let currencyData = data.data
    //console.log(currencyData)

     //currencies = currencies.split(",")
    
     //let htmlArray = currencies.map(currency => {
        //return `<li>${currencyData[currency].code} - ${currencyData[currency].value}</li>`
     //})
    
     //console.log(htmlArray)

     //rateSpan.innerHTML = htmlArray.join("")

     //console.log("Glad I could help you out")
 }


// getNumber()
 rateForm.addEventListener("submit", handleSubmit)

  function handleSubmit(event){
      event.preventDefault()
      let pno= event.target["number"].value
      getNumber(pno);
      // let pno = rateForm.elements["number"].value
      //   console.log("Hello world")
      // getExchangeRate(pno);

 }