document.addEventListener("DOMContentLoaded", () => {
    const mountNode = document.getElementById('enrolment-mount');
    
    if (!mountNode) {
        console.warn("Mount point '#enrolment-mount' not found.");
        return;
    }

    // =========================================================================
    // 1. UPDATED TEMPLATE INJECTION: Full Gender Segregation (KG1 to JHS3)
    // =========================================================================
    mountNode.innerHTML = `
    <div class="register-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div class="header-title" style="color: #2b579a; font-size: 22px; font-weight: bold; text-align: center; margin-bottom: 20px; text-transform: uppercase;">
            Basic School Enrolment Log (Gender Segregated)
        </div>
        
        <form id="enrolmentForm">
            <!-- Top Operations Bar -->
<div class="top-bar" style="border-bottom: 2px solid #2b579a; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: flex-end; gap: 10px;">
    <button type="button" class="btn" id="btnNew" style="padding: 6px 15px; cursor: pointer; background-color: #f0f4f8; color: #2b579a; border: 1px solid #2b579a; font-weight: bold; border-radius: 4px;">NEW</button>
    <button type="submit" class="btn" id="btnSave" style="padding: 6px 15px; background-color: #2b579a; color: white; border: none; cursor: pointer; font-weight: bold; border-radius: 4px;">SAVE</button>
    <button type="button" class="btn" id="btnClear" style="padding: 6px 15px; cursor: pointer; background-color: #fff0f0; color: #d9534f; border: 1px solid #d9534f; font-weight: bold; border-radius: 4px;">CLEAR</button>
    <button type="button" class="btn" onclick="window.location.href='dashboard.html'" style="padding: 6px 15px; background-color: #6c757d; color: white; border: none; cursor: pointer; font-weight: bold; border-radius: 4px;">BACK</button>
</div>


            <!-- Metadata Panel -->
            <fieldset style="border: 1px solid #ccc; margin-bottom: 20px; padding: 15px; border-radius: 4px; background: #fafafa;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 15px;">
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">ACADEMIC YEAR</label><select name="Academic_Year" style="width:100%; padding:5px;"><option value="2026/2027">2026/2027</option></select></div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">ACADEMIC TERM</label><select name="Academic_Term" style="width:100%; padding:5px;"><option value="Term 1">Term 1</option><option value="Term 2">Term 2</option><option value="Term 3">Term 3</option></select></div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; color:red; margin-bottom:4px;">SELECT LEVEL</label><select name="Selected_Level" style="width:100%; padding:5px;"><option value="ALL BASIC" selected>ALL BASIC</option></select></div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">EMIS CODE</label><input type="text" name="EMIS_Code" value="1066340072" style="width:100%; padding:5px;" required></div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">CIRCUIT</label><input type="text" name="Circuit" value="KOJOBETIAKO" style="width:100%; padding:5px;" required></div>
                    <div><label style="display:block; font-size:11px; font-weight:bold; margin-bottom:4px;">NAME OF SCHOOL</label><input type="text" name="School_Name" value="ABONSUASO M/A JHS" style="width:100%; padding:5px;" required></div>
                </div>
            </fieldset>

            <!-- Data Sections -->
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr; gap: 20px;">
                
                <!-- SECTION 1: KG ENROLMENT PANEL -->
                <fieldset style="border: 2px solid #b5e61d; padding: 15px; border-radius: 4px;">
                    <legend style="color: #22b14c; font-weight: bold; padding: 0 5px;">KG ENROLMENT</legend>
                    <table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">
                        <tr style="background:#f0f0f0;"><th>LEVEL</th><th style="width:25%;">BOYS</th><th style="width:25%;">GIRLS</th><th style="width:25%;">TOTAL</th></tr>
                        <tr><td><b>KG 1</b></td><td><input type="number" name="KG1_Boys" id="kg1_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="KG1_Girls" id="kg1_g" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="text" id="kg1_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>KG 2</b></td><td><input type="number" name="KG2_Boys" id="kg2_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="KG2_Girls" id="kg2_g" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="text" id="kg2_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr style="background:#eaf8dd; font-weight:bold; border-top:2px solid #b5e61d;"><td>KG GRAND TOTAL</td><td><input type="text" name="KG_Total_Boys" id="kg_gt_b" value="0" readonly style="width:80px; text-align:center; background:#eee;"></td><td><input type="text" name="KG_Total_Girls" id="kg_gt_g" value="0" readonly style="width:80px; text-align:center; background:#eee;"></td><td><input type="text" name="KG_Grand_Total" id="kg_gt" value="0" readonly style="width:80px; text-align:center; background:#fff3cd; font-weight:bold;"></td></tr>
                    </table>
                </fieldset>

                <!-- SECTION 2: PRIMARY ENROLMENT PANEL -->
                <fieldset style="border: 2px solid #ffc90e; padding: 15px; border-radius: 4px;">
                    <legend style="color: #ffc90e; font-weight: bold; padding: 0 5px;">PRIMARY ENROLMENT</legend>
                    <table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">
                        <tr style="background:#f0f0f0;"><th>LEVEL</th><th style="width:25%;">BOYS</th><th style="width:25%;">GIRLS</th><th style="width:25%;">TOTAL</th></tr>
                        
                        <tr><td><b>PRIMARY 1</b></td><td><input type="number" name="P1_Boys" id="p1_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P1_Girls" id="p1_g" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p1_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 2</b></td><td><input type="number" name="P2_Boys" id="p2_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P2_Girls" id="p2_g" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p2_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 3</b></td><td><input type="number" name="P3_Boys" id="p3_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P3_Girls" id="p3_g" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="text" id="p3_t" value="0" readonly style="width:80px; text-align:center; background:#eee; border:1px solid #ccc;"></td></tr>
                        <tr><td><b>PRIMARY 4</b></td><td><input type="number" name="P4_Boys" id="p4_b" value="0" min="0" style="width:80px; text-align:center;"></td><td><input type="number" name="P4_Girls" id="p4_g" value="0
