// Recovery Activities Database

const breaksData = [

    {
        id: "stretching",
        imgSrc: "card-stretching.png",
        title: "Static Muscle Stretching Protocol",
        desc: "Perform targeted static stretches on the active muscle groups for 30 seconds to improve blood flow and flexibility.",
        bgClass: "bg-stretch"
    },

    {
        id: "hydration",
        imgSrc: "card-water.png",
        title: "Rehydration & Electrolyte Protocol",
        desc: "Consume water gradually to restore fluids and maintain proper hydration levels.",
        bgClass: "bg-hydrate"
    },

    {
        id: "heart-rate",
        imgSrc: "card-breathing.png",
        title: "Heart Rate Cool-Down Protocol",
        desc: "Practice deep breathing and walk slowly to safely lower your heart rate.",
        bgClass: "bg-heart"
    },

    {
        id: "massage",
        imgSrc: "card-eyes.jpg",
        title: "Deep Tissue Myofascial Release",
        desc: "Use a foam roller to reduce muscle tension and improve recovery speed.",
        bgClass: "bg-massage"
    }

];

// System State

let isNotificationOpen = false;

// DOM Elements

const activityBtn =
    document.getElementById("activity-btn");

const alertCloud =
    document.getElementById("alert-cloud");

const resultWrapper =
    document.getElementById("result-wrapper");

const breakCard =
    document.getElementById("break-card");

const breakImg =
    document.getElementById("break-img");

const breakTitle =
    document.getElementById("break-title");

const breakDesc =
    document.getElementById("break-desc");

const successBar =
    document.getElementById("success-bar");

const acceptBtn =
    document.getElementById("accept-btn");

const postponeBtn =
    document.getElementById("postpone-btn");

// Generate Random Recovery Activity

function triggerRecoveryProtocol() {

    const randomIndex =
        Math.floor(
            Math.random() * breaksData.length
        );

    const selectedBreak =
        breaksData[randomIndex];

    breakImg.src =
        selectedBreak.imgSrc;

    breakTitle.textContent =
        selectedBreak.title;

    breakDesc.textContent =
        selectedBreak.desc;

    breakCard.className =
        "break-card " +
        selectedBreak.bgClass;
}

// Main Button

activityBtn.addEventListener("click", () => {

    if (isNotificationOpen) {

        alertCloud.classList.remove("hidden");

        return;
    }

    alertCloud.classList.add("hidden");
    successBar.classList.add("hidden");
    resultWrapper.classList.add("hidden");

    activityBtn.disabled = true;

    activityBtn.textContent =
        "Analyzing fatigue levels...";

    setTimeout(() => {

        isNotificationOpen = true;

        activityBtn.disabled = false;

        activityBtn.textContent =
            "Recovery Protocol Active";

        triggerRecoveryProtocol();

        resultWrapper.classList.remove("hidden");

        resultWrapper.classList.add(
            "animate-pop"
        );

    }, 1200);

});

// Accept Recovery

acceptBtn.addEventListener("click", () => {

    resetSystem();

    successBar.classList.remove("hidden");

    successBar.classList.add(
        "animate-pop"
    );

});

// Skip Recovery

postponeBtn.addEventListener("click", () => {

    resetSystem();

});

// Reset System

function resetSystem() {

    isNotificationOpen = false;

    resultWrapper.classList.add("hidden");

    alertCloud.classList.add("hidden");

    activityBtn.disabled = false;

    activityBtn.innerHTML =
        "<span class='icon-btn'>&#9873;</span> End Current Training Set";

}