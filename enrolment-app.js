        const getNum = (id) => parseInt(document.getElementById(id).value, 10) || 0;
        
        // 1. KG LEVEL LIVE CALCULATIONS
        const k1b = getNum("kg1_b"), k1g = getNum("kg1_g");
        const k2b = getNum("kg2_b"), k2g = getNum("kg2_g");
        
        document.getElementById("kg1_t").value = k1b + k1g;
        document.getElementById("kg2_t").value = k2b + k2g;
        
        const kgTotalBoys = k1b + k2b;
        const kgTotalGirls = k1g + k2g;
        document.getElementById("kg_gt_b").value = kgTotalBoys;
        document.getElementById("kg_gt_g").value = kgTotalGirls;
        document.getElementById("kg_gt").value = kgTotalBoys + kgTotalGirls;

        // 2. PRIMARY LEVEL LIVE CALCULATIONS
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

        // 3. JHS LEVEL LIVE CALCULATIONS
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
    // 4. DATABASE TRANSMISSION: Post clean data payloads to Google Sheet
    // =========================================================================
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Verified active Web App API deployment URL
        const APP_SCRIPT_URL = "https://google.com";
        const saveButton = document.getElementById("btnSave");
        
        saveButton.disabled = true;
        saveButton.innerText = "SAVING...";

        // Extract input fields automatically into parameters payload
        const rawData = new FormData(form);
        const payloadData = {};
        rawData.forEach((value, key) => {
            payloadData[key] = value;
        });

        // Append calculated values manually since readonly fields are excluded from FormData sometimes
        payloadData["KG_Total_Boys"] = document.getElementById("kg_gt_b").value;
        payloadData["KG_Total_Girls"] = document.getElementById("kg_gt_g").value;
        payloadData["KG_Grand_Total"] = document.getElementById("kg_gt").value;
        payloadData["Primary_Total_Boys"] = document.getElementById("primary_gt_b").value;
        payloadData["Primary_Total_Girls"] = document.getElementById("primary_gt_g").value;
        payloadData["Primary_Grand_Total"] = document.getElementById("primary_gt").value;
        payloadData["JHS_Total_Boys"] = document.getElementById("jhs_gt_b").value;
        payloadData["JHS_Total_Girls"] = document.getElementById("jhs_gt_g").value;
        payloadData["JHS_Grand_Total"] = document.getElementById("jhs_gt").value;

        const payload = {
            formType: "Enrolment", // Matches your target worksheet tab name perfectly
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
            console.error("Network write exception: ", err);
            alert("Network Error: Could not post data package. Ensure Web App deployment is configured correctly.");
        } finally {
            saveButton.disabled = false;
            saveButton.innerText = "SAVE";
        }
    });
});
