// var cities = ["#CC543A", "#B481BB", "#3A8FB7", "#1560BD", "#6D2E5B", "#8B81C3", "#51A8DD", "#006284", "#B5495B", "#EB7A77", "#C1693C", "#9ACD32", "#81C7D4", "#86C166", "#F05E1C", "#BFDAE5", "#33CC00", "#0C0C0C", "#FEDFE1", "#EEA9A9", "#E87A90", "#096148", "#5DAC81", "#EEED09", "#FFB11B", "#899BA9"]
// var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var bgimg = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

// document.onkeydown = function (e) {
//   console.log("key down", event);
//   document.querySelectorAll(".cities").forEach(a => {
//     a.style.display = "none";
//   })
//   document.body.style.backgroundColor = "#000000";
//   cursor.style.display = "block";
//   var randomIndex = Math.floor(Math.random() * cities.length);
//   if (e.key == " ") { return };
//   cursor.style.display = "none";
//   document.body.style.backgroundColor = cities[e.keyCode - 65];
//   document.body.style.backgroundImage = bgimg[randomIndex];
//   if (e.key == "Enter") { 
//     document.getElementById(letter[randomIndex]).style.display = "block";
//     document.body.style.backgroundColor = cities[randomIndex];
//   }
//   else {
//     document.getElementById(e.key).style.display = "block";
//   }
// }


let cities = {
  'a': {
    'cityName': 'Amsterdam, Netherlands',
    'video': 'video/amsterdam.mp4',
    'song': 'song/losretros.mp3',
  },
  'b': {
    'cityName': 'Boston, Massachusetts',
    'video': 'video/boston.mp4',
     'song': 'song/krystal.mp3',
  },
   'c': {
    'cityName': 'Cairo, Egypt',
    'video': 'video/cairo.mp4',
     'song': 'song/paul.mp3',
  },
    'd': {
    'cityName': 'Dubai, United Arab Emirates',
    'video': 'video/dubai.mp4',
    'song': 'song/beach.mp3',
  },
    'e': {
    'cityName': 'Edinburgh, United Kingdom',
    'video': 'video/edinburgh.mp4',
       'song': 'song/taba.mp3',
  },
    'f': {
    'cityName': 'Foshan, China',
    'video': 'video/foshan.mp4',
       'song': 'song/time.mp3',
  },
    'g': {
    'cityName': 'Guatemala City, Guatemala',
    'video': 'video/guatemala.mp4',
     'song': 'song/countrya.mp3',
  },
    'h': {
    'cityName': 'Hamburg, Germany',
    'video': 'video/hamburg.mp4',
       'song': 'song/september.mp3',
  },
    'i': {
    'cityName': 'Incheon, South Korea',
    'video': 'video/incheon.mp4',
'song': 'song/jacob.mp3',
  },
    'j': {
    'cityName': 'Jakarta, Indonesia',
    'video': 'video/jakarta.mp4',
      'song': 'song/grandma.mp3',
  },
    'k': {
    'cityName': 'Kyoto, Japan',
    'video': 'video/kyoto.mp4',
       'song': 'song/today.mp3',
  },
    'l': {
    'cityName': 'London, United Kingdom',
    'video': 'video/london.mp4',
    'song': 'song/reflection.mp3',
  },
      'm': {
    'cityName': 'Madrid, Spain',
    'video': 'video/madrid.mp4',
        'song': 'song/patrickwatson.mp3',
  },
      'n': {
    'cityName': 'New York City, New York',
    'video': 'video/nyc.mp4',
     'song': 'song/nyc.mp3',
  },
      'o': {
    'cityName': 'Osaka, Japan',
    'video': 'video/osaka.mp4',
     'song': 'song/memento.mp3',
  },
      'p': {
    'cityName': 'Paris, France',
    'video': 'video/paris.mp4',
       'song': 'song/pines.mp3',
  },
      'q': {
    'cityName': 'Quebec, Canada',
    'video': 'video/quebec.mp4',
       'song': 'song/reflection.mp3',
  },

    'r': {
    'cityName': 'Rio Grande, Brazil',
    'video': 'video/riogrande.mp4',
        'song': 'song/harvest.mp3',
  },
      's': {
    'cityName': 'Santorini, Greece',
    'video': 'video/santorini.mp4',
        'song': 'song/wildestdream.mp3',
  },
      't': {
    'cityName': 'Taipei, Taiwan',
    'video': 'video/taiwan.mp4',
      'song': 'song/shame.mp3',
  },    'u': {
    'cityName': 'Urla, Turkey',
    'video': 'video/turkey.mp4',
      'song': 'song/harvest.mp3',
  },    'v': {
    'cityName': 'Valencia, Venezuela',
    'video': 'video/valencia.mp4',
    'song': 'song/patrickwatson.mp3',
  },    'w': {
    'cityName': 'Winnipeg, Canada',
    'video': 'video/winnipeg.mp4',
    'song': 'song/losretros.mp3',
  },
      'x': {
    'cityName': 'Xian, China',
    'video': 'video/xian.mp4',
      'song': 'song/beach.mp3',
  },
      'y': {
    'cityName': 'York, United Kingdom',
    'video': 'video/york.mp4',
          'song': 'song/immensita.mp3',
  },
      'z': {
    'cityName': 'Zurich, Switzerland',
    'video': 'video/zurich.mp4',
    'song': 'song/reflection.mp3'
  }

};

let video = document.querySelector('video');
let song = document.querySelector('song');
let videoSource = document.querySelector('source');
let cityDisplay = document.querySelector('#cityname');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');

function keyEvent(event) {
  let key = event.key.toLowerCase();
  console.log(key);
  if (event.key in cities) {
    console.log("fired");
    let city = cities[event.key];
    videoSource.src = city.video;
    video.load();
    video.play();
    cityDisplay.innerText = city.cityName;

  const audio = document.querySelector('audio');
  audio.src = city.song;
  audio.play();

    document.querySelector('#cursor').style.display = "block";
    document.querySelector('#cursor').style.top = '20%';
    document.querySelector('#new').style.display = "block";
 h
  } else {

    cityDisplay.innerText = "";
    document.querySelector('#cursor').style.display = "block";
    document.querySelector('#cursor').style.top = '45%';
     document.querySelector('#cursor').style.textAlign = 'center';
     document.querySelector('#new').style.display = "none";
    videoSource.src = "earthvideo.mp4";
    video.load();
    video.play();
   const audio = document.querySelector('audio');
  audio.src = city.song;
  // count = 0;
  audio.pause();

  } 
}

document.addEventListener('keyup', keyEvent);

// var x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 


invert.addEventListener('click', function (event) {

  video.style.filter = 'invert(80%)';
  line1.style.display = 'none';
  line2.style.display = 'none';
  line3.style.display = 'block';

});

none.addEventListener('click', function (event) {

  video.style.filter = 'none';
  line1.style.display = 'none';
  line3.style.display = 'none';


});

warm.addEventListener('click', function (event) {

  video.style.filter = 'sepia(80%)';
  line1.style.display = 'block';
   line3.style.display = 'none';

});