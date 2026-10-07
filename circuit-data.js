/**
 * GES Ahafo Ano North Municipal Assembly - Master School & Circuit Mapping
 * Connects schools to their official administrative circuits dynamically
 */
const CIRCUIT_SCHOOLS_MAP = {
    "AKWASIASE": [
        "AKWASIASE M/A JHS", "AKWASIASE METHODIST JHS", "AKWASIASE METHODIST PRIMARY", 
        "AKWASIASE RC PRIMARY", "BOAGYAA 1 M A PRIMARY", "BOAGYAA I M/A JHS", 
        "KWAFOKROM M/A BASIC", "MABANG PRESBY JHS", "MABANG PRESBY PRIMARY", "POBRISO M/A PRIMARY"
    ],
    "ANYINASUSO": [
        "ANYINASUSO ENGLISH AND ARABIC BASIC", "ANYINASUSO M /A JHS", "ANYINASUSO M/A PRIMARY", 
        "ANYINASUSO PRESBY JHS", "ANYINASUSO PRESBY PRIMARY", "BETINKO M/A BASIC", 
        "BONKRON M A PRIMARY", "BONKRON M/A JHS", "JACOBU M/A BASIC", 
        "KYEKYEWERE M/A BASIC SCHOOL", "OLDMANKROM M/A BASIC"
    ],
    "DWAAHO": [
        "ACHAWKROM M/A PRIMARY", "ASUHYIAE ISLAMIC MISSION BASIC SCHOOL", "ASUHYIAE M/A PRIMARY", 
        "ASUHYIAE MA JHS", "ASUHYIAE R/C PRIMARY SCHOOL", "ASUHYIAE ST JOSEPH JHS", 
        "DOTOAM M/A PRIMARY", "DWAAHO M/A JHS", "DWAAHO METHODIST PRIMARY", 
        "KONKORI M/A BASIC SCHOOL", "KRAKOSUA M/A PRIMARRY", "MFANIBU M/A JHS", 
        "MFANIBU M/A PRIMARY SCHOOL", "TANOAGYA M/A JHS"
    ],
    "KOJOBETIAKO": [
        "ABONSUASO E/A JHS", "ABONSUASO E/A PRIMARY", "ABONSUASO M/A JHS", "ABONSUASO M/A PRIMARY", 
        "ANWIAM M A PRIMARY", "ASSENKYEM M/A PRIMARY", "BENUMSO M/A BASIC", "DANYAME M/A BASIC", 
        "KOJOBETIAKO E/A BASIC SCHOOL", "KOJOBETIAKO M/A JHS", "KOJOBETIAKO M/A PRIMARY", 
        "NYAMEADOM M/A JHS", "NYAMEADOM M/A PRIMARY"
    ],
    "MANFO": [
        "KENIAGO M/A BASIC", "KOTEI NKWANTA M/A BASIC", "MANFO ISLAMIC BASIC", "MANFO R/C JHS", 
        "MANFO R/C PRIMARY SCHOOL", "MANFO SDA BASIC SCHOOL", "SIKAFREBOGYA 1M/A PRIMARY"
    ],
    "SUBRISO": [
        "MFANTE M/A BASIC SCHOOL", "NUMASUA E/A BASIC", "NUMASUA MA BASIC", 
        "ODUMASE M/A PRIMARY SCHOOL", "ODUMASE MA JHS", "SIAWKROM M/A BASIC", 
        "SIKAFREBOGYA II M/A PRIMARY", "SUBRISO E/A BASIC", "SUBRISO M/A JHS", "SUBRISO M/A PRIMARY"
    ],
    "SUPONSO": [
        "ALHASSANKROM E/A JHS", "ALHASSANKROM E/A PRIMARY", "BOAGYAA II M A BASIC", 
        "KATAPEI AL-HUDA ISLAMIC BASIC", "KATAPEI M/A JHS", "KATAPEI M/A PRIMARY", 
        "MMEREDANE M/A JHS", "MMEREDANE M/A PRIMARY", "MMFRAMFADWENE M/A PRIMARY", 
        "NYAMEDEWOASIE M/A PRIMARY", "SUPONSO M A JHS", "SUPONSO M A PRIMARY"
    ],
    "TEPA URBAN A": [
        "KOFI NKRUMAHKROM M/A PRIMARY", "ODIKRO NKWANTA M/A BASIC", "TEPA IBRAHIMIA E/A PRIMARY", 
        "TEPA BLACK/IBRAHIMIYYA EA JHS", "TEPA M/A BASIC", "TEPA S.D.A JHS", "TEPA S.D.A PRIMARY", 
        "TEPA SECONDARY JHS", "TEPA SECONDARY PRIMARY"
    ],
    "TEPA URBAN B": [
        "TEPA ANGLICAN BASIC", "TEPA ENGLISH AND ARABIC 'B' BASIC", "TEPA METHODIST PRIMARY", 
        "TEPA PRESBYTARIAN JHS", "TEPA PRESBYTARIAN PRIMARY SCHOOL", "TEPA R/C PRIMARY", 
        "TEPA RC JHS", "TEPA SAVIOUR M/A BASIC", "TEPA WESLEY METHODIST JHS"
    ],
    "TWABIDI": [
        "ACHINA M/A JHS", "ACHINA M/A PRIMARY", "AKROFOSO M/A BASIC", "ANKAASE ISLAMIC BASIC SCHOOL", 
        "ANKAASE SDA BASIC", "BEPOSO M/A BASIC", "BOSIKESE M/A BASIC", "NYAMEBEKYERE M/A BASIC", 
        "TEMEBAABI MA PRIMARY", "TWABIDI ISLAMIC BASIC SCHOOL", "TWABIDI M/A JHS", "TWABIDI M/A PRIMARY"
    ]
};
/**
 * Automatically populates and updates the school name dropdown based on circuit choice options
 */
const initializeCircuitSchoolFilter = (circuitSelectSelector, schoolSelectSelector) => {
    const circuitSelect = document.querySelector(circuitSelectSelector);
    const schoolSelect = document.querySelector(schoolSelectSelector);

    if (!circuitSelect || !schoolSelect) {
        console.warn("Dropdown references missing from the active layout view node.");
        return;
    }

    circuitSelect.addEventListener("change", () => {
        const selectedCircuit = circuitSelect.value;
        
        // 1. Clear out any existing options from the school dropdown menu
        schoolSelect.innerHTML = '<option value="" disabled selected>Select School</option>';
        
        // 2. Fetch schools belonging to that circuit from our data map matrix
        const associatedSchools = CIRCUIT_SCHOOLS_MAP[selectedCircuit] || [];
        
        // 3. Inject new matching option nodes seamlessly
        associatedSchools.forEach(schoolName => {
            const optionNode = document.createElement("option");
            optionNode.value = schoolName;
            optionNode.textContent = schoolName;
            schoolSelect.appendChild(optionNode);
        });
    });
};

// Execution Setup Example inside your document context:
document.addEventListener("DOMContentLoaded", () => {
    // Targets your metadata dropdown wrappers: select[name="Circuit"] and select[name="School_Name"]
    initializeCircuitSchoolFilter('select[name="Circuit"]', 'select[name="School_Name"]');
});
