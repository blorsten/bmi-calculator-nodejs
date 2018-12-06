import BMICalculator from "./BMICalculator";

beforeAll( () => {

});

test("Invalid test negative numbers", () => {
    var bmi = -132;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_INVALID_INPUT);
});

test("Invalid test NaN", () => {
    var bmi = "Yea boi";
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_INVALID_INPUT);
});

test("Underweight test", () => {
    var bmi = 18.4;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_UNDERWEIGHT);
});

test("Healthy test lower boundary", () => {
    var bmi = 18.5;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_HEALTHY);
});

test("Healthy test upper boundary", () => {
    var bmi = 24.9;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_HEALTHY);
});

test("Overweight test lower boundary", () => {
    var bmi = 25;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_OVERWEIGHT);
});

test("Overweight test upper boundary", () => {
    var bmi = 29.9;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_OVERWEIGHT);
});

test("Obese test lower boundary", () => {
    var bmi = 30;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_OBESE);
});

test("Obese test", () => {
    var bmi = 123;
    var category = BMICalculator.categorizeBMI(bmi);

    expect(category).toBe(BMICalculator.BMI_OBESE);
});

afterAll(() => {

});