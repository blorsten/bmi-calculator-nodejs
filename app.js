var BMICalculator = require("./BMICalculator");
var WTHCalculator = require("./HipWaistCalculator");
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
    var waist = parseInt(req.query.waist, 10);
    var hip = parseInt(req.query.hip, 10);
    var ratio = WTHCalculator.calculateWaistToHipRatio(waist, hip);
    
    if(m == 0 || isNaN(m) || ratio == 0 || isNaN(ratio)){
        res.redirect("/");
    } else {
        var bmi = BMICalculator.calculateBMI(kg, cm);
        var category = BMICalculator.categorizeBMI(bmi);
        var gender = req.query.gender;
        var wthCategory = WTHCalculator.calculateWaistToHipCategory(gender, ratio);
        res.render("pages/result", {
            bmi: bmi,
            category: category,
            wth: ratio,
            wthCategory: wthCategory
        });
    }  
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
