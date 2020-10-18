const birdsData = [
  [
    {
      id: 1,
      name: 'Серая ворона',
      species: 'Corvus cornix',
      description:
        'Голова, крылья и хвост чёрные, туловище серое. В среднем несколько крупнее грача, плотнее сложена, имеет более крепкий клюв. Голос — разные модификации карканья, наиболее частый сигнал — хриплое «карр» с закрытым звуком в конце.',
      image: 'https://live.staticflickr.com/65535/49812335378_0952abb2cc.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Corvus_cornix.ogg',
    },
    {
      id: 2,
      name: 'Голубая сойка',
      species: 'Cyanocitta cristata',
      description:
        'Размер голубой сойки составляет около 30 см, характерным признаком является голубая спинка, короткий синий гребешок и чёрно-белый полосатый хвост. Умеют издавать множество различных звуков, а также подражать звукам других птиц.',
      image: 'https://live.staticflickr.com/4811/45351451594_0404d05b30.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Cyanocitta_cristata_-_Blue_Jay_-_XC86756.ogg',
    },
    {
      id: 3,
      name: 'Ворон',
      species: 'Corvus corax',
      description:
        'Это крупнейший представитель воробьинообразных птиц: длина тела достигает 60—70 см. Голос ворона — громкое, трубное, гортанное «крух» или отчётливое «ток», а также всем известное карканье.',
      image: 'https://live.staticflickr.com/65535/48975123926_f72778cb47.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Corbeau-ornitho%27log.ogg',
    },
    {
      id: 4,
      name: 'Галка',
      species: 'Coloeus monedula',
      description:
        'Один из наиболее мелких и шумных представителей семейства врановых. Наиболее частый крик, используемый как для коммуникации, так и для привлечения внимания — энергичное «кай» или «кьяа», как правило, повторяемое 7—8 раз подряд.',
      image: 'https://live.staticflickr.com/7894/40555046803_1fa061e659.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Corvus_monedula_calls.ogg',
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description:
        'Благодаря характерному чёрно-белому оперению и необычно длинному хвосту, сорока неповторима и легко узнаваема. Чаще всего сорока издаёт стрёкот из быстро следующих друг за другом рядов призыва с несколько каркающим «шэк шэк шэк».',
      image: 'https://live.staticflickr.com/65535/49701449867_1364a46153.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Pica_pica.ogg',
    },
    {
      id: 6,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description:
        'Широко распространённая в Евразии птица рода воронов. Естественные звуки, издаваемые грачами в случае приветствия сородича, напоминают «Ках» или «Крах». В случае проявления агрессии звук перерастает в длинный возглас «Крэээээх».',
      image: 'https://live.staticflickr.com/4804/45728372395_de802d47a3.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Corvus_frugilegus.ogg',
    },
  ],
  [
    {
      id: 1,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description:
        'Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Беркут кричит в основном во время токового полёта, при общении с птенцами и защите территории. Иногда в полёте слышен тонкий посвист «клюх…»',
      image: 'https://live.staticflickr.com/65535/49269447808_0dfff439a5.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Golden_eagle.ogg',
    },
    {
      id: 2,
      name: 'Ястреб-тетеревятник',
      species: 'Accipiter gentilis',
      description:
        'Как и все ястребы, общаются между собой посредством звуковых сигналов, издавая высокий звонкий клёкот. Во время гнездовья, и самец, и самка издают одинаковые вибрирующие звуки, только у самки голос получается ниже и громче.',
      image: 'https://live.staticflickr.com/65535/49046372506_2ff6623a5b.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/e/e3/Accipiter_gentilis_-_Northern_Goshawk_XC428983.mp3',
    },
    {
      id: 3,
      name: 'Бенгальский гриф',
      species: 'Gyps bengalensis',
      description:
        'Хищная птица из подсемейства грифовых. Обитает почти во всей Южной Азии. Голосовые сигналы в целом типичны для грифов: шипение, хриплое карканье, гортанное бормотание. Сидящие на яйцах грифы могут издавать визжащие звуки',
      image: 'https://live.staticflickr.com/914/39836661420_da0acc09a6.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KDTMIWOGNC/XC565304-a10a.mp3',
    },
    {
      id: 4,
      name: 'Сарыч',
      species: 'Buteo buteo',
      description:
        'Сарыч, или обыкновенный канюк — хищная птица, обитающая в Старом Свете. Голос — протяжное гнусавое "кьяаааа" или "ийяаааа". У беспокоящихся птиц эти крики очень занудны и вполне соответствуют по характеру слову "канючить".',
      image: 'https://live.staticflickr.com/65535/49749030051_8807cb4e1a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC570072-Parella%20Buteo%20buteo%20voando%20sobre%20maizal%2013%20horas%20sol%20cantalarrana%20.mp3',
    },
    {
      id: 5,
      name: 'Белоголовый орлан',
      species: 'Haliaeetus leucocephalus',
      description:
        'Хищная птица из семейства ястребиных, обитает в Северной Америке. Несмотря на грозный вид, белоголовый орлан отличается относительно слабым голосом. Чаще всего можно услышать высокий клёкот или свист, передаваемый как «квик-кик-кик-кик»',
      image: 'https://live.staticflickr.com/4582/38711109471_70ea7612f0.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Bald_Eagle_Yellowstone_National_Park.ogg',
    },
    {
      id: 6,
      name: 'Чёрный коршун',
      species: 'Milvus migrans',
      description:
        'Хищная птица семейства ястребиных, общая длина 50-60 см. Русское название — коршун, коршак; украинское — коршак или шулика; белорусское — каршун, шуляк. Голос — мелодичная трель «юрль-ююррль-ююрррль» и частое «ки-ки-ки».',
      image: 'https://live.staticflickr.com/65535/48600834107_17cc8afc60.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/b/b8/Tonbi-voice-enoshima-jan11-2016.ogg',
    },
  ],
  [
    {
      id: 1,
      name: 'Императорский пингвин',
      species: 'Aptenodytes forsteri',
      description:
        'Самый крупный и тяжёлый из современных видов семейства пингвиновых. Каждый родитель, возвращаясь с моря находит своего птенца по индивидуальным особенностям голоса и кормит только его.',
      image: 'https://live.staticflickr.com/7886/32759882218_84c22ce2a4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HKBZXSHAHB/XC399041-Penguiin,%20Emperor1.mp3',
    },
    {
      id: 2,
      name: 'Хохлатый пингвин',
      species: 'Eudyptes chrysocome',
      description:
        'Пингвин (длина 55-62 см, масса от 2 до 3 кг (в среднем 2,3 — 2,7 кг), с узкими желтыми «бровями», оканчивающимися кисточками. Распространён на островах Субантарктики, на Тасмании и Огненной Земле.',
      image: 'https://live.staticflickr.com/65535/48856239778_aa2516eba2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WZSVLIHYQF/Eudyptes%20chrysocome%20Saunders%202011.mp3',
    },
    {
      id: 3,
      name: 'Очковый пингвин',
      species: 'Spheniscus demersus',
      description:
        'Самый крупный из очковых пингвинов. Он достигает 65—70 см роста и массы 3—5 кг. Раскраска, как у большинства пингвинов, чёрная сзади, белая спереди.  За резкий голос этих пингвинов иногда называют ослиными.',
      image: 'https://live.staticflickr.com/65535/49458915518_fd4541806f.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OUALYKRAJY/jackass.mp3',
    },
    {
      id: 4,
      name: 'Пингвин Адели',
      species: 'Pygoscelis adeliae',
      description:
        'Нелетающая птица из отряда пингвинообразных. Один из самых распространённых видов пингвинов. Высота туловища около 70 см, вес около 6 кг. Пингвин Адели — очень доверчивая птица, своими повадками иногда напоминающая человека.',
      image: 'https://live.staticflickr.com/7915/32280085587_158245531d.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC254614-Adelie%20Penguin2015-2-18-9.mp3',
    },
    {
      id: 5,
      name: 'Великолепный пингвин',
      species: 'Megadyptes antipodes',
      description:
        'Также известен под маорийским названием «хоихо». Своим строением тела больше всего близок к вымершим пингвинам. Данный вид пингвинов один из самых редких среди пингвиновых, численность, несмотря на большой ареал, оценивается чуть более 4 тысяч особей.',
      image: 'https://live.staticflickr.com/65535/49633169412_8130723818.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC152992-2013101210_0713_Megadyptes%20antipodes_F%20deroussen.mp3',
    },
    {
      id: 6,
      name: 'Малый пингвин',
      species: 'Eudyptula minor',
      description:
        'Самый мелкий вид из всех ныне живущих пингвинов: у разных подвидов размеры варьируют, средний рост составляет 33 см, длина — 43 см. Живут они парами, длительно сохраняющими верность друг другу, иногда и на всю жизнь.',
      image: 'https://live.staticflickr.com/7517/15653190864_db81cbe5a9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC526702-Blue%20Penguin%20Oamaru%2020200203%202200u%20MixPre-311.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Морской голубок',
      species: 'Chroicocephalus genei',
      description:
        'Морской голубок длиной от 39 до 47 см, размах крыльев 97 см. Голос похож на голос озёрной чайки. Основной видовой крик — дребезжащее карканье, которое звучит немного мягче, чем у озёрной чайки. Тревожный крик — короткое «ка-ка-ка».',
      image: 'https://live.staticflickr.com/842/27719341978_d5f2c72359.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YPDXKAZUZN/XC550248-Go%C3%A9land%20railleur%20vol%20groupe%2010042020%20-%20Hyeres.mp3',
    },
    {
      id: 2,
      name: 'Озёрная чайка',
      species: 'Chroicocephalus ridibundus',
      description:
        'В колонии озёрные чайки необычайно активны и крикливы, часто издавая резкие и трескучие звуки, что-то вроде раскатистого «карр». Также характерны «мяуканье», «квохтанье» и короткие сигналы «кек», в серии напоминающие смех.',
      image: 'https://live.staticflickr.com/4256/34540364833_eb291b5221.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC578592-lachm%C3%B60540.mp3',
    },
    {
      id: 3,
      name: 'Хохотунья',
      species: 'Larus cachinnans',
      description:
        'По сравнению с серебристой чайкой хохотунья — более элегантная, изящная птица. Долгий крик у неё быстрее, чем у серебристой чайки, с очень характерным стаккато, что позволяет обнаруживать хохотунью в скоплениях больших белоголовых чаек.',
      image: 'https://live.staticflickr.com/5502/31192037476_af9e0e2a37.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC580768-Larus%20cachinnans%20200802_001,16-57--23-01,%20AAA2%20song.MP3',
    },
    {
      id: 4,
      name: 'Клуша',
      species: 'Larus fuscus',
      description:
        'Крупная чайка, гнездящаяся на атлантическом побережье Европы и вдоль северного побережья России, её длина составляет 48—56 см, размах крыльев 117—134 см. Голос ниже и грубее, чем у серебристой чайки и хохотуньи. При тревоге издаёт «га-га-га».',
      image: 'https://live.staticflickr.com/4269/34400455284_653f0cf52b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SUEWHZIIDY/XC483720-190622_Lesser%20BB.mp3',
    },
    {
      id: 5,
      name: 'Моевка',
      species: 'Rissa tridactyla',
      description:
        'На гнездовьях очень крикливы. Чаще всего издают крики, которые можно передать как "китивэйк", а также "эй-эй...", "йа-йа-йа", "кик-кик" и др. Голос немного гнусавый, но в общем довольно мелодичный. В негнездовое время молчаливы.',
      image: 'https://live.staticflickr.com/7675/27668562810_a6d1e6fa09.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/AYKHDFBYIH/XC447328-Kittiwake%20calling%20good%202016%2012%20Bempton%20RSPB_1070_short.mp3',
    },
    {
      id: 6,
      name: 'Бургомистр',
      species: 'Larus hyperboreus',
      description:
        'Название, по всей видимости, объясняется склонностью этой птицы селиться вблизи птичьих базаров и регулярно «взимать дань» с их населения в виде яиц и птенцов. Похож на голос серебристой чайки, но выше тоном.',
      image: 'https://live.staticflickr.com/4674/38790628460_8d88b7e323.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/UWFNNKHNAE/XC508559-2019-11-27%20Grote%20Burgemeester%20Vlissingen.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Сплюшка',
      species: 'Otus scops',
      description:
        'У всех совок неполный лицевой диск, довольно большие перьевые «ушки», голые или с жёсткими щетинками пальцы. Позывка сплюшки — печальный мелодичный посвист «сплюю» или «тьёёв». Повторяется с интервалом 2—3 секунды.',
      image: 'https://live.staticflickr.com/65535/47717608022_cb2de8d3e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VMQQRCTSHV/XC580943-chiu.mp3',
    },
    {
      id: 2,
      name: 'Филин',
      species: 'Bubo bubo',
      description:
        'Хищная птица из семейства совиных, один из наиболее крупных её представителей. Брачный крик – мощное низкое двусложное ухание – "УУгуу", повторяющееся несколько раз с промежутками 5–10 сек или более, бывают и одиночные крики.',
      image: 'https://live.staticflickr.com/65535/49659545407_de1087147b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LLZMVKACMC/XC560239-200509-003_Oehoe6%20Hamert%2009052020_01.mp3',
    },
    {
      id: 3,
      name: 'Ушастая сова',
      species: 'Asio otus',
      description:
        'Эти птицы часто селятся в пределах населённых пунктов, зачастую в хвойных парках, и окраинных рощах. Сравнительно молчаливы, голос бывает слышен в основном ранней весной — жалобное гулкое уханье “ху-хуу”, свист и скулящие крики.',
      image: 'https://live.staticflickr.com/65535/49128672543_c0047515c6.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ICWIXOBEUN/XC579207-ZOOM0035b_dehum.mp3',
    },
    {
      id: 4,
      name: 'Домовый сыч',
      species: 'Athene noctua',
      description:
        'Русское название вид получил за то, что часто может поселяться в человеческих постройках. Достигает 21-23 см в длину при массе 170-200г. Голос - мяукающий крик, напоминающий крик чибиса, тявканье, гуканье, низкий свист.',
      image: 'https://live.staticflickr.com/1836/42078300440_a105b76024.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SUEWHZIIDY/XC580962-200805_0331%20Civetta.mp3',
    },
    {
      id: 5,
      name: 'Североамериканская совка',
      species: 'Megascops asio',
      description:
        'Это небольшой вид сов из рода «Megascops». Длина тела взрослых птиц от 16 до 25 см, размах крыльев 46—61 см, а вес 142—255 г. Окраска оперения ржавого цвета или тёмно-серая, со сложным узором из полос. Хвост короткий. Крылья широкие.',
      image: 'https://live.staticflickr.com/65535/46898700084_5ac9f423cc.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YBJUQSUJFZ/XC569809-Eastern%20Screech-Owl%20undefined%20vocalization.mp3',
    },
    {
      id: 6,
      name: 'Неясыть',
      species: 'Strix aluco',
      description:
        'Типичный крик серой неясыти — это издаваемое самцом длинное завывающее Ууух Ууух Ууух. Самка издаёт глухой короткий звук Kuwitt. Для птенцов характерен сиплый безголосый звук Piuwick, которым они просят родителей дать им пищу.',
      image: 'https://live.staticflickr.com/65535/49311113763_4146d10e75.jpg',
      audio:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Tawny_Owl_%28Strix_aluco%29_%28W1CDR0001519_BD8%29.ogg',
    },
  ],
  [
    {
      id: 1,
      name: 'Полевой жаворонок',
      species: 'Alauda arvensis',
      description:
        'Вид воробьиных птиц из семейства жаворонковых. Эти маленькие птички известны довольно громким и мелодичным пением. Крик — негромкое «чрр-ик», песня — долгая звонкая трель. Часто поют, зависая в воздухе на месте, иногда очень высоко.',
      image: 'https://live.staticflickr.com/4208/35439703952_9173a43b43.jpg',
      audio: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/XN_Alauda_arvensis.ogg',
    },
    {
      id: 2,
      name: 'Удодовый жаворонок',
      species: 'Alaemon',
      description:
        'Удодовый жаворонок обитает в Кабо-Верде, на Аравийском полуострове, в Сирии, Афганистане, Пакистане и Индии. Места обитания: пустыни. Расцветка — бледная красновато-жёлтая. Длина тела — до 22 см, крылья — до 12 см, хвост — до 9 см',
      image: 'https://live.staticflickr.com/7377/13473887015_78fc8bc0a0.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC497818-Witbandleeuwerik,%20call%20and%20song,%20Iwik,%20260117,%200754%20uur.mp3',
    },
    {
      id: 3,
      name: 'Пустынный жаворонок',
      species: 'Ammomanes deserti',
      description:
        'Своё гнездо пустынный жаворонок строит обычно в скалах или в пучке трав. На наветренной стороне птица укрепляет его маленькими камнями. В сухой внутренней части пустынь самки кладут чаще 3 яйца, на окраине пустынь — от 4-х до 5-и.',
      image: 'https://live.staticflickr.com/65535/48149377607_2dede87a5a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/NWTKEXMKCA/XC471068-Desert%20Lark_Geno_DLY.mp3',
    },
    {
      id: 4,
      name: 'Хохлатый жаворонок',
      species: 'Galerida cristata',
      description:
        'Призывный крик хохлатого жаворонка звучит как «трюдритрие», он же составляет основной мотив пения. Поёт обычно, сидя на земле, камне или заборе и иногда в полёте. Пение очень мелодично, птица имитирует даже голоса других птиц.',
      image: 'https://live.staticflickr.com/4400/36699815682_6b04046d3b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LNDCYHUSPR/XC560978-8%20may.%209.22%20cogujada.mp3',
    },
    {
      id: 5,
      name: 'Рогатый жаворонок',
      species: 'Eremophila',
      description:
        'Представители рода Eremophila получили название за перьевые «рога» у самцов в брачный период. Другой характерной особенностью является наличие светлых и чёрных полос по бокам головы, образующих маску.',
      image: 'https://live.staticflickr.com/2926/33096042440_e2d600e265.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC570941-Bergl%C3%A4rka_01_Sv.mp3',
    },
    {
      id: 6,
      name: 'Юла',
      species: 'Lullula arborea',
      description:
        'Небольшая птица бурого цвета с тёмными продольными пестринами. Голос — звонкая трель «тюю-люлю» или «люлюлю», часто поёт в воздухе, летая кругами. Название «юла» происходит от его песни «юли-юли-юли» или «юль-юль-юль»',
      image: 'https://live.staticflickr.com/65535/48114225552_48e0c3bcc5.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC555304-200504_2077%201606%20Heidelerche.%20D,%20BB,%20S%20Sch%C3%B6nwalde.%20Stephan%20Risch.mp3',
    },
  ],
];

export default birdsData;
