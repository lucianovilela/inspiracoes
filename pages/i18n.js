import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      title: "My Inspirations BJJ",
      guarda: "Guard",
      passagem: "Guard pass",
      costas: "Back attack",
      queda: "Take down",
      raspagem: "Sweep",
      finalizacao: "Tapout",
      estrategia: "Strategy",
      visualizar: "View",
      msgAuto: "Made by",
      copiar: "Copy to Clipboard",
      close: "Close",
      download: "Download"
    }
  },
  pt: {
    translation: {
      title: "Minhas Inspirações BJJ",
      guarda: "Guarda",
      passagem: "Passagem",
      costas: "Pela costas",
      queda: "Queda",
      raspagem: "Raspagem",
      finalizacao: "Finalizacao",
      estrategia: "Estratégia",
      visualizar: "Visualizar",
      msgAuto: "Gerado por",
      copiar: "Copiar para o Clipboard",
      close: "Fechar",
      download: "Download"
    }
  }
};

i18n
  .use(initReactI18next)
  .use(detector) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
