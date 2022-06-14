/*var language = window.navigator.language;

var languageFistTwo = language.substr(0,1); // To only keep the first 2 characters.

switch (languageFistTwo) { 
  case "en-Us", "en-GB":
    window.location.href = 'https://happyrogelio7.xyz/en/index.html';
    break;

  case "es-ES", "es-MX", "es-CL":
    window.location.href = 'https://happyrogelio7.xyz/es/index.html';
    break;

  case "ja-JP", "ja-JP":
    window.location.href = 'https://happyrogelio7.xyz/jp/index.html';
    break;

  default:
    window.location.href = 'en/index.html';
} */

// Set of supported languages
var supportedLanguages = { en: "en", jp: "jp" };
var fallbackLanguage = "en";

// Check if the users browser language is a supported language of the website. Otherwise go to fallback.
var language = supportedLanguages[(navigator.language || navigator.userLanguage).substring(0,2)] || fallbackLanguage;

// Go to the language version of your website. Example: https://domain.com/en/
location.replace("." + "/" + language + "/" + "index.html");