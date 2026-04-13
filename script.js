document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = document.getElementById('studentSelect');
    const marksTable = document.getElementById('marksTable');
    const detailsSection = document.getElementById('studentDetails');
    const backList = document.getElementById('backPaperList');

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

	localStorage.setItem("AMEEN AHSAN SALIH_apaar", JSON.stringify({id: "1234-5678-9012", pass: "Ameen@123"}));
	localStorage.setItem("AARYAN P KUMAR_apaar", JSON.stringify({id: "2034-5678-9012", pass: "Amrayann@123"}));
	
	
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

    studentList.sort().forEach(name => {
        let option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        studentSelect.appendChild(option);
    });

    studentSelect.addEventListener('change', function() {
        if (this.value !== "") {
            detailsSection.classList.remove('d-none');
            loadStudentData(this.value);
        } else {
            detailsSection.classList.add('d-none');
        }
    });

    // --- ഡാറ്റ സമ്മറി കാർഡ് ഡിസ്‌പ്ലേ (Warning/Apology/Condonation ഉൾപ്പെടെ) ---
    // ക്രെഡിറ്റ് ബോക്സ് ഡിസ്‌പ്ലേ ചെയ്യുന്ന ഫംഗ്‌ഷൻ (Back Paper ലിസ്റ്റിന് താഴെ വരാൻ)
   function displaySummaryCard(total, studentName) {
    const oldBox = document.getElementById('creditBox');
    const oldExtraBox = document.getElementById('extraCurricularBox');
    if (oldBox) oldBox.remove();
    if (oldExtraBox) oldExtraBox.remove();

    // ലോക്കൽ സ്റ്റോറേജിൽ നിന്ന് ഡാറ്റ എടുക്കാനുള്ള ഫംഗ്ഷൻ
    const getData = (type) => JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
    
    // ഡിസിപ്ലിനറി & അക്കാദമിക് റെക്കോർഡുകൾ
    const warnings = getData('warning');
    const apologies = getData('apology');
    const condonations = getData('condonation');

    // കൗണ്ടുകൾ മുകളിലെ സ്റ്റാറ്റസ് ബാറിൽ അപ്ഡേറ്റ് ചെയ്യുന്നു
    if (document.getElementById('warnCountDisplay')) document.getElementById('warnCountDisplay').textContent = warnings.length;
    if (document.getElementById('apolCountDisplay')) document.getElementById('apolCountDisplay').textContent = apologies.length;
    if (document.getElementById('condCountDisplay')) document.getElementById('condCountDisplay').textContent = condonations.length;

    // വ്യൂ & ഡിലീറ്റ് ബട്ടണുകൾ നിർമ്മിക്കുന്നു
    const createDocLinks = (links, type) => {
        if (links.length === 0) return `<span class="text-muted small italic">No files</span>`;
        return links.map((link, index) => `
            <div class="btn-group btn-group-sm me-1 mb-1">
                <a href="${link}" target="_blank" class="btn btn-outline-secondary py-0 px-2 small">Doc ${index + 1}</a>
                <button class="btn btn-danger py-0 px-1" onclick="deleteDoc('${studentName}', '${type}', ${index})">×</button>
            </div>
        `).join('');
    };

    // 1. അക്കാദമിക് സമ്മറി ബോക്സ് (Credits, Warnings, Apologies, Condonation)
    const academicHtml = `
        <div id="creditBox" class="card mt-3 mb-2 shadow-sm border-0">
            <div class="card-header bg-primary text-white py-1 fw-bold small">
                Academic Performance Summary
            </div>
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

    // 2. എക്സ്ട്രാ കരിക്കുലം ബോക്സ്
    const extraHtml = `
        <div id="extraCurricularBox" class="card mt-2 mb-3 shadow-sm border-0">
            <div class="card-header bg-success text-white py-1 fw-bold small">
                Extra-Curricular Activities
            </div>
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
    
    const backList = document.getElementById('backPaperList');
    if (backList) {
        backList.insertAdjacentHTML('afterend', academicHtml);
        document.getElementById('creditBox').insertAdjacentHTML('afterend', extraHtml);
    }
}

    // --- ഡോക്യുമെന്റ് അപ്‌ലോഡ് ഫംഗ്‌ഷൻ ---
   window.uploadDoc = function(studentName, type) {
    const link = prompt(`Enter Document URL for ${type}:`);
    
    if (link) {
        // നിലവിലുള്ള ലിസ്റ്റ് എടുക്കുന്നു
        let currentList = JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
        
        // പുതിയ ലിങ്ക് ചേർക്കുന്നു
        currentList.push(link);
        
        // തിരിച്ച് localStorage-ലേക്ക് സേവ് ചെയ്യുന്നു
        localStorage.setItem(`${studentName}_${type}_links`, JSON.stringify(currentList));
        
        // കൗണ്ട് മാറാനായി ഡാറ്റ വീണ്ടും ലോഡ് ചെയ്യുന്നു
        loadStudentData(studentName);
    }
};

window.deleteDoc = function(studentName, type, index) {
    if (confirm("ഈ ഡോക്യുമെന്റ് നീക്കം ചെയ്യണോ?")) {
        // localStorage-ൽ നിന്ന് ലിസ്റ്റ് എടുക്കുന്നു
        let currentList = JSON.parse(localStorage.getItem(`${studentName}_${type}_links`)) || [];
        
        // തിരഞ്ഞെടുത്ത ഇൻഡക്സിലുള്ള ഐറ്റം ഒഴിവാക്കുന്നു
        currentList.splice(index, 1);
        
        // പുതിയ ലിസ്റ്റ് സേവ് ചെയ്യുന്നു
        localStorage.setItem(`${studentName}_${type}_links`, JSON.stringify(currentList));
        
        // പേജ് അപ്ഡേറ്റ് ചെയ്യുന്നു
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
                    <div class="small">
                        <span class="fw-bold text-primary">ID:</span> 
                        <span class="text-dark">${savedApaar.id}</span>
                    </div>
                    <div class="small">
                        <span class="fw-bold text-primary">PASS:</span> 
                        <span class="text-dark">${savedApaar.pass}</span>
                    </div>
                </div>
            </div>`;
        
        // displayName കാണിക്കുന്ന എലമെന്റിന് താഴെ ഇത് ചേർക്കുന്നു
        document.getElementById('displayName').insertAdjacentHTML('afterend', apaarHtml);
        const dateStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
        if (document.getElementById('currentDateDisplay')) {
            document.getElementById('currentDateDisplay').textContent = dateStr;
        }

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
                        const res = calculatePass(courseId, studentName);
                        if (isPublished) {
                            if (res === "PASS") {
                                const mInt = parseFloat(document.getElementById(`maxInt_${courseId}`).value) || 0;
                                const mExt = parseFloat(document.getElementById(`maxExt_${courseId}`).value) || 0;
                                const totalMax = mInt + mExt;

                                if (totalMax === 100) {
                                    totalCreditsEarned += 4;
                                } else if (totalMax === 75) {
                                    totalCreditsEarned += 3;
                                } else if (totalMax >= 175) {
                                    totalCreditsEarned += 3;
                                }
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

        if (document.getElementById('statCredits')) document.getElementById('statCredits').textContent = totalCreditsEarned;
        if (document.getElementById('statBackPapers')) document.getElementById('statBackPapers').textContent = totalBackPapersCount;

        // സമ്മറി കാർഡ് ലോഡ് ചെയ്യുന്നു
        displaySummaryCard(totalCreditsEarned, studentName);

        if (!hasBackPaper) {
            backList.innerHTML = `<div class="alert alert-success mt-2 small">നിലവിൽ ബാക്ക് പേപ്പറുകൾ ഇല്ല.</div>`;
        }
    };

    window.calculatePass = function(id, studentName) {
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

        localStorage.setItem(`${studentName}_${id}`, JSON.stringify({ maxInt: mInt, grantInt: gInt, maxExt: mExt, grantExt: gExt }));
        return result;
    };

    window.updateUI = function(id, studentName) {
        calculatePass(id, studentName);
        loadStudentData(studentName); 
    };

    window.changeLanguage = function(sem, studentName, selectedId) {
        if (selectedId) {
            localStorage.setItem(`${studentName}_lang_${sem}`, selectedId);
            loadStudentData(studentName);
        }
    };
});