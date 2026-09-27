document.getElementById('ges-desktop-app').innerHTML = `
<div class="register-container">
    <div class="header-title" style="color: #2b579a !important;">Staff Register Compiling</div>
    
    <div class="progress-container">
        <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
        <div class="progress-text">
            <span style="color: #666666 !important;">Form Completion Progress</span>
            <span id="progressPercent" style="color: #d9534f !important; font-weight: bold;">0% Complete</span>
        </div>
    </div>
    
    <form id="staffForm">
        <div class="top-bar" style="border-color: #cccccc;">
            <div class="action-buttons">
                <button type="submit" class="btn" style="background-color: #22b14c;">SAVE RECORD</button>
                <button type="button" class="btn" style="background-color: #777777;" onclick="window.location.href='dashboard.html'">BACK</button>
            </div>
        </div>

        <div class="form-grid">
            <!-- 1. PERSONAL INFORMATION -->
            <fieldset>
                <legend style="font-weight: bold; color: #d9534f !important; padding: 0 6px;">Personal Information</legend>
                <div class="field-row"><label>TEACHER ID</label><input type="text" name="teacherId" required class="track-input"></div>
                <div class="field-row">
                    <label>TITLE</label>
                    <select name="title" required class="track-input">
                        <option value="" disabled selected>-- Select Title --</option>
                        <option value="Mr.">Mr.</option><option value="Mrs.">Mrs.</option><option value="Ms.">Ms.</option><option value="Dr.">Dr.</option>
                    </select>
                </div>
                <div class="field-row"><label>SURNAME</label><input type="text" name="surname" required class="track-input"></div>
                <div class="field-row"><label>OTHER NAMES</label><input type="text" name="otherNames" required class="track-input"></div>
                <div class="field-row">
                    <label>GENDER</label>
                    <select name="gender" required class="track-input">
                        <option value="" disabled selected>-- Select Gender --</option><option value="Male">Male</option><option value="Female">Female</option>
                    </select>
                </div>
                <div class="field-row"><label>DATE OF BIRTH</label><input type="date" name="dob" id="dobField" required class="track-input"></div>
                <div class="field-row"><label>AGE</label><input type="text" name="age" id="ageField" style="background-color: #eef7ed !important; font-weight: bold;" readonly placeholder="Auto"></div>
                <div class="field-row">
                    <label>RELIGION</label>
                    <select name="religion" required class="track-input">
                        <option value="" disabled selected>-- Select Religion --</option><option value="Christianity">Christianity</option><option value="Islam">Islam</option><option value="Traditional">Traditional</option>
                    </select>
                </div>
            </fieldset>

            <!-- 2. ACADEMIC AND SCHOOL DETAILS -->
            <fieldset>
                <legend style="font-weight: bold; color: #d9534f !important; padding: 0 6px;">Academic And School Details</legend>
                <div class="field-row">
                    <label>CIRCUIT</label>
                    <select name="circuit" required class="track-input">
                        <option value="" disabled selected>-- Select Circuit --</option>
                        <option value="AKWASIASE">AKWASIASE</option><option value="ANYINASUSO">ANYINASUSO</option><option value="DWAAHO">DWAAHO</option><option value="KOJOBETIAKO">KOJOBETIAKO</option><option value="MANFO">MANFO</option><option value="SUBRISO">SUBRISO</option><option value="SUPONSO">SUPONSO</option><option value="TEPA URBAN A">TEPA URBAN A</option><option value="TEPA URBAN B">TEPA URBAN B</option><option value="TWABIDI">TWABIDI</option>
                    </select>
                </div>
                <div class="field-row"><label>NAME OF SCHOOL</label><input type="text" name="schoolName" placeholder="e.g. ABONSUASO M/A JHS" required class="track-input"></div>
                <div class="field-row"><label>ASSOCIATION TYPE</label><input type="text" name="associationType" placeholder="e.g. GNAT" required class="track-input"></div>
                <div class="field-row"><label>STAFF TYPE</label><input type="text" name="staffType" placeholder="e.g. Teaching" required class="track-input"></div>
                <div class="field-row"><label>TRANINIG STATUS</label><input type="text" name="trainingStatus" placeholder="e.g. Trained" required class="track-input"></div>
                <div class="field-row"><label>POSITION</label><input type="text" name="position" placeholder="e.g. Class Teacher" required class="track-input"></div>
                <div class="field-row"><label>LEVEL TAUGHT</label><input type="text" name="levelTaught" placeholder="e.g. JHS" required class="track-input"></div>
                <div class="field-row"><label>CLASS TAUGHT</label><input type="text" name="classTaught" placeholder="e.g. JHS 2" required class="track-input"></div>
                <div class="field-row"><label>SUBJECT TAUGHT</label><input type="text" name="subjectTaught" placeholder="e.g. Science" required class="track-input"></div>
            </fieldset>

            <!-- 3. CONTACT AND LOCATION DETAILS -->
            <fieldset class="full-width-section">
                <legend style="font-weight: bold; color: #d9534f !important; padding: 0 6px;">Contact And Location Details</legend>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div class="field-row"><label>NATIONALITY</label><input type="text" name="nationality" value="Ghanaian" required class="track-input"></div>
                        <div class="field-row"><label>HOMETOWN</label><input type="text" name="hometown" required class="track-input"></div>
                        <div class="field-row"><label>REGION</label><input type="text" name="region" value="Ashanti" required class="track-input"></div>
                    </div>
                    <div>
                        <div class="field-row"><label>DISTRICT</label><input type="text" name="district" value="Ahafo Ano North" required class="track-input"></div>
                        <div class="field-row"><label>GPS ADDRESS</label><input type="text" name="gpsAddress" placeholder="AN-XXXX-XXXX" required class="track-input"></div>
                        <div class="field-row"><label>E-MAIL</label><input type="email" name="email" placeholder="name@domain.com" class="track-input"></div>
                        <div class="field-row"><label>TELEPHONE NUMBER</label><input type="tel" name="telephone" maxlength="10" placeholder="024XXXXXXX" required class="track-input"></div>
                    </div>
                </div>
            </fieldset>

            <!-- 4. EMPLOYMENT AND QUALIFICATION -->
            <fieldset class="full-width-section">
                <legend style="font-weight: bold; color: #d9534f !important; padding: 0 6px;">Employment and Qualification</legend>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                    <div>
                        <div class="field-row"><label>FILE NUMBER</label><input type="text" name="fileNumber" required class="track-input"></div>
                        <div class="field-row"><label>STAFF ID</label><input type="text" name="staffId" required class="track-input"></div>
                        <div class="field-row"><label>REGISTERED NO.</label><input type="text" name="registeredNo" required class="track-input"></div>
                        <div class="field-row"><label>SSNIT NUMBER</label><input type="text" name="ssnitNumber" required class="track-input"></div>
                        <div class="field-row"><label>TIN NUMBER</label><input type="text" name="tinNumber" required class="track-input"></div>
                        <div class="field-row"><label>ID TYPE</label><input type="text" name="idType" value="Ghana Card" required class="track-input"></div>
                    </div>
                    <div>
                        <div class="field-row"><label>ID NUMBER</label><input type="text" name="idNumber" placeholder="GHA-XXXXXXXXX-X" required class="track-input"></div>
                        <div class="field-row"><label>RETIREMENT STATUS</label><input type="text" name="retirementStatus" id="retireStatusField" style="background-color: #eef7ed !important; font-weight: bold;" readonly placeholder="Auto"></div>
                        <div class="field-row"><label>DATE OF FIRST APPOINTMENT</label><input type="date" name="dateFirstAppointment" id="apptField" required class="track-input"></div>
                        <div class="field-row"><label>YEARS IN SERVICE</label><input type="text" name="yearsInService" id="serviceField" style="background-color: #eef7ed !important; font-weight: bold;" readonly placeholder="Auto"></div>
                        <div class="field-row"><label>ACADEMIC QUALIFICATION</label><input type="text" name="academicQualification" required class="track-input"></div>
                    </div>
                    <div>
                        <div class="field-row"><label>PROFESSIONAL QUALIFICATION</label><input type="text" name="professionalQualification" required class="track-input"></div>
                        <div class="field-row"><label>YEARS TO RETIRED</label><input type="text" name="yearsToRetire" id="yearsToRetireField" style="background-color: #eef7ed !important; font-weight: bold;" readonly placeholder="Auto"></div>
