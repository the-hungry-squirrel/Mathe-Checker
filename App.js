import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';

export default function App() {
  const [htmlSource, setHtmlSource] = useState(null);

  useEffect(() => {
    loadHtml();
  }, []);

  const loadHtml = async () => {
    if (Platform.OS === 'web') {
      // Im Web: Lade HTML direkt
      const htmlAsset = require('./assets/index.html');
      setHtmlSource({ uri: htmlAsset });
    } else {
      // Auf Mobile: Verwende require direkt
      setHtmlSource(require('./assets/index.html'));
    }
  };

  if (Platform.OS === 'web') {
    // Im Web: Rendere als iframe
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {htmlSource ? (
          <iframe
            src={htmlSource.uri}
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
      {htmlSource ? (
        <WebView
          originWhitelist={['*']}
          source={htmlSource}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
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
