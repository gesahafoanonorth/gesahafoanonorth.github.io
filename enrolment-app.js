document.addEventListener("DOMContentLoaded", () => {
    const mountNode = document.getElementById('enrolment-mount');
    if (!mountNode) {
        console.warn("Mount point '#enrolment-mount' not found.");
        return;
    }

    // =========================================================================
    // 1. TEMPLATE INJECTION: Full Gender Segregation Layout
    // =========================================================================
    mountNode.innerHTML = `
    <div class="register-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
        <div class="header-title" style="color: #2b579a; font-size: 22px; font-weight: bold; text-align: center; margin-bottom: 20px; text-transform: uppercase;">
            Basic School Enrolment Log
        </div>
        <form id="enrolmentForm">
            <div class="top-bar" style="border-bottom: 2px solid #2b579a; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: flex-end; gap: 10px;">
                <button type="button" class="btn" id="btnNew" style="padding: 6px 15px; background-color: #f0f4f8; color: #2b579a; border: 1px solid #2b579a; font-weight: bold; border-radius: 4px; cursor: pointer;">NEW</button>
                <button type="submit" class="btn" id="btnSave" style="padding: 6px 15px; background-color: #2b2b2b; color: white; border: none; font-weight: bold; border-radius: 4px; cursor: pointer;">SUBMIT</button>
                <button type="button" class="btn" id="btnClear" style="padding: 6px 15px; background-color: #fff0f0; color: #d9534f; border: 1px solid #d9534f; font-weight: bold; border-radius: 4px; cursor: pointer;">CLEAR</button>
                <button type="button" class="btn" onclick="window.location.href='dashboard.html'" style="padding: 6px 15px; background-color: #6c757d; color: white; border: none; font-weight: bold; border-radius: 4px; cursor: pointer;">BACK</button>
            </div>
            <fieldset style="border: 1px solid #ccc; margin-bottom: 20px; padding: 15px; background: #fafafa; border-radius: 4px;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 15px;">
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">ACADEMIC YEAR</label><select name="Academic_Year" style="width:100%; padding:5px;"><option value="Select Year">Select Year</option><option value="Term 1">Term 1</option><option value="Term 2">Term 2</option><option value="Term 3">Term 3</option></select></div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">ACADEMIC TERM</label><select name="Academic_Term" style="width:100%; padding:5px;"><option value="Select Term">Select Term</option><option value="Term 1">Term 1</option><option value="Term 2">Term 2</option><option value="Term 3">Term 3</option></select></div>
                    <div>
                        <label style="display:block; font-size:11px; font-weight:bold; color:red; margin-bottom:4px;">SELECT LEVEL</label>
                        <select name="Selected_Level" id="select_level" style="width:100%; padding:5px;">
                            <option value="Select Level" selected>Select Level</option>
                            <option value="KG ONLY">KG ONLY</option>
                            <option value="PRIMARY ONLY">PRIMARY ONLY</option>
                            <option value="JHS ONLY">JHS ONLY</option>
                            <option value="KG AND PRIMARY">KG AND PRIMARY</option>
                            <option value="PRIMARY AND JHS">PRIMARY AND JHS</option>
                            <option value="KG, PRIMARY AND JHS">KG, PRIMARY AND JHS</option>
                        </select>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">EMIS CODE</label><input type="text" name="EMIS_Code" value="" style="width:100%; padding:5px;"></div>
                    <div>
                        <label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">CIRCUIT</label>
                        <select name="Circuit" style="width:100%; padding:5px;">
                            <option value="Select Circuit" selected>Select Circuit</option>
                            <option value="AKWASIASE">AKWASIASE</option>
                            <option value="ANYINASUSO">ANYINASUSO</option>
                            <option value="DWAAHO">DWAAHO</option>
                            <option value="KOJOBETIAKO">KOJOBETIAKO</option>
                            <option value="MANFO">MANFO</option>
                            <option value="SUBRISO">SUBRISO</option>
                            <option value="SUPONSO">SUPONSO</option>
                            <option value="TEPA URBAN A">TEPA URBAN A</option>
                            <option value="TEPA URBAN B">TEPA URBAN B</option>
                            <option value="TWABIDI">TWABIDI</option>
                        </select>
                    </div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">NAME OF SCHOOL</label><input type="text" name="School_Name" value="" style="width:100%; padding:5px;"></div>
                </div>
            </fieldset>
            
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr; gap: 20px;">
                <!-- KG Section -->
                <fieldset id="kg_fieldset" style="border: 2px solid #b5e61d; padding: 15px; border-radius: 4px;">
                    <legend style="color: #22b14c; font-weight: bold; padding: 0 5px;">KG ENROLMENT</legend>
                    <table style="width:100%; text-align:center; font-size:12px; border-collapse: collapse;">
                        <tr style="background:#f0f0f0; height:30px;"><th>LEVEL</th><th>BOYS</th><th>GIRLS</th><th>TOTAL</th></tr>
                        <tr><td><b>KG 1</b></td><td><input type="number" name="KG1_Boys" id="kg1_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="KG1_Girls" id="kg1_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="kg1_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>KG 2</b></td><td><input type="number" name="KG2_Boys" id="kg2_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="KG2_Girls" id="kg2_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="kg2_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr style="background:#eaf8dd; font-weight:bold; height:35px; border-top:1px solid #ccc;"><td>KG GRAND TOTAL</td><td><input type="text" id="kg_gt_b" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="kg_gt_g" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="kg_gt" readonly style="width:80px; text-align:center; background:#fff3cd; border:1px solid #ccc;"></td></tr>
                    </table>
                </fieldset>

                <!-- Primary Section -->
                <fieldset id="primary_fieldset" style="border: 2px solid #ffc90e; padding: 15px; border-radius: 4px;">
                    <legend style="color: #ffc90e; font-weight: bold; padding: 0 5px;">PRIMARY ENROLMENT</legend>
                    <table style="width:100%; text-align:center; font-size:12px; border-collapse: collapse;">
                        <tr style="background:#f0f0f0; height:30px;"><th>LEVEL</th><th>BOYS</th><th>GIRLS</th><th>TOTAL</th></tr>
                        <tr><td><b>PRIMARY 1</b></td><td><input type="number" name="P1_Boys" id="p1_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P1_Girls" id="p1_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p1_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 2</b></td><td><input type="number" name="P2_Boys" id="p2_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P2_Girls" id="p2_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p2_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 3</b></td><td><input type="number" name="P3_Boys" id="p3_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P3_Girls" id="p3_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p3_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 4</b></td><td><input type="number" name="P4_Boys" id="p4_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P4_Girls" id="p4_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p4_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 5</b></td><td><input type="number" name="P5_Boys" id="p5_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P5_Girls" id="p5_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p5_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 6</b></td><td><input type="number" name="P6_Boys" id="p6_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P6_Girls" id="p6_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p6_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr style="background:#fff9e6; font-weight:bold; height:35px; border-top:1px solid #ccc;"><td>PRIMARY GRAND TOTAL</td><td><input type="text" id="primary_gt_b" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="primary_gt_g" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="primary_gt" readonly style="width:80px; text-align:center; background:#fff3cd; border:1px solid #ccc;"></td></tr>
                    </table>
                </fieldset>

                <fieldset id="jhs_fieldset" style="border: 2px solid #000000; padding: 15px; border-radius: 4px;">
                    <legend style="color: #333; font-weight: bold; padding: 0 5px;">JHS ENROLMENT</legend>
                    <table style="width:100%; text-align:center; font-size:12px; border-collapse: collapse;">
                        <tr style="background:#f0f0f0; height:30px;"><th>LEVEL</th><th>BOYS</th><th>GIRLS</th><th>TOTAL</th></tr>
                        <tr><td><b>JHS 1</b></td><td><input type="number" name="JHS1_Boys" id="jhs1_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="JHS1_Girls" id="jhs1_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="jhs1_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>JHS 2</b></td><td><input type="number" name="JHS2_Boys" id="jhs2_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="JHS2_Girls" id="jhs2_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="jhs2_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>JHS 3</b></td><td><input type="number" name="JHS3_Boys" id="jhs3_b" value="0" style="width:80px; text-align:center;"></td><td><input type="number" name="JHS3_Girls" id="jhs3_g" value="0" style="width:80px; text-align:center;"></td><td><input type="text" id="jhs3_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr style="background:#f2f2f2; font-weight:bold; height:35px; border-top:1px solid #ccc;"><td>JHS GRAND TOTAL</td><td><input type="text" id="jhs_gt_b" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="jhs_gt_g" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td><td><input type="text" id="jhs_gt" readonly style="width:80px; text-align:center; background:#fff3cd; border:1px solid #ccc;"></td></tr>
                    </table>
                </fieldset>
            </div>
        </form>
    </div>
    `;

    // =========================================================================
    // 2. LIVE CALCULATOR ENGINE & DYNAMIC VISIBILITY
    // =========================================================================
    const form = document.getElementById("enrolmentForm");
    const levelSelect = document.getElementById("select_level");
    
    const kgFieldset = document.getElementById("kg_fieldset");
    const primaryFieldset = document.getElementById("primary_fieldset");
    const jhsFieldset = document.getElementById("jhs_fieldset");

    // Dynamic show/hide sections engine
    const toggleSectionsByLevel = () => {
        const val = levelSelect.value;
        
        // Show everything by default
        kgFieldset.style.display = "block";
        primaryFieldset.style.display = "block";
        jhsFieldset.style.display = "block";

        if (val === "KG ONLY") {
            primaryFieldset.style.display = "none";
            jhsFieldset.style.display = "none";
        } else if (val === "PRIMARY ONLY") {
            kgFieldset.style.display = "none";
            jhsFieldset.style.display = "none";
        } else if (val === "JHS ONLY") {
            kgFieldset.style.display = "none";
            primaryFieldset.style.display = "none";
        } else if (val === "KG AND PRIMARY") {
            jhsFieldset.style.display = "none";
        } else if (val === "PRIMARY AND JHS") {
            kgFieldset.style.display = "none";
        }
    };

    levelSelect.addEventListener("change", toggleSectionsByLevel);

    const calculateLiveTotals = () => {
        const getNum = (id) => parseInt(document.getElementById(id).value, 10) || 0;
        
        // KG Calculations
        const k1b = getNum("kg1_b"), k1g = getNum("kg1_g");
        const k2b = getNum("kg2_b"), k2g = getNum("kg2_g");
        
        document.getElementById("kg1_t").value = k1b + k1g;
        document.getElementById("kg2_t").value = k2b + k2g;
        
        const kgTotalBoys = k1b + k2b;
        const kgTotalGirls = k1g + k2g;
        document.getElementById("kg_gt_b").value = kgTotalBoys;
        document.getElementById("kg_gt_g").value = kgTotalGirls;
        document.getElementById("kg_gt").value = kgTotalBoys + kgTotalGirls;

        // Primary Calculations
        let primTotalBoys = 0;
        let primTotalGirls = 0;
        for (let i = 1; i <= 6; i++) {
            const pb = getNum(`p${i}_b`);
            const pg = getNum(`p${i}_g`);
            document.getElementById(`p${i}_t`).value = pb + pg;
            primTotalBoys += pb;
            primTotalGirls += pg;
        }
        document.getElementById("primary_gt_b").value = primTotalBoys;
        document.getElementById("primary_gt_g").value = primTotalGirls;
        document.getElementById("primary_gt").value = primTotalBoys + primTotalGirls;

        // JHS Calculations
        let jhsTotalBoys = 0;
        let jhsTotalGirls = 0;
        for (let i = 1; i <= 3; i++) {
            const jb = getNum(`jhs${i}_b`);
            const jg = getNum(`jhs${i}_g`);
            document.getElementById(`jhs${i}_t`).value = jb + jg;
            jhsTotalBoys += jb;
            jhsTotalGirls += jg;
        }
        document.getElementById("jhs_gt_b").value = jhsTotalBoys;
        document.getElementById("jhs_gt_g").value = jhsTotalGirls;
        document.getElementById("jhs_gt").value = jhsTotalBoys + jhsTotalGirls;
    };

    // Initialization run setups
    calculateLiveTotals();
    toggleSectionsByLevel();

    form.addEventListener("input", calculateLiveTotals);

    const clearFormAndResetTotals = () => {
        form.reset();
        calculateLiveTotals();
        toggleSectionsByLevel();
    };
    document.getElementById("btnClear").addEventListener("click", clearFormAndResetTotals);
    document.getElementById("btnNew").addEventListener("click", clearFormAndResetTotals);

    // =========================================================================
    // 3. SECURE DATABASE TRANSMISSION (POST)
    // =========================================================================
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const APP_SCRIPT_URL = "https://script.google.com/macros/library/d/1zdsNU_n1STrWGKR5juFQ1QfpFqDRv3FFlEyHbQ7W4456qOpp744EqTvT/9";
        const saveButton = document.getElementById("btnSave");
        
        saveButton.disabled = true;
        saveButton.innerText = "SAVING...";

        const rawData = new FormData(form);
        const payloadData = {};
        rawData.forEach((value, key) => {
            payloadData[key] = value;
        });

        // Pack calculated sub-totals into payload properties
        payloadData["KG_Total_Boys"] = document.getElementById("kg_gt_b").value;
        payloadData["KG_Total_Girls"] = document.getElementById("kg_gt_g").value;
        payloadData["KG_Grand_Total"] = document.getElementById("kg_gt").value;
        payloadData["Primary_Total_Boys"] = document.getElementById("primary_gt_b").value;
        payloadData["Primary_Total_Girls"] = document.getElementById("primary_gt_g").value;
        payloadData["Primary_Grand_Total"] = document.getElementById("primary_gt").value;
        payloadData["JHS_Total_Boys"] = document.getElementById("jhs_gt_b").value;
        payloadData["JHS_Total_Girls"] = document.getElementById("jhs_gt_g").value;
        payloadData["JHS_Grand_Total"] = document.getElementById("jhs_gt").value;

        const freshStudentsSubmitted = (parseInt(payloadData["KG_Grand_Total"]) || 0) + 
                                       (parseInt(payloadData["Primary_Grand_Total"]) || 0) + 
                                       (parseInt(payloadData["JHS_Grand_Total"]) || 0);

        const payload = {
            formType: "Enrolment",
            data: payloadData
        };

        try {
            const response = await fetch(APP_SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                headers: { 
                    "Content-Type": "text/plain;charset=utf-8" 
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.result === "success") {
                let stats = JSON.parse(localStorage.getItem('ges_stats')) || { totalSchools: 114, activeStaff: 1420, totalEnrolment: 34180 };
                stats.totalEnrolment += freshStudentsSubmitted;
                localStorage.setItem('ges_stats', JSON.stringify(stats));

                alert("Data package written into GES Master Spreadsheet successfully!\nLive dashboard counters updated.");
                clearFormAndResetTotals();
            } else {
                alert("Spreadsheet entry error: " + result.message);
            }
        } catch (err) {
            console.error("Network write exception: ", err);
            alert("Network Error: Could not post data package.");
        } finally {
            saveButton.disabled = false;
            saveButton.innerText = "SAVE";
        }
    });
});
