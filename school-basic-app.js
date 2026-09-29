document.addEventListener("DOMContentLoaded", () => {
    const mountNode = document.getElementById('school-basic-mount');
    
    if (!mountNode) {
        console.warn("Dynamic anchor hook mount '#school-basic-mount' not present inside active DOM layout hierarchy context.");
        return;
    }

    // =========================================================================
    // 1. TEMPLATE INJECTION: Comprehensive Basic Schools Register Form Layout
    // =========================================================================
    mountNode.innerHTML = `
    <div class="register-container" style="max-width: 1100px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div class="header-title" style="color: #2b579a; font-size: 22px; font-weight: bold; text-align: center; margin-bottom: 20px; text-transform: uppercase;">
            Basic Schools Register Profile
        </div>
        
        <form id="schoolBasicForm">
            <!-- Top Dashboard Action Utility Menu -->
            <div class="top-bar" style="border-bottom: 2px solid #2b579a; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: flex-end; gap: 10px;">
                <button type="button" class="btn" id="btnNew" style="padding: 6px 15px; cursor: pointer; background-color: #f0f4f8; color: #2b579a; border: 1px solid #2b579a; font-weight: bold; border-radius: 4px;">NEW</button>
                <button type="submit" class="btn" id="btnSave" style="padding: 6px 15px; background-color: #2b579a; color: white; border: none; cursor: pointer; font-weight: bold; border-radius: 4px;">💾 SAVE PROFILE</button>
                <button type="button" class="btn" id="btnClear" style="padding: 6px 15px; cursor: pointer; background-color: #fff0f0; color: #d9534f; border: 1px solid #d9534f; font-weight: bold; border-radius: 4px;">CLEAR</button>
                <button type="button" class="btn" onclick="window.location.href='dashboard.html'" style="padding: 6px 15px; background-color: #6c757d; color: white; border: none; cursor: pointer; font-weight: bold; border-radius: 4px;">BACK</button>
            </div>

            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                
                <!-- FIELD BLOCK A: CORE PROFILE INFRASTRUCTURE -->
                <fieldset style="border: 1px solid #ccc; padding: 15px; border-radius: 4px; background: #fafafa;">
                    <legend style="font-weight: bold; color: #2b579a; padding: 0 5px;">School Identity & Hierarchy</legend>
                    
                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">EMIS Code</label>
                        <input type="text" name="EMIS_Code" placeholder="Enter official school EMIS ID" value="1066340072" style="padding:6px;" required>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Name of Institution</label>
                        <input type="text" name="School_Name" placeholder="Official Name of School" value="ABONSUASO M/A JHS" style="padding:6px;" required>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Educational Level Scope</label>
                        <select name="School_Level" style="padding:6px;" required>
                            <option value="JHS ONLY" selected>JHS ONLY</option>
                            <option value="KG ONLY">KG ONLY</option>
                            <option value="PRIMARY ONLY">PRIMARY ONLY</option>
                            <option value="KG + PRIMARY">KG + PRIMARY</option>
                            <option value="ALL BASIC (KG/PRI/JHS)">ALL BASIC (KG/PRI/JHS)</option>
                        </select>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Circuit Area</label>
                        <select name="Circuit" style="padding:6px;" required>
                            <option value="KOJOBETIAKO" selected>KOJOBETIAKO</option>
                            <option value="AKWASIASE">AKWASIASE</option>
                            <option value="ANYINASUSO">ANYINASUSO</option>
                            <option value="DWAAHO">DWAAHO</option>
                            <option value="MANFO">MANFO</option>
                            <option value="SUBRISO">SUBRISO</option>
                            <option value="SUPONSO">SUPONSO</option>
                            <option value="TEPA URBAN A">TEPA URBAN A</option>
                            <option value="TEPA URBAN B">TEPA URBAN B</option>
                            <option value="TWABIDI">TWABIDI</option>
                        </select>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">School Status / Type</label>
                        <select name="School_Status" style="padding:6px;" required>
                            <option value="Public / Government" selected>Public / Government M/A</option>
                            <option value="Private / International">Private / International</option>
                            <option value="Mission Unit (Faith-Based)">Mission Unit (Faith-Based)</option>
                        </select>
                    </div>
                </fieldset>

                <!-- FIELD BLOCK B: LOCATIONAL REGISTRY & GEOLOCATION LINKS -->
                <fieldset style="border: 1px solid #ccc; padding: 15px; border-radius: 4px; background: #fafafa;">
                    <legend style="font-weight: bold; color: #2b579a; padding: 0 5px;">Location & Administration</legend>
                    
                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Region</label>
                        <select name="Region" id="regionSelect" style="padding:6px;" required>
                            <option value="Ashanti" selected>Ashanti Region</option>
                            <option value="Greater Accra">Greater Accra Region</option>
                            <option value="Western">Western Region</option>
                            <option value="Central">Central Region</option>
                            <option value="Eastern">Eastern Region</option>
                        </select>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">District / Municipality</label>
                        <select name="District" id="districtSelect" style="padding:6px;" required>
                            <option value="Ahafo Ano North Municipal" selected>Ahafo Ano North Municipal</option>
                        </select>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Town / Physical Community</label>
                        <input type="text" name="Community_Location" placeholder="e.g. Abonsuaso, Tepa" value="Abonsuaso" style="padding:6px;" required>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Ghana Post GPS Address</label>
                        <input type="text" name="GPS_Address" placeholder="e.g. AN-0024-1983" style="padding:6px;" required>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Headteacher Full Name</label>
                        <input type="text" name="Headteacher_Name" placeholder="Enter Headteacher's Name" style="padding:6px;" required>
                    </div>

                    <div class="field-row" style="margin-bottom:12px; display:flex; flex-direction:column;">
                        <label style="font-size:11px; font-weight:bold; margin-bottom:4px; text-transform:uppercase;">Contact Mobile Phone Number</label>
                        <input type="tel" name="Contact_Number" placeholder="e.g. 024XXXXXXX" style="padding:6px;" required>
                    </div>
                </fieldset>
            </div>
        </form>
    </div>
    `;

    // Initialize local elements reset capabilities
    const form = document.getElementById("schoolBasicForm");
    
    const clearFormAndResetView = () => {
        form.reset();
        if (window.locationDropdownInit) window.locationDropdownInit();
    };

    document.getElementById("btnClear").addEventListener("click", clearFormAndResetView);
document.getElementById("btnNew").addEventListener("click", clearFormAndResetView);
// =========================================================================
// 3. DATABASE TRANSMISSION: Post clean data payloads to Google Sheet
// =========================================================================
form.addEventListener("submit", async (event) => {
event.preventDefault();
const BACKEND_API_URL = "google.com";
const saveBtn = document.getElementById("btnSave");
saveBtn.disabled = true;
saveBtn.innerText = "UPLOADING TO REGISTRY...";
const rawFormData = new FormData(form);
const dataPayload = {};
rawFormData.forEach((value, key) => {
dataPayload[key] = value;
});
const wrappedPackage = {
formType: "BasicSchools", // Direct reference matching your spreadsheet tab name
data: dataPayload
};
try {
const response = await fetch(BACKEND_API_URL, {
method: "POST",
mode: "cors",
headers: { "Content-Type": "text/plain;charset=utf-8" },
body: JSON.stringify(wrappedPackage)
});
const apiResponse = await response.json();
if (apiResponse.result === "success") {
alert(School profile registry for "${dataPayload.School_Name}" logged inside BasicSchools spreadsheet database smoothly!);
clearFormAndResetView();
} else {
alert("Spreadsheet Processing Refusal: " + apiResponse.message);
}
} catch (netException) {
console.error("Transmission exception:", netException);
alert("Network Error: Could not post school profile. Check network access configurations.");
} finally {
saveBtn.disabled = false;
saveBtn.innerText = "💾 SAVE PROFILE";
}
});
});
