// Daily Goal

const dailyGoal = 8;

// Elements

const input =
    document.getElementById("waterInput");

const button =
    document.getElementById("trackBtn");

const progressBar =
    document.getElementById("progressBar");

const percentage =
    document.getElementById("percentage");

const message =
    document.getElementById("message");

// Event Listener

button.addEventListener("click", () => {

    let waterAmount = input.value.trim();

    // Validation

    if (waterAmount === "" || isNaN(waterAmount)) {

        message.textContent =
            "❌ Please enter a valid number";

        message.style.color = "red";

        progressBar.style.width = "0%";

        percentage.textContent = "0%";

        return;
    }

    waterAmount = Number(waterAmount);

    // Calculate Progress

    let progress =
        (waterAmount / dailyGoal) * 100;

    if (progress > 100) {
        progress = 100;
    }

    // Update Progress Bar

    progressBar.style.width =
        progress + "%";

    percentage.textContent =
        Math.floor(progress) + "%";

    // Success Message

    if (waterAmount >= dailyGoal) {

        message.textContent =
            "🎉 Congratulations! Goal Achieved!";

        message.style.color = "#22c55e";

    } else {

        message.textContent =
            "💧 Keep Going! You're Doing Great!";

        message.style.color = "white";
    }

});