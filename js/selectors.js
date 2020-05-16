/* Práce s jQuery je veliká zábava!!! */
/* Vše co je zakomentované jsem použil, ale zakomentoval jsem tyto řádky, protože jsou to částečně
   rušivé elementy, které stránku trochu znehodnocují, avšak zvědavci si mohou vše odkomentovat, a tak uvidí, 
   co vše jsem na této stránce vylepšil a jak jsem si s touto stránkou hrál */

$(document).ready(function() {


    /* Všechny tlačítka nechť mají bílé ohraničení */
    $('button').css({ 'border': '2px solid white' });

    //---------------------------------------------------------------------------------------------------------//

    /* Nadpis h1 se při přejetí myši zprůhlední na polovinu a poté zpět, když myš odjede z nadpisu h1*/
    $('h1').hover(function() {
        // over
        $('h1').animate({ opacity: 0.5 });
    }, function() {
        // out
        $('h1').animate({ opacity: 1 });
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Nadpis h2 a funkce hover*/
    /*$('h2').hover(function() {
        // over
        $('h2').css({ 'border': '4px solid red' });
    }, function() {
        // out
        $('h2').css({ 'color': 'white', 'border': 'none', 'background': 'blue' });
    });*/

    //---------------------------------------------------------------------------------------------------------//

    /* Odstavce s písmem p se po přejetí myši ohraničí */
    /*$('p').hover(function() {
        // over
        $('p').css({ 'border': '2px solid blue' });
    }, function() {
        // out
        $('p').css({ 'border': 'none' });
    });*/

    //---------------------------------------------------------------------------------------------------------//

    /* Navigační lišta */
    /* Myš, pokus 1 */
    /*$('nav').hover(function() {
        // over
        $('nav').css({ 'border': '10px solid red' });
    }, function() {
        // out
        $('nav').css({ 'border': 'none' });
    });*/

    /* Pokus 2 */
    $('nav').css({ 'border': '5px solid red' });

    //---------------------------------------------------------------------------------------------------------//

    /* Napis h3 s funkcí hover */
    /*$('h3').hover(function() {
        // over
        $('h3').css({ 'color': 'white', 'background': 'blue', 'border': '3px solid red' });
    }, function() {
        // out
        $('h3').css({ 'color': 'blue', 'background': 'none', 'border': 'none' });
    });*/

    //---------------------------------------------------------------------------------------------------------//


    /*   ------------------------- */
    /* | Tlačítka s různými efekty | */
    /*   ------------------------- */


    /* Tlačítko s postelí - tmavý mód */
    $('#bed').on('click', function() {
        $('body').css('background', 'black');
        $('p').css('color', 'white');
        $('th, td, figcaption').css('color', 'white');
        $('.list-group, .list-group-item').css({ 'color': 'white', 'background': 'blue' });
        $('th, td').css({ 'color': 'white', 'background': 'blue' });
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Jas */
    $('#adjust').on('click', function() {
        $('body').css('background', 'skyblue');
        $('p').css('color', 'black');
        $('th, td, figcaption').css('color', 'black');
        $('.list-group, .list-group-item').css({ 'color': 'black', 'background': 'white' });
        $('th, td').css({ 'color': 'black', 'background': 'none' });
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Maska - rouška */
    $('#mask').on('click', function() {
        $('img').attr('src', 'img/emoji_mask.png');
        $('h1').text('Akce rouška');
        $('p').text('Až skončí akce rouška, budou všem odstávat ouška :)');
        $('#zapati').html('Až skončí akce rouška, budou mít všichni <b>klapatá ouška</b>');
        $('figcaption').text('Rouškatý smajlík');
        $('td').text('Rouška');
        $('h2').text('Akce rouška aneb klapatá ouška');
    })

    //---------------------------------------------------------------------------------------------------------//

    /* Tlačítko ve tvaru závodníka */
    $('#zavodnik').on('click', function() {
        $('aside').animate({ left: '300px', opacity: 0.5 }, 1000).animate({ left: '0px', opacity: 1 }, 1000);
        $('*').animate({ top: '300px' }, 2000).animate({ top: '0px' }, 2000);
        $('img').animate({ opacity: 0.2 }, 1000).animate({ opacity: 1 }, 1000);
        $('aside').animate({ opacity: 0.4, left: '300px' }, 500).animate({ opacity: 0.6, left: '0px', bottom: '100px' }, 500).animate({ opacity: 0.8, bottom: '0px' }, 500).animate({ opacity: 0.2, left: '200px', bottom: '300px' }, 500).animate({ opacity: 1, left: '0px', bottom: '0px' }, 500);
        $('*').animate({ bottom: '200px' }, 2000).animate({ opacity: 0.2, bottom: '0px' }, 1000).animate({ opacity: 1 }, 1000);
    });


    //---------------------------------------------------------------------------------------------------------//

    /* virus */
    $('#virus').on('click', function() {
        $('h1').text('Oficiální stránky o Coronavidu');
        $('h2').text('V hlavní roli: Karanténa');
        $('h3').text('Ve vedlejší roli: Dovolená');
        $('p').html('Kam letos vyrazit na dovolenou? Přece do <b>Obýváku</b>');
        $('#zapati').text('Karanténa je jako migréna, nikdy nevíte kdy skončí!!!');
        $('img').attr('src', 'img/vtipy.webp');
        $('td').text('doma');
    })

    //---------------------------------------------------------------------------------------------------------//

    /* Animační tlačítko */
    $('#animate').on('click', function() {
        $('*').animate({ left: '500px', top: '500px', opacity: 0.5 }, 5000).animate({ left: '0px', top: '0px', opacity: 1 }, 5000).animate({ bottom: '100px', right: '200px', opacity: 0.2 }, 2000).animate({ bottom: '0px', right: '0px', opacity: 1 }, 3000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Animační tlačítko číslo 2 */
    $('#animate2').on('click', function() {
        $('*').animate({ left: '500px', bottom: '400px', opacity: 0.2 }, 10000).animate({ left: '0px', bottom: '0px', opacity: 1 }, 5000).animate({ opacity: 0.3 }, 5000).animate({ opacity: 1 }, 8000).animate({ opacity: 0.5 }, 500).animate({ opacity: 1 }, 500);
        $('h1').animate({ opacity: 0.5 }, 5000).animate({ opacity: 1 }, 5000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Animační tlačítko číslo 3 */
    $('#animate3').on('click', function() {
        $('aside').animate({ left: '500px', bottom: '300px', opacity: 0.5 }, 5000);
        $('*').animate({ opacity: 0.5 }, 2000);
        $('*').animate({ left: '20px' }, 200).animate({ top: '400px' }, 200).animate({ top: '0px', left: '0px', opacity: 1 }, 2000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Animační tlačítko číslo 4 */
    $('#animate4').on('click', function() {
        $('img').animate({ opacity: 0.5 }, 2000);
        $('*').animate({ left: '500px', top: '500px', opacity: 0 }, 5000).animate({ left: '0px', top: '0px', opacity: 1 }, 5000);
        $('aside').animate({ opacity: 0, top: '2000px' }, 3000);
        $('img').animate({ opacity: 0.2 }, 1000).animate({ opacity: 0.6 }, 2000).animate({ opacity: 1 }, 3000);
        $('aside').animate({ opacity: 1, top: '0px' }, 2000);
        $('*').animate({ opacity: 0 }, 5000).animate({ opacity: 1 }, 5000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Animační tlačítko číslo 5 */
    $('#animate5').on('click', function() {
        $('img').animate({ opacity: 0.5, right: '300px' }, 3000);
        $('aside').animate({ opacity: 0, right: '500px', bottom: '200px' }, 2000);
        $('body').animate({ opacity: 0.3 }, 2000).animate({ opacity: 1 }, 2000);
        $('img').animate({ opacity: 1, right: '0px' }, 3000);
        $('aside').animate({ opacity: 1, left: '1000px', bottom: '0px' }, 3000).delay(2000).animate({ left: '0px' }, 2000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Ničivé tlačítko, pouze na vlastní nebezpečí!!! */
    $('#destroy').on('click', function() {
        $('img').attr('src', 'img/trojsky_kun.webp');
        $('h1').css({ 'background': 'red', 'color': 'purple' });
        $('h1').text('Stránka je úspěšně naheckovaná!!!');
        $('li:first-child').text('Sorry').css({ 'border': '5px dotted red', 'font-size': '8em' });
        $('li:last-child').text('IT is END').css({ 'border': '10px solid purple', 'font-size': '5em' });
        $('h2').text('Netrojčete!!! Žádný Trojský koník zde není!!!').css({ 'font-size': '10em', 'background': 'black', 'color': 'red' });
        $('h3').text('Navštívil Vás Trojský koroníček - 16.2.3.').css({ 'background': 'purple', 'color': 'yellow' });
        $('body').css({ 'background': 'green' });
        //$('p:even').text('Akce Rouška!!!').css({ 'border': '3px dotted yellow' });
        $('aside').css({ 'border': 'pink' });
        $('p').html('Odvirování za 10 Giga Koron nebo dohodou o provedení práce').css({ 'border': '5px solid red', 'background': 'yellow', 'color': 'red' });
        $('#zapati').html('&copy; Navštívil Vás <b><i>Ivan Trojan</i></b>, All Rights Reserved').css({ 'border': '10px solid red', 'color': 'red', 'font-size': '5em' });
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Tlačítko SPAM, úspěšně naspamuje stránku */
    $('#spam').on('click', function() {
        $('h1').text('Navštívil Vás Váš oblíbený, známý, dlouholetý (ne)přítel Spam');
        $('img').attr('src', 'img/spam1.jpg');
        $('h2').html('Jíst s <b>chutí</b> a zdravě?');
        $('h3').html('Na <b><i>Spamu</i></b> si pochutná i Váš <b>mazlíček</b>!').css({ 'border': '2px solid red' });
        $('p').text('Co tě nezabije, to tě posílí!');
        $('#zapati').html('&copy; Hrdým partnerem tohoto projektu je nová slovenská firma <b>Urob si sám</b>');
        $('img').animate({ height: '500px', width: '500px', opacity: 0.7 }, 3000).animate({ height: '200px', width: '400px', opacity: 1 }, 2000);
    });

    //---------------------------------------------------------------------------------------------------------//


    /* Bourací tlačítko */
    $('#wreck').on('click', function() {
        $('img').animate({ opacity: 0.5, right: '300px' }, 3000);
        $('aside').animate({ opacity: 0, right: '500px', bottom: '200px' }, 2000);
        $('p').animate({ height: '100px' }, 1000);
        $('*').animate({ opacity: 1, right: '0px', bottom: '0px', height: '20px' }, 3000).delay(5000);
        $('*').hide(5000);
    });

    //---------------------------------------------------------------------------------------------------------//

    /* Tlačítko na skrytí stránky */
    $('#hide').on('click', function() {
        $('*').hide(10000);
    });

});

//---------------------------------------------------------------------------------------------------------//

/* To je zatím vše, děkuji za pozornost !!! */

/* B-eta verze Slovensko 2, Made by Filip Híreš, 2020, IT2, &copy; All Rights Reserved */