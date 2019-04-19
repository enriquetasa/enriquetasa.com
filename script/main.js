var currentMonth = getMonthForCopyright();

var copyrightPhrase = "made with love in Valencia, Spain by Enrique Tasa. April 2019.";

function startUp(){
    putCopyrightInfo();
    putSlogan();
}

function putSlogan() {
    var slogans = new Array();
    slogans[0] = "- la vida puede ser maravillosa -";
    slogans[1] = "slogan 2";
    slogans[2] = "slogan 3";
    slogans[3] = "slogan 4";
    slogans[4] = "slogan 5";
    slogans[5] = "slogan 6";
    slogans[6] = "slogan 7";
    slogans[7] = "slogan 8";
    slogans[8] = "slogan 9";
    slogans[9] = "slogan 10";

    var sloganToPut = slogans[Math.floor(Math.random() * slogans.length)];
    document.getElementById('subtitleSlogan').innerHTML = sloganToPut;
}

function getMonthForCopyright() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    return n;
}

function putCopyrightInfo(){
    document.getElementById('copyrightInfo').innerHTML = copyrightPhrase;
}