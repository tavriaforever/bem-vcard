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
                    position: 'Разработчик интерфейсов<br>группа разработки общепортальной библиотеки',
                    company: {
                        country: 'Украина',
                        locality: 'Симферополь',
                        zip: '95000',
                        address: 'ул. Казанская, д. 1а',
                        site: 'www.yandex.ua'
                    },
                    person: {
                        email: 'tavria@yandex-team.ru',
                        cellular: '+38 (050) 020-93-95',
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
                    name: 'Nikolai Ilchenko',
                    position: 'Interface developer<br>group of development of all-portal library',
                    company: {
                        country: 'Ukraine',
                        locality: 'Simferopol',
                        zip: '95000',
                        address: 'Kazanskaya St., 1а',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'tavria@yandex-team.ru',
                        cellular: '+38 (050) 020-93-95',
                        github: 'tavriaforever',
                        twitter: 'tavriaforever',
                        habr: 'tavriaforever'
                    }
                }
            }
        ]
    }
})
