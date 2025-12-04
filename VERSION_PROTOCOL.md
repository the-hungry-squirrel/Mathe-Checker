# MatheChecker Version Protocol

**WICHTIG**: Bei JEDEM Build MUSS die versionCode erhöht werden!

## Aktueller Stand
- **Letzte versionCode**: 20
- **Letzte version**: 1.0.20
- **Datum**: 2025-12-04

## Build Historie

### Version 20 (versionCode 20) - 2025-12-04
- Fix: Portrait Layout (Level-Badge untereinander statt nebeneinander)
- Fix: Landscape Layout (Avatar ausgeblendet, Container volle Breite)
- Debug: Umfassendes JavaScript Error Logging hinzugefügt
- debugLog() Funktion für WebView-Kommunikation
- Try-Catch Blöcke in generateNewExercise() und renderExercises()
- Alert-Dialoge bei JavaScript-Fehlern
- Ziel: JavaScript-Probleme bei "Neues Blatt erstellen" debuggen
- Status: In Arbeit

### Version 19 (versionCode 19) - 2025-12-04
- Fix: Base64-Bilder direkt im HTML einbetten
- Entfernt: Asset.loadAsync() Ansatz (funktionierte nicht in WebView)
- Bilder werden zur Build-Zeit in Base64 konvertiert
- Vereinfachte App.js ohne dynamisches Asset-Loading
- Avatare laden endlich!
- ABER: "Neues Blatt erstellen" funktioniert nicht (keine Rechenaufgaben)
- Status: Teilweise erfolgreich

### Version 18 (versionCode 18) - 2025-12-04
- Improve mobile phone layout
- Avatar zwischen Buttons und Aufgaben auf Phones
- Level-Badge für Mobile hinzugefügt
- Bessere Bildschirmnutzung auf Phones
- NICHT GESTARTET (Version 17 wurde als 18 markiert)

### Version 17 (versionCode 17) - 2025-12-04
- Fix: WebView permissions und Asset-Loading
- Füge allowFileAccessFromFileURLs und allowUniversalAccessFromFileURLs hinzu
- Verwende Asset.loadAsync() statt Asset.fromModule()
- Debug-Logging für Bildpfad-Ersetzung
- Status: In Arbeit

### Version 16 (versionCode 16) - 2025-12-04
- Fix: Inline HTML string approach
- HTML-Content wird zur Build-Zeit als JS-String eingebettet
- Bilder werden als Assets geladen und Pfade im HTML ersetzt
- PROBLEM: Avatare laden nicht, keine Rechenzeilen, Tastatur öffnet nicht
- Status: Teilweise funktionsfähig (öffnet sich, aber UI-Probleme)

### Version 15 (versionCode 15) - 2025-12-04
- Fix: WebView loading using FileSystem approach
- HTML und Bilder werden ins lokale Dateisystem kopiert
- FEHLER: Whitescreen auf Mobile und Tablet
- Status: Fehlgeschlagen

### Version 14 (versionCode 14) - 2025-12-04
- Versuch: Asset.loadAsync() Ansatz
- FEHLER: versionCode wurde nicht richtig erhöht (app.config.js noch auf 12)
- Build wurde verworfen

### Version 13 (versionCode 13) - 2025-12-04
- Versuch: Inline HTML mit Asset loading
- FEHLER: Asset-Loading-Logik fehlerhaft

### Version 12 (versionCode 12) - 2025-12-04
- Initial release auf Play Store
- FEHLER: ERR_CLEARTEXT_NOT_PERMITTED beim Öffnen

### Version 11 (versionCode 11) - 2025-12-04
- Erste Implementierung
- FEHLER: ERR_CLEARTEXT_NOT_PERMITTED

## Regel für zukünftige Builds

**VOR jedem `eas build` Befehl:**

1. Öffne `app.json` und erhöhe `versionCode` um 1
2. Öffne `app.config.js` und erhöhe `versionCode` um 1
3. Aktualisiere `version` in beiden Dateien auf gleichen Wert
4. Aktualisiere dieses Protokoll mit der neuen Version
5. Committe die Änderungen
6. DANN erst: `eas build --platform android --profile production`

**NÄCHSTE versionCode muss sein: 21**
