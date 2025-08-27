const express = require('express');
const path = require('path');

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello, World!</h1>'); // can send HTML
//     // res.send({message: 'JSON!'}); // can send JSON
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}    
]

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});