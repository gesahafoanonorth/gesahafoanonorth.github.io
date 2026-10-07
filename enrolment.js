/**
 * GES Ahafo Ano North - Enrollment Management Core Logic Engine
 * Handles real-time cross-grid aggregations and interactive visibility rules
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enrolmentForm");
  const levelSelect = document.getElementById("select_level");
  const submitButton = document.getElementById("btnSubmit");
  
  const kgFieldset = document.getElementById("kg_fieldset");
  const primaryFieldset = document.getElementById("primary_fieldset");
  const jhsFieldset = document.getElementById("jhs_fieldset");

  if (!form || !levelSelect) {
    console.error("Critical Runtime Error: Required document structure references are missing.");
    return;
  }

  // =========================================================================
  // 1. DYNAMIC COMPONENT FIELDSET VISIBILITY HANDLER
  // =========================================================================
  const toggleSectionsByLevel = () => {
    const val = levelSelect.value;
    
    // Restore layout structures to default block display parameters
    kgFieldset.style.display = "block";
    primaryFieldset.style.display = "block";
    jhsFieldset.style.display = "block";

    // Enforce visibility filters based on current drop selection choice
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

  // =========================================================================
  // 2. REAL-TIME MATHEMATICAL TALLY COMPILER ENGINE
  // =========================================================================
  const calculateLiveTotals = () => {
    const getNum = (id) => parseInt(document.getElementById(id).value, 10) || 0;
    
    // --- KG Section Array Operations ---
    const k1b = getNum("kg1_b"), k1g = getNum("kg1_g");
    const k2b = getNum("kg2_b"), k2g = getNum("kg2_g");
    
    document.getElementById("kg1_t").value = k1b + k1g;
    document.getElementById("kg2_t").value = k2b + k2g;
    
    const kgTotalBoys = k1b + k2b;
    const kgTotalGirls = k1g + k2g;
    document.getElementById("kg_gt_b").value = kgTotalBoys;
    document.getElementById("kg_gt_g").value = kgTotalGirls;
    document.getElementById("kg_gt").value = kgTotalBoys + kgTotalGirls;

    // --- Primary Section Array Operations (Fixed P2 Mappings) ---
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

    // --- JHS Section Array Operations ---
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

  form.addEventListener("input", calculateLiveTotals);
  // --- Reset Forms Control Subroutines ---
  const clearFormAndResetTotals = () => {
    form.reset();
    calculateLiveTotals();
    toggleSectionsByLevel();
  };
  
  document.getElementById("btnClear").addEventListener("click", clearFormAndResetTotals);
  document.getElementById("btnNew").addEventListener("click", clearFormAndResetTotals);

  // =========================================================================
  // 3. SECURE DATA TRANSMISSION GATEWAY PIPELINE (POST)
  // =========================================================================
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!levelSelect.value) {
      alert("Validation Alert: Please specify a targeted Selection Level scope before attempting database logs.");
      return;
    }

    // UPDATE VALUE: Define your operational deployed web app execution URL below
    const APP_SCRIPT_URL = "PASTE_YOUR_DEPLOYED_GOOGLE_WEB_APP_URL_HERE";
    
    submitButton.disabled = true;
    submitButton.innerText = "SUBMITTING...";

    const rawData = new FormData(form);
    const payloadData = {};
    rawData.forEach((value, key) => {
      payloadData[key] = value;
    });

    // Populate calculated summary matrix items into outbound properties payload fields
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
        alert(result.message);
        clearFormAndResetTotals();
      } else {
        alert("Spreadsheet Processing Failure: " + result.message);
      }
    } catch (err) {
      console.error("Network exception logged during post transmission: ", err);
      alert("Network Write Error: Connections dropped while attempting to communicate with spreadsheet API layer.");
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Submit";
    }
  });

  // Execute baseline evaluations on load lifecycle checkpoint
  calculateLiveTotals();
  toggleSectionsByLevel();
});
