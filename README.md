# MatheChecker - Android App

Eine Lernapp zum Kopfrechnen für Android, erstellt mit Expo/React Native.

## 📱 Features
- Kettenerechnungen mit 10 Eingabefeldern pro Reihe
- Modi: Addition/Subtraktion und Multiplikation/Division
- Zahlenraum: bis 10 oder bis 100
- Intelligente Aufgabengenerierung mit Fokus auf schwierige Multiplikationstabellen (3,4,6,7,8)
- Farbcodierte Fehlerprüfung (Grün/Rot/Gelb)
- Herausforderungs-System für Fehleraufgaben
- Druckfunktion als PDF (A4 Querformat)

## 🚀 Installation & Build

### Voraussetzungen
- Node.js installiert
- Expo Account (kostenlos bei expo.dev)
- EAS CLI installiert: `npm install -g eas-cli`

### 1. Expo Login
```bash
cd MatheCheckerExpo
eas login
```

### 2. Projekt-ID erstellen
```bash
eas build:configure
```
Dies erstellt automatisch ein Expo-Projekt und trägt die Project-ID in app.json ein.

### 3. AAB-Datei für Google Play Store bauen
```bash
eas build --platform android --profile production
```

Dies startet einen Cloud-Build und erstellt eine `.aab` Datei (Android App Bundle), die du direkt in der Google Play Console hochladen kannst.

### 4. APK für Testing bauen (optional)
```bash
eas build --platform android --profile preview
```

Dies erstellt eine `.apk` Datei zum direkten Installieren auf Android-Geräten.

## 📦 Build-Status überprüfen
Nach dem Build-Start kannst du den Status verfolgen unter:
- https://expo.dev/accounts/[dein-username]/projects/mathechecker/builds

## 📥 Download
Nach erfolgreichem Build kannst du die AAB/APK-Datei über das Expo-Dashboard oder den Link in der Konsole herunterladen.

## 🎮 Lokales Testen
```bash
# Development Build starten
npx expo start

# Android-Emulator (falls installiert)
npx expo run:android

# Oder mit Expo Go App auf echtem Gerät
# QR-Code scannen nach 'npx expo start'
```

## 📱 Google Play Console Upload

1. Melde dich in der [Google Play Console](https://play.google.com/console) an
2. Erstelle eine neue App oder wähle eine bestehende
3. Gehe zu "Release" → "Production" → "Create new release"
4. Lade die `.aab` Datei hoch
5. Fülle die Store-Listing-Informationen aus:
   - App-Name: MatheChecker
   - Kurzbeschreibung: Kopfrechnen trainieren mit intelligenten Aufgaben
   - Icon: MatheChecker.png (bereits im Projekt integriert)
   - Screenshots: Erstelle Screenshots mit dem Emulator oder echtem Gerät

## 🔧 Konfiguration

### App-Details ändern (app.json)
- `name`: App-Name
- `version`: Versionsnummer
- `android.package`: Bundle-Identifier (muss eindeutig sein)
- `android.versionCode`: Interne Versionsnummer (erhöhen bei Updates)

### Icon ändern
Ersetze `assets/icon.png` mit deinem Logo (1024x1024px empfohlen)

## 📝 Lizenz
Alle Rechte vorbehalten.
