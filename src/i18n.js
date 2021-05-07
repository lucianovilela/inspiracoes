import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      title: "My Inspirations",
      guarda: "Guard",
      passagem: "Guard pass",
      costas: "Back attack",
      queda: "Take down",
      raspagem: "Swap",
      finalizacao: "Tapout",
      estrategia: "Strategy",
      vizualizacao: "View"
    }
  },
  br: {
    translation: {
      title: "Minhas Inspirações",
      guarda: "Guarda",
      passagem: "Passagem",
      costas: "Pela costas",
      queda: "Queda",
      raspagem: "Raspagem",
      finalizacao: "Finalizacao",
      estrategia: "Estratégia",
      vizualizacao: "Visualização"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "br",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
