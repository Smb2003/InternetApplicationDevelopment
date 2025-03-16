function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight && height) {
        let heightInMeters = height / 100;
        let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById("result").innerText = `Your BMI: ${bmi}`;
    } else {
        document.getElementById("result").innerText = "";
    }
}
