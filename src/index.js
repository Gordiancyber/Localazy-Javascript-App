import { i18n, initI18n } from "./i18n";

const createPageContent = () => {
  document.querySelector("#app").innerHTML = i18n.t("hello_localazy");
}

initI18n(createPageContent);