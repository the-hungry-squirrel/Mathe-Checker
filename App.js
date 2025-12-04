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
        // Auf Mobile: Verwende den eingebetteten HTML-String mit Base64-Bildern
        // Bilder sind bereits als Base64 im HTML_CONTENT eingebettet
        setHtmlContent({ type: 'html', data: HTML_CONTENT });
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
