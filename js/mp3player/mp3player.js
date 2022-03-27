window.addEventListener("load", function () {
  const song = document.getElementById("song");
  const progressBar = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  const playerPlay = document.querySelector(".player-play");
  const playerPrev = document.querySelector(".player-prev");
  const playerNext = document.querySelector(".player-next");
  const playerRemaining = document.querySelector(".player-remaining");
  const playerDuration = document.querySelector(".player-duration");
  let isplayIng = true;
  const songs = [
    "123-i-love-you",
    "send-it",
    "thuong-nhau-toi-ben",
    "way-back-home",
  ];
  let index = 0;
  playerNext.addEventListener("click", function () {
    handleChangeMusic(1);
  });
  playerPrev.addEventListener("click", function () {
    handleChangeMusic(-1);
  });
  playerPlay.addEventListener("click", handlePlayMusic);
  function handleChangeMusic(dir) {
    if (dir === 1) {
      //   next
      index++;
      if (index > songs.length - 1) {
        index = 0;
      }
      isplayIng = true;
      song.setAttribute("src", `./files/${songs[index]}.mp3`);
      handlePlayMusic();
    } else if (dir === -1) {
      //   prev
      index--;
      if (index < 0) {
        index = songs.length - 1;
      }
      isplayIng = true;
      song.setAttribute("src", `./files/${songs[index]}.mp3`);
      handlePlayMusic();
    }
  }
  function handlePlayMusic() {
    if (isplayIng) {
      playerPlay.classList.add("fa-pause");
      playerImage.classList.add("is-playing");
      song.play();
      isplayIng = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      playerPlay.classList.remove("fa-pause");
      isplayIng = true;
    }
  }
  song.addEventListener("ended", function () {
    handleChangeMusic(1);
  });
  function displayTimer() {
    //   duration = full time of song
    // Currentime = time playing or pausing on change in input
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    playerRemaining.textContent = formatTimer(currentTime);
    // const minutes = Math.floor(song.duration / 60);
    // const seconds = Math.floor(duration - minutes * 60);
    playerDuration.textContent = formatTimer(duration);
  }
  function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  progressBar.addEventListener("change", handleDragProgressBar);
  function handleDragProgressBar() {
    song.currentTime = progressBar.value;
  }
  const timer = setInterval(displayTimer, 500);
});
