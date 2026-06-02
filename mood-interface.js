document.addEventListener("DOMContentLoaded", () => {

    // Select Elements

    const moodButtons =
        document.querySelectorAll(".mood-btn");

    const bodyElement =
        document.body;

    const greetingTitle =
        document.getElementById("greeting");

    const statusText =
        document.getElementById("status-text");

    // Mood Data

    const moodSettings = {

        excited: {
            title: "Optimized for Productivity! 🚀",
            message:
                "GlobalCorp Analytics: Environmental lighting raised to 100%. Dynamic workflows activated.",
            themeClass: "theme-excited"
        },

        exhausted: {
            title: "Rest Protocol Engaged 🪫",
            message:
                "GlobalCorp Analytics: Refresh mode initialized. Consider taking a short 5-minute breather.",
            themeClass: "theme-exhausted"
        },

        calm: {
            title: "Deep Focus Environment 🧘",
            message:
                "GlobalCorp Analytics: Sound dampening enabled. Ideal state for strategic code review.",
            themeClass: "theme-calm"
        },

        stressed: {
            title: "Decompression Active 😫",
            message:
                "GlobalCorp Analytics: Interface visual weight reduced. Soft color palettes deployed.",
            themeClass: "theme-stressed"
        }

    };

    // Event Listeners

    moodButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedMood =
                button.dataset.mood;

            if (!moodSettings[selectedMood]) return;

            // Remove Old Themes

            bodyElement.classList.remove(
                "theme-excited",
                "theme-exhausted",
                "theme-calm",
                "theme-stressed"
            );

            // Apply New Theme

            bodyElement.classList.add(
                moodSettings[selectedMood].themeClass
            );

            // Update Text

            greetingTitle.textContent =
                moodSettings[selectedMood].title;

            statusText.textContent =
                moodSettings[selectedMood].message;

            console.log(
                `GlobalCorp Pulse System: UI state shifted to [${selectedMood}]`
            );

        });

    });

});