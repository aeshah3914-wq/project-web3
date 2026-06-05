let shuffleSpamCounter = 0;
let lastSelectedId = "";

const matrixRoutines = [
    { id: "water", title: "Hydration Sync Protocol", img: "card-water.png", actionText: "Complete 250ml 💧︎" },
    { id: "eyes", title: "Ocular Relaxation Loop", img: "card-eyes.jpg", actionText: "Eyes Rested ✧" },
    { id: "stretch", title: "Muscular Extension Sync", img: "card-stretching.png", actionText: "Extension Done ✿" },
    { id: "breath", title: "Vagus Nerve Respiration", img: "card-breathing.png", actionText: "Breathing Synced 𖤓" }
];

function serveNextMatrixTask() {
    const slot = document.getElementById('matrixActiveCardSlot');
    if (!slot) return;

    let availableTasks = matrixRoutines.filter(task => task.id !== lastSelectedId);
    let chosenTask = availableTasks[Math.floor(Math.random() * availableTasks.length)];
    
    lastSelectedId = chosenTask.id;

    slot.innerHTML = `
        <div class="matrix-active-card">
            <img src="${chosenTask.img}" class="nexus-card-img" alt="${chosenTask.title}">
            <h3 style="margin: 0 0 10px 0; font-size: 20px; color: var(--accent-maroon);">${chosenTask.title}</h3>
            <p style="font-size: 14px; color: #8A6F73; margin-bottom: 25px;">Targeted workspace recovery module to protect your wellness balance.</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button class="nexus-real-button" onclick="triggerTaskCompletion()">
                    ${chosenTask.actionText}
                </button>
                <button class="nexus-real-button nexus-skip-button" onclick="triggerTaskSkip()">
                    Skip Routine ✕
                </button>
            </div>
        </div>
    `;
}

window.onload = () => {
    serveNextMatrixTask();
};

function shuffleMatrixCycle() {
    shuffleSpamCounter++;
    
    // يظهر شريط التنبيه المخفي بنعومة عند الضغط أكثر من مرة (بدءاً من الضغطة الثانية)
    if (shuffleSpamCounter >= 2) {
        document.getElementById('matrixStreamAlert').classList.add('show-alert');
    }

    if (shuffleSpamCounter > 3) {
        document.getElementById('warningNoticeModal').classList.add('show-popup');
        return;
    }
    serveNextMatrixTask();
}

function triggerTaskCompletion() {
    document.getElementById('successNoticeModal').classList.add('show-popup');
}

function triggerTaskSkip() {
    document.getElementById('skipNoticeModal').classList.add('show-popup');
}

function closeNotification(modalId) {
    document.getElementById(modalId).classList.remove('show-popup');
    shuffleSpamCounter = 0;
    // عند الانتهاء بنجاح، يتم إخفاء التنبيه مرة أخرى
    document.getElementById('matrixStreamAlert').classList.remove('show-alert');
    
    if(modalId !== 'warningNoticeModal') {
        serveNextMatrixTask();
    }
}