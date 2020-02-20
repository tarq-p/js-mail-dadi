// Costruzione della lista di mail accettate
// Prompt per inserimento dell' email
// Messaggio di benvenuto


var iscritti = ['mario@gmail.com','luca@gmail.com','marco@gmail.com'];
// console.log('iscritti')
var iscrizione = prompt ('la tua email?')

for (var i = 0; i < iscritti.length; i++) {
    if (iscrizione == iscritti[i]) {
    document.getElementById('in').innerHTML = 'Rieccoti, La tua email "' + iscrizione + '" è gia registrata nei nostri sistemi';
    document.getElementById('email').setAttribute('class ', 'visible');

}
    else {
    // console.log('out');
    document.getElementById('out').innerHTML = ' Ci dispiace ma la tua email "' + iscrizione  + '" non è registrata nei nostri sistemi';
    document.getElementById('email').setAttribute('class', 'visible');
}
}
