console.log("welcome to spotify");
let songIndex= 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar =document.getElementById('my_progress_bar');
let gif =document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songsItems = Array.from(document.getElementsByClassName("songItem"));


let songs=[
    {songName:'The Local Train - Choo Lo ',filePath:'songs/1.mp3',coverPath:'https://c.saavncdn.com/606/Aalas-Ka-Pedh-Hindi-2015-500x500.jpg'},
    {songName:'Anuv Jain - ALAG AASMAAN',filePath:'songs/2.mp3',coverPath:'https://images.genius.com/50af4dfcb3a4295c34bfacd6c1fffe9f.1000x1000x1.jpg'},
    {songName:'Poets of the Fall - Carnival of Rust ',filePath:'songs/3.mp3',coverPath:'https://upload.wikimedia.org/wikipedia/en/d/d6/Potf-cor.jpg'},
    {songName:'The Chainsmokers & Coldplay - Something Just Like This',filePath:'songs/4.mp3',coverPath:'https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png'},
    {songName:'Coldplay - Hymn For The Weekend ',filePath:'songs/0.mp3',coverPath:'https://upload.wikimedia.org/wikipedia/en/e/e5/Coldplay%2C_Hymn_for_the_Weekend%2C_Artwork.jpg'},
]

songsItems.forEach((element,i) => {
 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
       audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       gif.style.opacity=0; 
    }
})
//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    if(audioElement.paused){
        makeAllplays()
        songIndex = (e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`; 
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName;
        
        audioElement.currentTime=0; 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }else{
      
        e.target.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`; 
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>4){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`; 
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.play();
    audioElement.currentTime=0; 
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<2){
        songIndex=5;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`; 
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.play();
    audioElement.currentTime=0; 
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})