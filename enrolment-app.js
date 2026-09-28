document.getElementById('enrolment-mount').innerHTML = `
<div class="register-container">
    <div class="header-title" style="color: #2b579a;">Basic Enrolment</div>
    
    <form id="enrolmentForm" onsubmit="event.preventDefault();">
        <!-- Top Operations Bar -->
        <div class="top-bar" style="border-color: #2b579a;">
            <div class="action-buttons">
                <button type="button" class="btn btn-new-e" onclick="document.getElementById('enrolmentForm').reset()">NEW</button>
                <button type="button" class="btn btn-delete-e" onclick="alert('Enrolment entry cleared.')">DELETE</button>
                <button type="submit" class="btn btn-save-e" onclick="alert('Enrolment data successfully logged!')">SAVE</button>
                <button type="button" class="btn btn-clear-e" onclick="document.getElementById('enrolmentForm').reset()">CLEAR</button>
                <button type="button" class="btn btn-back-e" onclick="window.location.href='dashboard.html'">BACK</button>
            </div>
        </div>

        <!-- Academic Headers Box -->
        <fieldset style="border-color: #ccc; margin-bottom: 20px;">
            <div class="field-row">
                <label>Academic Year</label>
                <select><option></option><option selected>2026/2027</option></select>
            </div>
            <div class="field-row">
                <label>Academic Term</label>
                <select><option></option><option selected>Term 1</option><option>Term 2</option><option>Term 3</option></select>
            </div>
            <div class="field-row">
                <label>Select Level</label>
                <select><option>KG ONLY</option><option>PRIMARY ONLY</option><option>JHS ONLY</option><option selected>ALL BASIC</option></select>
            </div>
            <div class="field-row">
                <label>EMIS Code</label>
                <input type="text" placeholder="Enter school EMIS ID">
            </div>
            <div class="field-row">
                <label>Circuit</label>
                <input type="text" placeholder="Enter School Circuit">
            </div>
            <div class="field-row">
                <label>Name of School</label>
                <input type="text" placeholder="Enter Official Name of School">
            </div>
        </fieldset>

        <div class="form-grid">
            <!-- Box 1: KG Enrolment -->
            <fieldset style="border-color: #b5e61d;">
                <legend style="color: #22b14c;">KG ENROLMENT</legend>
                
                <div class="field-row">
                    <label>KG 1 Boys / Girls</label>
                    <div class="sub-grid">
                        <input type="number" placeholder="Boys" min="0">
                        <input type="number" placeholder="Girls" min="0">
                        <input type="text" class="read-only-bg total-box" placeholder="Total" disabled>
                    </div>
                </div>

                <div class="field-row" style="margin-top: 15px;">
                    <label>KG 2 Boys / Girls</label>
                    <div class="sub-grid">
                        <input type="number" placeholder="Boys" min="0">
                        <input type="number" placeholder="Girls" min="0">
                        <input type="text" class="read-only-bg total-box" placeholder="Total" disabled>
                    </div>
                </div>

                <div class="field-row" style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px;">
                    <label>KG GRAND TOTAL</label>
                    <div class="sub-grid">
                        <input type="text" class="read-only-bg total-box" placeholder="Boys Total" disabled>
                        <input type="text" class="read-only-bg total-box" placeholder="Girls Total" disabled>
                        <input type="text" class="read-only-bg total-box" placeholder="Grand Total" disabled style="background-color: #fff3cd !important;">
                    </div>
                </div>
            </fieldset>

            <!-- Box 2: Primary Enrolment -->
            <fieldset style="border-color: #ffc90e;">
                <legend style="color: #ffc90e;">PRIMARY ENROLMENT</legend>
                <div class="field-row"><label>Primary 1 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row"><label>Primary 2 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row"><label>Primary 3 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row"><label>Primary 4 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row"><label>Primary 5 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row"><label>Primary 6 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                <div class="field-row" style="margin-top: 15px; border-top: 1px dashed #ccc; padding-top: 10px;">
                    <label>PRIMARY GRAND TOTAL</label>
                    <input type="text" class="read-only-bg total-box" placeholder="Calculated Primary Total" disabled style="background-color: #fff3cd !important;">
                </div>
            </fieldset>

            <!-- Box 3: JHS Enrolment -->
            <fieldset style="border-color: #000000;" class="full-width-section">
                <legend style="color: #333333;">JHS ENROLMENT</legend>
                <div class="finance-grid">
                    <div class="field-row"><label>JHS 1 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                    <div class="field-row"><label>JHS 2 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                    <div class="field-row"><label>JHS 3 Total</label><input type="number" min="0" placeholder="Boys + Girls"></div>
                </div>
                <div class="field-row" style="margin-top: 15px; border-top: 1px dashed #ccc; padding-top: 10px;">
                    <label>JHS GRAND TOTAL</label>
                    <input type="text" class="read-only-bg total-box" placeholder="Calculated JHS Total" disabled style="background-color: #fff3cd !important;">
                </div>
            </fieldset>
        </div>

        <!-- Search Bar Lookup Section -->
        <div class="search-container">
            <div class="search-bar">
                <label style="font-size: 12px; font-weight: bold; color: #333;">Search by EMIS CODE </label>
                <input type="text" placeholder="Type EMIS code to search data log history...">
                <button type="button">🔍</button>
            </div>
        </div>
    </form>
</div>
`;
