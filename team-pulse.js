const cohortNames = ["Sarah", "Emily", "Jessica", "Amira", "Rachel", "Chloe"];
const trackingActivities = ["is performing spinal alignment routines", "completed 350ml cellular replenishment", "initiated optical context recovery logs"];
const decorativeTokens = ["✦", "✿", "✧", "♥︎"];

function synchronizeNetworkFeed() {
    const contentTarget = document.getElementById('asyncFeedsGrid');
    if (!contentTarget) return;
    contentTarget.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const structuralName = cohortNames[Math.floor(Math.random() * cohortNames.length)];
        const dynamicAct = trackingActivities[Math.floor(Math.random() * trackingActivities.length)];
        const systemToken = decorativeTokens[Math.floor(Math.random() * decorativeTokens.length)];

        const cardElement = document.createElement('div');
        cardElement.className = 'team-member-card';
        cardElement.innerHTML = `
            <strong style="color: var(--accent-maroon);">${structuralName} (Core Division)</strong>
            <span style="font-size:13px; color:#7A6266; margin: 4px 0;">${dynamicAct}</span>
            <button class="nexus-real-button" style="padding:8px 18px; font-size:13px; border-radius:12px; box-shadow:0 5px 0px var(--accent-maroon);" onclick="transmitPulsePayload(this)">
                ${systemToken} Broadcast Pulse
            </button>
            <span class="pulse-indicator-tag" style="font-size:11px; color:#B37D86; margin-top:4px; font-weight:bold;">Status: Active</span>
        `;
        contentTarget.appendChild(cardElement);
    }
}

function transmitPulsePayload(btnReference) {
    const cardScope = btnReference.parentElement;
    cardScope.classList.add('pulsed');
    btnReference.innerHTML = "🎔 Pulse Transmitted";
    btnReference.disabled = true;
    cardScope.querySelector('.pulse-indicator-tag').innerText = "Signal confirmed in enterprise ledger! ✦";
}

synchronizeNetworkFeed();
setInterval(synchronizeNetworkFeed, 10000);