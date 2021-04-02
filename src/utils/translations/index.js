import homeTranslations from "./pages/home";

const allTranslations = {
  en: Object.assign({}, homeTranslations.en),
  ar: Object.assign({}, homeTranslations.ar),
};

/*
  Other translations are to be added as arguments to .assign()
  i.e. Object.assign({}, homeTranslations.en, loginTranslations.en)
*/

export default allTranslations;
