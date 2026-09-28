// =========================================================================
// 1. ANCHOR HOOK: Wait safely for DOM elements before loading templates
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const mountNode = document.getElementById('enrolment-mount');
    
    if (!mountNode) {
        console.warn("Mount point '#enrolment-mount' not present on this page view layout context.");
        return; // Exits safely without throwing an exception or breaking the dashboard render
    }

    // =========================================================================
    // 2. TEMPLATE INJECTION: Render the exact visual layout with data parameters
    // =========================================================================
    mountNode.innerHTML = `
    <div class="register-container" style="max-width: 1100px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div class="header-title" style="color: #2b579a; font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 20px;">
            GES AHAFO ANO NORTH - MASTER ENROLMENT FORM
        </div>
        
        <form id="enrolmentForm">
            <!-- Top Operations Bar -->
            <div class="top-bar" style="border-bottom: 2px solid #2b579a; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                <div class="action-buttons">
                    <button type="button" class="btn" id="btnNew" style="padding: 6px 15px; margin-right: 5px;">NEW</button>
                    <button type="submit" class="btn" id="btnSave" style="padding: 6px 15px; margin-right: 5px; background-color: #2b579a; color: white; border: none; cursor: pointer; font-weight: bold;">SAVE</button>
                    <button type="button" class="btn" id="btnClear" style="padding: 6px 15px; margin-right: 5px;">CLEAR</button>
                    <button type="button" class="btn" onclick="window.location.href='dashboard.html'" style="padding: 6px 15px;">BACK</button>
                </div>
            </div>

            <!-- Academic Headers Box -->
            <fieldset style="border: 1px solid #ccc; margin-bottom: 20px; padding: 15px; border-radius: 4px;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 15px;">
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">Academic Year</label>
                        <select name="Academic_Year" style="width:100%; padding:5px;"><option value="2026/2027" selected>2026/2027</option></select>
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">Academic Term</label>
                        <select name="Academic_Term" style="width:100%; padding:5px;"><option value="Term 1" selected>Term 1</option><option value="Term 2">Term 2</option><option value="Term 3">Term 3</option></select>
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; color:red; margin-bottom:4px;">Select Level</label>
                        <select name="Selected_Level" style="width:100%; padding:5px;"><option value="KG ONLY">KG ONLY</option><option value="PRIMARY ONLY">PRIMARY ONLY</option><option value="JHS ONLY">JHS ONLY</option><option value="ALL BASIC" selected>ALL BASIC</option></select>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">EMIS Code</label>
                        <input type="text" name="EMIS_Code" value="1066340072" style="width:100%; padding:5px;" required>
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">Circuit</label>
                        <input type="text" name="Circuit" value="KOJOBETIAKO" style="width:100%; padding:5px;" required>
                    </div>
                    <div>
                        <label style="display:block; font-size:12px; font-weight:bold; margin-bottom:4px;">Name of School</label>
                        <input type="text" name="School_Name" value="ABONSUASO M/A JHS" style="width:100%; padding:5px;" required>
                    </div>
                </div>
            </fieldset>

            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <!-- Box 1: KG Enrolment -->
                <fieldset style="border: 2px solid #b5e61d; padding: 15px; border-radius: 4px;">
                    <legend style="color: #22b14c; font-weight: bold; padding: 0 5px;">KG ENROLMENT</legend>
                    
                    <div style="margin-bottom: 15px;">
                        <label style="font-weight: bold; font-size: 13px; display: block; margin-bottom: 5px;">KG 1 Boys / Girls</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="number" name="KG1_Boys" id="kg1_b" value="0" min="0" style="width: 70px; text-align: center; padding:4px;">
                            <input type="number" name="KG1_Girls" id="kg1_g" value="0" min="0" style="width: 70px; text-align: center; padding:4px;">
                            <span style="font-size:12px; font-weight:bold;">Total:</span>
                            <input type="text" id="kg1_t" value="0" readonly style="width: 70px; text-align: center; background: #eee; border: 1px solid #ccc; padding:4px;">
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <label style="font-weight: bold; font-size: 13px; display: block; margin-bottom: 5px;">KG 2 Boys / Girls</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="number" name="KG2_Boys" id="kg2_b" value="0" min="0" style="width: 70px; text-align: center; padding:4px;">
                            <input type="number" name="KG2_Girls" id="kg2_g" value="0" min="0" style="width: 70px; text-align: center; padding:4px;">
                            <span style="font-size:12px; font-weight:bold;">Total:</span>
                            <input type="text" id="kg2_t" value="0" readonly style="width: 70px; text-align: center; background: #eee; border: 1px solid #ccc; padding:4px;">
                        </div>
                    </div>

                    <div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px;">
                        <label style="font-weight: bold; font-size: 13px; display: block; margin-bottom: 5px; color: #22b14c;">KG GRAND TOTAL</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="text" name="KG_Total_Boys" id="kg_gt_b" value="0" readonly style="width: 70px; text-align: center; background: #eee; border: 1px solid #ccc; padding:4px;">
                            <input type="text" name="KG_Total_Girls" id="kg_gt_g" value="0" readonly style="width: 70px; text-align: center; background: #eee; border: 1px solid #ccc; padding:4px;">
                            <input type="text" name="KG_Grand_Total" id="kg_gt" value="0" readonly style="width: 80px; text-align: center; background-color: #fff3cd !important; border: 1px solid #ccc; font-weight: bold; padding:4px;">
                        </div>
                    </div>
                </fieldset>

                <!-- Box 2: Primary Enrolment -->
                <fieldset style="border: 2px solid #ffc90e; padding: 15px; border-radius: 4px;">
                    <legend style="color: #ffc90e; font-weight: bold; padding: 0 5px;">PRIMARY ENROLMENT</legend>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div><label style="font-size:12px;">Primary 1 Total</label> <input type="number" name="P1_Total" id="p1" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                        <div><label style="font-size:12px;">Primary 2 Total</label> <input type="number" name="P2_Total" id="p2" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                        <div><label style="font-size:12px;">Primary 3 Total</label> <input type="number" name="P3_Total" id="p3" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                        <div><label style="font-size:12px;">Primary 4 Total</label> <input type="number" name="P4_Total" id="p4" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                        <div><label style="font-size:12px;">Primary 5 Total</label> <input type="number" name="P5_Total" id="p5" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                        <div><label style="font-size:12px;">Primary 6 Total</label> <input type="number" name="P6_Total" id="p6" value="0" min="0" style="width:80px; display:block; margin-top:3px; padding:4px;"></div>
                    </div>
                    <div style="margin-top: 25px; border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <label style="font-weight: bold; font-size: 13px; color: #ffc90e;">PRIMARY GRAND TOTAL</label>
                        <input type="text" name="Primary_Grand_Total" id="primary_gt" value="0" readonly style="width: 100px; background-color: #fff3cd !important; text-align: center; font-weight: bold; border: 1px solid #ccc; padding:4px;">
                    </div>
                </fieldset>

                <fieldset style="border: 2px solid #000000; grid-column: span 2; padding: 15px; border-radius: 4px;">
                    <legend style="color: #333333; font-weight: bold; padding: 0 5px;">JHS ENROLMENT</legend>
                    <div style="display: flex; gap: 30px; margin-bottom: 10px;">
                        <div><label style="font-size:12px; margin-right:5px;">JHS 1 Total</label><input type="number" name="JHS1_Total" id="jhs1" value="0" min="0" style="width:80px; padding:4px;"></div>
                        <div><label style="font-size:12px; margin-right:5px;">JHS 2 Total</label><input type="number" name="JHS2_Total" id="jhs2" value="0" min="0" style="width:80px; padding:4px;"></div>
                        <div><label style="font-size:12px; margin-right:5px;">JHS 3 Total</label><input type="number" name="JHS3_Total" id="jhs3" value="0" min="0" style="width:80px; padding:4px;"></div>
                    </div>
                    <div style="border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <label style="font-weight: bold; font-size: 13px;">JHS GRAND TOTAL</label>
                        <input type="text" name="JHS_Grand_Total" id="jhs_gt" value="0" readonly style="width: 100px; background-color: #fff3cd !important; text-align: center; font-weight: bold; border: 1px solid #ccc; padding:4px;">
                    </div>
                </fieldset>
            </div>
            
            <div class="search-container" style="margin-top:20px; background:#f9f9f9; padding:10px; border:1px solid #ddd;">
                <div class="search-bar" style="display:flex; align-items:center; gap:10px;">
                    <label style="font-size: 12px; font-weight: bold; color: #333;">Search Database Log by EMIS CODE:</label>
                    <input type="text" placeholder="Type EMIS code to query log records..." style="padding:4px; flex-grow:1;">
                    <button type="button" style="cursor:pointer; padding:4px 10px;">🔍 Run Search</button>
                </div>
            </div>
        </form>
    </div>
    `;

    // =========================================================================
    // 3. COMPUTATION ENGINE: Listen to values in real-time
    // =========================================================================
    const form = document.getElementById("enrolmentForm");
    
    const calculateLiveTotals = () => {
        const getNum = (id) => parseInt(document.getElementById(id).value, 10) || 0;
        
        // 1. Calculate Single KG Levels and Grand Totals
        const k1b = getNum("kg1_b"), k1g = getNum("kg1_g");
        const k2b = getNum("kg2_b"), k2g = getNum("kg2_g");
        
        document.getElementById("kg1_t").value = k1b + k1g;
        document.getElementById("kg2_t").value = k2b + k2g;
        
        const totalKGBoys = k1b + k2b;
        const totalKGGirls = k1g + k2g;
        document.getElementById("kg_gt_b").value = totalKGBoys;
        document.getElementById("kg_gt_g").value = totalKGGirls;
        document.getElementById("kg_gt").value = totalKGBoys + totalKGGirls;

        // 2. Calculate Primary Level Rows and Grand Totals
        let primTotal = 0;
        for (let i = 1; i <= 6; i++) {
            primTotal += getNum(`p${i}`);
        }
        document.getElementById("primary_gt").value = primTotal;

        // 3. Calculate JHS Levels and Grand Totals
        const j1 = getNum("jhs1"), j2 = getNum("jhs2"), j3 = getNum("jhs3");
        document.getElementById("jhs_gt").value = j1 + j2 + j3;
    };

    // Attach real-time structural calculator event pipeline
    form.addEventListener("input", calculateLiveTotals);

    // Operational Clear Action listeners
    const clearFormAndResetTotals = () => {
        form.reset();
        calculateLiveTotals();
    };
    document.getElementById("btnClear").addEventListener("click", clearFormAndResetTotals);
    document.getElementById("btnNew").addEventListener("click", clearFormAndResetTotals);

    // =========================================================================
    // 4. DATABASE TRANSMISSION: Intercept submission and forward to Google Sheet
    // =========================================================================
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const APP_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_MACRO_ID_HERE/exec";
        const saveButton = document.getElementById("btnSave");
        saveButton.disabled = true;
        saveButton.innerText = "UPLOADING...";

        const rawData = new FormData(form);
        const payloadData = {};
        rawData.forEach((value, key) => {
            payloadData[key] = value;
        });

        const payload = {
            formType: "Enrolment",
            data: payloadData
        };

        try {
            const response = await fetch(APP_SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.result === "success") {
                alert("Data package written into GES Master Spreadsheet successfully!");
                clearFormAndResetTotals();
            } else {
                alert("Spreadsheet error: " + result.message);
            }
        } catch (err) {
            console.error("Network Error: ", err);
            alert("Network Error: Could not post to Google Web App deployment API endpoint. Verify your macro link URL status.");
        } finally {
            saveButton.disabled = false;
            saveButton.innerText = "SAVE";
        }
    });
});
