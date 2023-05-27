
const rateSpan = document.querySelector("#rateSpan")
const rateForm = document.querySelector("#rateForm")
const baseUrl = "http://apilayer.net/api"
const apiKey = "28851dac7733a3d2f0409f37f95ac9c9" 
let data; 



 async function getNumber(pno){
    const endpoint = "/validate" 
    
    const response = await fetch(`${baseUrl}${endpoint}?access_key=${apiKey}&number=${pno}`)
    

    const data = await response.json() 

     console.log(data.carrier)
     
     let rate= data.carrier

     rateSpan.innerHTML= `<strong>${rate}<strong>`
    
 }



 rateForm.addEventListener("submit", handleSubmit)

  function handleSubmit(event){
      event.preventDefault()
      let pno= event.target["number"].value
      getNumber(pno)
    }