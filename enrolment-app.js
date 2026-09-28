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
                    <button type="submit" class="btn" id="btnSave" style="padding: 6px 15px; margin-right: 5px; background-color: #2b579a; color: white; border: none; cursor: pointer; font-weight: bold;">SAVE TO DATABASE</button>
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
