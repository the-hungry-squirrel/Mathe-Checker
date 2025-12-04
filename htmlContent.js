// Auto-generated file - do not edit manually
// Generated from assets/index.html

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
                padding-right: 100px; /* Platz für Avatar */
                min-height: 100vh;
            }

            /* Avatar rechts oben, kleiner */
            .avatar-container {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 80px;
                height: 80px;
                z-index: 100;
            }

            .avatar-img {
                width: 100%;
                height: 100%;
            }

            .gender-selector {
                font-size: 10px;
                padding: 2px 5px;
            }

            .level-badge {
                font-size: 10px;
                padding: 2px 5px;
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
                    <img id="avatarImg" class="avatar-img" src="assets/ninjamale1.png" alt="Avatar">
                    <div class="avatar-info">
                        <div class="gender-selector" onclick="toggleGender()">
                            <span id="genderLabel">M</span>
                        </div>
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
        // User-Profil-System
        let currentUser = null;
        let userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');

        // Avatar und Level-System
        let avatarGender = localStorage.getItem('avatarGender') || 'male';
        let userLevel = 1;
        let perfectSheetsInRow = 0; // Zähler für fehlerfreie Blätter in Folge

        let currentExercises = [];
        let errorCards = [];
        let challengeCards = [];

        // Beim Laden: Prüfe ob bereits ein User gesetzt ist
        window.addEventListener('load', function() {
            updateUserDropdown();
            const lastUser = localStorage.getItem('lastUser');
            if (lastUser && userProfiles[lastUser]) {
                currentUser = lastUser;
                loadUserProfile();
                loadPageState();
            }
            updateRangeOptions();
            updateAvatar();
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

            currentExercises = createChains(operation, range);
            renderExercises();
            savePageState();
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
            const area = document.getElementById('exerciseArea');
            area.innerHTML = '';

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
