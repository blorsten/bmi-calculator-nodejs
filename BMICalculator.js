exports.BMI_UNDERWEIGHT = "Underweight";
exports.BMI_HEALTHY = "Healthy";
exports.BMI_OVERWEIGHT = "Overweight";
exports.BMI_OBESE = "Obese";
exports.BMI_INVALID_INPUT = "Invalid Input";

exports.categorizeBMI = function (bmi) {
    if(bmi < 0 || isNaN(bmi))
        return BMI_INVALID_INPUT;

    if(bmi < 18.5)
        return BMI_UNDERWEIGHT;
    else if (bmi < 25 && bmi > 18.4)
        return BMI_HEALTHY;
    else if(bmi > 24.9 && bmi < 30)
        return BMI_OVERWEIGHT;
    else if(bmi > 29.9)
        return BMI_OBESE;
}

exports.calculateBMI =  function (kg, cm) {   
    var m = calculateM(cm);
    var bmi = (kg / (m * m));
    return bmi;
}

exports.calculateM = function (cm) {
    var m = (parseInt(cm, 10) / 100);
    return m;
}

module.exports = exports;