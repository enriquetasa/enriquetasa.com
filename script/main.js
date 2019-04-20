var copyrightPhrase = "made with love in Valencia, Spain by Enrique Tasa. April 2019.";

function startUp(){
    putCopyrightInfo();
}

function putCopyrightInfo(){
    document.getElementById('copyrightInfo').innerHTML = copyrightPhrase;
}