const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

// all languages
const langs = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ny', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'iw', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];

// special languages only
const spec_langs = ['am', 'ar', 'hy', 'be', 'bg', 'zh', 'zh-TW', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'my', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi'];

function translator2() {
    // haal input van de html pagina
    var prompt = document.getElementsByName('input')[0].value;
    if (prompt.length > 300) {
        return;
    }
    
    // haal de graad van vervorming van de html pagina
    var gvv = document.getElementsByName('gvv')[0].value;
    if (isNaN(gvv)) {
        return;
    }
    else if (gvv > 5) {
        return;
    }

    var out = prompt + gvv
    document.getElementsByName('output')[0].value= out;
}