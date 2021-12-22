import time
import random

import googletrans
translator = googletrans.Translator()#(service_urls=[
    #   'translate.google.co.uk'
    # ])

# all languages
langs = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ny', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'iw', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']

# only special languages
spec_langs = ['am', 'ar', 'hy', 'be', 'bg', 'zh-cn', 'zh-tw', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'my', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi']

# time to wait between translations
wait_time = 3

# print(googletrans.LANGUAGES)

# vraag gebruiker om graad van vervorming
degree = int(input('Graad van vervorming: '))

# vraag gebruiker wat te maorificeren
prompt = input('\nInput: ')

# vertaal eerst naar het maori
current = translator.translate(prompt, dest='mi').text

time.sleep(wait_time)

# vertaal terug naar nederlands om deze stap weer te geven
print('\nTranslated through: Maori')
print(translator.translate(current, dest='nl').text)

too_many_letters = False
used_langs = []

# vertaal naar random taal, het aantal keer van de graad van vergelijking
for i in range(0, degree-1):

    # stop met vertalen als er te veel letters zijn
    if len(current) > 500:
        too_many_letters = True
        break

    time.sleep(wait_time)

    valid_lang = False

    # genereer nieuwe taal, die niet al gebruikt is
    while not valid_lang:
        random_lang = spec_langs[random.randint(0,len(spec_langs)-1)]

        if random_lang not in used_langs:
            used_langs = used_langs + [random_lang]
            valid_lang = True
    
    # vertaal prompt met nieuwe taal
    current = translator.translate(current, dest=random_lang).text

    time.sleep(wait_time)

    # vertaal terug naar nederlands om output in stapjes weer te geven
    print('\nTranslated through: '+ googletrans.LANGUAGES[random_lang].capitalize() )
    print(translator.translate(current, dest='nl').text)

# als er niet te veel letters zijn, vertaal nog eens naar het maori
if not too_many_letters:
    time.sleep(wait_time)
    
    current = translator.translate(current, dest='mi').text

time.sleep(wait_time)

# vertaal terug naar nederlands
result = translator.translate(current, dest='nl').text

# als er te veel letters zijn, geef dit aan en geef output. Zo niet geef output normaal
if not too_many_letters:
    print('\nOutput:\n'+result)
else:
    print('\nDe translator is afgekapt door te veel letters. Huidige output:\n'+result)