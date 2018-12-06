import HipWaistCalculator from "../HipWaistCalculator";

describe("Test WaistToHip Ratio", () => {
    test("Test with equal hip and waist", () => {
        var waist = 180;
        var hip = 90;
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(2);
    });
    
    test("Invalid test NaN hip", () => {
        var waist = 70;
        var hip = "Så deet";
        var waistToHip = HipWaistCalculator.calculateWaistToHipRatio(waist, hip);
        
        expect(waistToHip).toBe(false);
    });
});

describe("Test category calculation", () => {
    test("Gender selected test", () => {
        var ratio = 1;
        var gender = "";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_INVALID_GENDER);
    })

    test("Invalid Input", () => {
        var ratio = "NaN";
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_INVALID_INPUT);
    });

    test("Invalid Input", () => {
        var ratio = -0.1;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_INVALID_INPUT);
    });

    test("Invalid Input", () => {
        var ratio = 0;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("Invalid Input", () => {
        var ratio = 0.1;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("male normal weight", () => {
        var ratio = 0.94;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("male overweight lower boundary", () => {
        var ratio = 0.95;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OVERWEIGHT);
    });

    test("male overweight lower boundary", () => {
        var ratio = 0.96;
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
    
    test("male obese", () => {
        var ratio = 1.1;
        var gender = "male";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OBESE);
    });

    test("Invalid Input", () => {
        var ratio = -0.1;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_INVALID_INPUT);
    });

    test("Invalid Input", () => {
        var ratio = 0;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
    });

    test("Invalid Input", () => {
        var ratio = 0.1;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);
    
        expect(category).toBe(HipWaistCalculator.WTH_NORMAL);
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

    test("female overweight lower boundary", () => {
        var ratio = 0.81;
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
    
    test("female obese", () => {
        var ratio = 0.86;
        var gender = "female";
        var category = HipWaistCalculator.calculateWaistToHipCategory(gender, ratio);

        expect(category).toBe(HipWaistCalculator.WTH_OBESE);
    });
});