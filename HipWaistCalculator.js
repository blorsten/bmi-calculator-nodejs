exports.WTH_NORMAL = "Normal";
exports.WTH_OVERWEIGHT = "Overweight";
exports.WTH_OBESE = "Obese";
exports.WTH_INVALID_GENDER = "Invalid gender";
exports.WTH_INVALID_INPUT = "Invalid input";


exports.calculateWaistToHipRatio = function (waist, hip) {
    if(waist < 0 || hip < 0 || isNaN(waist) || isNaN(hip))
        return false;

    return waist/hip
}

exports.calculateWaistToHipCategory = function (gender, ratio) {
    if(ratio < 0 || isNaN(ratio))
        return exports.WTH_INVALID_INPUT;

    switch (gender) {
        case "male":
            if(ratio < 0.9)
                return exports.WTH_NORMAL;      
            else if(ratio >= 0.9 && ratio < 1)
                return exports.WTH_OVERWEIGHT;
            else if(ratio >= 1)
                return exports.WTH_OBESE;
            break;
    
        case "female":
            if(ratio < 0.8)
                return exports.WTH_NORMAL;      
            else if(ratio >= 0.8 && ratio < 0.85)
                return exports.WTH_OVERWEIGHT;
            else if(ratio >= 0.85)
                return exports.WTH_OBESE;
            break;

        default:
            return exports.WTH_INVALID_GENDER;
    }
};

module.exports = exports;