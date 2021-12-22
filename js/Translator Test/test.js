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
function translate(prompt, degree, language_list) {
    current_prompt = prompt;

    function translation_loop() {         
        var i = 1;
        setTimeout(function() {   
            next_lang = language_list[i]

            translateText(prompt, next_lang)
                .then((res) => {
                    current_prompt = res
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        
            i++;                    
            if (i < degree) {           
                translation_loop();              
            }            

        }, 3000)
    }

    translation_loop()
}

// all languages
const langs = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ny', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'iw', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];

// special languages only
const spec_langs = ['am', 'ar', 'hy', 'be', 'bg', 'zh-cn', 'zh-tw', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'my', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi'];

// tijd om te wachten tussen vertalingen
const wait_time = 3;

// vraag gebruiker graad van vervorming
rl.question('Graad van vervorming: ', function (degree) {

    // vraag gebruiker voor een prompt om te translaten
    rl.question('Input: ', function (prompt) {

        // maak languages lijst om de input door al die talen heen te halen
        language_list = ['mi']
         for (let i = 1; i < degree; i++) {
             language_list.push(spec_langs[Math.floor(Math.random()*(spec_langs).length)]);
         }
        console.log(language_list);
        
        translate(prompt, degree)
         
        rl.close();      
    });
});



// translateText('Oggi è lunedì', 'en')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
