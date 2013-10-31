({
    block: 'b-page',
    title: 'Николай Ильченко / Nikolai Ilchenko — tavria@yandex-team.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'tavriaforever.css' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'tavriaforever.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Николай Ильченко',
                    about: 'С 2013 года работаю фронтэнд-разработчиком в компании Яндекс',
                    company: {
                        country: 'Украина',
                        locality: 'Симферополь',
                        zip: '95000',
                        address: 'ул. Казанская, 1а',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'yndx.tavria@yandex.ru',
                        github: 'tavriaforever',
                        twitter: 'tavriaforever',
                        habr: 'tavriaforever'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Nikolay Ilchenko',
                    about: 'Frontend developer in the Yandex company',
                    company: {
                        country: 'Ukraine',
                        locality: 'Simferopol',
                        zip: '95000',
                        address: 'Kazanskaya St., 1а',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'yndx.tavria@yandex.ru',
                        github: 'tavriaforever',
                        twitter: 'tavriaforever',
                        habr: 'tavriaforever'
                    }
                }
            },
            {
                block: 'b-powered',
                tag: 'a',
                attrs: { href: 'bem.info' },
                content: 'Built with BEM'
            }
        ]
    }
})
