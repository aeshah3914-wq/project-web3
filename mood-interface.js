function shiftUIMood(themeClass, feedbackText, structuralIcon) {
    const bodyElement = document.getElementById('moodBody');
    const displayLabel = document.getElementById('greetContext');
    
    bodyElement.className = "";
    bodyElement.classList.add(`mood-${themeClass}`);
    
    displayLabel.innerHTML = `${feedbackText} <span style="color: var(--accent-maroon); font-weight:bold;">${structuralIcon}</span>`;
}