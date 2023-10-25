
let playlist=['Take On Me.mp3','Take2.mp3','Take3.mp3','Take On Me.mp3','Take2.mp3','Take3.mp3','Take3.mp3'];
let index=0;
let long=playlist.length;
let chanteur=['chanteur1','chanteur2','chanteur3','chanteur4','chanteur5','chanteur6','chanteur7'];
let chanson=['chanson1','chanson2','chanson3','chanson4','chanson5','chanson6','chanson7'];

function init() {/* charge l'audio dans la page web des le depart. */
    document.getElementById('lecteur').src=playlist[index];
    
    for (let i=0;i<long;i++){
    const creationDiv=document.createElement("div");
    creationDiv.innerHTML='<img onclick=next() src="#" alt="'+chanson[i]+'"><h1>'+chanson[i]+'</h1><h3>'+ chanteur[i] +'</h3>';
creationDiv.classList.add("music");
creationDiv.setAttribute('id','musique');
    document.getElementById('card').appendChild(creationDiv);
}
}

// function changemusic(index){
//     document.getElementById('lecteur').src=playlist[index];
//     console.log(playlist[index]);
   
// }

function next(){
   if(index == long-1) {
index = 0;
}
else{
    index++;
    document.getElementById('lecteur').src=playlist[index];
    console.log(playlist[index]);
}
} 

function previous(){
    if(index == 0) {
 index = long-1;
 }
 else{
     index--;
     document.getElementById('lecteur').src=playlist[index];
     console.log(playlist[index]);
 }
 } 
 




function lecture() {
    if(document.getElementById('lecteur').paused){   //condition si en pause alors je fais play pour lire audio
    document.getElementById('lecteur').play();     /* je prends la piste audio et je fais lecture, play est une competence d'audio html*/
    let pause = document.getElementById('pause').innerHTML;  // j'enregistre la valeur du bouton pause en html dans une variable
    document.getElementById('lecture').innerHTML = pause;  //je donne a mon bouton lecture la valeur du bouton pause.
}
    else{
        document.getElementById('lecteur').pause();  // si audio n'est pas en pause (donc en lecture) alors en cliquant je fais pause
        let play = document.getElementById('lire').innerHTML;  // je met dans une variable la valeur d'un bouton play
        document.getElementById('lecture').innerHTML = play;  // je change la valeur du bouton lecture par play
    }
}

function volume_moins(){
    if(document.getElementById('lecteur').volume.toFixed(1)>=0){/* le volume en audio html ne va que de 0 à 1 on limite donc avec une borne et on met fonction fixed() pour regler erreur javascript*/
    document.getElementById('lecteur').volume -= 0.1;/* je prends le volume de mon fichier audio et je decremente (-=) de 10*/
    document.getElementById('volumeBarre').value = document.getElementById('lecteur').volume; /* pour l'input range je lui donne la valeur du volume audio pour evoluer en meme temps que je clic*/
    }
}

function volume_plus(){
    if(document.getElementById('lecteur').volume.toFixed(1)<=1){     /* le volume en audio html ne va que de 0 à 1 on limite donc avec une borne et on met fonction fixed() pour regler erreur javascript*/
    document.getElementById('lecteur').volume += 0.1;   /* je prends le volume de mon fichier audio et je decremente (-=) de 10*/
    document.getElementById('volumeBarre').value = document.getElementById('lecteur').volume; /* pour l'input range je lui donne la valeur du volume audio pour evoluer en meme temps que je clic*/
    }
}

function volumeChange(){
    document.getElementById('lecteur').volume = document.getElementById('volumeBarre').value;/*en html j'utilise onchange car evenement range prit en charge et je l'informe que la valeur du range et egale a la valeur volume audio*/
}


function changeDuration() { // permet de connaitre la durée max de la piste audio.
    //input range je lui donne change l'attribut : max et lui donne la valeur max de la piste
    document.getElementById('timeSpend').setAttribute('max',document.getElementById('lecteur').duration); 
}

function changeTimeSpend(){
    //a mon input range je donne la valeur currentTime temps ecoulé et je fait en html sur la piste audio ontimeupdate pour recuperer cette valeur
    document.getElementById('timeSpend').value=document.getElementById('lecteur').currentTime;
    
}

function changeRangetime(){
    //je fais un onchange sur ma barre de temps et j'affecte la modifie la valeur currentTime en lui donnant la valeur de mon range
    document.getElementById('lecteur').currentTime= document.getElementById('timeSpend').value;
}

