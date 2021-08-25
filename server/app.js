const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const db = require('./db/index.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.post('/feedback', (req, res) => {
  var values = [req.body.message]
  db.query('INSERT INTO feedback (message) VALUES ($1)', values)
    .then(() => {
      res.send("feedback recieved")
    })
    .catch((err) => {
      console.log(err)
    })
})