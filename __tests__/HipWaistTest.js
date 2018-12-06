import HipWaistCalculator from "../HipWaistCalculator";

describe("Test WaistToHip Ratio", () => {
    test("Test with equal hip and waist", () => {
        var waist = 90;
        var hip = 90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(waist/hip);
    });
    
    test("Tets Ratio under 1", () => {
        var waist = 70;
        var hip = 90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(waist/hip);
    });
    
    test("Test ratio over 1", () => {
        var waist = 120;
        var hip = 90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(waist/hip);
    });

    test("Invalid test negative waist", () => {
        var waist = -70;
        var hip = 90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(false);
    });
    
    test("Invalid test negative hip", () => {
        var waist = 70;
        var hip = -90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(false);
    });
    
    test("Invalid test NaN hip", () => {
        var waist = "hehe";
        var hip = -90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(false);
    });
    
    test("Invalid test NaN hip", () => {
        var waist = 70;
        var hip = "Så deet";
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(false);
    });
});

describe("Test category calculation", () => {
    test("Invalid Input", () => {
        var ratio = "NaN";
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_INVALID_INPUT);
    });

    test("invalid gender", () => {
        var ratio = 1.1;
        var gender = "Attack Helicopter";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_INVALID_GENDER);
    });

    test("male normal weight", () => {
        var ratio = 0.89;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("male overweight lower boundary", () => {
        var ratio = 0.9;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OVERWEIGHT);
    });

    test("male overweight upper boundary", () => {
        var ratio = 0.99;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OVERWEIGHT);
    });

    test("male obese", () => {
        var ratio = 1;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OBESE);
    });

    test("female normal weight", () => {
        var ratio = 0.79;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("female overweight lower boundary", () => {
        var ratio = 0.8;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OVERWEIGHT);
    });

    test("female overweight upper boundary", () => {
        var ratio = 0.84;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OVERWEIGHT);
    });

    test("female obese", () => {
        var ratio = 0.85;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OBESE);
    });
});