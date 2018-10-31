const express = require('express');
const multer = require('multer');
const upload = multer({
    dest: 'upload/'
});

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file-to-upload'), (req, res) => {
    console.log('req', req.file)
    res.redirect('/');
});

app.listen(4444, () => console.log('Server running at Port : 4444'));