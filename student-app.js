document.getElementById('student-mount').innerHTML = `
<div class="register-container">
    <div class="header-title" style="color: #000000;">Student Registration</div>
    
    <form id="studentForm" onsubmit="event.preventDefault();">
        <!-- Top Operations Bar -->
        <div class="top-bar" style="border-color: #00a2e8;">
            <div class="action-buttons">
                <button type="submit" class="btn btn-save-s" onclick="alert('Student record saved successfully!')">SAVE</button>
                <button type="button" class="btn btn-new-s" onclick="document.getElementById('studentForm').reset()">NEW</button>
                <button type="button" class="btn btn-delete-s" onclick="alert('Student record deleted!')">DELETE</button>
                <button type="button" class="btn btn-update-s" onclick="alert('Student record updated!')">UPDATE</button>
                <button type="button" class="btn btn-clear-s" onclick="document.getElementById('studentForm').reset()">CLEAR</button>
                <button type="button" class="btn btn-back-s" onclick="window.location.href='dashboard.html'">BACK</button>
            </div>
        </div>

        <div class="form-grid">
            <!-- Box 1: Student Details -->
            <fieldset style="border-color: #22b14c;">
                <legend style="color: #22b14c;">STUDENT DETAILS</legend>
                <div class="field-row"><label>STUDENTID</label><input type="text" placeholder="e.g. 05090010..."></div>
                <div class="field-row"><label>SURNAME</label><input type="text" placeholder="e.g. ASAMO"></div>
                <div class="field-row"><label>OTHER NAME</label><input type="text" placeholder="e.g. EMMANUEL"></div>
                <div class="field-row"><label>DATE OF BIRTH</label><input type="date"></div>
                <div class="field-row"><label>AGE</label><input type="text" class="read-only-bg" placeholder="e.g. 16"></div>
                <div class="field-row">
                    <label>SEX</label>
                    <select><option></option><option>BOY</option><option>GIRL</option></select>
                </div>
                <div class="field-row"><label>HOMETOWN</label><input type="text" value="TEPA"></div>
                <div class="field-row">
                    <label>CLASS</label>
                    <select><option></option><option selected>JHS 3</option><option>JHS 2</option><option>JHS 1</option></select>
                </div>
                <div class="field-row">
                    <label>STUDENT STATUS</label>
                    <select><option></option><option selected>ACTIVE</option><option>INACTIVE</option></select>
                </div>
                <div class="field-row"><label>SCHOOL POSITION</label><input type="text" value="N/A"></div>
            </fieldset>

            <!-- Box 2: BECE Registration Details -->
            <fieldset style="border-color: #b5e61d;">
                <legend style="color: #b5e61d;">BECE REGISTRATION</legend>
                <div class="field-row"><label>SCHOOL NUMBER</label><input type="text" value="05090010"></div>
                <div class="field-row"><label>SCHOOL NAME</label><input type="text" placeholder="Enter school name"></div>
                <div class="field-row"><label>CENTRE NUMBER</label><input type="text" value="05135"></div>
                <div class="field-row"><label>EXAM YEAR</label><input type="text" value="2027"></div>
                <div class="field-row">
                    <label>OPTIONAL SUBJECT 1</label>
                    <select><option></option><option selected>FRENCH</option><option>ICT</option></select>
                </div>
                <div class="field-row">
                    <label>OPTIONAL SUBJECT 2</label>
                    <select><option></option><option selected>ARABIC</option><option>NONE</option></select>
                </div>
                <div class="field-row">
                    <label>GHANAIAN LANGUAGE</label>
                    <select><option></option><option selected>ASANTI TWI</option><option>AKUAPEM TWI</option><option>FANTE</option></select>
                </div>
            </fieldset>

            <!-- Box 3: Guardian Information -->
            <fieldset style="border-color: #ffc90e;">
                <legend style="color: #ffc90e;">GUARDIAN INFORMATION</legend>
                <div class="field-row"><label>GUARDIAN NAME</label><input type="text" placeholder="e.g. AKOSUA MOTHEY"></div>
                <div class="field-row"><label>RELATIONSHIP</label><input type="text" placeholder="e.g. MOTHER"></div>
                <div class="field-row"><label>OCCUPATION</label><input type="text" placeholder="e.g. TRADER"></div>
                <div class="field-row"><label>TELEPHONE NUMBER</label><input type="tel" value="02452200XX"></div>
                <div class="field-row"><label>CITY/TOWN</label><input type="text" value="TEPA"></div>
                <div class="field-row">
                    <label>REGION</label>
                    <select><option></option><option selected>ASHANTI</option></select>
                </div>
                <div class="field-row">
                    <label>DISTRICT</label>
                    <select><option></option><option selected>AHAFO ANO NORTH</option></select>
                </div>
                <div class="field-row"><label>ADDRESS</label><input type="text" placeholder="Enter street or postal address"></div>
            </fieldset>
        </div>
    </form>

    <!-- Bottom Data Grid Section -->
    <div class="search-container">
        <div class="search-bar">
            <label style="font-size: 12px; font-weight: bold; color: #ed1c24;">Search by SURNAME </label>
            <input type="text" placeholder="Type student surname to search...">
        </div>
        <div class="table-responsive">
            <table class="data-table student-table">
                <thead>
                    <tr>
                        <th>StudentID</th>
                        <th>SurName</th>
                        <th>OtherName</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Optional1</th>
                        <th>Optional2</th>
                        <th>GhLanguage</th>
                        <th>HomeTown</th>
                        <th>StudentClass</th>
                        <th>Status</th>
                        <th>Position</th>
                        <th>GuardianName</th>
                        <th>Relationship</th>
                        <th>Occupation</th>
                        <th>TelNum</th>
                        <th>City</th>
                        <th>District</th>
                        <th>Region</th>
                        <th>SchoolNo</th>
                        <th>SchoolName</th>
                        <th>CentreNo</th>
                        <th>ExamYear</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>ASAMO</td>
                        <td>EMMANUEL</td>
                        <td>08/07/2010</td>
                        <td>16</td>
                        <td>BOY</td>
                        <td>FRENCH</td>
                        <td>ARABIC</td>
                        <td>ASANTI</td>
                        <td>TEPA</td>
                        <td>JHS 3</td>
                        <td>ACTIVE</td>
                        <td>N/A</td>
                        <td>AKOSUA MOTHEY</td>
                        <td>MOTHER</td>
                        <td>TRADER</td>
                        <td>02452200XX</td>
                        <td>TEPA</td>
                        <td>66</td>
                        <td>2</td>
                        <td>05090010</td>
                        <td>05090010</td>
                        <td>05135</td>
                        <td>2027</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;
