/* Data ve formě polí JS objektů (JSON) */
let mesta = [{
        "id": "bratislava",
        "city": "Bratislava",
        "peoples": 424428,
        "sign": "bratislava_znak.svg",
        "text": "Bratislava (německy Pressburg, maďarsky Pozsony, latinsky Posonium, do roku 1919 slovensky Prešporok / Prešporek, do roku 1919 česky Prešpurk) je hlavní a největší město Slovenska, centrum Bratislavského kraje a historická metropole někdejších žup Prešpurské a Bratislavské. Rozkládá se na obou březích Dunaje, v jihozápadní části země, při hranici s Rakouskem a Maďarskem. Žije zde přibližně 430 tisíc obyvatel."
    },
    {
        "id": "trnava",
        "city": "Trnava",
        "peoples": 65515,
        "sign": "trnava_znak.svg",
        "text": "Trnava (maďarsky Nagyszombat, německy Tyrnau, latinsky Tyrnavia) je krajské a okresní město na západním Slovensku, 44 km severovýchodně od Bratislavy, v centru Trnavské pahorkatiny na řece Trnávce, ve výšce 146 m n. m. Trnava je důležité historické a kulturní centrum, je sídlem dvou univerzit a arcibiskupství. V roce 2014 zde žilo 65 713 obyvatel a bylo tak sedmým největším slovenským městem."
    },
    {
        "id": "banska_bystrica",
        "city": "Banská Bystrica",
        "peoples": 78758,
        "sign": "banska_bystrica_znak.svg",
        "text": "Banská Bystrica (maďarsky Besztercebánya, německy Neusohl, česky též Báňská Bystřice či Banská Bystřice) je krajské a okresní město na Slovensku ve Slovenském rudohoří na řece Hron, 165 km severovýchodně od Bratislavy, sídlo bánskobystrické diecéze a Univerzity Mateja Bela. Žije zde přibližně 78 tisíc obyvatel a bylo tak šestým největším slovenským městem."
    },
    {
        "id": "kosice",
        "city": "Košice",
        "peoples": 239171,
        "sign": "kosice_znak.svg",
        "text": "Košice (německy Kaschau, maďarsky Kassa) jsou druhé největší město Slovenska a přirozená metropole východoslovenského regionu. Jsou sídlem Ústavního soudu SR a Košického samosprávného kraje. Město má přibližně 239 tisíc obyvatel, v košické aglomeraci žilo v roce 2011 355 000 obyvatel. Město je také centrem košicko-prešovské aglomerace s 555 800 obyvateli, která patří mezi největší městská seskupení na Slovensku."
    },
    {
        "id": "nitra",
        "city": "Nitra",
        "peoples": 77603,
        "sign": "nitra_znak.svg",
        "text": "Nitra (maďarsky Nyitra, německy Neutra) je krajské a okresní město na Slovensku. Leží na jihu země, na stejnojmenné řece. V roce 2010 zde žilo přes 78 000 obyvatel a bylo tak pátým největším slovenským městem."
    },
    {
        "id": "presov",
        "city": "Prešov",
        "peoples": 89872,
        "sign": "presov_znak.svg",
        "text": "Prešov (maďarsky Eperjes, německy Eperies a 1938–1945 i Preschau, polsky Preszów, ukrajinsky Пряшів (Prjašiv), rusky Пряшев (Prjašev), latinsky Fragopolis nebo Eperiessinum, romsky Perješis, přezdívaný také jako Atény nad Torysou) je krajské a okresní město na Slovensku. Se svými přibližně 89 tisíci obyvateli je tak po Bratislavě a Košicích třetím největším slovenským městem. Město má čtyři katastrální části: Prešov, Šalgovík, Solivar a Nižná Šebastová. Je sídlem archeparchy prešovského, hlavy Slovenské řeckokatolické církve a patří do Košicko-prešovské aglomerace."
    },
    {
        "id": "trencin",
        "city": "Trenčín",
        "peoples": 55725,
        "sign": "trencin_znak.jpg",
        "text": "Trenčín (maďarsky Trencsén, německy Trentschin, latinsky Trentsinium nebo Laugaricio) je krajské a okresní město na západě Slovenska na řece Váh, 110 km severovýchodně od Bratislavy, 12 km od hranic s Českem. Se svými přibližně 56 tisíci obyvateli je 9. největším slovenským městem."
    },
    {
        "id": "zilina",
        "city": "Žilina",
        "peoples": 81094,
        "sign": "zilina_znak.svg",
        "text": "Žilina (německy Sillein nebo Silein, maďarsky Zsolna, polsky Żylina, latinsky Solna) je krajské a okresní město na Slovensku, 170 km severovýchodně od Bratislavy, na soutoku řek Váhu a Kysuce v Žilinské kotlině, 28 km od hranic s Českem. Jedná se o důležité průmyslové i dopravní centrum, sídlo univerzity a od roku 2008 i biskupa římskokatolické žilinské diecéze. V květnu 2020 zde žilo přes 82 700 obyvatel a bylo tak čtvrtým největším slovenským městem."
    },
    /*{
        "id": "",
        "city": "",
        "peoples": ,
        "sign": "",
        "text": ""
    },*/
];

let unesco = [{
        "id": "banska_stiavnica",
        "locality": "Bánská Štiavnica",
        "year": 1993,
        "photo": "banska_stiavnica.jpg",
        "description": "Současnou podobu dala zámku novogotická přestavba ve stylu tudorské gotiky z let 1846-1858, jejímž autorem byl Jiří Wingelmüller. Část barokního zdiva sice zůstala zachována, ale nový vzhled fasády byl doplněn o řadu přístaveb a nových prvků, jako jsou cimbuří, balkóny, arkýře, komíny a věžičky. Romantický novogotický vzhled získaly také interiéry s vynikajícími ukázkami bohaté řezbářské výzdoby. Za pozornost stojí vřetenové schodiště v knihovně, kazetový strop z lipového dřeva v modrém sále, reliéf stromu života ze slonové kosti či mramorové krby.",
        "url": "https://cs.wikipedia.org/wiki/Bansk%C3%A1_%C5%A0tiavnica"
    },
    {
        "id": "vlkolinec",
        "locality": "Vlkolínec",
        "year": 1993,
        "photo": "vlkolinec.jpg",
        "description": "Vlkolínec je jedna z městských částí slovenského města Ružomberok, leží v severovýchodním výběžku pohoří Velká Fatra v bočním údolí Revúcké doliny na jižním úpatí vrchu Sidorovo v nadmořské výšce 718 m.",
        "url": "https://www.idnes.cz/cestovani/kolem-sveta/vlkolinec-jeden-z-nejlepe-utajenych-klenotu-slovenska.A110411_152947_igsvet_tom"
    },
    {
        "id": "dobsinska_jeskyne",
        "locality": "Dobšinská ledová jeskyně",
        "year": 1979,
        "photo": "dobsinska_jeskyne.jpg",
        "description": "Dobšinská ledová jeskyně (slovensky Dobšinská ľadová jaskyňa, maďarsky Dobsinai-jégbarlang) je největší zaledněná jeskyně na Slovensku. Nachází se v Stratenské hornatině, na severním svahu vápencového vrchu Duča, nedaleko hornického městečka Dobšiná v Národním parku Slovenský ráj.",
        "url": "http://www.ssj.sk/sk/jaskyna/6-dobsinska-ladova-jaskyna"
    },
    {
        "id": "spissky_hrad",
        "locality": "Spíšský hrad",
        "year": 1993,
        "photo": "spissky_hrad.jpg",
        "description": "Spišský hrad (maďarsky Szepesi vár, německy Zipser Burg) je se svým půdorysem 41 426 m² nejrozsáhlejší hradní zříceninou ve střední Evropě a jedním z největších hradních komplexů v Evropě.[1] Nachází se na travertinovém kopci nedaleko od městečka Spišské Podhradie na katastru obce Žehra asi 5 km severozápadně od ní. Spišský hrad je chráněn jako slovenská Národní kulturní památka a v roce 1993 byl hrad společně s přilehlými památkami (Spišská Kapitula, Spišské Podhradie a Žehra) zapsán na seznam lokalit Světového dědictví UNESCO.",
        "url": "http://www.spisskyhrad.sk/cz.html"
    },
    {
        "id": "levoca",
        "locality": "Levoča",
        "year": 2009,
        "photo": "levoca.jpg",
        "description": "Levoča (maďarsky Lőcse; německy Leutschau; polsky Lewocza) je historické město na východním Slovensku. Leží v Prešovském kraji na hlavní silnici spojující Žilinu a Košice. Město je sídlem Levočského okresu. Žije zde necelých 15 tisíc obyvatel. 28. června 2009 bylo historické centrum zapsáno do Seznamu světového kulturního dědictví UNESCO.",
        "url": "https://cs.wikipedia.org/wiki/Levo%C4%8Da"
    },
    {
        "id": "bardejov",
        "locality": "Bardejov",
        "year": 2000,
        "photo": "bardejov.jpg",
        "description": "Bardejov (německy Bartfeld, maďarsky Bartfa) je okresní město na Slovensku v Prešovském kraji. Leží na severovýchodě země, v oblasti Šariše. V roce 2018 zde žilo 32 449 obyvatel. Toto historické a lázeňské město je pro své zachovalé středověké centrum od roku 2000 zapsané mezi lokality Světového dědictví UNESCO. Městem protéká řeka Topľa. V Bardejovských Kúpeľích je veřejnosti zpřístupněných osm pramenů minerální vody.",
        "url": "https://cs.wikipedia.org/wiki/Bardejov"
    },
    /*{
        "id": "",
        "locality": "",
        "year": ,
        "photo": "",
        "description": "",
        "url": ""
    },*/
];

/* jQuery skript */
$(function() {
    $("#mapa-sk circle").hide();
    $("#mesta").on('change', function() {
        $("#mapa-sk rect").toggle(500);
    });


    $("#unesco").on('change', function() {
        $("#mapa-sk circle").toggle(500);
    });

    let puvodni = '';

    $("#mapa-sk path").on('mouseover', function() {
        if ($("#kraje:checked").val()) {
            puvodni = $(this).css('fill');
            $(this).css('fill', 'red');
            $(this).popover({
                'trigger': 'click',
                'placement': 'right',
                'offset': '10%, -100',
                /* Zde byla chyba - ve vašem SVG souboru máte kraje pojmenovány v atributu name, nikoliv ve značce title, jak to bylo v mém vzoru */
                'title': $(this).attr('name')
            });
        }
    });


    $("#mapa-sk path").on('mouseout', function() {
        $(this).css('fill', puvodni);
    });


    /* Města */
    $("#mapa-sk rect").on('click', function() {
        let id = $(this).attr('id');
        $("#mapa-sk rect").css('fill', 'black');
        $("#mapa-sk circle").css('fill', 'red');
        $(this).css('fill', 'yellow');
        let mesto = mesta.find(item => { return item.id == id });
        $('#info').fadeOut(1000, function() { $('#info').html(`<div class="col-12"><h2 class="bg-primary">${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obv.</small></h2></div><div class="col-2"><img src="kraje/${mesto.sign}" class="img-fluid"></div><div class="col-10">${mesto.text}</div>`) });
        $('#info').fadeIn(1000);
    });

    /* UNESCO */
    $("#mapa-sk circle").on('click', function() {
        let id = $(this).attr('id');
        $("#mapa-sk rect").css('fill', 'black');
        $("#mapa-sk circle").css('fill', 'red');
        $(this).css('fill', 'yellow');
        let pamatka = unesco.find(item => { return item.id == id });
        $('#info').slideUp(1000, function() { $('#info').html(`<div class="col-12"><h2 class="bg-info">${pamatka.locality} <small class="text-small">(od roku ${pamatka.year})</small></h2></div><div class="col-4"><img src="kraje/${pamatka.photo}" class="img-fluid"></div><div class="col-8"><p>${pamatka.description}</p><p><a href="${pamatka.url}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`) });
        $('#info').slideDown(1000);
    });

})