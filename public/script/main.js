var copyrightPhrase = "made with love in Valencia, Spain and Manchester, UK by Enrique Tasa. March 2019 - November 2020.";

function startUp(){
    putCopyrightInfo();
}

function putCopyrightInfo(){
    document.getElementById('copyrightInfo').innerHTML = copyrightPhrase;
}

var links = [
    "youtu.be/vMnWK6apliQ", // six months in merchant marine
    "youtu.be/OPNZsKgzHGw", // there can only be one good boy in this town
    "youtu.be/46ZXl-V4qwY", // ancient rome in 20 minutes
    "youtu.be/Khfe3jBuq8c", // watch this if you want to smile (hank green)
    "youtu.be/KzPdfDDkCik", // take a closer look at that snout
    "youtu.be/nTQWtJVlJhk", // chase that happy
    "youtu.be/EAqGGpj0Ans", // classic sesame street
    "youtu.be/MCwGOMloBPk", // documentary
    "poetryfoundation.org/poems/51642/invictus", // invictus
    "poetryfoundation.org/poems/56159/this-is-just-to-say", // this is just to say
    "poetryfoundation.org/poems/42889/hope-is-the-thing-with-feathers-314", // hope is the thing with feathers
    "biblegateway.com/passage/?search=1+Peter+4%3A8-4%3A11&version=NIV]", // 1 Peter 4:8-11
    "biblegateway.com/passage/?search=Matthew%2022:37-39&version=NIV", // Matthew 22:37-39
    "artic.edu/artworks/111628/nighthawks" // nighthawks
];

function showMeSomething(){
    var randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    var link = 'http://' + links[randIdx];
    window.open(link);
};
