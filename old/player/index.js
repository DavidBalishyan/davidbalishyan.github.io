const audio = document.getElementById("audio");
const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("title");

let media = audio;

playBtn.onclick = () => {
  if (media.paused) {
    media.play();
    playBtn.textContent = "⏸";
  } else {
    media.pause();
    playBtn.textContent = "▶";
  }
};

fileInput.onchange = () => {
  const file = fileInput.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  title.textContent = file.name;

  if (file.type.startsWith("video")) {
    audio.pause();
    audio.src = "";
    video.style.display = "block";
    video.src = url;
    media = video;
  } else {
    video.pause();
    video.style.display = "none";
    video.src = "";
    audio.src = url;
    media = audio;
  }

  media.volume = volume.value;
  media.play();
  playBtn.textContent = "⏸";
};

media.ontimeupdate = () => {
  progress.value = (media.currentTime / media.duration) * 100 || 0;
};

progress.oninput = () => {
  media.currentTime = (progress.value / 100) * media.duration;
};

volume.oninput = () => {
  media.volume = volume.value;
};
