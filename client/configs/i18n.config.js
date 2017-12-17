import frFR from 'antd/lib/locale-provider/fr_FR';
import enUS from 'antd/lib/locale-provider/en_US';

import i18n from 'meteor/universe:i18n';

function getLang () {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'fr-FR'
    );
}

export const init = () => {
    const lang = getLang();
    i18n.setLocale(lang);
    T9n.setLanguage(lang);
};

export const antd = () => {
    let lang = getLang();
    if(lang.indexOf('fr') > -1) {
        return frFR;
    }
    return enUS;
}


