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
        const avatarModules = [
          require('./assets/ninjamale1.png'),
          require('./assets/ninjamale2.png'),
          require('./assets/ninjamale3.png'),
          require('./assets/ninjamale4.png'),
          require('./assets/ninjafemale1.png'),
          require('./assets/ninjafemale2.png'),
          require('./assets/ninjafemale3.png'),
          require('./assets/ninjafemale4.png'),
        ];

        const avatarAssets = await Asset.loadAsync(avatarModules);

        // Ersetze Bildpfade im HTML
        const avatarNames = [
          'ninjamale1', 'ninjamale2', 'ninjamale3', 'ninjamale4',
          'ninjafemale1', 'ninjafemale2', 'ninjafemale3', 'ninjafemale4'
        ];

        let modifiedHtml = HTML_CONTENT;
        avatarNames.forEach((name, index) => {
          const asset = avatarAssets[index];
          const uri = asset.localUri || asset.uri;
          console.log(`Replacing assets/${name}.png with ${uri}`);
          modifiedHtml = modifiedHtml.replace(
            new RegExp(`assets/${name}\\.png`, 'g'),
            uri
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
          source={{ html: htmlContent.data, baseUrl: '' }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode="always"
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('WebView error: ', nativeEvent);
          }}
          onMessage={(event) => {
            console.log('WebView message:', event.nativeEvent.data);
          }}
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
