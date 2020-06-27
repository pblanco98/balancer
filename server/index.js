const express = require('express');
const isBalanced = require('./balanceAlgo.js');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/evaluate', (req,res) => {
    res.json({
        result: isBalanced(req.body.code)
    })
})




app.listen(5000, () => {

    console.log('Listening on http://localhost:5000')
}) 