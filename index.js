const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf('6134215585:AAHDcBQ86fuhZjlJ_m_LMbYPgLHDW7G-9YM')

bot.command('start', (ctx) => {
    ctx.reply('Здравствуйте! Я эксперт по цифровой грамотности. Посмотреть видеоинструкцию можно, нажав на кнопку /info в меню. Нажмите "Начать", чтобы выбрать уровень задания.', {
        reply_markup: Markup.keyboard(['Начать']),
    })
})

bot.hears('Начать', (ctx) => {
    ctx.reply('Выберите уровень задания.', {
        reply_markup: Markup.keyboard(['Репродуктивный', 'Эвристический', 'Творческий']), 
    })
})

bot.hears('Репродуктивный', (ctx) => {
    ctx.reply('Выберите тему.', 
        {reply_markup: Markup.keyboard(['Глобальная сеть интернет. Методы индивидуального и коллективного размещения новой информации в сети Интернет',
         'IP-адреса узлов', 'Сетевое хранение данных', 'Большие данные', 'Разработка веб-страниц',
         'Язык HTML', 'Структура веб-страницы',
         'Заголовок и тело страницы', 'Логическая разметка: заголовки, абзацы', 
         'Разработка страниц, содержащих рисунки, списки и гиперссылки', 'Понятие об информационной безопасности', 
        'Угрозы информационной безопасности при работе в глобальной сети и методы противодействия им', 'Правила безопасной аутентификации',
        'Предупреждение вовлечения в деструктивные и криминальные формы сетевой активности', 'Виды деятельности в сети Интернет', 'Вернуться назад'])})
    })

bot.hears('Глобальная сеть интернет. Методы индивидуального и коллективного размещения новой информации в сети Интернет', (ctx) => {
    ctx.reply('https://clck.ru/346cqj')
})

bot.hears('IP-адреса узлов', (ctx) => {
    ctx.reply('https://clck.ru/347GGW')
})

bot.hears('Сетевое хранение данных', (ctx) => {
    ctx.reply('https://clck.ru/347GGt')
})

bot.hears('Большие данные', (ctx) => {
    ctx.reply('https://clck.ru/347GHH')
})

bot.hears('Разработка веб-страниц', (ctx) => {
    ctx.reply('https://clck.ru/347GJa')
})

bot.hears('Язык HTML', (ctx) => {
    ctx.reply('https://clck.ru/347GKY')
})

bot.hears('Структура веб-страницы', (ctx) => {
    ctx.reply('https://clck.ru/347GKw')
})

bot.hears('Заголовок и тело страницы', (ctx) => {
    ctx.reply('https://clck.ru/347GPG')
})

bot.hears('Логическая разметка: заголовки, абзацы', (ctx) => {
    ctx.reply('https://clck.ru/347GPh')
})

bot.hears('Разработка страниц, содержащих рисунки, списки и гиперссылки', (ctx) => {
    ctx.reply('https://clck.ru/347GQ6')
})

bot.hears('Понятие об информационной безопасности', (ctx) => {
    ctx.reply('https://clck.ru/347GRY')
})

bot.hears('Угрозы информационной безопасности при работе в глобальной сети и методы противодействия им', (ctx) => {
    ctx.reply('https://clck.ru/347GSX')
})

bot.hears('Правила безопасной аутентификации', (ctx) => {
    ctx.reply('https://clck.ru/347GV5')
})

bot.hears('Предупреждение вовлечения в деструктивные и криминальные формы сетевой активности', (ctx) => {
    ctx.reply('https://clck.ru/347GVY')
})

bot.hears('Виды деятельности в сети Интернет', (ctx) => {
    ctx.reply('https://clck.ru/347GVz')
})

bot.hears('Эвристический', (ctx) => {
    ctx.reply('Выберите раздел.', 
        {reply_markup: Markup.keyboard(['Локальные и глобальные сети',
         'Всемирная компьютерная сеть Интернет', 'Информационные ресурсы и сервисы Интернета', 'Создание web-сайта', 'Вернуться назад'])})
    })

    bot.hears('Локальные и глобальные сети', (ctx) => {
        ctx.reply('https://clck.ru/34EaaW')
    })

    bot.hears('Всемирная компьютерная сеть Интернет', (ctx) => {
        ctx.reply('https://clck.ru/34EdUw')
    })

    bot.hears('Информационные ресурсы и сервисы Интернета', (ctx) => {
        ctx.reply('https://clck.ru/34EfyV')
    })

    bot.hears('Создание web-сайта', (ctx) => {
        ctx.reply('https://clck.ru/34EhhA')
    })

    bot.hears('Творческий', (ctx) => {
        ctx.reply('Выберите раздел.', 
            {reply_markup: Markup.keyboard(['Локальные и глобальные cети',
             'Вcемирная компьютерная сеть Интернет', 'Информационные реcурсы и сервисы Интернета', 'Создание web-cайта', 'Вернуться назад'])})
        })

    bot.hears('Локальные и глобальные cети', (ctx) => {
        ctx.replyWithPhoto({
        source: 'im.jpg',
        })
        })

    bot.hears('Вcемирная компьютерная сеть Интернет', (ctx) => {
        ctx.replyWithPhoto({
        source: 'um.jpg',
        })
        })

    bot.hears('Информационные реcурсы и сервисы Интернета', (ctx) => {
        ctx.replyWithPhoto({
        source: 'cm.jpg',
        })
        })
    bot.hears('Создание web-cайта', (ctx) => {
        ctx.replyWithPhoto({
        source: 'rr.jpg',
        })
        })
    
        bot.hears('Вернуться назад', (ctx) => {
            ctx.reply('Выберите уровень задания.', {
                reply_markup: Markup.keyboard(['Репродуктивный', 'Эвристический', 'Творческий']), 
            })
        })

bot.command('info', (ctx) => {
        ctx.reply('https://youtu.be/a2z4bxUG__k')
    })
bot.launch()