// Employee Data

const employees = [

    {
        name: "Ahmed Ali",
        department: "Engineering",
        activity: "Completed hydration goal"
    },

    {
        name: "Sara Mohamed",
        department: "Marketing",
        activity: "Taking a breathing break"
    },

    {
        name: "Mona Khaled",
        department: "HR",
        activity: "Walking around the office"
    }

];

// Activity Feed Container

const activityFeed =
    document.getElementById("activity-feed");

// Generate Employee Cards

employees.forEach(employee => {

    activityFeed.innerHTML += `

    <div class="card">

        <h2>${employee.name}</h2>

        <span class="status">
            🟢 Active Now
        </span>

        <h4>${employee.department}</h4>

        <p class="activity-text">
            ${employee.activity}
        </p>

        <p class="time">
            2 minutes ago
        </p>

        <button class="pulse-btn">
            Send Pulse ❤️
        </button>

        <p class="success-message"></p>

    </div>

    `;

});

// Pulse Buttons

const pulseButtons =
    document.querySelectorAll(".pulse-btn");

// Send Encouragement

pulseButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.textContent =
            "Pulse Sent ✅";

        this.style.backgroundColor =
            "#22c55e";

        this.disabled = true;

        const message =
            this.nextElementSibling;

        message.textContent =
            "Encouragement sent successfully!";

    });

});

// Dynamic Activities

const activities = [

    "Taking a wellness break",

    "Drinking water",

    "Completing breathing exercise",

    "Walking around the office",

    "Stretching for 5 minutes",

    "Meditating quietly",

    "Joining a fitness challenge",

    "Completing a mindfulness session"

];

// Update Activities Every 10 Seconds

setInterval(() => {

    const activityTexts =
        document.querySelectorAll(".activity-text");

    activityTexts.forEach(activity => {

        const randomActivity =
            activities[
                Math.floor(
                    Math.random() * activities.length
                )
            ];

        activity.textContent =
            randomActivity;

    });

}, 10000);