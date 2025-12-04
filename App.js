import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';
import { HTML_CONTENT } from './htmlContent';

export default function App() {
  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    loadHtml();
  }, []);

  const loadHtml = async () => {
    try {
      if (Platform.OS === 'web') {
        // Im Web: Lade HTML direkt
        const htmlAsset = require('./assets/index.html');
        setHtmlContent({ type: 'url', data: htmlAsset });
      } else {
        // Auf Mobile: Verwende den eingebetteten HTML-String
        // Lade Bilder als Assets
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

        // Ersetze Bildpfade im HTML
        const avatarNames = [
          'ninjamale1', 'ninjamale2', 'ninjamale3', 'ninjamale4',
          'ninjafemale1', 'ninjafemale2', 'ninjafemale3', 'ninjafemale4'
        ];

        let modifiedHtml = HTML_CONTENT;
        avatarNames.forEach((name, index) => {
          const asset = avatarAssets[index];
          modifiedHtml = modifiedHtml.replace(
            new RegExp(`assets/${name}\\.png`, 'g'),
            asset.localUri || asset.uri
          );
        });

        setHtmlContent({ type: 'html', data: modifiedHtml });
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
        {htmlContent && htmlContent.type === 'url' ? (
          <iframe
            src={htmlContent.data}
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

  // Auf Mobile: WebView mit inline HTML
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {htmlContent && htmlContent.type === 'html' ? (
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent.data }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
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
