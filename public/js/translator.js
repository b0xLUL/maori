async function translator(){
    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate').v2;
    require('dotenv').config();

    // Credentials
    const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

    // Creates a client
    const translate = new Translate({
        credentials: CREDENTIALS,
        projectId: CREDENTIALS.project_id
    });

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const translateText = async (text, targetLanguage) => {

        try {
            let [response] = await translate.translate(text, targetLanguage);
            return response;
        } catch (error) {
            console.log(`Error at translateText --> ${error}`);
            return 0;
        }
    };

    // special languages only
    const spec_langs = ['am', 'ar', 'hy', 'be', 'bg', 'zh', 'zh-TW', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'my', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi'];



    let prompt = 'Dit is een test van deze maori vertaler, deze zin wordt vetaald door meerdere talen'
    // De mooie website wilde niet kletsen met de vertaal code, dat is zeer teleurstellend.
    let gvv = 5



    // // haal input van de html pagina
    // let prompt = document.getElementsByName('input')[0].value;
    // if (prompt.length > 300) {
    //     return;
    // }
    
    // // haal de graad van vervorming van de html pagina
    // let gvv = document.getElementsByName('gvv')[0].value;
    // if (isNaN(gvv)) {
    //     return;
    // }
    // else if (gvv > 5) {
    //     return;
    // }

    // maak een lijst met random talen aan, startend bij maori
    let language_list = ['mi']
    for (let i = 0; i < gvv-1; i++) {
        language_list.push(spec_langs[Math.floor(Math.random()*(spec_langs).length)]);
    }
    // voeg als laatste nederlands toe aan de lijst om terug naar het nederlands te vertalen
    language_list.push('nl')

    console.log('\n')
    console.log(language_list)
    console.log(`begin zin: ${prompt}\n`)

    let temp_prompt = prompt

    // loop to translate the amount of gvv (+1 for translating back to dutch)
    for (let i = 0; i < language_list.length; i++) {
        
        //Translate the current prompt through the language in the list
        if (temp_prompt.length <= 500) {
            await translateText(temp_prompt , language_list[i])
            .then((res) => {
                console.log(res);
                temp_prompt = res
            })
            .catch((err) => {
                console.log(err);
                temp_prompt = 'ERROR'
            });
        } else {
            console.log('Het aantal karaters tijdens het translaten is te hoog opgelopen, probeer het opnieuw met een kortere zin.')
            break
        }
    }
}

translator()
