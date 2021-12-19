// const {Translate} = require('@google-cloud/translate').v2;
// require('dotenv').config();

// Your credentials
// const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// // Configuration for the client
// const translate = new Translate({
//     credentials: CREDENTIALS,
//     projectId: CREDENTIALS.project_id
// });

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const detectLanguage = async (text) => {

//     try {
//         let response = await translate.detect(text);
//         return response[0].language;
//     } catch (error) {
//         console.log(`Error at detectLanguage --> ${error}`);
//         return 0;
//     }
// }

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(error);
//     });

// const translateText = async (text, targetLanguage) => {

//     try {
//         let [response] = await translate.translate(text, targetLanguage);
//         return response;
//     } catch (error) {
//         console.log(`Error at translateText --> ${error}`);
//         return 0;
//     }
// };

function translation_loop() {         
    var i = 1;
    setTimeout(function() {   

        // translateText('Oggi è lunedì', 'en')
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
      
        i++;                    
        if (i < 10) {           
            translation_loop();              
         }            

    }, 3000)
}
// all languages
const langs = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ny', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'iw', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];

// special languages only
const spec_langs = ['am', 'ar', 'hy', 'be', 'bg', 'zh-cn', 'zh-tw', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'my', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi'];

// tijd om te wachten tussen vertalingen
const wait_time = 3;

// vraag gebruiker graad van vervorming
const degree = rl.question('Graad van vervorming: ');

// vraag gebruiker wat te maorificeren
const prompt = rl.question('\nInput: ');

// maak languages lijst om de input door al die talen heen te halen
language_list = ['mi']
for (let i = 0; i < degree; i++) {
    language_list = language_list + [spec_langs[Math.floor(Math.random()*length(spec_langs))]];
}

console.log(language_list);

// translateText('Oggi è lunedì', 'en')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
