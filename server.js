const express = require('express'); // kutsume välja
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
    console.log('Data sent');
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);

    let result = 1.3*weight/height^2.5;

    res.send('Your BMI is '+result);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});