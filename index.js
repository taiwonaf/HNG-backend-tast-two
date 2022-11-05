const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"Test": "rest"})
})

app.post('/api/operation', (req, res) => {
    const operation_type = req.body.operation_type.toLowerCase()
    const x = req.body.x
    const y = req.body.y

    if (operation_type == 'addition') {
        const result = x + y;
        res.json({
            "slackUsername": "taiwonaf",
            "operation_type": operation_type,
            "result": result,
        })
    } else if (operation_type == 'subtraction') {
        const result = x - y;
        res.json({
            "slackUsername": "taiwonaf",
            "operation_type": operation_type,
            "result": result,
        })
    } else if (operation_type == 'multiplication') {
        const result = x * y;
        res.json({
            "slackUsername": "taiwonaf",
            "operation_type": operation_type,
            "result": result,
        })
    } else {
        res.json({"error": "operation not possible"})
    }
})


app.listen(process.env.PORT || 3000, (req, res) => console.log("Port started at 8000"))