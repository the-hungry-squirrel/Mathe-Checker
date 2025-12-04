// Auto-generated file - do not edit manually
// Generated from assets/index.html with base64-encoded images

export const HTML_CONTENT = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kopfrechnen</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            position: relative;
        }

        .header {
            margin-bottom: 20px;
            position: relative;
        }

        .top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .navigation {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
        }

        .avatar-container {
            width: 196px;
            height: 196px;
            border: 3px solid #ddd;
            border-radius: 10px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
        }

        .avatar-content {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
        }

        .avatar-img {
            flex: 1;
            max-width: 130px;
            height: auto;
            object-fit: contain;
        }

        .avatar-info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
        }

        .gender-selector {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: #f0f0f0;
            border: 2px solid #ddd;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
        }

        .gender-selector:hover {
            background-color: #e0e0e0;
        }

        .level-badge {
            font-weight: bold;
            font-size: 16px;
            color: #000;
            transition: transform 0.3s, color 0.3s;
        }

        .nav-button {
            padding: 10px 20px;
            font-size: 14px;
            border: 2px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            background-color: white;
            font-weight: bold;
            height: 40px;
        }

        .nav-button.active {
            background-color: #888;
            color: white;
            border-color: #888;
        }

        .page {
            display: none;
        }

        .page.active {
            display: block;
        }

        .student-info {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 25px;
        }

        .info-field {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .info-field label {
            font-weight: bold;
            font-size: 14px;
            white-space: nowrap;
        }

        .info-field input, .info-field select {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            height: 40px;
        }

        .commit-btn {
            width: 30px !important;
            height: 30px !important;
            min-width: 30px !important;
            padding: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .controls {
            display: flex;
            gap: 15px;
            align-items: end;
            margin-bottom: 25px;
        }

        .control-row-1, .control-row-2 {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 25px;
        }

        .control-group {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .control-group label {
            font-weight: bold;
            font-size: 14px;
            white-space: nowrap;
        }

        .control-group input {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            height: 40px;
        }

        select {
            padding: 10px;
            font-size: 14px;
            border: 2px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            height: 40px;
        }

        button {
            padding: 10px 20px;
            font-size: 14px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            height: 40px;
        }

        button.new-sheet {
            background-color: #888;
            color: white;
        }

        button.check {
            background-color: #4CAF50;
            color: white;
        }

        button.secondary {
            background-color: #2196F3;
            color: white;
        }

        button.commit-btn {
            background-color: #4CAF50;
            color: white;
            padding: 8px 12px;
            font-size: 18px;
            min-width: 40px;
        }

        button.commit-btn:hover {
            background-color: #45a049;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            transition: grid-template-columns 0.3s;
        }

        .main-content.with-cards {
            grid-template-columns: 1fr 300px;
        }

        .exercise-area {
            margin-bottom: 20px;
            margin-left: 0;
            padding-left: 0;
            margin-top: 110px;
        }

        .chain-row {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            opacity: 0.2;
            transition: opacity 0.3s;
            gap: 5px;
            margin-left: 0;
            padding-left: 0;
        }

        .chain-row.active {
            opacity: 1;
        }

        .start-value {
            font-weight: bold;
            font-size: 16px;
            text-align: left;
            margin-right: 10px;
            color: #555;
        }

        .chain-step {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .operator-display {
            font-size: 16px;
            font-weight: bold;
            color: #555;
        }

        .result-input {
            width: 70px;
            height: 40px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            border: 2px solid #ddd;
            border-radius: 5px;
            padding: 5px;
            flex-shrink: 0;
        }

        .result-input.correct {
            background-color: #90EE90;
            border-color: #4CAF50;
        }

        .result-input.error {
            background-color: #FFB6B6;
            border-color: #f44336;
        }

        .result-input.follow-error {
            background-color: #BBDEFB;
            border-color: #2196F3;
        }

        .buttons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .cards-section {
            padding: 20px;
            background-color: #e0e0e0;
            border-radius: 10px;
            display: none;
            margin-top: 40px;
        }

        .cards-section.visible {
            display: block;
        }

        .cards-section h3 {
            margin-bottom: 15px;
            color: #f57c00;
            text-align: center;
        }

        .cards-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .practice-card {
            background-color: white;
            border: 2px solid #f57c00;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }

        .challenge-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .challenge-card {
            background-color: #fff3e0;
            border: 3px solid #f57c00;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
        }

        .challenge-task {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }

        .challenge-input {
            width: 100px;
            height: 50px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            border: 2px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
        }

        .challenge-card.correct {
            background-color: #90EE90;
            border-color: #4CAF50;
        }

        .challenge-card.wrong {
            background-color: #FFB6B6;
            border-color: #f44336;
        }

        .challenge-status {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
        }

        /* Auf Herausforderungs-Seite: Nur Navigation sichtbar */
        #page-herausforderung.active ~ .header .student-info,
        #page-herausforderung.active ~ .header .controls {
            display: none !important;
        }

        .page-herausforderung-active .student-info,
        .page-herausforderung-active .controls {
            display: none !important;
        }

        .empty-state {
            text-align: center;
            margin-top: 100px;
            font-size: 18px;
            color: #666;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }

            .container {
                padding: 15px;
                min-height: 100vh;
            }

            /* Avatar zwischen Buttons und Rechenaufgaben */
            .avatar-container {
                position: relative;
                top: auto;
                right: auto;
                width: 120px;
                height: 120px;
                margin: 15px auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .avatar-content {
                flex-direction: column;
                align-items: center;
                gap: 5px;
            }

            .avatar-img {
                width: 80px;
                height: 80px;
            }

            .avatar-info {
                flex-direction: column;
                gap: 8px;
                align-items: center;
            }

            .gender-selector {
                font-size: 12px;
                width: 30px;
                height: 30px;
            }

            .level-badge {
                display: none !important;
            }

            .level-badge-mobile {
                display: none !important;  /* Auch mobile Badge ausblenden */
            }

            /* Einheitliche Abstände für alle Zeilen */
            .header {
                margin-bottom: 0;
            }

            /* Zeile 1: Navigation */
            .navigation {
                display: flex;
                flex-direction: row;
                gap: 8px;
                margin-bottom: 8px;
            }

            .nav-button {
                padding: 10px;
                font-size: 14px;
                flex: 1;
            }

            /* Zeile 2: Name, Klasse */
            .student-info {
                display: flex;
                flex-direction: row;
                gap: 8px;
                margin-bottom: 8px;
                align-items: stretch;
            }

            .student-info .info-field {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .student-info label {
                font-size: 14px;
                margin-bottom: 4px;
            }

            .student-info input,
            .student-info select {
                padding: 10px;
                font-size: 14px;
                width: 100%;
                height: 40px;
            }

            #currentUserDisplay {
                font-size: 14px;
                padding: 10px;
                height: 40px;
                display: flex;
                align-items: center;
            }

            .commit-btn {
                padding: 10px;
                font-size: 14px;
            }

            /* Zeile 3: Rechenart, Zahlenraum - IN EINER ZEILE */
            .control-row-1 {
                display: flex;
                flex-direction: row;
                gap: 8px;
                margin-bottom: 8px;
            }

            .control-row-1 .control-group {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .control-row-1 label {
                font-size: 14px;
                margin-bottom: 4px;
            }

            .control-row-1 select {
                width: 100%;
                padding: 10px;
                font-size: 14px;
                height: 40px;
            }

            /* Zeile 4: Zeit, Start - IN EINER ZEILE */
            .control-row-2 {
                display: flex;
                flex-direction: row;
                gap: 8px;
                margin-bottom: 8px;
                align-items: flex-end;
            }

            .control-row-2 .control-group {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            .control-row-2 label {
                font-size: 14px;
                margin-bottom: 4px;
            }

            .control-row-2 input {
                width: 100%;
                padding: 10px;
                font-size: 14px;
                height: 40px;
            }

            .control-row-2 button {
                padding: 10px;
                font-size: 14px;
                height: 40px;
                flex: 1;
            }

            #stopTimerBtn {
                padding: 10px;
                font-size: 14px;
                height: 40px;
            }

            #timerDisplay {
                font-size: 14px;
                padding: 10px;
                height: 40px;
                display: flex;
                align-items: center;
            }

            /* Zeile 5: Neues Blatt erstellen, Prüfen */
            .controls {
                display: flex;
                flex-direction: row;
                gap: 8px;
                margin-bottom: 15px;
            }

            .controls button {
                flex: 1;
                padding: 10px;
                font-size: 14px;
                height: 40px;
            }

            /* Übungsbereich */
            .exercise-area {
                margin: 0;
                margin-top: 0;
                padding: 0;
                overflow-x: auto;
            }

            .chain-row {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 15px;
                padding: 8px;
                gap: 5px;
            }

            .start-value {
                font-size: 14px;
                min-width: 40px;
            }

            .chain-step {
                display: flex;
                align-items: center;
                gap: 3px;
            }

            .operator-display {
                font-size: 14px;
            }

            .result-input {
                width: 60px;
                padding: 8px;
                font-size: 14px;
            }

            /* Karten-Bereich */
            #cardsSection {
                margin-top: 20px;
            }

            .error-card,
            .challenge-card {
                padding: 10px;
                font-size: 14px;
            }

            .cards-section h3 {
                font-size: 16px;
            }
        }

        /* Landscape Mode - Container passt sich der Breite der Rechenaufgaben an */
        @media (orientation: landscape) and (max-width: 1024px) {
            body {
                padding: 5px;
            }

            .container {
                max-width: none;
                width: auto;
                margin: 0 auto;
                padding: 10px;
            }

            /* Avatar im Landscape ausblenden */
            .avatar-container {
                display: none;
            }

            /* Header kompakter */
            .header {
                margin-bottom: 10px;
            }

            .navigation {
                margin-bottom: 10px;
            }

            .controls {
                margin-bottom: 10px;
            }

            /* Rechenaufgaben volle Breite */
            .exercise-area {
                width: 100%;
                overflow-x: auto;
            }

            .chain-row {
                width: 100%;
                justify-content: flex-start;
            }
        }

        @media print {
            .controls, .buttons, .header {
                display: none !important;
            }
            .chain-row {
                opacity: 1 !important;
            }
            @page {
                size: A4 landscape;
                margin: 15mm;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <!-- Avatar ganz rechts oben (absolute Position) -->
            <div class="avatar-container">
                <div class="avatar-content">
                    <img id="avatarImg" class="avatar-img" src="data:image/png;base64,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" alt="Avatar">
                    <div class="avatar-info">
                        <div class="gender-selector" onclick="toggleGender()">
                            <span id="genderLabel">M</span>
                        </div>
                        <div class="level-badge-mobile" id="levelBadgeMobile" style="display: none;">Level 1</div>
                    </div>
                </div>
            </div>

            <!-- Zeile 1: Navigation links, Level rechts -->
            <div class="top-row">
                <div class="navigation">
                    <button class="nav-button active" onclick="showPage('kopfrechnen')">Kopfrechnen</button>
                    <button class="nav-button" onclick="showPage('herausforderung')">Meine Herausforderung</button>
                </div>
                <div class="level-badge" id="levelBadge">Level 1</div>
            </div>

            <!-- Zeile 2: Name, Klasse -->
            <div class="student-info">
                <div class="info-field">
                    <label for="userSelect">Name:</label>
                    <select id="userSelect" onchange="selectUser(this.value)" style="display:none;">
                        <option value="">Wähle Benutzer...</option>
                    </select>
                    <input type="text" id="studentName" placeholder="Neuer Name" style="display:none;">
                    <button id="commitNameBtn" class="commit-btn" onclick="commitUserName()" title="Name bestätigen" style="display:none;">✓</button>
                    <span id="currentUserDisplay" style="font-weight: bold; cursor: pointer;" ondblclick="unlockUserName()">Kein Benutzer</span>
                </div>
                <div class="info-field">
                    <label for="studentClass">Klasse:</label>
                    <input type="text" id="studentClass" placeholder="Klasse" style="width: 80px;">
                </div>
            </div>

            <!-- Zeile 3: Rechenart, Zahlenraum -->
            <div class="control-row-1">
                <div class="control-group">
                    <label for="operation">Rechenart:</label>
                    <select id="operation">
                        <option value="add-sub">Addition / Subtraktion</option>
                        <option value="mul-div">Multiplikation / Division</option>
                    </select>
                </div>
                <div class="control-group">
                    <label for="range">Zahlenraum:</label>
                    <select id="range">
                        <option value="10">Bis 10</option>
                        <option value="100" selected>Bis 100</option>
                    </select>
                </div>
            </div>

            <!-- Zeile 4: Zeit, Start -->
            <div class="control-row-2">
                <div class="control-group">
                    <label for="timer">Zeit (Min):</label>
                    <input type="number" id="timerInput" value="10" style="width: 60px;" min="1" max="60">
                </div>
                <button onclick="startTimer()" style="padding: 8px 12px;">Start</button>
                <button id="stopTimerBtn" onclick="stopTimer()" style="padding: 8px 12px; display: none;">Stop</button>
                <span id="timerDisplay" style="font-weight: bold; margin-left: 10px; display: none;"></span>
            </div>

            <!-- Zeile 5: Neues Blatt erstellen, Prüfen -->
            <div class="controls">
                <button class="new-sheet" onclick="generateNewExercise()">Neues Blatt erstellen</button>
                <button class="check" id="checkButton" onclick="checkAnswers()">Prüfen</button>
            </div>
        </div>

        <!-- Kopfrechnen Seite -->
        <div id="page-kopfrechnen" class="page active">

            <div class="main-content" id="mainContent">
                <div>
                    <div class="exercise-area" id="exerciseArea"></div>

                    <div class="buttons">
                        <button class="secondary" onclick="window.print()">Blatt drucken (PDF)</button>
                    </div>
                </div>

                <div class="cards-section" id="cardsSection">
                    <h3>Kärtchen zum Üben:</h3>
                    <div class="cards-container" id="cardsContainer"></div>
                </div>
            </div>
        </div>

        <!-- Meine Herausforderung Seite -->
        <div id="page-herausforderung" class="page">
            <h2 style="text-align: center; margin-bottom: 20px;">Übe deine schwierigen Aufgaben!</h2>
            <div id="challengeArea" class="challenge-grid"></div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="check" onclick="checkChallenges()">Prüfen</button>
            </div>
        </div>
    </div>

    <script>
        // Debug-Logging für WebView
        function debugLog(message) {
            console.log('[MatheChecker]', message);
            try {
                if (window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'log', message: message}));
                }
            } catch (e) {
                console.error('Failed to post message:', e);
            }
        }

        // Global error handler
        window.addEventListener('error', function(event) {
            debugLog('ERROR: ' + event.message + ' at ' + event.filename + ':' + event.lineno);
        });

        debugLog('Script started');

        // Safe localStorage wrapper
        const safeLocalStorage = {
            getItem: function(key) {
                try {
                    return localStorage.getItem(key);
                } catch (e) {
                    debugLog('localStorage.getItem(' + key + ') failed: ' + e.message);
                    return null;
                }
            },
            setItem: function(key, value) {
                try {
                    localStorage.setItem(key, value);
                    return true;
                } catch (e) {
                    debugLog('localStorage.setItem(' + key + ') failed: ' + e.message);
                    return false;
                }
            },
            removeItem: function(key) {
                try {
                    localStorage.removeItem(key);
                    return true;
                } catch (e) {
                    debugLog('localStorage.removeItem(' + key + ') failed: ' + e.message);
                    return false;
                }
            }
        };

        // User-Profil-System
        let currentUser = null;
        let userProfiles = {};

        try {
            const stored = safeLocalStorage.getItem('userProfiles');
            userProfiles = JSON.parse(stored || '{}');
            debugLog('LocalStorage loaded successfully: ' + Object.keys(userProfiles).length + ' profiles');
        } catch (e) {
            debugLog('LocalStorage ERROR: ' + e.message);
            userProfiles = {};
        }

        // Avatar und Level-System
        let avatarGender = 'male';
        let userLevel = 1;
        let perfectSheetsInRow = 0; // Zähler für fehlerfreie Blätter in Folge

        let currentExercises = [];
        let errorCards = [];
        let challengeCards = [];

        avatarGender = safeLocalStorage.getItem('avatarGender') || 'male';
        debugLog('Avatar gender: ' + avatarGender);

        // Initialisierung - sowohl für load als auch DOMContentLoaded
        function initializeApp() {
            debugLog('initializeApp() called');
            try {
                updateUserDropdown();

                const lastUser = safeLocalStorage.getItem('lastUser');
                if (lastUser && userProfiles[lastUser]) {
                    currentUser = lastUser;
                    loadUserProfile();
                    loadPageState();
                } else {
                    debugLog('No last user found or user not in profiles');
                }

                updateRangeOptions();
                updateAvatar();
                debugLog('App initialized successfully');
            } catch (e) {
                debugLog('ERROR in initializeApp: ' + e.message);
            }
        }

        // Mehrere Event-Listener für maximale Kompatibilität
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            // DOM already loaded
            initializeApp();
        }

        window.addEventListener('load', function() {
            debugLog('Window load event fired');
        });

        function updateUserDropdown() {
            const userSelect = document.getElementById('userSelect');
            userSelect.innerHTML = '<option value="">Wähle Benutzer...</option><option value="__new__">+ Neuer Benutzer</option>';

            Object.keys(userProfiles).forEach(username => {
                const option = document.createElement('option');
                option.value = username;
                option.textContent = username;
                userSelect.appendChild(option);
            });
        }

        function selectUser(username) {
            const nameInput = document.getElementById('studentName');
            const commitBtn = document.getElementById('commitNameBtn');
            const userSelect = document.getElementById('userSelect');
            const userDisplay = document.getElementById('currentUserDisplay');

            if (username === '__new__') {
                // Neuen Benutzer erstellen
                nameInput.style.display = 'inline-block';
                commitBtn.style.display = 'inline-block';
                userSelect.style.display = 'none';
                userDisplay.style.display = 'none';
                nameInput.value = '';
                nameInput.focus();
            } else if (username) {
                // Existierenden User auswählen
                currentUser = username;
                localStorage.setItem('lastUser', username);
                loadUserProfile();
                userSelect.style.display = 'none';
                userDisplay.style.display = 'inline-block';
            }
        }

        function toggleGender() {
            avatarGender = avatarGender === 'male' ? 'female' : 'male';
            document.getElementById('genderLabel').textContent = avatarGender === 'male' ? 'M' : 'W';

            // Speichere Avatar-Geschlecht im User-Profil
            if (currentUser && userProfiles[currentUser]) {
                userProfiles[currentUser].avatarGender = avatarGender;
                localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
            }

            updateAvatar();
        }

        function updateAvatar() {
            const avatarImg = document.getElementById('avatarImg');
            const levelBadge = document.getElementById('levelBadge');
            const genderLabel = document.getElementById('genderLabel');

            // Load Level aus User-Profil
            if (currentUser && userProfiles[currentUser]) {
                userLevel = userProfiles[currentUser].level || 1;
                perfectSheetsInRow = userProfiles[currentUser].perfectSheetsInRow || 0;
            }

            avatarImg.src = \`assets/ninja\${avatarGender}\${userLevel}.png\`;
            levelBadge.textContent = \`Level \${userLevel}\`;
            const levelBadgeMobile = document.getElementById('levelBadgeMobile');
            if (levelBadgeMobile) levelBadgeMobile.textContent = \`Level \${userLevel}\`;
            genderLabel.textContent = avatarGender === 'male' ? 'M' : 'W';
        }

        function updateLevel(hadErrors, totalTasks, correctTasks) {
            if (!currentUser) return;

            // Prüfe Level-Bedingungen: >95% richtig UND in ≤10 Minuten
            const successRate = (correctTasks / totalTasks) * 100;
            const timeUsed = timerStartTime - remainingSeconds;
            const qualifiesForLevel = successRate > 95 && timerWasUsed && timerStartTime === 600 && timeUsed <= 600;

            if (hadErrors || !qualifiesForLevel) {
                // Bei Fehlern oder nicht erfüllter Bedingung: Streak zurücksetzen
                perfectSheetsInRow = 0;
            } else {
                // Bedingung erfüllt: Streak erhöhen
                perfectSheetsInRow++;

                // Level-Aufstieg prüfen
                if (perfectSheetsInRow >= 10 && userLevel < 4) {
                    userLevel = 4;
                    showLevelUpMessage('Level 4 - Ninja-Meister!');
                } else if (perfectSheetsInRow >= 6 && userLevel < 3) {
                    userLevel = 3;
                    showLevelUpMessage('Level 3 - Fortgeschrittener!');
                } else if (perfectSheetsInRow >= 3 && userLevel < 2) {
                    userLevel = 2;
                    showLevelUpMessage('Level 2 erreicht!');
                }
            }

            // Speichere Level und Streak im User-Profil
            userProfiles[currentUser].level = userLevel;
            userProfiles[currentUser].perfectSheetsInRow = perfectSheetsInRow;
            localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

            updateAvatar();
        }

        function showLevelUpMessage(message) {
            const badge = document.getElementById('levelBadge');
            badge.style.transform = 'scale(1.5)';
            badge.style.color = '#FF5722';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
                badge.style.color = '#4CAF50';
                alert('🎉 ' + message + ' 🎉');
            }, 500);
        }

        // Update Zahlenraum-Optionen basierend auf Rechenart
        function updateRangeOptions() {
            const operation = document.getElementById('operation').value;
            const rangeSelect = document.getElementById('range');
            const option10 = rangeSelect.querySelector('option[value="10"]');

            if (operation === 'mul-div') {
                // Bei Multiplikation: Nur 100er Raum
                option10.disabled = true;
                option10.style.display = 'none';
                rangeSelect.value = '100';
            } else {
                // Bei Addition/Subtraktion: Beide verfügbar
                option10.disabled = false;
                option10.style.display = 'block';
            }
        }

        // Event-Listener für Rechenart-Wechsel
        document.addEventListener('DOMContentLoaded', function() {
            const operationSelect = document.getElementById('operation');
            if (operationSelect) {
                operationSelect.addEventListener('change', updateRangeOptions);
            }
        });

        function commitUserName() {
            const nameInput = document.getElementById('studentName');
            const name = nameInput.value.trim();

            if (!name) {
                alert('Bitte gib einen Namen ein!');
                return;
            }

            // Erstelle oder lade User-Profil
            if (!userProfiles[name]) {
                userProfiles[name] = {
                    challengeCards: [],
                    level: 1,
                    perfectSheetsInRow: 0,
                    createdAt: new Date().toISOString()
                };
            }

            currentUser = name;
            localStorage.setItem('lastUser', name);
            localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

            updateUserDropdown();
            loadUserProfile();
        }

        function loadUserProfile() {
            if (!currentUser || !userProfiles[currentUser]) return;

            const profile = userProfiles[currentUser];

            // Lade Herausforderungen des Users
            challengeCards = profile.challengeCards || [];

            // Lade Avatar, Level und Streak des Users
            avatarGender = profile.avatarGender || 'male';
            userLevel = profile.level || 1;
            perfectSheetsInRow = profile.perfectSheetsInRow || 0;

            // UI Update: Zeige Namen, verstecke Input
            const nameInput = document.getElementById('studentName');
            const commitBtn = document.getElementById('commitNameBtn');
            const userDisplay = document.getElementById('currentUserDisplay');
            const userSelect = document.getElementById('userSelect');

            nameInput.style.display = 'none';
            commitBtn.style.display = 'none';
            userSelect.style.display = 'none';
            userDisplay.textContent = currentUser;
            userDisplay.style.display = 'inline-block';

            // Stoppe und setze Timer zurück beim Nutzerwechsel
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            remainingSeconds = 0;
            timerWasUsed = false;
            document.getElementById('timerDisplay').style.display = 'none';
            document.getElementById('stopTimerBtn').style.display = 'none';
            document.getElementById('timerInput').disabled = false;
            document.getElementById('timerDisplay').textContent = '';

            // Avatar sofort aktualisieren
            updateAvatar();
        }

        function unlockUserName() {
            // Doppelklick zum Ändern des Namens - zeige Dropdown
            const userSelect = document.getElementById('userSelect');
            const userDisplay = document.getElementById('currentUserDisplay');

            userSelect.style.display = 'inline-block';
            userDisplay.style.display = 'none';
            userSelect.value = '';
            userSelect.focus();
        }

        function saveUserChallenges() {
            if (!currentUser) return;

            userProfiles[currentUser].challengeCards = challengeCards;
            localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
        }

        function savePageState() {
            if (!currentUser) return;

            const inputs = document.querySelectorAll('.result-input');
            const inputValues = {};
            inputs.forEach(input => {
                const key = \`\${input.dataset.chain}-\${input.dataset.step}\`;
                inputValues[key] = input.value;
            });

            const pageState = {
                currentExercises: currentExercises,
                inputValues: inputValues,
                operation: document.getElementById('operation').value,
                range: document.getElementById('range').value,
                errorCards: errorCards
            };

            userProfiles[currentUser].pageState = pageState;
            localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
        }

        function loadPageState() {
            if (!currentUser || !userProfiles[currentUser] || !userProfiles[currentUser].pageState) return;

            const state = userProfiles[currentUser].pageState;

            // Lade Operation und Range
            if (state.operation) document.getElementById('operation').value = state.operation;
            if (state.range) document.getElementById('range').value = state.range;

            // Lade Übungen
            if (state.currentExercises && state.currentExercises.length > 0) {
                currentExercises = state.currentExercises;
                errorCards = state.errorCards || [];
                renderExercises();

                // Lade Eingabewerte
                setTimeout(() => {
                    if (state.inputValues) {
                        Object.keys(state.inputValues).forEach(key => {
                            const [chain, step] = key.split('-');
                            const input = document.querySelector(\`input[data-chain="\${chain}"][data-step="\${step}"]\`);
                            if (input) input.value = state.inputValues[key];
                        });
                    }
                }, 100);
            }
        }

        function showPage(page) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));

            document.getElementById('page-' + page).classList.add('active');
            event.target.classList.add('active');

            // Toggle Sichtbarkeit von Menüelementen auf Herausforderungs-Seite
            const container = document.querySelector('.container');
            if (page === 'herausforderung') {
                container.classList.add('page-herausforderung-active');
                renderChallenges();
            } else {
                container.classList.remove('page-herausforderung-active');
            }
        }

        function isReverseOperation(lastOp, lastOperand, currentOp, currentOperand, startValue, endValue) {
            // Prüft ob aktuelle Operation die direkte Umkehrung der vorherigen ist
            // z.B. 4×6=24 → 24÷6=4 (verboten!)
            // oder 10+5=15 → 15-5=10 (verboten!)

            if (lastOp === '×' && currentOp === '÷' && currentOperand === lastOperand) {
                return true; // 4×6 → 24÷6 verboten
            }
            if (lastOp === '÷' && currentOp === '×' && currentOperand === lastOperand) {
                return true; // 24÷6 → 4×6 verboten
            }
            if (lastOp === '+' && currentOp === '-' && currentOperand === lastOperand) {
                return true; // 10+5 → 15-5 verboten
            }
            if (lastOp === '-' && currentOp === '+' && currentOperand === lastOperand) {
                return true; // 15-5 → 10+5 verboten
            }
            return false;
        }

        function generateNewExercise() {
            try {
                debugLog('generateNewExercise() called');

                errorCards = [];
                document.getElementById('cardsSection').classList.remove('visible');
                document.getElementById('mainContent').classList.remove('with-cards');

                // Aktiviere den Prüfen-Button wieder
                const checkButton = document.getElementById('checkButton');
                if (checkButton) checkButton.disabled = false;

                // Stoppe den Timer beim Erstellen eines neuen Blattes
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                remainingSeconds = 0;
                timerWasUsed = false;
                document.getElementById('timerDisplay').style.display = 'none';
                document.getElementById('stopTimerBtn').style.display = 'none';
                document.getElementById('timerInput').disabled = false;
                document.getElementById('timerDisplay').textContent = '';

                const operation = document.getElementById('operation').value;
                const range = parseInt(document.getElementById('range').value);

                debugLog('Operation: ' + operation + ', Range: ' + range);

                currentExercises = createChains(operation, range);
                debugLog('Created ' + currentExercises.length + ' chains');

                renderExercises();
                debugLog('Exercises rendered');

                savePageState();
                debugLog('Page state saved');
            } catch (e) {
                debugLog('ERROR in generateNewExercise: ' + e.message);
                alert('Fehler beim Erstellen der Aufgaben: ' + e.message);
            }
        }

        function createChains(operation, range) {
            const chains = [];
            const challengeTasks = challengeCards.filter(c => c.operation === operation && c.range === range);

            // Max 2 Challenge-Aufgaben pro Blatt, gemischt verteilt
            const maxChallengesPerSheet = Math.min(2, challengeTasks.length);
            const challengePositions = [];
            if (maxChallengesPerSheet > 0) {
                // Verteile 2 Challenges gleichmäßig über 6 Zeilen (z.B. Zeile 1, 4)
                const spacing = Math.floor(6 / maxChallengesPerSheet);
                for (let i = 0; i < maxChallengesPerSheet; i++) {
                    challengePositions.push(i * spacing + Math.floor(Math.random() * 2)); // Kleine Variation
                }
            }

            for (let chainNum = 0; chainNum < 6; chainNum++) {
                const chain = [];
                let currentValue = Math.floor(Math.random() * 8) + 6;
                let lastOp = null;
                let lastOperand = null;

                // Prüfe ob in dieser Zeile eine Challenge-Aufgabe kommt
                let challengeInserted = false;
                const challengeIndex = challengePositions.indexOf(chainNum);
                if (challengeIndex !== -1 && challengeIndex < challengeTasks.length) {
                    const challengeTask = challengeTasks[challengeIndex];
                    chain.push({
                        startValue: challengeTask.a,
                        operator: challengeTask.op,
                        operand: challengeTask.b,
                        correctAnswer: challengeTask.answer,
                        isChallengeTask: true,
                        challengeId: challengeTask.id
                    });
                    currentValue = challengeTask.answer;
                    lastOp = challengeTask.op;
                    lastOperand = challengeTask.b;
                    challengeInserted = true;
                }

                const startStep = challengeInserted ? 1 : 0;
                for (let step = startStep; step < 10; step++) {
                    let operand, result, op;
                    let attempts = 0;
                    let valid = false;

                    while (!valid && attempts < 20) {
                        attempts++;

                        if (operation === 'add-sub') {
                            if (Math.random() < 0.5) {
                                op = '+';
                                if (currentValue < 21 && Math.random() < 0.7) {
                                    operand = Math.floor(Math.random() * 30) + 10;
                                } else if (currentValue > 70 && Math.random() < 0.6) {
                                    operand = Math.floor(Math.random() * 10) + 3;
                                } else {
                                    operand = Math.floor(Math.random() * 15) + 3;
                                }
                                result = currentValue + operand;
                            } else {
                                op = '-';
                                operand = Math.floor(Math.random() * (currentValue - 2)) + 3;
                                if (operand >= currentValue) operand = Math.max(2, currentValue - 1);
                                result = currentValue - operand;
                            }

                            if (result >= 1 && result <= range &&
                                !(op === lastOp && operand === lastOperand) &&
                                !isReverseOperation(lastOp, lastOperand, op, operand, currentValue, result)) {
                                valid = true;
                            }
                        } else {
                            // HAUPTFOKUS: Die wirklich schwierigen Aufgaben!
                            const maxFactor = 9;
                            const sweetSpotMin = 3;
                            const sweetSpotMax = 12; // Optimal für weitere Multiplikation mit 3-8

                            // Definiere SUPER-SCHWERE Aufgaben-Kombinationen (die du explizit genannt hast)
                            const superHardCombs = [
                                [4,6], [4,7], [4,8], [4,9],
                                [6,7], [6,8], [6,9],
                                [7,7], [7,8], [7,9],
                                [8,8], [8,9],
                                [9,9]
                            ];

                            // Strategie: Im Sweet Spot (3-12) bleiben für maximales Multiplikations-Training
                            let shouldMultiply = false;
                            let possibleMultOperands = [];

                            // Prüfe: Bin ich im Sweet Spot und kann ich sinnvoll multiplizieren?
                            if (currentValue >= sweetSpotMin && currentValue <= sweetSpotMax) {
                                // Im Sweet Spot -> Finde Multiplikationen die im Zahlenraum bleiben
                                for (let testOp = 3; testOp <= maxFactor; testOp++) {
                                    const testResult = currentValue * testOp;
                                    if (testResult <= range) {
                                        // Check ob diese Kombination eine super-schwere ist
                                        const isSuperHard = superHardCombs.some(([a,b]) =>
                                            (currentValue === a && testOp === b) ||
                                            (currentValue === b && testOp === a)
                                        );

                                        if (isSuperHard) {
                                            // Super-schwere Aufgaben 6x hinzufügen!
                                            for (let i = 0; i < 6; i++) possibleMultOperands.push(testOp);
                                        } else if (testOp >= 4 && testOp <= 8) {
                                            // Normale schwere Reihen (4-8) 2x
                                            possibleMultOperands.push(testOp);
                                            possibleMultOperands.push(testOp);
                                        } else if (testOp !== 3) {
                                            // Andere (außer 3) nur 1x
                                            possibleMultOperands.push(testOp);
                                        }
                                        // 3er-Reihe wird deutlich reduziert (nur wenn nix anderes geht)
                                    }
                                }
                                shouldMultiply = possibleMultOperands.length > 0;
                            }

                            if (shouldMultiply) {
                                // MULTIPLIKATION im Sweet Spot!
                                op = '×';
                                operand = possibleMultOperands[Math.floor(Math.random() * possibleMultOperands.length)];
                                result = currentValue * operand;
                            } else {
                                // Außerhalb Sweet Spot ODER zu groß -> Zurück in Sweet Spot bringen
                                // WICHTIG: Keine Division nacheinander! (da Fokus Multiplikation)
                                const useDivision = (lastOp !== '÷') && Math.random() < 0.7;

                                if (useDivision) {
                                    // Division bevorzugen (70%), aber NICHT wenn letzte auch Division war
                                    op = '÷';
                                    const divisors = [];
                                    for (let d = 2; d <= Math.min(currentValue, maxFactor); d++) {
                                        if (currentValue % d === 0) {
                                            const quotient = currentValue / d;
                                            // Quotient sollte im Sweet Spot landen (3-12)!
                                            // WICHTIG: Keine Umkehraufgabe! (4×6 → 24÷6 verboten!)
                                            if (quotient >= sweetSpotMin && quotient <= sweetSpotMax) {
                                                // Schließe direkte Umkehrung aus: wenn letzte × war, nicht mit gleichem Operand ÷
                                                if (!(lastOp === '×' && d === lastOperand)) {
                                                    divisors.push(d);
                                                    divisors.push(d);
                                                    divisors.push(d);
                                                }
                                            }
                                        }
                                    }
                                    if (divisors.length > 0) {
                                        operand = divisors[Math.floor(Math.random() * divisors.length)];
                                        result = currentValue / operand;
                                    } else {
                                        // Keine passende Division -> Subtraktion in Sweet Spot
                                        op = '-';
                                        const targetValue = Math.floor(Math.random() * (sweetSpotMax - sweetSpotMin + 1)) + sweetSpotMin;
                                        operand = currentValue - targetValue;
                                        if (operand < 1) operand = Math.floor(Math.random() * (currentValue - sweetSpotMin)) + 1;
                                        result = currentValue - operand;
                                        if (result < sweetSpotMin) result = sweetSpotMin;
                                    }
                                } else {
                                    // Subtraktion (oder wenn letzte Division war)
                                    op = '-';
                                    const targetValue = Math.floor(Math.random() * (sweetSpotMax - sweetSpotMin + 1)) + sweetSpotMin;
                                    operand = currentValue - targetValue;
                                    if (operand < 1) operand = Math.floor(Math.random() * (currentValue - sweetSpotMin)) + 1;
                                    result = currentValue - operand;
                                    if (result < sweetSpotMin) result = sweetSpotMin;
                                }
                            }

                            // Prüfung: Keine Wiederholung UND keine direkte Umkehrung
                            if (result >= 1 && result <= range && Number.isInteger(result) &&
                                !(op === lastOp && operand === lastOperand) &&
                                !isReverseOperation(lastOp, lastOperand, op, operand, currentValue, result)) {
                                valid = true;
                            }
                        }
                    }

                    if (!valid) {
                        if (operation === 'add-sub') {
                            op = '+';
                            operand = 5;
                            result = currentValue + operand;
                            if (result > range) {
                                op = '-';
                                operand = 5;
                                result = Math.max(1, currentValue - operand);
                            }
                        } else {
                            op = '÷';
                            operand = 2;
                            result = Math.floor(currentValue / operand);
                        }
                    }

                    chain.push({
                        startValue: currentValue,
                        operator: op,
                        operand: operand,
                        correctAnswer: result
                    });

                    lastOp = op;
                    lastOperand = operand;
                    currentValue = result;
                }

                chains.push(chain);
            }

            return chains;
        }

        function renderExercises() {
            try {
                debugLog('renderExercises() called');
                const area = document.getElementById('exerciseArea');
                if (!area) {
                    debugLog('ERROR: exerciseArea element not found!');
                    return;
                }
                area.innerHTML = '';
                debugLog('Rendering ' + currentExercises.length + ' exercise chains');

                currentExercises.forEach((chain, chainIndex) => {
                const row = document.createElement('div');
                row.className = 'chain-row';
                if (chainIndex === 0) row.classList.add('active');

                const startDiv = document.createElement('div');
                startDiv.className = 'start-value';
                startDiv.textContent = chain[0].startValue;
                row.appendChild(startDiv);

                chain.forEach((step, stepIndex) => {
                    const stepDiv = document.createElement('div');
                    stepDiv.className = 'chain-step';

                    const opSpan = document.createElement('span');
                    opSpan.className = 'operator-display';
                    opSpan.textContent = step.operator + step.operand + ' →';
                    if (step.isChallengeTask) {
                        opSpan.style.color = '#f57c00';
                        opSpan.style.fontWeight = 'bold';
                    }
                    stepDiv.appendChild(opSpan);

                    const input = document.createElement('input');
                    input.type = 'number';
                    input.className = 'result-input';
                    input.dataset.chain = chainIndex;
                    input.dataset.step = stepIndex;

                    if (stepIndex === 0) {
                        input.addEventListener('click', () => row.classList.add('active'));
                        input.addEventListener('focus', () => row.classList.add('active'));
                    }

                    // Pfeiltasten-Navigation
                    input.addEventListener('keydown', function(e) {
                        const inputs = Array.from(document.querySelectorAll('.result-input'));
                        const currentIndex = inputs.indexOf(this);

                        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                            e.preventDefault();
                            if (currentIndex < inputs.length - 1) {
                                inputs[currentIndex + 1].focus();
                            }
                        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                            e.preventDefault();
                            if (currentIndex > 0) {
                                inputs[currentIndex - 1].focus();
                            }
                        }
                    });

                    // Speichere bei jeder Eingabe
                    input.addEventListener('input', function() {
                        savePageState();
                    });

                    stepDiv.appendChild(input);
                    row.appendChild(stepDiv);
                });

                area.appendChild(row);
            });

            debugLog('Successfully rendered all exercises');
            } catch (e) {
                debugLog('ERROR in renderExercises: ' + e.message + ' | Stack: ' + e.stack);
                alert('Fehler beim Anzeigen der Aufgaben: ' + e.message);
            }
        }

        function checkAnswers() {
            // Deaktiviere den Prüfen-Button nach dem ersten Klick
            const checkButton = document.getElementById('checkButton');
            if (checkButton.disabled) return; // Verhindere mehrfaches Prüfen
            checkButton.disabled = true;

            const inputs = document.querySelectorAll('.result-input');
            errorCards = [];

            // Gruppiere Inputs nach Ketten
            const chains = {};
            inputs.forEach(input => {
                const chainIndex = parseInt(input.dataset.chain);
                if (!chains[chainIndex]) chains[chainIndex] = [];
                chains[chainIndex].push(input);
            });

            // Prüfe jede Kette einzeln
            Object.keys(chains).forEach(chainIndex => {
                const chainInputs = chains[chainIndex];
                let accumulatedValue = currentExercises[chainIndex][0].startValue;

                chainInputs.forEach((input, index) => {
                    if (input.value === '') return;

                    const stepIndex = parseInt(input.dataset.step);
                    const step = currentExercises[chainIndex][stepIndex];
                    const userValue = parseFloat(input.value);

                    input.classList.remove('correct', 'error', 'follow-error');

                    // Prüfe: Ist die EINZELAUFGABE richtig berechnet?
                    const isTaskCorrect = Math.abs(userValue - step.correctAnswer) < 0.01;

                    // Berechne erwartetes Ergebnis basierend auf akkumuliertem User-Wert
                    let expectedResultFromUserInput;
                    if (step.operator === '+') {
                        expectedResultFromUserInput = accumulatedValue + step.operand;
                    } else if (step.operator === '-') {
                        expectedResultFromUserInput = accumulatedValue - step.operand;
                    } else if (step.operator === '×') {
                        expectedResultFromUserInput = accumulatedValue * step.operand;
                    } else if (step.operator === '÷') {
                        expectedResultFromUserInput = accumulatedValue / step.operand;
                    }

                    const isCalculatedCorrectly = Math.abs(userValue - expectedResultFromUserInput) < 0.01;

                    if (isTaskCorrect) {
                        input.classList.add('correct');

                        // Challenge-Task korrekt gelöst
                        if (step.isChallengeTask) {
                            updateChallengeProgress(step.challengeId, true);
                        }
                    } else {
                        // Aufgabe ist falsch
                        if (isCalculatedCorrectly) {
                            // Aufgabe ist in sich richtig gerechnet, aber Eingangswert war falsch = Folgefehler
                            input.classList.add('follow-error');
                        } else {
                            // Aufgabe ist in sich FALSCH gerechnet = echter Fehler
                            input.classList.add('error');
                            errorCards.push({
                                task: \`\${accumulatedValue} \${step.operator} \${step.operand} = \${userValue} (richtig: \${expectedResultFromUserInput})\`,
                                a: accumulatedValue,
                                b: step.operand,
                                op: step.operator,
                                answer: expectedResultFromUserInput,
                                wrongAnswer: userValue
                            });
                        }

                        // Challenge-Task falsch gelöst
                        if (step.isChallengeTask) {
                            updateChallengeProgress(step.challengeId, false);
                        }
                    }

                    // Aktualisiere akkumulierten Wert mit dem User-Input für nächste Iteration
                    accumulatedValue = userValue;
                });
            });

            // Level-System: Prüfe ob Blatt fehlerfrei war und berechne Erfolgsrate
            const hadErrors = errorCards.length > 0;
            const totalTasks = inputs.length;
            const correctTasks = Array.from(inputs).filter(input => input.classList.contains('correct')).length;
            updateLevel(hadErrors, totalTasks, correctTasks);

            if (errorCards.length > 0) {
                renderErrorCards();
                // Automatisch zu Herausforderungen hinzufügen
                addToChallenges();
            } else {
                document.getElementById('cardsContainer').innerHTML = '<p style="text-align: center; color: #4CAF50; font-weight: bold;">Alles richtig! 🎉</p>';
            }
            document.getElementById('cardsSection').classList.add('visible');
            document.getElementById('mainContent').classList.add('with-cards');

            document.querySelectorAll('.chain-row').forEach(row => row.classList.add('active'));

            // Sperre alle Eingabefelder nach dem Prüfen
            lockAllInputs();
        }

        // Timer-Funktionen
        let timerInterval = null;
        let remainingSeconds = 0;
        let timerStartTime = 0;
        let timerWasUsed = false;
        let stopButtonClickCount = 0;
        let lastStopClick = 0;

        function startTimer() {
            const minutes = parseInt(document.getElementById('timerInput').value);
            if (!minutes || minutes < 1) {
                alert('Bitte gib eine gültige Zeit ein (1-60 Minuten)');
                return;
            }

            remainingSeconds = minutes * 60;
            timerStartTime = minutes * 60;
            timerWasUsed = true;
            document.getElementById('timerDisplay').style.display = 'inline';
            document.getElementById('stopTimerBtn').style.display = 'inline';
            document.getElementById('timerInput').disabled = true;

            timerInterval = setInterval(updateTimer, 1000);
            updateTimer();
        }

        function stopTimer() {
            const now = Date.now();
            if (now - lastStopClick < 500) {
                // Doppelklick erkannt - Reset
                clearInterval(timerInterval);
                timerInterval = null;
                remainingSeconds = 0;
                timerWasUsed = false;
                document.getElementById('timerDisplay').style.display = 'none';
                document.getElementById('stopTimerBtn').style.display = 'none';
                document.getElementById('timerInput').disabled = false;
                document.getElementById('timerDisplay').textContent = '';
                stopButtonClickCount = 0;
            } else {
                // Einfacher Klick - Stop
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    document.getElementById('timerDisplay').style.color = '#FFA500';
                }
            }
            lastStopClick = now;
        }

        function updateTimer() {
            if (remainingSeconds <= 0) {
                clearInterval(timerInterval);
                document.getElementById('timerDisplay').textContent = 'Zeit abgelaufen!';
                document.getElementById('timerDisplay').style.color = '#f44336';
                lockAllInputs();
                return;
            }

            const mins = Math.floor(remainingSeconds / 60);
            const secs = remainingSeconds % 60;
            document.getElementById('timerDisplay').textContent = \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
            document.getElementById('timerDisplay').style.color = remainingSeconds <= 60 ? '#f44336' : '#000';
            remainingSeconds--;
        }

        function lockAllInputs() {
            document.querySelectorAll('.result-input').forEach(input => {
                input.disabled = true;
            });
        }

        function renderErrorCards() {
            const container = document.getElementById('cardsContainer');
            container.innerHTML = '';
            errorCards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'practice-card';
                cardDiv.textContent = card.task;
                container.appendChild(cardDiv);
            });
        }

        function addToChallenges() {
            if (errorCards.length === 0) {
                return;
            }

            const operation = document.getElementById('operation').value;
            const range = parseInt(document.getElementById('range').value);

            errorCards.forEach(card => {
                const existingIndex = challengeCards.findIndex(c =>
                    c.a === card.a && c.b === card.b && c.op === card.op
                );

                if (existingIndex === -1) {
                    challengeCards.push({
                        id: Date.now() + Math.random(),
                        a: card.a,
                        b: card.b,
                        op: card.op,
                        answer: card.answer,
                        operation: operation,
                        range: range,
                        correctCount: 0
                    });
                }
            });

            saveUserChallenges();
        }

        function updateChallengeProgress(challengeId, correct) {
            const challenge = challengeCards.find(c => c.id === challengeId);
            if (challenge) {
                if (correct) {
                    challenge.correctCount++;
                    if (challenge.correctCount >= 3) {
                        challengeCards = challengeCards.filter(c => c.id !== challengeId);
                    }
                } else {
                    challenge.correctCount = 0;
                }
                saveUserChallenges();
            }
        }

        function renderChallenges() {
            const area = document.getElementById('challengeArea');
            area.innerHTML = '';

            if (challengeCards.length === 0) {
                area.innerHTML = '<div class="empty-state">Du hast noch keine Herausforderungen, mache zuerst einige Aufgaben!</div>';
                return;
            }

            challengeCards.forEach((card, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'challenge-card';

                const taskDiv = document.createElement('div');
                taskDiv.className = 'challenge-task';
                taskDiv.textContent = \`\${card.a} \${card.op} \${card.b} = ?\`;
                cardDiv.appendChild(taskDiv);

                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'challenge-input';
                input.dataset.index = index;
                cardDiv.appendChild(input);

                const statusDiv = document.createElement('div');
                statusDiv.className = 'challenge-status';
                statusDiv.textContent = \`\${card.correctCount}/3 korrekt gelöst\`;
                cardDiv.appendChild(statusDiv);

                // Hinweistext wenn schon einmal richtig gelöst
                if (card.correctCount > 0) {
                    const hintDiv = document.createElement('div');
                    hintDiv.className = 'challenge-hint';
                    hintDiv.textContent = 'Löse die Aufgabe nun in den Rechenreihen';
                    hintDiv.style.color = '#2196F3';
                    hintDiv.style.marginTop = '8px';
                    hintDiv.style.fontStyle = 'italic';
                    cardDiv.appendChild(hintDiv);
                }

                area.appendChild(cardDiv);
            });
        }

        function checkChallenges() {
            const inputs = document.querySelectorAll('.challenge-input');

            inputs.forEach(input => {
                // Überspringe bereits geprüfte Eingaben
                if (input.disabled) return;

                const index = parseInt(input.dataset.index);
                const card = challengeCards[index];
                const userValue = parseFloat(input.value);
                const cardDiv = input.closest('.challenge-card');

                if (input.value === '') return;

                if (Math.abs(userValue - card.answer) < 0.01) {
                    cardDiv.classList.remove('wrong');
                    cardDiv.classList.add('correct');
                    card.correctCount++;

                    // Deaktiviere das Eingabefeld nach korrekter Antwort
                    input.disabled = true;

                    if (card.correctCount >= 3) {
                        setTimeout(() => {
                            challengeCards.splice(index, 1);
                            saveUserChallenges();
                            renderChallenges();
                        }, 1000);
                    }
                } else {
                    cardDiv.classList.remove('correct');
                    cardDiv.classList.add('wrong');
                    card.correctCount = 0;
                }

                const statusDiv = cardDiv.querySelector('.challenge-status');
                statusDiv.textContent = \`\${card.correctCount}/3 korrekt gelöst\`;
            });

            saveUserChallenges();
        }

        generateNewExercise();
    </script>
</body>
</html>
`;
