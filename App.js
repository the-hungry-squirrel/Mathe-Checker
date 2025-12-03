import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';

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
        // Auf Mobile: Lade HTML als Asset und ersetze Bildpfade mit lokalen URIs
        const [htmlAsset, ...avatarAssets] = await Asset.loadAsync([
          require('./assets/index.html'),
          require('./assets/ninjamale1.png'),
          require('./assets/ninjamale2.png'),
          require('./assets/ninjamale3.png'),
          require('./assets/ninjamale4.png'),
          require('./assets/ninjafemale1.png'),
          require('./assets/ninjafemale2.png'),
          require('./assets/ninjafemale3.png'),
          require('./assets/ninjafemale4.png'),
        ]);

        // Lade HTML-Inhalt
        const response = await fetch(htmlAsset[0].localUri);
        let htmlText = await response.text();

        // Ersetze relative Bildpfade mit absoluten Asset-URIs
        const avatarNames = [
          'ninjamale1', 'ninjamale2', 'ninjamale3', 'ninjamale4',
          'ninjafemale1', 'ninjafemale2', 'ninjafemale3', 'ninjafemale4'
        ];

        avatarNames.forEach((name, index) => {
          const asset = avatarAssets[index];
          htmlText = htmlText.replace(
            new RegExp(`assets/${name}\\.png`, 'g'),
            asset.localUri || asset.uri
          );
        });

        setHtmlContent({ type: 'html', data: htmlText });
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

  // Auf Mobile: WebView verwenden
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {htmlContent && htmlContent.type === 'html' ? (
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent.data, baseUrl: '' }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mixedContentMode="always"
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
