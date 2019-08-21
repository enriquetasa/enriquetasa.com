var copyrightPhrase = "made with love in Valencia, Spain and Manchester, UK by Enrique Tasa. August 2019.";

function startUp(){
    putCopyrightInfo();
}

function putCopyrightInfo(){
    document.getElementById('copyrightInfo').innerHTML = copyrightPhrase;
}