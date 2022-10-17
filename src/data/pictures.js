import { v4 as uuidv4 } from 'uuid';

const pictures = [
    {
        id: uuidv4(),
        title: 'Холодно дышать',
        width: 50,
        height: 65,
        technique: ['watercolor', 'gouache', 'pastel'],
        description: 'акварель, гуашь, масляная пастель, коллаж, бумага',
        year: 2018,
        price: 10000,
        img: require(`./pictures/small/cold-breath.jpg`),
        imgFull: require(`./pictures/full/cold-breath.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Танец',
        width: 80,
        height: 120,
        technique: ['gouache'],
        description: 'бумага, гуашь',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/dance.jpg'),
        imgFull: require('./pictures/full/dance.jpg'),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Романтическая прогулка',
        width: 65,
        height: 50,
        technique: ['pastel'],
        description: 'бумага, пастель',
        year: 2017,
        price: 5000,
        img: require('./pictures/small/ducks.jpg'),
        imgFull: require('./pictures/full/ducks.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Пасхальная',
        width: 50,
        height: 50,
        technique: ['watercolor'],
        description: 'бумага, акварель',
        year: 2017,
        price: 15000,
        img: require('./pictures/small/easter.jpg'),
        imgFull: require('./pictures/full/easter.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Домик в Адыгее',
        width: 25,
        height: 36,
        technique: ['watercolor'],
        description: 'бумага, акварель',
        year: 2017,
        price: 8000,
        img: require('./pictures/small/house-adygeya.jpg'),
        imgFull: require('./pictures/full/house-adygeya.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Маяк',
        width: 80,
        height: 120,
        technique: ['gouache'],
        description: 'бумага, гуашь',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/lighthouse.jpg'),
        imgFull: require('./pictures/full/lighthouse.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Северный порт',
        width: 55,
        height: 30,
        technique: ['watercolor'],
        description: 'бумага, акварель, гуашь, масляная пастель, коллаж',
        year: 2017,
        price: 9000,
        img: require('./pictures/small/nothern-port.jpg'),
        imgFull: require('./pictures/full/nothern-port.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Ранняя весна',
        width: 30,
        height: 20,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 3500,
        img: require('./pictures/small/sestroretsk-april.jpg'),
        imgFull: require('./pictures/full/sestroretsk-april.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'White night, street light',
        width: 29.5,
        height: 42,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/streetlight.jpg'),
        imgFull: require('./pictures/full/streetlight.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Зимний дворец',
        width: 38,
        height: 56,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 15000,
        img: require('./pictures/small/winter-palace.jpg'),
        imgFull: require('./pictures/full/winter-palace.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Самый тёплый день в году',
        width: 50,
        height: 35,
        technique: ['pastel'],
        description: 'масляная пастель, холст на картоне',
        year: 2018,
        price: 4500,
        img: require('./pictures/small/zelenogorsk.jpg'),
        imgFull: require('./pictures/full/zelenogorsk.jpg'),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Дыхание старого дома',
        width: 36,
        height: 26,
        technique: ['watercolor'],
        description: 'бумага, акварель',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/old-house-breath.jpg'),
        imgFull: require(`./pictures/full/old-house-breath.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Тихий ход',
        width: 40,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/quiet-running.jpg'),
        imgFull: require(`./pictures/full/quiet-running.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Автопортрет',
        width: 40,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/selfportrait.jpg'),
        imgFull: require(`./pictures/full/selfportrait.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Сосново',
        width: 40,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2018,
        price: 4500,
        img: require('./pictures/small/sosnovo.jpg'),
        imgFull: require(`./pictures/full/sosnovo.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Борщевики',
        width: 40,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/inky.jpg'),
        imgFull: require(`./pictures/full/inky.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Фонтанка',
        width: 60,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/fontanka.jpg'),
        imgFull: require(`./pictures/full/fontanka.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Пёс-призрак',
        width: 40,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/ghostdog.jpg'),
        imgFull: require(`./pictures/full/ghostdog.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Осень',
        width: 30,
        height: 40,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/fall.jpg'),
        imgFull: require(`./pictures/full/fall.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Compton',
        width: 50,
        height: 30,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/compton.jpg'),
        imgFull: require(`./pictures/full/compton.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Церквушка',
        width: 30,
        height: 44.5,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/church.jpg'),
        imgFull: require(`./pictures/full/church.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Суккуленты',
        width: 30,
        height: 40,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/succulents.jpg'),
        imgFull: require(`./pictures/full/succulents.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Синий декабрь',
        width: 24,
        height: 32,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/blue-december.jpg'),
        imgFull: require(`./pictures/full/blue-december.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Секретный дворик',
        width: 30,
        height: 42,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/secret-garden.jpg'),
        imgFull: require(`./pictures/full/secret-garden.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Павловск',
        width: 30,
        height: 42,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/pavlovsk.jpg'),
        imgFull: require(`./pictures/full/pavlovsk.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Цветок',
        width: 30,
        height: 42,
        technique: ['gouache'],
        description: 'гуашь, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/flower.jpg'),
        imgFull: require(`./pictures/full/flower.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Январский вечер',
        width: 30,
        height: 42,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/january-evening.jpg'),
        imgFull: require(`./pictures/full/january-evening.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Весна в Адыгее',
        width: 21,
        height: 30,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2018,
        price: 4500,
        img: require('./pictures/small/adygeya-spring.jpg'),
        imgFull: require(`./pictures/full/adygeya-spring.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Осенний этюд',
        width: 21,
        height: 15,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/autumn-etude.jpg'),
        imgFull: require(`./pictures/full/autumn-etude.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Хаджохская теснина',
        width: 30,
        height: 21,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2018,
        price: 4500,
        img: require('./pictures/small/adygeya.jpg'),
        imgFull: require(`./pictures/full/adygeya.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Красные пледы',
        width: 30,
        height: 42,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/red-plaids.jpg'),
        imgFull: require(`./pictures/full/red-plaids.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Золоторогий',
        width: 30,
        height: 42,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/aries.jpg'),
        imgFull: require(`./pictures/full/aries.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Кожевенная линия',
        width: 23,
        height: 16,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/leather-line.jpg'),
        imgFull: require(`./pictures/full/leather-line.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Непогожий май',
        width: 21,
        height: 29.5,
        technique: ['watercolor', 'pastel'],
        description: 'пастель, акварель, бумага',
        year: 2021,
        price: 4500,
        img: require('./pictures/small/rainy-may.jpg'),
        imgFull: require(`./pictures/full/rainy-may.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Сумерки в лесу',
        width: 20,
        height: 33,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2019,
        price: 4500,
        img: require('./pictures/small/twilight-forest.jpg'),
        imgFull: require(`./pictures/full/twilight-forest.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Бананы',
        width: 42,
        height: 28.5,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2017,
        price: 4500,
        img: require('./pictures/small/bananas.jpg'),
        imgFull: require(`./pictures/full/bananas.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Путаница',
        width: 30,
        height: 42,
        technique: ['pastel'],
        description: 'масляная пастель, бумага',
        year: 2021,
        price: 4500,
        img: require('./pictures/small/mess.jpg'),
        imgFull: require(`./pictures/full/mess.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Домик в Коломягах',
        width: 40,
        height: 50,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2021,
        price: 4500,
        img: require('./pictures/small/kolomyagi.jpg'),
        imgFull: require(`./pictures/full/kolomyagi.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Отражение осени',
        width: 24,
        height: 32,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2021,
        price: 4500,
        img: require('./pictures/small/autumn-reflection.jpg'),
        imgFull: require(`./pictures/full/autumn-reflection.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Тульский домик',
        width: 25,
        height: 25,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2021,
        price: 4500,
        img: require('./pictures/small/tula-house.jpg'),
        imgFull: require(`./pictures/full/tula-house.jpg`),
        isSold: true
    },
    {
        id: uuidv4(),
        title: 'Этюд про южный вечер',
        width: 21,
        height: 15,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2020,
        price: 4500,
        img: require('./pictures/small/southern-etude.jpg'),
        imgFull: require(`./pictures/full/southern-etude.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Нежная мимоза',
        width: 35,
        height: 35,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2018,
        price: 4500,
        img: require('./pictures/small/tender-mimose.jpg'),
        imgFull: require(`./pictures/full/tender-mimose.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Август. Похолодало',
        width: 35,
        height: 24,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2019,
        price: 4500,
        img: require('./pictures/small/cold-august.jpg'),
        imgFull: require(`./pictures/full/cold-august.jpg`),
        isSold: false
    },
    {
        id: uuidv4(),
        title: 'Красные тюльпаны',
        width: 30,
        height: 40,
        technique: ['watercolor'],
        description: 'акварель, бумага',
        year: 2022,
        price: 4500,
        img: require('./pictures/small/red-tulips.jpg'),
        imgFull: require(`./pictures/full/red-tulips.jpg`),
        isSold: false
    }
]

export default pictures