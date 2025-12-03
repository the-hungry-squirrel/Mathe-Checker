import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';

export default function App() {
  const [htmlUri, setHtmlUri] = useState(null);

  useEffect(() => {
    loadHtml();
  }, []);

  const loadHtml = async () => {
    try {
      if (Platform.OS === 'web') {
        // Im Web: Lade HTML direkt
        const htmlAsset = require('./assets/index.html');
        setHtmlUri(htmlAsset);
      } else {
        // Auf Mobile: Kopiere HTML und Bilder ins lokale Dateisystem
        const htmlAsset = Asset.fromModule(require('./assets/index.html'));
        await htmlAsset.downloadAsync();

        // Kopiere Bilder
        const avatarAssets = [
          Asset.fromModule(require('./assets/ninjamale1.png')),
          Asset.fromModule(require('./assets/ninjamale2.png')),
          Asset.fromModule(require('./assets/ninjamale3.png')),
          Asset.fromModule(require('./assets/ninjamale4.png')),
          Asset.fromModule(require('./assets/ninjafemale1.png')),
          Asset.fromModule(require('./assets/ninjafemale2.png')),
          Asset.fromModule(require('./assets/ninjafemale3.png')),
          Asset.fromModule(require('./assets/ninjafemale4.png')),
        ];

        await Promise.all(avatarAssets.map(asset => asset.downloadAsync()));

        // Lese HTML-Inhalt
        const htmlContent = await FileSystem.readAsStringAsync(htmlAsset.localUri);

        // Ersetze Bildpfade
        const avatarNames = [
          'ninjamale1', 'ninjamale2', 'ninjamale3', 'ninjamale4',
          'ninjafemale1', 'ninjafemale2', 'ninjafemale3', 'ninjafemale4'
        ];

        let modifiedHtml = htmlContent;
        avatarNames.forEach((name, index) => {
          const asset = avatarAssets[index];
          modifiedHtml = modifiedHtml.replace(
            new RegExp(`assets/${name}\\.png`, 'g'),
            asset.localUri
          );
        });

        // Speichere modifizierte HTML-Datei
        const modifiedHtmlPath = `${FileSystem.documentDirectory}index.html`;
        await FileSystem.writeAsStringAsync(modifiedHtmlPath, modifiedHtml);

        setHtmlUri(modifiedHtmlPath);
      }
    } catch (error) {
      console.error('Error loading HTML:', error);
    }
  };

  if (Platform.OS === 'web') {
    // Im Web: Rendere als iframe
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {htmlUri ? (
          <iframe
            src={htmlUri}
            style={{
              width: '100%',
              height: '100vh',
              border: 'none',
            }}
          />
        ) : null}
      </View>
    );
  }

  // Auf Mobile: WebView verwenden
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {htmlUri ? (
        <WebView
          originWhitelist={['*']}
          source={{ uri: htmlUri }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
