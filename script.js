console.log("Welcome to Spotify");
//initialize the variables
let songindex=0;
let audioelement=new Audio('6.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');



let songs=[
    {songname : "Let me love you", filepath: "1.mp3", coverpath: "cover1.png"},
    {songname : "Chupke Se", filepath: "2.mp3", coverpath: "cover1.png"},
    {songname : "Bella Ciao", filepath: "3.mp3", coverpath: "cover1.png"},
    {songname : "Aayat", filepath: "4.mp3", coverpath: "cover1.png"},
    {songname : "Jhoome jo pathaan", filepath: "5.mp3", coverpath: "cover1.png"},
    {songname : "O Bedardiya", filepath: "6.mp3", coverpath: "cover1.png"},
    {songname : "Humdard", filepath: "7.mp3", coverpath: "cover1.png"}
]

//audioelement.play();

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }

})

// listen to events
audioelement.addEventListener('timeupdate', ()=>{
   // console.log('timeupdate');



//updating seekbar     tricky thing starts now
let progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
//console.log(progress);
myprogressbar.value=progress;

})

myprogressbar.addEventListener('change', ()=>{
     
    audioelement.currentTime=(myprogressbar.value/100)*audioelement.duration;
})
//let me love you
//chupke se
//bella ciao
//aayat
//pathaan
//bedardiya
//humdard

const makallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.addEventListener('click',(element)=>{
            makeallplays();
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        
    
            
    
    
    
    })
})
    
        
        
    
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        



})

    }
    
)


