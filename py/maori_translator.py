import time
import random

import googletrans
translator = googletrans.Translator()#(service_urls=[
    #   'translate.google.co.uk'
    # ])

# all languages
langs = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ny', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'iw', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']

# only special languages
spec_langs = ['am', 'ar', 'hy', 'be', 'bn', 'bg', 'zh-cn', 'zh-tw', 'ka', 'el', 'gu', 'he', 'hi', 'ig', 'ja', 'kn', 'kk', 'km', 'ko', 'ky', 'lo', 'ml', 'mn', 'mr', 'ml', 'ne', 'or', 'ps', 'fa', 'pa', 'ru', 'sr', 'sd', 'si', 'tg', 'ta', 'te', 'th', 'uk', 'ur', 'ug', 'yi']

# very special languages
# ver_spec_langs = ['zh-cn', 'zh-tw', 'ja', 'ko', 'or', "", "", "", "", "", "", "", ""]

print(googletrans.LANGUAGES)

# vraag gebruiker om graad van vervorming
degree = int(input('Graad van vervorming: '))

# vraag gebruiker wat te maorificeren
prompt = input('\nInput: ')

# vertaal eerst naar het maori
current = translator.translate(prompt, dest='mi').text

time.sleep(3)
# vertaal terug naar nederlands om output in stapjes weer te geven
print('\nTranslated through: Maori')
print(translator.translate(current, dest='nl').text)

# vertaal naar random taal, het aantal keer van de graad van vergelijking
for i in range(0, degree-1):
    time.sleep(3)
    random_lang = spec_langs[random.randint(0,len(spec_langs)-1)]
    current = translator.translate(current, dest=random_lang).text
    time.sleep(3)
    # vertaal terug naar nederlands om output in stapjes weer te geven
    print('\nTranslated through: '+ googletrans.LANGUAGES[random_lang].capitalize() )
    print(translator.translate(current, dest='nl').text)

# vertaal als laatste nog eens naar het maori
time.sleep(3)
current = translator.translate(current, dest='mi').text

time.sleep(3)
result = translator.translate(current, dest='nl').text

print('\nOutput:\n'+result)