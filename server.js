//берём Express
const express = require('express'),
  // bodyParser = require('body-parser'),
  // fs = require('fs'),
  // parse = require('node-html-parser').parse,
  { textData } = require('./modules/textData');


// создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({ extended: false });

// создаём Express-приложение
const app = express();

// подключаем статические файлы css, и другие
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/result.html', (req, res) => {
  exports.reqQuery = req.query
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end(
    textData()
  )
})

// запускаем сервер на порту 8080
app.listen(3005);
// отправляем сообщение
console.log('Сервер стартовал! http://localhost:3005');