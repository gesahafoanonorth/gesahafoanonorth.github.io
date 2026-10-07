/**
 * GES Ahafo Ano North System - Global Submission Tracker
 * Standardizes button states and provides clear, immediate submission feedback
 */
const handleGlobalFormSubmission = async (formElement, submitButtonId, formTypeName, appScriptUrl, resetCallback) => {
    const form = document.getElementById(formElement);
    const saveButton = document.getElementById(submitButtonId);
    
    if (!form || !saveButton) {
        console.warn(`Form mapping mismatch: ${formElement} or ${submitButtonId} not found.`);
        return;
    }

    // Preserve original text label to restore it seamlessly later
    const originalText = saveButton.innerText || saveButton.value;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // 1. Lock UI controls to completely block concurrent double-submissions
        saveButton.disabled = true;
        saveButton.style.opacity = "0.7";
        saveButton.innerText = "UPLOADING DATA...";

        const formData = new FormData(form);
        const payloadData = {};
        formData.forEach((val, key) => payloadData[key] = val);

        // Include any sub-totals if the specific enrollment loop features them
        if (formTypeName === "Enrolment") {
            const getVal = (id) => document.getElementById(id)?.value || "0";
            ["kg_gt", "primary_gt", "jhs_gt"].forEach(prefix => {
                payloadData[`${prefix.toUpperCase()}_Total_Boys`] = getVal(`${prefix}_b`);
                payloadData[`${prefix.toUpperCase()}_Total_Girls`] = getVal(`${prefix}_g`);
                payloadData[`${prefix.toUpperCase()}_Grand_Total`] = getVal(`${prefix}`);
            });
        }

        const payload = {
            formType: formTypeName,
            data: payloadData
        };

        try {
            // 2. Transmit data packet straight to Google Apps Script backend routing pipeline
            const res = await fetch(appScriptUrl, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(payload)
            });
            
            const result = await res.json();
            
            // 3. Display explicit response update status notification
            if (result.result === "success") {
                alert(`[SUBMISSION SUCCESS]\nYour updates for "${formTypeName}" have been written into the GES Master Database successfully!`);
                if (typeof resetCallback === "function") {
                    resetCallback();
                } else {
                    form.reset();
                }
            } else {
                alert(`[SUBMISSION REJECTED]\nSpreadsheet engine returned an error: ${result.message}`);
            }
        } catch (err) {
            console.error("API link exception encountered: ", err);
            alert(`[SUBMISSION FAILED]\nNetwork Error: Could not reach the central database API. Check internet access or active script deployment configurations.`);
        } finally {
            // 4. Restore interactive button parameters back to original functional parameters
            saveButton.disabled = false;
            saveButton.style.opacity = "1";
            saveButton.innerText = originalText;
        }
    });
};
