var BMICalculator = require("./BMICalculator");
var express = require("express");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});


app.get("/result", (req, res) => {
    var cm = req.query.cm;
    var kg = req.query.kg;
    var m = BMICalculator.calculateM(cm);
    
    if(m == 0 || isNaN(m)){
        res.redirect("/");
    } else {
        var bmi = BMICalculator.calculateBMI(kg, cm);
        var category = BMICalculator.categorizeBMI(bmi);
        res.render("pages/result", {
            bmi: bmi,
            category: category
        });
    }  
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
