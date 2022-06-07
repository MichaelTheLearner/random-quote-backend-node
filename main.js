

async function apiRequest(){
    
    try{
        const response = await fetch(`https://random-quote-100devs.herokuapp.com/api/getQuote`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#quoteSpan').innerText = data.content
    }catch(error){
        console.log(error)
    }
}
document.addEventListener('DOMContentLoaded', function() {
    apiRequest();
}, false);