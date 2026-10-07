/**
 * GES Ahafo Ano North System - Central Session Timeout Guard
 * Monitors user idle runtime thresholds and logs out accounts upon expiration.
 */
(() => {
    // Session timeout length baseline threshold (15 Minutes = 900,000 Milliseconds)
    const IDLE_TIMEOUT_LIMIT = 15 * 60 * 1000; 
    let idleTimerReference;

    // Direct redirection execution gateway logic back to system access entry point
    const executeAutomaticSessionLogout = () => {
        alert("Session Expired:\nYou have been automatically logged out due to inactivity to protect system logs.");
        window.location.href = "index.html";
    };

    // Resets the ticking countdown timers whenever interactivity signals are captured
    const resetIdleSessionCountdown = () => {
        clearTimeout(idleTimerReference);
        idleTimerReference = setTimeout(executeAutomaticSessionLogout, IDLE_TIMEOUT_LIMIT);
    };

    // Track active mouse shifts, touchscreen taps, or dynamic keyboard inputs
    const captureActivitySignals = () => {
        const structuralEvents = ['mousemove', 'keypress', 'mousedown', 'touchstart', 'scroll'];
        structuralEvents.forEach(eventName => {
            document.addEventListener(eventName, resetIdleSessionCountdown, { passive: true });
        });
    };

    // Initialize session security lifecycle trackers on load execution
    resetIdleSessionCountdown();
    captureActivitySignals();
})();
