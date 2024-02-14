import i18next from "i18next";

export const i18n = i18next;

export const initI18n = (callback) => {
  i18next.init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          "hello_localazy": "Hello Localazy!",
          "calendar": "Calendar",
          "field": "Field",
          "event": "Event",
          "title": "Title",
          "color": "Color"
        },
      },
    },
  }, function (err, t) {
    // Call this function once i18next is initialized
    callback()
  });
}
