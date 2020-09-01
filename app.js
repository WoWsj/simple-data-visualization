const express = require('express'); // 익스프레스 모듈 사용하쟈
const app = express();
const port = 3000;

app.use('/content', express.static('public'))

app.get('/', (req, res) => {
    res.sendfile('./content/index.html')
  })

app.get('/ngd.html',(req,res) => {
  res.sendfile('./content/ngd.html')
})

app.get('/violentmap.js',(req,res) => {
  res.sendfile('./content/violentmap.js')
})

app.get('/gd.html',(req,res) => {
  res.sendfile('./content/gd.html')
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})