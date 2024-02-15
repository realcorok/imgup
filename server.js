const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.filename}`;
    res.json({ imageUrl: imageUrl });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
