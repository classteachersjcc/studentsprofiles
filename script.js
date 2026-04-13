document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = document.getElementById('studentSelect');
    const marksTable = document.getElementById('marksTable');
    const detailsSection = document.getElementById('studentDetails');
    const backList = document.getElementById('backPaperList');

    // നിങ്ങളുടെ ഗൂഗിൾ ആപ്പ് സ്ക്രിപ്റ്റ് URL
    const DRIVE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwx5zcgrAfdcNdNblD9MBdckIOk6LA3UtBVH5t9eUal7J2zu4T_sW-8eUF1W7Gle-fZ/exec";

    const studentList = [
        "AARYAN P KUMAR", "ABHIN A", "ABITH SAJAYAN", "ADARSH VENUGOPAL",
        "ADARSHKUMAR M S", "ADITHYA KRISHNA H", "ADITHYAN GHOSH", "ADITYA V B",
        "ADVAITH BABU V", "AKSHAY A", "AKSHAY KUMAR S", "ALFIN P SOJU",
        "AMEEN AHSAN SALIH", "ANANDHU B M", "ANANTHU RAJESH", "ANTO ANTONY SAJI",
        "ASWANTH K R", "ATHUL VINOD", "CHATHURYA ALEXANDER", "HANNAH SUSAN JOSEPH",
        "JACOB VICTOR", "JASWIN JAMES", "JITHIN PHILIP JOHN", "JOEL THOMAS",
        "JONATHAN GEEVARGHESE", "KEVIN K ANTONY", "MAHIN K SAM",
        "MOHAMED BINSHAD R B", "MOHITH MANU", "MUHAMMED YOUSUF",
        "NIJO JOSEPH", "NOEL VARKEY MATHEW", "PARTHIV SURESH",
        "RICHARD JOICE THOMAS", "ROHIT RAJ", "SANI SATEESH",
        "SHIV NAND S D", "SHYAMRAJ M R", "SONNET GEORGE JACOB",
        "SREELEKSHMI P S", "SREERAM P S", "SURYA SAJIKUMAR",
        "SWETHA RAJ S", "TIJO TONY", "TOM ROBIN",
        "VISMAYA MOL P B", "YAHANG NABUM"
    ];

    const semesterCourses = {
        "Semester-1": [
            { id: "MG1DSCMLM100", name: "Foundation Photography" },
            { id: "MG1DSCVCN100", name: "Art of Storytelling" },
            { id: "MG1DSCSDV100", name: "Fundamentals of Acoustics" },
            { id: "MG1MDCVCN100", name: "Basic Drawing Techniques" },
            { id: "MG1AECENG101", name: "English for Arts and Humanities" },
            { 
                isLanguage: true, 
                options: [
                    { id: "MG1AECMAL101", name: "Sargasahithi (Malayalam)" },
                    { id: "MG1AECHIN101", name: "New Media in Hindi Stories (Hindi)" },
                    { id: "MG1AECFOR101", name: "Foreign Language" }
                ] 
            }
        ],
        "Semester-2": [
            { id: "MG2DSCMLM100", name: "Fundamentals Of Videography" },
            { id: "MG2DSCVCN100", name: "Screenwriting Fundamentals" },
            { id: "MG2DSCASDV100", name: "Editing Principles" },
            { id: "MG2MDCVCN100", name: "Image Retouching" },
            { id: "MG2AECENG101", name: "English Part II" },
            { 
                isLanguage: true, 
                options: [
                    { id: "MG2AECMAL101", name: "Dhrisyapadham (Malayalam)" },
                    { id: "MG2AECHIN101", name: "Harmony of Festivals (Hindi)" },
                    { id: "MG2AECFOR101", name: "Foreign Language-2" }
                ]	
            }
        ],
        "Semester-3": [
            { id: "MG3DSCMLM200", name: "Understanding Fiction" },
            { id: "MG3DSCMLM201", name: "Media and Acting" },
            { id: "MG3DSEMLM200", name: "Art and Science of Light (DSE)" },
            { id: "MG3DSEMLM201", name: "Introduction to Direction (DSE)" },
            { id: "MG3DSCSDV202", name: "Fundamentals of Digital Audio Workstation" },
            { id: "MG3MDCHIN200", name: "Kerala Specific Content- Hindi" },
            { id: "MG3MDCENG200", name: "Kerala Specific Content- English" },
            { id: "MG3MDCMAL200", name: "Kerala Specific Content- Malayalam" },
            { id: "MG3VACVCN200", name: "Advertisement and Society" }
        ],
        "Semester-4": [
            { id: "MG4DSCMLM200", name: "Understanding Art" },
            { id: "MG4DSCMLM201", name: "Production Design -I" },
            { id: "MG4DSEMLM200", name: "Multicam Setups (DSE)" },
            { id: "MG4DSEMLM201", name: "Sound Design For Film (DSE)" },
            { id: "MG4DSCVCN202", name: "Advertisement Photography (DSE)" },
            { id: "MG4SECSDV200", name: "Audio Essencial (SE)" },
            { id: "MG4VACVCN200", name: "Gender Issues In Media (VAC)" },
            { id: "MG4INTMLM200", name: "Internship" }
        ],
        "Semester-5": [
            { id: "MG5DSCMLM300", name: "Growth Of Cinema" },
            { id: "MG5DSCMLM301", name: "Production Design -II" },
            { id: "MG5DSCMLM302", name: "Introduction To Visual Effects" },
            { id: "MG5DSEMLM301", name: "Advanced Videography (DSE)" },
            { id: "MG5DSEMLM300", name: "Scripting For Various Media (DSE)" },
            { id: "MG5DSEMLM303", name: "Image Enhancement And Fashion Photography (DSE)" },
            { id: "MG5DSEMLM302", name: "Dialogue Editing (DSE)" },
            { id: "MG5SECMLM300", name: "Capturing Miniature" }
        ],
        "Semester-6": [
            { id: "MG6DSCMLM300", name: "Film Appreciation" },
            { id: "MG6DSCMLM301", name: "Visual Aesthetics Of Film Making" },
            { id: "MG6DSEMLM302", name: "The Art Of Gray Scale: Exploring Monochrome Photo (DSE)" },
            { id: "MG6DSEMLM300", name: "Shaping The Form And Content For Film (DSE)" },
            { id: "MG6DSEMLM303", name: "Visual Story Creation (DSE)" },
            { id: "MG6DSEMLM302", name: "Mastering Directorial Craft (DSE)" },
            { id: "MG6SECMLM300", name: "Photo Documentary (SEC)" },
            { id: "MG6VACMLM300", name: "Film Certification Process (VAC)" }
        ],
        "Semester-7": [
            { id: "MG7DCCMLM400", name: "Media Ethics" },
            { id: "MG7DCCMLM401", name: "Analysing The Filmmaking Process" },
            { id: "MG7DCCMLM402", name: "Art And Craft For Filmmaking" },
            { id: "MG7DCEMLM400", name: "Mood Lighting (DSE)" },
            { id: "MG7DCEMLM401", name: "Mise-En-Scene (DSE)" },
            { id: "MG7DCEMLM402", name: "Music Video Production (DSE)" },
            { id: "MG7DCEMLM403", name: "Product Video Making (DSE)" },
            { id: "MG7DCEMLM404", name: "Media Management (DSE)" },
            { id: "MG7DCEMLM405", name: "Research Methodology (DSE)" }
        ],
        "Semester-8": [
            { id: "MG8DCCMLM400", name: "Visual Enhancement Techniques" },
            { id: "MG8DSCMLM401", name: "Technical Components Of Filmmaking" },
            { id: "MG8PRJMLM400", name: "Honours Project / Honours With Research" },
            { id: "MG8DCEMLM400", name: "Truth-Telling Storytelling" },
            { id: "MG8DCEMLM401", name: "Product Branding Presentation" },
            { id: "MG8DCEMLM402", name: "Marketing Films: Crafting Campaigns On Screen" }
        ]
    };

    const today = new Date();
    function getActiveSemester() {
        const cYear = today.getFullYear();
        const cMonth = today.getMonth() + 1;
        if (cYear === 2025) return (cMonth >= 6 && cMonth <= 11) ? "Semester-1" : "Semester-2";
        if (cYear === 2026) return (cMonth >= 6 && cMonth <= 11) ? "Semester-3" : "Semester-2";
        return "Semester-2";
    }

    const activeSem = getActiveSemester();
    const currentSemNum = parseInt(activeSem.split('-')[1]) || 0;

    // --- Cloud Sync Functions ---
    async function syncToDrive(studentName, dataType, content) {
    try {
        const response = await fetch(DRIVE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // ശ്രദ്ധിക്കുക: no-cors ആണെങ്കിൽ റെസ്പോൺസ് റീഡ് ചെയ്യാൻ കഴിയില്ല
            body: JSON.stringify({ studentName, dataType, content })
        });
        
        // വിജയകരമായി അയച്ചു എന്ന് കാണിക്കാൻ ഒരു ചെറിയ നോട്ടിഫിക്കേഷൻ
        console.log(`Backup successful for ${studentName}`);
        
        // ഒരു വിഷ്വൽ ഇൻഡിക്കേറ്റർ നൽകാം (ഓപ്ഷണൽ)
        const statusElem = document.getElementById('syncStatus');
        if(statusElem) {
            statusElem.innerHTML = "✅ Cloud Synced";
            statusElem.classList.replace('text-danger', 'text-success');
        }
    } catch (error) {
        console.error("Backup failed:", error);
    }
}

    async function loadFromDrive(studentName) {
    try {
        const response = await fetch(`${DRIVE_SCRIPT_URL}?studentName=${encodeURIComponent(studentName)}`, {
            method: 'GET',
            redirect: 'follow', // ഇത് വളരെ പ്രധാനമാണ്
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        // ഡാറ്റ ലോക്കൽ സ്റ്റോറേജിലേക്ക് സേവ് ചെയ്യുക
        // ...
    } catch (error) {
        console.error("Drive Load Error", error);
    }
}

    studentList.sort().forEach(name => {
        let option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        studentSelect.appendChild(option);
    });

    studentSelect.addEventListener('change', async function() {
    const studentName = this.value;
    if (studentName !== "") {
        detailsSection.classList.remove('d-none');
        
        // 1. ആദ്യം ലോക്കൽ സ്റ്റോറേജിലുള്ള ഡാറ്റ വെച്ച് UI കാണിക്കുക
        loadStudentData(studentName);
        
        // 2. ബാക്ക്ഗ്രൗണ്ടിൽ ഡ്രൈവിൽ നിന്ന് പുതിയ ഡാറ്റ എടുക്കുക
        await loadFromDrive(studentName); 
    } else {
        detailsSection.classList.add('d-none');
    }
});

   function displaySummaryCard(total, studentName) {
    // പഴയ ബോക്സുകൾ ഉണ്ടെങ്കിൽ നീക്കം ചെയ്യുക
    const oldBox = document.getElementById('creditBox');
    const oldExtraBox = document.getElementById('extraCurricularBox');
    if (oldBox) oldBox.remove();
    if (oldExtraBox) oldExtraBox.remove();

    const getData = (type) => JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
    
    const warnings = getData('warning');
    const apologies = getData('apology');
    const condonations = getData('condonation');

    // സൈഡ് ബാറിലെ കൗണ്ടുകൾ അപ്ഡേറ്റ് ചെയ്യുന്നു
    if (document.getElementById('warnCountDisplay')) document.getElementById('warnCountDisplay').textContent = warnings.length;
    if (document.getElementById('apolCountDisplay')) document.getElementById('apolCountDisplay').textContent = apologies.length;
    if (document.getElementById('condCountDisplay')) document.getElementById('condCountDisplay').textContent = condonations.length;

    const createDocLinks = (links, type) => {
        if (links.length === 0) return `<span class="text-muted small italic">No files</span>`;
        return links.map((link, index) => `
            <div class="btn-group btn-group-sm me-1 mb-1">
                <a href="${link}" target="_blank" class="btn btn-outline-secondary py-0 px-2 small">Doc ${index + 1}</a>
                <button class="btn btn-danger py-0 px-1" onclick="deleteDoc('${studentName}', '${type}', ${index})">×</button>
            </div>
        `).join('');
    };

    // അക്കാദമിക് കാർഡ്
    const academicHtml = `
        <div id="creditBox" class="card mt-3 mb-2 shadow-sm border-0">
            <div class="card-header bg-primary text-white py-1 fw-bold small">Academic Performance Summary</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center bg-light fw-bold small">
                    Total Credits Earned: <span class="badge bg-primary">${total}</span>
                </li>
                <li class="list-group-item small">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>Warning Letters (${warnings.length}):</span>
                        <button class="btn btn-dark btn-sm p-0 px-1" onclick="uploadDoc('${studentName}', 'warning')">Upload</button>
                    </div>
                    <div class="mt-1">${createDocLinks(warnings, 'warning')}</div>
                </li>
                <li class="list-group-item small">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>Apology Letters (${apologies.length}):</span>
                        <button class="btn btn-dark btn-sm p-0 px-1" onclick="uploadDoc('${studentName}', 'apology')">Upload</button>
                    </div>
                    <div class="mt-1">${createDocLinks(apologies, 'apology')}</div>
                </li>
                <li class="list-group-item small">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>Condonation (${condonations.length}):</span>
                        <button class="btn btn-dark btn-sm p-0 px-1" onclick="uploadDoc('${studentName}', 'condonation')">Upload</button>
                    </div>
                    <div class="mt-1">${createDocLinks(condonations, 'condonation')}</div>
                </li>
            </ul>
        </div>`;

    // എക്സ്ട്രാ കരിക്കുലം കാർഡ്
    const extraHtml = `
        <div id="extraCurricularBox" class="card mt-2 mb-3 shadow-sm border-0">
            <div class="card-header bg-success text-white py-1 fw-bold small">Extra-Curricular Activities</div>
            <ul class="list-group list-group-flush">
                ${[['sports', 'Sports'], ['youthFest', 'Youth Festival'], ['awards', 'Awards'], ['film', 'Film Making']].map(([key, label]) => `
                    <li class="list-group-item small">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold text-dark">${label}:</span>
                            <button class="btn btn-success btn-sm p-0 px-2" onclick="uploadDoc('${studentName}', '${key}')">Add</button>
                        </div>
                        <div class="mt-1">${createDocLinks(getData(key), key)}</div>
                    </li>
                `).join('')}
            </ul>
        </div>`;
    
    const bList = document.getElementById('backPaperList');
    if (bList) {
        bList.insertAdjacentHTML('afterend', academicHtml);
        document.getElementById('creditBox').insertAdjacentHTML('afterend', extraHtml);
    }
}

   window.uploadDoc = function(studentName, type) {
    const link = prompt(`Enter Document URL for ${type}:`);
    if (link) {
        let currentList = JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
        currentList.push(link);
        localStorage.setItem(`${studentName}_${type}_links`, JSON.stringify(currentList));
        
        // ക്ലൗഡ് സിങ്ക്
        syncToDrive(studentName, type + '_links', currentList);
        
        // UI അപ്ഡേറ്റ് ചെയ്യാൻ ഈ ഫംഗ്ഷൻ വീണ്ടും വിളിക്കുക
        loadStudentData(studentName); 
    }
};

    window.deleteDoc = function(studentName, type, index) {
        if (confirm("Delete this document?")) {
            let currentList = JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
            currentList.splice(index, 1);
            localStorage.setItem(`${studentName}_${type}_links`, JSON.stringify(currentList));
            
            // Sync to Cloud
            syncToDrive(studentName, type + '_links', currentList);
            loadStudentData(studentName);
        }
    };	

    window.loadStudentData = function(studentName) {
        const photoElem = document.getElementById('studentPhoto');
        const photoPath = `./images/${studentName}.jpg`;
        if (photoElem && photoElem.getAttribute('data-current') !== studentName) {
            photoElem.src = photoPath;
            photoElem.setAttribute('data-current', studentName);
            photoElem.onerror = function() { this.src = 'images/default.png'; };
        }

        document.getElementById('displayName').textContent = studentName;
        const savedApaar = JSON.parse(localStorage.getItem(`${studentName}_apaar`)) || { id: "Not Provided", pass: "********" };
        
        const oldApaarBox = document.getElementById('apaarDisplayBox');
        if (oldApaarBox) oldApaarBox.remove();

        const apaarHtml = `
            <div id="apaarDisplayBox" class="mt-2 p-2 border rounded bg-light shadow-sm mx-auto" style="max-width: 300px;">
                <div class="small text-muted mb-1" style="font-size: 0.7rem;">APAAR INFORMATION</div>
                <div class="d-flex justify-content-around align-items-center">
                    <div class="small"><span class="fw-bold text-primary">ID:</span> ${savedApaar.id}</div>
                    <div class="small"><span class="fw-bold text-primary">PASS:</span> ${savedApaar.pass}</div>
                </div>
            </div>`;
        
        document.getElementById('displayName').insertAdjacentHTML('afterend', apaarHtml);
        
        marksTable.innerHTML = "";
        backList.innerHTML = "";
        let hasBackPaper = false;
        let totalCreditsEarned = 0;
        let totalBackPapersCount = 0;

        Object.keys(semesterCourses).forEach(sem => {
            const semNum = parseInt(sem.split('-')[1]);
            if (semNum <= currentSemNum) {
                marksTable.innerHTML += `<tr class="table-dark text-center fw-bold"><td colspan="10">${sem}</td></tr>`;
                const isPublished = (sem === "Semester-1") || (localStorage.getItem(`status_${sem}`) === "published");
                let semFailed = [];

                semesterCourses[sem].forEach(course => {
                    let courseId, courseDisplay;
                    if (course.isLanguage) {
                        const savedLangId = localStorage.getItem(`${studentName}_lang_${sem}`);
                        let optionsHTML = `<option value="">-- Select --</option>`;
                        course.options.forEach(opt => {
                            const selected = opt.id === savedLangId ? "selected" : "";
                            optionsHTML += `<option value="${opt.id}" ${selected}>${opt.name}</option>`;
                        });
                        courseDisplay = `<select class="form-select form-select-sm" onchange="changeLanguage('${sem}', '${studentName}', this.value)">${optionsHTML}</select>`;
                        courseId = savedLangId || `temp_${sem}`;
                    } else {
                        courseId = course.id;
                        courseDisplay = course.name;
                    }

                    const saved = JSON.parse(localStorage.getItem(`${studentName}_${courseId}`)) || {};
                    marksTable.innerHTML += `
                        <tr id="row_${courseId}">
                            <td class="text-start small">${courseDisplay}</td>
                            <td><input type="number" class="form-control sm-input" id="maxInt_${courseId}" value="${saved.maxInt || 25}" oninput="updateUI('${courseId}', '${studentName}')"></td>
                            <td><input type="number" class="form-control sm-input" id="grantInt_${courseId}" value="${saved.grantInt || ''}" oninput="updateUI('${courseId}', '${studentName}')"></td>
                            <td><input type="number" class="form-control sm-input" id="maxExt_${courseId}" value="${saved.maxExt || 75}" oninput="updateUI('${courseId}', '${studentName}')"></td>
                            <td><input type="number" class="form-control sm-input" id="grantExt_${courseId}" value="${saved.grantExt || ''}" oninput="updateUI('${courseId}', '${studentName}')"></td>
                            <td id="extMin_${courseId}" class="text-muted small">-</td>
                            <td id="totalMin_${courseId}" class="text-muted small">-</td>
                            <td id="grandTotal_${courseId}" class="fw-bold">-</td>
                            <td id="grandMax_${courseId}" class="fw-bold text-primary">-</td>
                            <td id="status_${courseId}">-</td>
                        </tr>`;

                    if (!courseId.startsWith("temp")) {
                        const res = calculatePass(courseId, studentName, false); // false = don't sync on initial load
                        if (isPublished) {
                            if (res === "PASS") {
                                const mInt = parseFloat(document.getElementById(`maxInt_${courseId}`).value) || 0;
                                const mExt = parseFloat(document.getElementById(`maxExt_${courseId}`).value) || 0;
                                const totalMax = mInt + mExt;
                                if (totalMax === 100) totalCreditsEarned += 4;
                                else if (totalMax === 75) totalCreditsEarned += 3;
                                else if (totalMax >= 175) totalCreditsEarned += 3;
                            } else {
                                semFailed.push(course.isLanguage ? "Language" : course.name);
                                totalBackPapersCount++;
                                hasBackPaper = true;
                            }
                        } else {
                            document.getElementById(`status_${courseId}`).innerHTML = '<span class="badge bg-secondary">Awaiting</span>';
                        }
                    }
                });

                if (isPublished && semFailed.length > 0) {
                    backList.innerHTML += `<li class="list-group-item list-group-item-dark fw-bold mt-2">${sem}</li>`;
                    semFailed.forEach(sub => {
                        backList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center border-danger text-danger small">${sub} <span>FAIL</span></li>`;
                    });
                }
            }
        });

        displaySummaryCard(totalCreditsEarned, studentName);
        if (!hasBackPaper) {
            backList.innerHTML = `<div class="alert alert-success mt-2 small">നിലവിൽ ബാക്ക് പേപ്പറുകൾ ഇല്ല.</div>`;
        }
		
		if (document.getElementById('statCredits')) document.getElementById('statCredits').textContent = totalCreditsEarned;
    if (document.getElementById('statBackPapers')) document.getElementById('statBackPapers').textContent = totalBackPapersCount;
		displaySummaryCard(totalCreditsEarned, studentName);
    };

    window.calculatePass = function(id, studentName, shouldSync = true) {
        const mInt = parseFloat(document.getElementById(`maxInt_${id}`).value) || 0;
        const gInt = parseFloat(document.getElementById(`grantInt_${id}`).value) || 0;
        const mExt = parseFloat(document.getElementById(`maxExt_${id}`).value) || 0;
        const gExt = parseFloat(document.getElementById(`grantExt_${id}`).value) || 0;

        const grandMax = mInt + mExt;
        const extMin = mExt * 0.30;
        const totalMin = grandMax * 0.35;
        const total = gInt + gExt;

        if (document.getElementById(`extMin_${id}`)) document.getElementById(`extMin_${id}`).textContent = extMin.toFixed(1);
        if (document.getElementById(`totalMin_${id}`)) document.getElementById(`totalMin_${id}`).textContent = totalMin.toFixed(1);
        if (document.getElementById(`grandTotal_${id}`)) document.getElementById(`grandTotal_${id}`).textContent = total;
        if (document.getElementById(`grandMax_${id}`)) document.getElementById(`grandMax_${id}`).textContent = grandMax;

        const statusElem = document.getElementById(`status_${id}`);
        let result = (gExt >= extMin && total >= totalMin) ? "PASS" : "FAIL";
        if (statusElem) {
            statusElem.innerHTML = `<span class="badge ${result === 'PASS' ? 'bg-success' : 'bg-danger'}">${result}</span>`;
        }

        const dataObj = { maxInt: mInt, grantInt: gInt, maxExt: mExt, grantExt: gExt };
        localStorage.setItem(`${studentName}_${id}`, JSON.stringify(dataObj));
        
        if (shouldSync) syncToDrive(studentName, id, dataObj);
        
        return result;
    };

    window.updateUI = function(id, studentName) {
        calculatePass(id, studentName);
        // loadStudentData(studentName) ഒഴിവാക്കി, പകരം ആവശ്യമായത് മാത്രം അപ്ഡേറ്റ് ചെയ്യുക (പെർഫോമൻസിനായി)
    };

    window.changeLanguage = function(sem, studentName, selectedId) {
        if (selectedId) {
            localStorage.setItem(`${studentName}_lang_${sem}`, selectedId);
            syncToDrive(studentName, `lang_${sem}`, selectedId);
            loadStudentData(studentName);
        }
    };
});


window.migrateToCloud = async function(studentName) {
    if (!studentName) {
        alert("ദയവായി ഒരു വിദ്യാർത്ഥിയെ തിരഞ്ഞെടുക്കുക!");
        return;
    }

    const allKeys = Object.keys(localStorage);
    const studentData = {};
    let count = 0;

    // ഈ വിദ്യാർത്ഥിയുടേത് മാത്രമായ എല്ലാ ഡാറ്റയും ലോക്കൽ സ്റ്റോറേജിൽ നിന്ന് എടുക്കുന്നു
    allKeys.forEach(key => {
        if (key.startsWith(studentName + "_")) {
            const dataKey = key.replace(studentName + "_", "");
            studentData[dataKey] = JSON.parse(localStorage.getItem(key));
            count++;
        }
    });

    if (count === 0) {
        alert("ഈ വിദ്യാർത്ഥിയുടെ ഡാറ്റ ലോക്കൽ ഡ്രൈവിൽ ലഭ്യമല്ല.");
        return;
    }

    // ഗൂഗിൾ സ്ക്രിപ്റ്റിലേക്ക് അയക്കുന്നു
    try {
        await fetch(DRIVE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({ 
                studentName: studentName, 
                dataType: "FULL_MIGRATION", 
                content: studentData 
            })
        });
        alert(`വിജയകരമായി ${count} ഫയലുകൾ ഡ്രൈവിലേക്ക് കോപ്പി ചെയ്തു!`);
    } catch (e) {
        alert("ഡ്രൈവിലേക്ക് മാറ്റാൻ സാധിച്ചില്ല. ഇന്റർനെറ്റ് കണക്ഷൻ പരിശോധിക്കുക.");
        console.error(e);
    }
};