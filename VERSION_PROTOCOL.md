# MatheChecker Version Protocol

**WICHTIG**: Bei JEDEM Build MUSS die versionCode erhöht werden!

## Aktueller Stand
- **Letzte versionCode**: 15
- **Letzte version**: 1.0.15
- **Datum**: 2025-12-04

## Build Historie

### Version 15 (versionCode 15) - 2025-12-04
- Fix: WebView loading using FileSystem approach
- HTML und Bilder werden ins lokale Dateisystem kopiert
- Vermeidet ERR_CLEARTEXT_NOT_PERMITTED Fehler
- Status: In Arbeit

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

**NÄCHSTE versionCode muss sein: 16**
