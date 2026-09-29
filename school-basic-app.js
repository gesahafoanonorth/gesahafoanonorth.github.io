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

        const BACKEND_API_URL = "https://google.com";
        const saveBtn = document.getElementById("btnSave");

        saveBtn.disabled = true;
        saveBtn.innerText = "UPLOADING TO REGISTRY...";

        const rawFormData = new FormData(form);
        const dataPayload = {};
        rawFormData.forEach((value, key) => {
            dataPayload[key] = value;
        });

        const wrappedPackage = {
            formType: "BasicSchools", // Direct mapping key targeting your master workbook tab
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
                alert(`School profile registry for "${dataPayload.School_Name}" logged inside BasicSchools spreadsheet database smoothly!`);
                clearFormAndResetView();
            } else {
                alert("Spreadsheet Processing Refusal: " + apiResponse.message);
            }
        } catch (netException) {
            console.error("Transmission exception details:", netException);
            alert("Network Error: Handshake failed. Confirm connection status.");
        } finally {
            saveBtn.disabled = false;
            saveBtn.innerText = "💾 SAVE PROFILE";
        }
    });
});
