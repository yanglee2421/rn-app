import { ExpoConfig, ConfigContext } from "expo/config";

export default function expoConfig(ctx: ConfigContext): ExpoConfig {
  return {
    ...ctx.config,
    name: "rn-app",
    slug: "rn-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.example.myapplication",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "153921b9-84ce-447b-a5d0-15e015b2eef3",
      },
    },
    owner: "yanglee2421",
  };
}
