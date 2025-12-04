export default {
  expo: {
    name: "MatheChecker",
    slug: "mathechecker",
    version: "1.0.19",
    orientation: "default",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/icon.png",
      resizeMode: "contain",
      backgroundColor: "#4CAF50"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.mathechecker"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#4CAF50"
      },
      package: "com.mathechecker",
      versionCode: 19,
      // Explizite Tablet-Unterstützung
      permissions: [],
      // AndroidManifest.xml Modifikationen
      intentFilters: [
        {
          action: "VIEW",
          data: {
            scheme: "https"
          },
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    web: {
      favicon: "./assets/icon.png"
    },
    plugins: [
      "expo-asset",
      [
        "expo-build-properties",
        {
          android: {
            // Explizit Tablets unterstützen
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: "35.0.0"
          }
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "0ad4392f-84cf-4af7-bc48-d2dcf8eb622c"
      }
    }
  }
};
