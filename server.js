const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

function getQuote(){
    
    const url = `https://api.quotable.io/random`
  
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${ response.status }`);
        }
    
        return response;
      })
  }

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/getQuote', (request, response) => {
    const newQuoteJson = getQuote();
  
     response(newQuoteJson)
  
    }
)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})