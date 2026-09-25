document.getElementById('app-mount').innerHTML = `
<div class="register-container">
    <div class="header-title">Staff Register</div>
    <form id="registerForm" onsubmit="event.preventDefault();">
        <div class="top-bar">
            <div class="top-input-container">
                <div class="top-input-group"><label>ACADEMIC YEAR</label><input type="text" placeholder="e.g. 2026/2027"></div>
                <div class="top-input-group"><label>ACADEMIC TERM</label><input type="text" placeholder="e.g. Term 1"></div>
            </div>
            <div class="action-buttons">
                <button type="submit" class="btn btn-save" onclick="alert('Record Saved Successfully!')">SAVE</button>
                <button type="button" class="btn btn-new" onclick="document.getElementById('registerForm').reset()">NEW</button>
                <button type="button" class="btn btn-update" onclick="alert('Record Updated!')">UPDATE</button>
                <button type="button" class="btn btn-delete" onclick="alert('Record Deleted!')">DELETE</button>
                <button type="button" class="btn btn-clear" onclick="document.getElementById('registerForm').reset()">CLEAR</button>
                <button type="button" class="btn btn-back" onclick="window.location.href='dashboard.html'">BACK</button>
            </div>
        </div>
        <div class="form-grid">
            <fieldset>
                <legend>Personal Information</legend>
                <div class="field-row"><label>Teacher ID</label><input type="text"></div>
                <div class="field-row"><label>Title</label><select><option></option><option>Mr.</option><option>Mrs.</option><option>Ms.</option><option>Dr.</option></select></div>
                <div class="field-row"><label>Surname</label><input type="text"></div>
                <div class="field-row"><label>Other Names</label><input type="text"></div>
                <div class="field-row"><label>Gender</label><select><option></option><option>Male</option><option>Female</option></select></div>
                <div class="field-row"><label>Date of Birth</label><input type="date"></div>
                <div class="field-row"><label>Age</label><input type="text" class="read-only-bg" placeholder="Auto-calculated"></div>
                <div class="field-row"><label>Religion</label><select><option></option><option>Christianity</option><option>Islam</option><option>Traditional</option></select></div>
            </fieldset>
            <fieldset>
                <legend>Academic And School Details</legend>
                <div class="field-row"><label>Circuit</label><select><option></option></select></div>
                <div class="field-row"><label>Name of School</label><select><option></option></select></div>
                <div class="field-row"><label>Association Type</label><select><option></option></select></div>
                <div class="field-row"><label>Staff Type</label><select><option></option></select></div>
                <div class="field-row"><label>Training Status</label><select><option></option></select></div>
                <div class="field-row"><label>Position</label><input type="text"></div>
                <div class="field-row"><label>Level Taught</label><select><option></option></select></div>
                <div class="field-row"><label>Class Taught</label><input type="text"></div>
                <div class="field-row"><label>Subject Taught</label><input type="text"></div>
            </fieldset>
            <fieldset>
                <legend>Contact And Location Details</legend>
                <div class="field-row"><label>Nationality</label><input type="text" value="Ghanaian"></div>
                <div class="field-row"><label>Hometown</label><input type="text"></div>
                <div class="field-row"><label>Region</label><select><option selected>Ashanti</option></select></div>
                <div class="field-row"><label>District</label><select><option selected>Ahafo Ano North</option></select></div>
                <div class="field-row"><label>GPS Address</label><input type="text" placeholder="e.g. AN-0002-1234"></div>
                <div class="field-row"><label>E-Mail</label><input type="email"></div>
                <div class="field-row"><label>Telephone Number</label><input type="tel"></div>
            </fieldset>
            <fieldset class="full-width-section">
                <legend>Employment and Qualification</legend>
                <div class="employment-mobile-stack">
                    <div>
                        <div class="field-row"><label>File Number</label><input type="text"></div>
                        <div class="field-row"><label>Staff ID</label><input type="text"></div>
                        <div class="field-row"><label>Registered No.</label><input type="text"></div>
                        <div class="field-row"><label>SSNIT Number</label><input type="text"></div>
                        <div class="field-row"><label>TIN Number</label><input type="text"></div>
                        <div class="field-row"><label>ID Type</label><select><option></option><option>Ghana Card</option><option>Voter ID</option></select></div>
                    </div>
                    <div>
                        <div class="field-row"><label>ID Number</label><input type="text"></div>
                        <div class="field-row"><label>Retirement Status</label><input type="text" class="read-only-bg"></div>
                        <div class="field-row"><label>Date of First Appointment</label><input type="date"></div>
                        <div class="field-row"><label>Years in Service</label><input type="text" class="read-only-bg"></div>
                        <div class="field-row"><label>Academic Qualification</label><input type="text"></div>
                        <div class="field-row"><label>Professional Qualification</label><input type="text"></div>
                    </div>
                    <div>
                        <div class="field-row"><label>Years to Retire</label><input type="text" class="read-only-bg"></div>
                        <div class="field-row"><label>Date Confirmed</label><input type="date"></div>
                        <div class="field-row"><label>Last Promotion Date</label><input type="date"></div>
                        <div class="field-row"><label>Current Rank</label><select><option></option></select></div>
                        <div class="field-row"><label>Specialisation</label><input type="text"></div>
                    </div>
                </div>
            </fieldset>
            <fieldset class="full-width-section">
                <legend>Banking And Finance</legend>
                <div class="finance-grid">
                    <div class="field-row"><label>Bank Name</label><input type="text"></div>
                    <div class="field-row"><label>Bank Branch</label><input type="text"></div>
                    <div class="field-row"><label>Accounts Number</label><input type="text"></div>
                </div>
            </fieldset>
        </div>
    </form>
    <div class="search-container">
        <div class="search-bar">
            <input type="text" placeholder="Search by StaffID, Surname...">
            <button type="button">🔍</button>
        </div>
        <div class="table-responsive">
            <table class="data-table">
                <thead><tr><th>STAFFID</th><th>SURNAME</th><th>PHONENO</th></tr></thead>
                <tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody>
            </table>
        </div>
    </div>
</div>
`;
