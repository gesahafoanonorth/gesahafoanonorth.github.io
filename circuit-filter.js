/**
 * GES Ahafo Ano North System - Shared Cascading Filter Interceptor
 * Dynamically binds circuit changes directly to school selector option menus
 */
const bindDynamicCircuitSchoolDropdowns = (circuitSelector, schoolSelector) => {
    const circuitElement = document.querySelector(circuitSelector);
    const schoolElement = document.querySelector(schoolSelector);

    if (!circuitElement || !schoolElement) {
        console.warn(`Cascade Binding Skipped: Element definitions for '${circuitSelector}' or '${schoolSelector}' not detected in this layout node view.`);
        return;
    }

    const triggerOptionsRegeneration = () => {
        const activeCircuit = circuitElement.value;
        
        // Preserve default empty template state option item
        schoolElement.innerHTML = '<option value="" disabled selected>Select School / Institution</option>';
        
        // Pull down school items matching selection from master dictionary maps matrix
        const targetsArray = CIRCUIT_SCHOOLS_MAP[activeCircuit] || [];
        
        // Populate filtered entries dynamically into drop menu rows
        targetsArray.forEach(facilityName => {
            const rowNode = document.createElement("option");
            rowNode.value = facilityName;
            rowNode.textContent = facilityName;
            schoolElement.appendChild(rowNode);
        });
    };

    circuitElement.addEventListener("change", triggerOptionsRegeneration);
    
    // Fire synchronization checking parameters if baseline state is pre-selected on boot up
    if (circuitElement.value) {
        triggerOptionsRegeneration();
    }
};

// Automatically scan document structures for form-specific layout targets on load lifecycle 
document.addEventListener("DOMContentLoaded", () => {
    // 1. Target fields hook for enrolment.html
    bindDynamicCircuitSchoolDropdowns('select[name="Circuit"]', 'select[name="School_Name"]');
    
    // 2. Target fields hook for staff.html
    bindDynamicCircuitSchoolDropdowns('select[name="Circuit"]', 'select[name="School_Name"]');
    
    // 3. Target fields hook for school-basic.html
    bindDynamicCircuitSchoolDropdowns('select[name="Circuit"]', 'select[name="School_Name"]');
    
    // 4. Target fields hook for school-infrastructure.html
    bindDynamicCircuitSchoolDropdowns('select[name="Circuit"]', 'select[name="School_Name"]');
});
