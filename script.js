const songs = [
  {
    title: "Aidilfitri",
    artist: "Sanisah Huri",
    file: "assets/songs/aidilfitri.mp3",
    cover: "assets/covers/aidilfitri.jfif",
    duration: "3:42"
  },
  {
    title: "Aidilfitri Di Alaf Baru",
    artist: "Siti Nurhaliza, Noraniza Idris, Liza Hanim & Anis Suraya",
    file: "assets/songs/aidilfitri_di_alaf_baru.mp3",
    cover: "assets/covers/aidilfitri_di_alaf_baru.jpg",
    duration: "4:18"
  },
  {
    title: "Air Mata Syawal",
    artist: "Siti Nurhaliza",
    file: "assets/songs/air_mata_syawal.mp3",
    cover: "assets/covers/air_mata_syawal.jpg",
    duration: "5:02"
  },
  {
    title: "Alamak Raya Lagi",
    artist: "De Fam",
    file: "assets/songs/alamak_raya_lagi.mp3",
    cover: "assets/covers/alamak_raya_lagi.jfif",
    duration: "2:50"
  },
  {
    title: "Anugerah Aidilfitri",
    artist: "Siti Nurhaliza",
    file: "assets/songs/anugerah_aidilfitri.mp3",
    cover: "assets/covers/anugerah_aidilfitri.jpg",
    duration: "3:52"
  },
  {
    title: "Balik Kampung",
    artist: "Sudirman",
    file: "assets/songs/balik_kampung.mp3",
    cover: "assets/covers/balik_kampung.jfif",
    duration: "3:29"
  },
  {
    title: "Bila Takbir Bergema",
    artist: "Rafeah Buang",
    file: "assets/songs/bila_takbir_bergema.mp3",
    cover: "assets/covers/bila_takbir_bergema.jfif",
    duration: "2:43"
  },
  {
    title: "Cahaya Aidilfitri",
    artist: "Black Dog Bone",
    file: "assets/songs/cahaya_aidilfitri.mp3",
    cover: "assets/covers/cahaya_aidilfitri.jpg",
    duration: "3:46"
  },
  {
    title: "Dari Jauh Ku Pohon Maaf",
    artist: "Sudirman",
    file: "assets/songs/dari_jauh_ku_pohon_maaf.mp3",
    cover: "assets/covers/dari_jauh_ku_pohon_maaf.jpg",
    duration: "3:46"
  },
  {
    title: "Dendang Perantau",
    artist: "P. Ramlee",
    file: "assets/songs/dendang_perantau.mp3",
    cover: "assets/covers/dendang_perantau.jfif",
    duration: "2:44"
  },
  {
    title: "Hang Pi Raya",
    artist: "Khalifah",
    file: "assets/songs/hang_pi_raya.mp3",
    cover: "assets/covers/hang_pi_raya.jfif",
    duration: "2:52"
  },
  {
    title: "Hari Mulia",
    artist: "Sheila Majid",
    file: "assets/songs/hari_mulia.mp3",
    cover: "assets/covers/hari_mulia.jfif",
    duration: "4:25"
  },
  {
    title: "Hari Raya Hari Bahagia",
    artist: "Ramlah Ram",
    file: "assets/songs/hari_raya_hari_bahagia.mp3",
    cover: "assets/covers/hari_raya_hari_bahagia.jfif",
    duration: "2:47"
  },
  {
    title: "Indahnya Beraya Di Desa",
    artist: "Azlina Aziz",
    file: "assets/songs/indahnya_beraya_di_desa.mp3",
    cover: "assets/covers/indahnya_beraya_di_desa.jfif",
    duration: "4:33"
  },
  {
    title: "Kepulangan Yang Di Nanti",
    artist: "Aman Shah",
    file: "assets/songs/kepulangan_yang_di_nanti.mp3",
    cover: "assets/covers/kepulangan_yang_di_nanti.jpg",
    duration: "3:47"
  },
  {
    title: "Ku Pohon Restu Ayah Bonda",
    artist: "Mamat Exists",
    file: "assets/songs/ku_pohon_restu_ayah_bonda.mp3",
    cover: "assets/covers/ku_pohon_restu_ayah_bonda.jpg",
    duration: "2:44"
  },
  {
    title: "Manis Manis Lebaran",
    artist: "Sofaz, New Boyz, Lips & Saidatul Erma",
    file: "assets/songs/manis_manis_lebaran.mp3",
    cover: "assets/covers/manis_manis_lebaran.jfif",
    duration: "3:44"
  },
  {
    title: "Menjelang Hari Raya",
    artist: "DJ Dave",
    file: "assets/songs/menjelang_hari_raya.mp3",
    cover: "assets/covers/menjelang_hari_raya.jfif",
    duration: "3:16"
  },
  {
    title: "Meriah Lain Macam",
    artist: "Hael Husaini & Nadeera",
    file: "assets/songs/meriah_lain_macam.mp3",
    cover: "assets/covers/meriah_lain_macam.jfif",
    duration: "3:42"
  },
  {
    title: "Meriah Suasana Hari Raya",
    artist: "Siti Nurhaliza",
    file: "assets/songs/meriah_suasana_hari_raya.mp3",
    cover: "assets/covers/meriah_suasana_hari_raya.jfif",
    duration: "4:49"
  },
  {
    title: "Nazam Lebaran",
    artist: "Siti Nurhaliza",
    file: "assets/songs/nazam_lebaran.mp3",
    cover: "assets/covers/nazam_lebaran.jpg",
    duration: "5:40"
  },
  {
    title: "Nikmat Hari Raya",
    artist: "Siti Nurhaliza, Noraniza Idris, New Boyz & Aqasha",
    file: "assets/songs/nikmat_hari_raya.mp3",
    cover: "assets/covers/nikmat_hari_raya.jpg",
    duration: "3:57"
  },
  {
    title: "Pulang Di Hari Raya",
    artist: "Noorkumalasari",
    file: "assets/songs/pulang_di_hari_raya.mp3",
    cover: "assets/covers/pulang_di_hari_raya.jfif",
    duration: "2:53"
  },
  {
    title: "Rap Der Raya",
    artist: "Yonnyboii, Luca Sickta, Kmy Kmo, Abubakarxli, Siqma, ASYRAF NASIR",
    file: "assets/songs/rap_der_raya.mp3",
    cover: "assets/covers/rap_der_raya.jfif",
    duration: "3:55"
  },
  {
    title: "Raya Raya Raya",
    artist: "DOLLA",
    file: "assets/songs/raya_raya_raya.mp3",
    cover: "assets/covers/raya_raya_raya.jfif",
    duration: "2:55"
  },
  {
    title: "Salam Aidilfitri",
    artist: "Jamal Abdillah",
    file: "assets/songs/salam_aidilfitri.mp3",
    cover: "assets/covers/salam_aidilfitri.jfif",
    duration: "4:09"
  },
  {
    title: "Satu Hari Di Hari Raya",
    artist: "M. Nasir",
    file: "assets/songs/satu_hari_di_hari_raya.mp3",
    cover: "assets/covers/satu_hari_di_hari_raya.jfif",
    duration: "3:27"
  },
  {
    title: "Selamat Berhari Raya",
    artist: "Rahimah Rahim",
    file: "assets/songs/selamat_berhari_raya.mp3",
    cover: "assets/covers/selamat_berhari_raya.jpg",
    duration: "3:34"
  },
  {
    title: "Selamat Hari Raya",
    artist: "Ahmad Jais",
    file: "assets/songs/selamat_hari_raya_jais.mp3",
    cover: "assets/covers/selamat_hari_raya_jais.jpg",
    duration: "2:35"
  },
  {
    title: "Selamat Hari Raya",
    artist: "Fazidah Joned",
    file: "assets/songs/selamat_hari_raya_fazidah.mp3",
    cover: "assets/covers/selamat_hari_raya_fazidah.jpg",
    duration: "2:38"
  },
  {
    title: "Selamat Hari Raya",
    artist: "Saloma",
    file: "assets/songs/selamat_hari_raya_saloma.mp3",
    cover: "assets/covers/selamat_hari_raya_saloma.jfif",
    duration: "2:38"
  },
  {
    title: "Seloka Hari Raya",
    artist: "Uji Rashid & Hail Amir",
    file: "assets/songs/seloka_hari_raya.mp3",
    cover: "assets/covers/seloka_hari_raya.jfif",
    duration: "3:00"
  },
  {
    title: "Senandung Hari Raya Untukmu",
    artist: "Dayangku Intan",
    file: "assets/songs/senandung_hari_raya_untukmu.mp3",
    cover: "assets/covers/senandung_hari_raya_untukmu.jpg",
    duration: "3:27"
  },
  {
    title: "Serumpun",
    artist: "MIMIFLY",
    file: "assets/songs/serumpun.mp3",
    cover: "assets/covers/serumpun.jpg",
    duration: "2:11"
  },
  {
    title: "Sesuci Lebaran",
    artist: "Siti Nurhaliza",
    file: "assets/songs/sesuci_lebaran.mp3",
    cover: "assets/covers/sesuci_lebaran.jpg",
    duration: "3:59"
  },
  {
    title: "Suasana Di Hari Raya",
    artist: "Anuar & Ellina",
    file: "assets/songs/suasana_di_hari_raya.mp3",
    cover: "assets/covers/suasana_di_hari_raya.jpg",
    duration: "3:17"
  },
  {
    title: "Suasana Riang Di Hari Raya",
    artist: "Junainah M. Amin",
    file: "assets/songs/suasana_riang_di_hari_raya.mp3",
    cover: "assets/covers/suasana_riang_di_hari_raya.jfif",
    duration: "3:12"
  }
];

const trackList = document.getElementById("trackList");
const searchInput = document.getElementById("searchInput");
const recentRow = document.getElementById("recentRow");

const audioPlayer = document.getElementById("audioPlayer");
const nowPlayingCover = document.getElementById("nowPlayingCover");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const nowPlayingArtist = document.getElementById("nowPlayingArtist");

const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playAllBtn = document.getElementById("playAllBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const shareBtn = document.getElementById("shareBtn");

const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let currentSongIndex = 0;
let isPlaying = false;
let filteredSongs = [...songs];
let recentlyPlayed = [];

function formatTime(seconds) {
  if (!isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateNowPlaying(song) {
  nowPlayingCover.src = song.cover;
  nowPlayingCover.alt = song.title;
  nowPlayingTitle.textContent = song.title;
  nowPlayingArtist.textContent = song.artist;
}

function updatePlayPauseIcon() {
  playPauseBtn.textContent = isPlaying ? "❚❚" : "▶";
}

function getSongByIndex(index) {
  return songs[index];
}

async function handleShare() {
  const shareData = {
    title: "Raya Mix 2026",
    text: "Check out my Raya Mix 2026 playlist website.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard.");
  } catch (error) {
    console.error("Share failed:", error);
    alert("Unable to share right now.");
  }
}

function renderRecentlyPlayed() {
  if (!recentRow) return;

  recentRow.innerHTML = "";

  recentlyPlayed.slice(0, 4).forEach((songIndex) => {
    const song = songs[songIndex];
    if (!song) return;

    const chip = document.createElement("img");
    chip.src = song.cover;
    chip.alt = song.title;
    chip.className = "recent-chip";
    chip.title = `${song.title} - ${song.artist}`;

    chip.addEventListener("click", () => {
      loadSong(songIndex, true);
    });

    recentRow.appendChild(chip);
  });
}

function pushRecentlyPlayed(songIndex) {
  recentlyPlayed = recentlyPlayed.filter((index) => index !== songIndex);
  recentlyPlayed.unshift(songIndex);
  recentlyPlayed = recentlyPlayed.slice(0, 4);
  renderRecentlyPlayed();
}

function loadSong(index, shouldAutoplay = false) {
  currentSongIndex = index;
  const song = getSongByIndex(index);

  if (!song) return;

  audioPlayer.src = song.file;
  updateNowPlaying(song);
  pushRecentlyPlayed(index);
  highlightActiveTrack();
  updatePlayPauseIcon();

  currentTimeEl.textContent = "0:00";
  seekBar.value = 0;

  if (shouldAutoplay) {
    audioPlayer.play();
  }
}

function playSong(index = currentSongIndex) {
  const song = getSongByIndex(index);
  if (!song) return;

  if (audioPlayer.src !== new URL(song.file, window.location.href).href) {
    loadSong(index, false);
  }

  audioPlayer.play();
}

function pauseSong() {
  audioPlayer.pause();
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex, true);
}

function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex, true);
}

function playRandomSong() {
  if (songs.length === 0) return;

  let randomIndex = Math.floor(Math.random() * songs.length);

  if (songs.length > 1) {
    while (randomIndex === currentSongIndex) {
      randomIndex = Math.floor(Math.random() * songs.length);
    }
  }

  loadSong(randomIndex, true);
}

function createTrackRow(song, index) {
  const row = document.createElement("button");
  row.className = "track-row";
  row.type = "button";
  row.dataset.index = index;

  row.innerHTML = `
    <div class="track-left">
      <img src="${song.cover}" alt="${song.title}" class="track-cover" />
      <div class="track-meta">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
    </div>

    <div class="track-right">
      <span class="track-duration">${song.duration}</span>
    </div>
  `;

  row.addEventListener("click", () => {
    loadSong(index, true);
  });

  return row;
}

function renderSongs(songArray) {
  trackList.innerHTML = "";

  if (songArray.length === 0) {
    trackList.innerHTML = `
      <div class="empty-state">
        No songs matched your search.
      </div>
    `;
    return;
  }

  songArray.forEach((song) => {
    const originalIndex = songs.findIndex(
      (item) => item.title === song.title && item.artist === song.artist
    );

    const row = createTrackRow(song, originalIndex);
    trackList.appendChild(row);
  });

  highlightActiveTrack();
}

function highlightActiveTrack() {
  const allRows = document.querySelectorAll(".track-row");

  allRows.forEach((row) => {
    const rowIndex = Number(row.dataset.index);
    row.classList.toggle("active", rowIndex === currentSongIndex);
  });
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  filteredSongs = songs.filter((song) => {
    return (
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
  });

  renderSongs(filteredSongs);
}

playPauseBtn.addEventListener("click", () => {
  if (!audioPlayer.src) {
    loadSong(currentSongIndex, true);
    return;
  }

  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

prevBtn.addEventListener("click", playPrevSong);
nextBtn.addEventListener("click", playNextSong);

playAllBtn.addEventListener("click", () => {
  loadSong(currentSongIndex, true);
});

shuffleBtn.addEventListener("click", playRandomSong);
shareBtn.addEventListener("click", handleShare);
searchInput.addEventListener("input", handleSearch);

audioPlayer.addEventListener("play", () => {
  isPlaying = true;
  updatePlayPauseIcon();
  highlightActiveTrack();
});

audioPlayer.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayPauseIcon();
});

audioPlayer.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audioPlayer.currentTime);

  if (audioPlayer.duration) {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  }
});

audioPlayer.addEventListener("ended", () => {
  playNextSong();
});

seekBar.addEventListener("input", () => {
  if (!audioPlayer.duration) return;
  const newTime = (seekBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
});

renderSongs(songs);
loadSong(0, false);
renderRecentlyPlayed();