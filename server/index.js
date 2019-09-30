const express = require('express');
const ctrl = require('./controllers/books_controller');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/../build'));
app.use(cors());
app.use(express.json());

app.get('/api/books', ctrl.read);

app.post('/api/books', ctrl.create);

app.put('/api/books/:id', ctrl.update);

app.delete('/api/books/:id', ctrl.delete);


const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})