function CalculateBmi() {
            var weight = document.getElementById("weight").value;
            var height = document.getElementById("height").value / 100;

            if (weight != "" && height != "") {
                var bmi = weight / (height * height);
                document.getElementById("result").innerHTML = parseFloat(bmi);

            } else {
                alert("กรุณากรอกให้ครบจ้า ถ้าไม่ครบคุณจะรู้ค่าBMIไหม");
            }
            document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);


            if (bmi < 18.5) {
                document.getElementById("result").innerHTML += " ผอม";
            } else if (bmi >= 18.5 && bmi <= 22.9) {
                document.getElementById("result").innerHTML += " ปกติ";
            } else if (bmi >= 23 && bmi <= 24.9) {
                document.getElementById("result").innerHTML += " ท้วม";
            } else if (bmi >= 25 && bmi <= 29.9) {
                document.getElementById("result").innerHTML += " อ้วน";
            } else {
                document.getElementById("result").innerHTML += " อ้วนมาก";
            }
        }