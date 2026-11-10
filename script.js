
const form = document.getElementById("gradeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student details
    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();

    // Get subject marks
    const marks = [
        Number(document.getElementById("subject1").value),
        Number(document.getElementById("subject2").value),
        Number(document.getElementById("subject3").value),
        Number(document.getElementById("subject4").value),
        Number(document.getElementById("subject5").value)
    ];

    // Validate marks
    if (name === "" || roll === "") {
        alert("Please enter student details.");
        return;
    }

    if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    // Calculate total and percentage
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / 5;

    // Calculate grade
    let grade;

    if (marks.some(mark => mark < 40)) {
        grade = "F";
    }
    else if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "E";
    }

    // Determine pass or fail
    const status = marks.some(mark => mark < 40) ? "FAIL" : "PASS";

    // Display result
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultRoll").textContent = roll;
    document.getElementById("total").textContent = total;
    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("grade").textContent = grade;
    document.getElementById("status").textContent = status;

    document.getElementById("result").classList.remove("hidden");

});

// Reset result when form is cleared
form.addEventListener("reset", function() {
    document.getElementById("result").classList.add("hidden");
});
