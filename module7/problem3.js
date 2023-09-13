function height(a,b) {
    
    let height = parseFloat(a);
    let weight = parseFloat(b);

    let bmi = weight / (height * height);
    console.log("BMI: " + bmi.toFixed(2));

    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 24.9) {
        console.log("Normal weight");
    } else if (bmi < 29.9) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }

}
height(1.6, 60)



