// Sample song data with IDs
const songs = [
    {   id: 1,
        name: "Na Conmigo",
        artist: "Lapiz Conciente",
        img: "LapizNaConmigoPic.jpg",
        music: "Lapiz Conciente - Na Conmigo.mp3"
    },
    {   id: 2,
        name: "TOUCHDOWN",
        artist: "Messiah x Myke Towers",
        img: "MessiahMikeTouchDownPic.jpg",
        music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
    },
    {   id: 3,
        name: "CURIANA",
        artist: "El Poeta x CarlosCoins",
        img: "PoetaCarlosCurianaPic.jpg",
        music: "El Poeta, @CarlosCoins - Curiana.mp3"
    },
    {   id: 4,
        name: "Pila De Cotorra",
        artist: "El Fother x Darlyn Nay",
        img: "FotherDarlinPilaDeCotorraPic.jpg",
        music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
    },
    {   id: 5,
        name: "Astronauto",
        artist: "Almighty",
        img: "AlmightyPicx.jpg",
        music: "Almighty- Astronauto.mp3"
    },
    {   id: 6,
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        img: "ninoyomelPic.jpg",
        music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {   id: 7,
        name: "SEDA",
        artist: "Bad Bunny x Bryant Myers",
        img: "BadBunnyBryinSedaPic.jpg",
        music: "Bad Bunny, Bryant Myers - Seda.mp3"
    },
    {   id: 8,
        name: "SASA O DINERO",
        artist: "BRAULIO FOGON",
        img: "BraulioFogonPic.jpg",
        music: "BRAULIO FOGON - SASA O DINERO.mp3"
    },
    {   id: 9,
        name: "No Soy Mujeriego",
        artist: "Nino Freestyle",
        img: "NinoFreestylePic.avif",
        music: "Nino Freestyle - No Soy Mujeriego.mp3"
    },
    {   id: 10,
        name: "ORGANICO",
        artist: "Jamby El Favo",
        img: "JambyOrganicoPic.jpg",
        music: "Jamby El Favo - Orgánico.mp3"
    },
    {   id: 11,
        name: "KIANA",
        artist: "Tali Goya",
        img: "TALIPIC.jpg",
        music: "Tali Goya - Kianna (Tiradera a Lito Kirino).mp3"
    },
    {   id: 12,
        name: "Pana Mío",
        artist: "Polakan Ft. Melymel",
        img: "panamiopic.jpg",
        music: "Polakan Ft. Melymel - Pana Mío.mp3"
    },
    {   id: 13,
        name: "EL MEJOR",
        artist: "Nino Freestyle",
        img: "NinoFreeElMejorPic.jpg",
        music: "Nino Freestyle - El Mejor  2 Millones De Seguidores.mp3"
    },
    {   id: 14,
        name: "PASSOA",
        artist: "Jhayco x Kapo",
        img: "JhayKapoPassoaPic.jpg",
        music: "JHAYCO, Kapo - Passoa.mp3"
    },
    {   id: 15,
        name: "CRYPTO",
        artist: "Miky Woodz",
        img: "mikypicc44444.jpg",
        music: "Miky Woodz - CRYPTO.mp3"
    },
    {   id: 16,
        name: "Mujeres Como Tu",
        artist: "Lapiz Conciente X Shadow Blow",
        img: "LAPIZSHADOWPIC.jpg",
        music: "Lapiz Conciente ft. Shadow Blow - Mujeres Como Tu.mp3"
    },
    {   id: 17,
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - Por Mi Lau.mp3"
    },
    {   id: 18,
        name: "27 Mensajes",
        artist: "Shadow Blow X Lapiz Conciente",
        img: "LAPIZSHADOWPIC.jpg",
        music: "Shadow Blow  Lapiz Conciente  27 Mensajes.mp3"
    },
    {   id: 19,
        name: "Otra Vez",
        artist: "El Fother , Mestizo Is Back",
        img: "MestizoFotheOtraVezrPic.jpg",
        music: "El Fother , Mestizo Is Back - Otra Vez.mp3"
    },
    {   id: 20,
        name: "LA MAFIA",
        artist: "Anuel AA",
        img: "ANUELLAMAFIAPICCC.jpg",
        music: "ANUEL AA - LA MAFIA.mp3"
    },
    {   id: 21,
        name: "Where You At",
        artist: "Lito Kirino",
        img: "LitoKirinoWhereuatPic.jpg",
        music: "Lito Kirino - Where You At.mp3"
    },
    {   id: 22,
        name: "BAJA Y SUBE",
        artist: "Rokero x Luar La L",
        img: "LualLSubeBajPic.jpg",
        music: "Rokero x Luar La L - Baja y Sube.mp3"
    },
    {   id: 23,
        name: "SOLITA",
        artist: "Ozuna, Bad Bunny, Wisin, Almighty",
        img: "SolitaRemmixPic.jpg",
        music: "Ozuna, DJ Luian, Mambo Kingz - Solita (Audio) ft. Bad Bunny, Wisin, Almighty.mp3"
    },
    {   id: 24,
        name: "KINGDOM",
        artist: "Tali Goya",
        img: "TALIGOYAkINDOMPIC.jpg",
        music: "Tali Goya - Kingdom.mp3"
    },
    {   id: 25,
        name: "BACK TO BACK",
        artist: "BRAULIO FOGON X LUIS BROWN",
        img: "fogobackPic.jpg",
        music: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
    },
    {   id: 26,
        name: "ASEGURAO",
        artist: "Shadow Blow X Lapiz Conciente",
        img: "LapizShadowAseguraoPic.jpg",
        music: "Shadow Blow  Lapiz Conciente - ASEGURAO.mp3"
    },
    {   id: 27,
        name: "Solo $exo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Solo $exo.mp3"
    },
    {   id: 28,
        name: "Pauta y Flow",
        artist: "Myke Towers",
        img: "mykepic4.jpg",
        music: "Myke Towers - Pauta y Flow.mp3"
    },
    {   id: 29,
        name: "777",
        artist: "Lito Kirino ft. Tali",
        img: "777PIC.jpg",
        music: "Lito Kirino - 777 ft. Tali.mp3"
    },
    {   id: 30,
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
    {   id: 31,
        name: "Freestyle 8",
        artist: "Mandrake",
        img: "MANDRAKEPIC2.jpg",
        music: "Mandrake - Freestyle 8.mp3"
    },
    {   id: 32,
        name: "FreeStyle 5",
        artist: "ManDrake El MaloCorita",
        img: "MANDRAKEPIC1.jpg",
        music: "ManDrake El MaloCorita - FreeStyle 5.mp3"
    },
    {   id: 33,
        name: "FreeStyle 4",
        artist: "Mandrake El Malocorita",
        img: "MANDRAKEPIC3.jpg",
        music: "Mandrake El Malocorita - FreeStyle 4.mp3"
    },
    {   id: 34,
        name: "31",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - 31.mp3"
    },
    {   id: 35,
        name: "OG CITY",
        artist: "Miky Woodz",
        img: "MIKYPIC33333.jpg",
        music: "Miky Woodz - OG CITY.mp3"
    },
    {   id: 36,
        name: "Drip",
        artist: "Luar La L & Sinfonico",
        img: "lualdrippic.jpg",
        music: "Luar La L & Sinfonico - Drip.mp3"
    },
    {   id: 37,
        name: "La Pieza",
        artist: "Luar La L",
        img: "LUAPIC333.jpg",
        music: "La Pieza - Luar La L.mp3"
    },
    {   id: 38,
        name: "Alto Riesgo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Alto Riesgo.mp3"
    },
    {   id: 39,
        name: "Joven Leyenda",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Joven Leyenda.mp3"
    },
    {   id: 40,
        name: "Los Angeles",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Los Angeles.mp3"
    }, 
    {   id: 41,
        name: "Atras del Peso",
        artist: "Mozart La Para x Black Jonas Point",
        img: "ATRASDELPESOPICCCCC.jpg",
        music: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
    },
    {   id: 42,
        name: "Ajedrez",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {   id: 43,
        name: "Cuando me Ven",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {   id: 44,
        name: "34.PFA",
        artist: "Myke Towers",
        img: "1MYKEPIC1.jpg",
        music: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {   id: 45,
        name: "Tú No Ta'",
        artist: "Lapiz Conciente",
        img: "LAPIZPIC222222.jpg",
        music: "Lapiz Conciente - Tú No Ta'.mp3"
    },
    {   id: 46,
        name: "9 Dias",
        artist: "Lapiz Conciente",
        img: "lapizPi.jpg",
        music: "Lapiz Conciente - 9 Dias.mp3"
    },
    {   id: 47,
        name: "Que Esta Pasando",
        artist: "El Jincho",
        img: "JINCHOPIC.jpg",
        music: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
    },
    {   id: 48,
        name: "EL NUEVO PAPA",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "QUIMICO_NUEVO_PAPA.mp3"
    },
    {   id: 49,
        name: "Demasiado Yagala",
        artist: "QUIMICO ULTRA MEGA",
        img: "QUIMICOPIC.jpg",
        music: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
    },
    {   id: 50,
        name: "Rest in Peace",
        artist: "Darell, Ñengo Flow",
        img: "NENGODARPIC.jpg",
        music: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
    },
    {   id: 51,
        name: "TA TO SALDO",
        artist: "Miky Woodz ft Myke Towers",
        img: "TATOSALDOPIC.jpg",
        music: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
    },
    {   id: 52,
        name: "Jovenes Millonarios",
        artist: "Eladio Carrion ft Myke Towers",
        img: "JMILLONARIOSPIC.jpg",
        music: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
    },
    {   id: 53,
        name: "Fast Money",
        artist: "Ñengo Flow ft Myke Towers",
        img: "FASTMONEYPC.jpg",
        music: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {   id: 54,
        name: "OBVIO",
        artist: "Myke Towers",
        img: "MykeObvioPIC.jpg",
        music: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {   id: 55,
        name: "La Música No Miente",
        artist: "Lapiz Conciente",
        img: "lapizPi.jpg",
        music: "Lapiz Conciente - La Música No Miente.mp3"
    },
    {   id: 56,
        name: "Respeten o Respeten",
        artist: "Maiky el antivirus musical",
        img: "maikyima3.jpg",
        music: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
    },
    {   id: 57,
        name: "Mi Progreso",
        artist: "Maiky el antivirus musical",
        img: "miprogresopic.jpg",
        music: "Mi progreso-Maiky el antivirus musical .mp3"
    },
    {   id: 58,
        name: "Megvtron",
        artist: "YoungChimi",
        img: "YoungChimiMegatronPic.jpg",
        music: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
    },
    {   id: 59,
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
     { 
        id: 60, 
        name: "En Mi Mundo",
        artist: "Jasiel Nuñez x Peso Pluma",
        img: "JasielPesoplumaEnmiMundoPIc.jpg",
        music: "En Mi Mundo - Jasiel Nuñez, Peso Pluma.mp3"
     },
     {
        id: 61,
        name: "NO ME PESA",
        artist: "Junior H",
        img: "jUNIORhpIC.jpg",
        music: "Junior H-No Me Pesa.mp3"
     },
     {
        id: 62,
        name: "CORAZON FRIO",
        artist: "Jasiel Nuñez x DannyLux",
        img: "CorazonFrionJasielNuPic.jpg",
        music: "Jasielcorazonfriomp3.mp3"
     },
     {   id: 62,
         name: "Qué Tal",
         artist: "Christian Nodal",
         img: "chrispic44.jpg",
         music: "Christian Nodal - Qué Tal.mp3"
     },
        {   
            id: 63,
            name: "MENTE POSITIVA",
            artist: "Junior H",
            img: "JuniorMentePosPic.jpg",
            music: "Junior H - MENTE POSITIVA.mp3"
        },
        {   
            id: 64,
            name: "Probablemente",
            artist: "Christian Nodal",
            img: "CHRISTIANNODALPIC.jpg",
            music: "Christian Nodal-Probablemente.mp3"
        },
        {   
            id: 65,
            name: "Mas Altas Que Bajadas",
            artist: "Natanael Cano",
            img: "NatanaelPic22222.jpg",
            music: "Natanael Cano - Mas Altas Que Bajadas.mp3"
        },
        {
            id: 66,
            name: "Nace Un Borracho",
            artist: "Christian Nodal",
            img: "CHRISTIANNODALPIC.jpg",
            music: "Christian Nodal - Nace Un Borracho.mp3"
        },
        {
            id: 67,
            name: "MORRITAS",
            artist: "Natanael Cano",
            img: "NataMorritaPicx.jpg",
            music: "Natanael Cano - Morritas.mp3"
        },
        {
            id: 68,
            name: "NUEVA VIDA",
            artist: "Peso Pluma",
            img: "PesoPlumaPic1111.jpg",
            music: "NUEVA VIDA - Peso Pluma.mp3"
        },
        {
            id: 69,
            name: "No te contaron mal",
            artist: "Christian Nodal",
            img: "notecontaronmal.jpg",
            music: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
        },
        {
            id: 70,
            name: "Pacas De Billetes",
            artist: "Natanael Cano",
            img: "NatanaelPic.jpg",
            music: "Natanael Cano - Pacas De Billetes.mp3"
        },
        {
            id: 71,
            name: "De Los Besos Que Te Di",
            artist: "Christian Nodal",
            img: "CHRISTIANNODALPIC.jpg",
            music: "Christian Nodal - De Los Besos Que Te Di.mp3"
        },
        {
            id: 72,
            name: "CARNAL",
            artist: "Peso Pluma x Natanael Cano",
            img: "PESONATAPIC22222.jpg",
            music: "CARNAL - Peso Pluma, Natanael Cano.mp3"
        },
        {
            id: 73,
            name: "Por el Resto de Tu Vida",
            artist: "Christian Nodal x TINI",
            img: "chrisporelrestopicc.jpg",
            music: "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
        },
        {
            id: 74,
            name: "Según Quién",
            artist: "Maluma x Carin Leon ",
            img: "malumacaripic.jpg",
            music: "Maluma, Carin Leon - Según Quién.mp3"
        },
        {
            id: 75,
            name: "POR LAS NOCHES",
            artist: "Peso Pluma",
            img: "PesoPlumaPic1111.jpg",
            music: "Peso Pluma - Por Las Noches.mp3"
        },
        {
            id: 76,
            name: "Te Fallé",
            artist: "Christian Nodal",
            img: "chrispic33.jpg",
            music: "Christian Nodal-Te Fallé.mp3"
        },
        {
            id: 77,
            name: "BYE",
            artist: "Peso Pluma",
            img: "PESOPLUMABYE.jpg",
            music: "BYE - Peso Pluma.mp3"
        },
        {
            id: 78,
            name: "SE AMERITA",
            artist: "Junior H",
            img: "JuniorHPic2222.jpg",
            music: "Junior H-Se Amerita.mp3"
        },
        {
            id: 79,
            name: "ANDO SOLTERO",
            artist: "Natanael Cano",
            img: "NataAndoSolteroPic.jpg",
            music: "Ando Soltero - Natanael.mp3"
        },
        {
            id: 80,
            name: "ADRENALINA",
            artist: "Natanael Cano x Dan Sanchez",
            img: "NatAdrenalinaPic.jpg",
            music: "Natanael Cano-ADRENALINA.mp3"
        },
        {
            id: 81,
            name: "TENGO MOTIVOS",
            artist: "Junior H",
            img: "JunioHPic33333.png",
            music: "Junior H - Tengo Motivos.mp3"
        },
        {
            id: 82,
            name: "AFS",
            artist: "Natanael Cano",
            img: "NatanaelPic.jpg",
            music: "Natanael Cano-AFS-MP3.mp3"
        },
        {
            id: 83,
            name: "LAGUNAS",
            artist: "Peso Pluma X Jasiel Nuñez",
            img: "PESOJASLAGUNASPIC.jpeg",
            music: "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
        },
        {
            id: 84,
            name: "CIELO ETERNO",
            artist: "Jasiel Núñez x ",
            img: "JASIELNUPICCC.jpg",
            music: "cielo-eterno-jasiel-nunez-dannyluxMP33.mp3"
        },
        {
            id: 85,
            name: "BACCARAT",
            artist: "Natanael Cano & Peso Pluma",
            img: "PESONATAPIC22222.jpg",
            music: "Baccarat - Natanael Cano & Peso Pluma.mp3"
        },
        {
            id: 86,
            name: "ROSA PASTEL",
            artist: "Peso Pluma x Jasiel Nuñez",
            img: "PesoJasiel-RossaPaPic.jpg",
            music: "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
        },
        {
            id: 87,
            name: "Aquí Abajo",
            artist: "Christian Nodal",
            img: "CHRISTIANNODALPIC.jpg",
            music: "Christian Nodal - Aquí Abajo.mp3"
        },
        {
            id: 88,
            name: "BIPOLAR",
            artist: "Peso Pluma, Jasiel Nuñez, Junior H",
            img: "PesoJaieslJunirHPIC.jpg",
            music: "Peso Pluma, Jasiel Nuñez, Junior H-bipolar.mp3"
        },
        {
            id: 89,
            name: "Cuando La Vida Sea Trago",
            artist: "Carin León",
            img: "CARINLEONCUANLAVIDASEAPIC.jpg",
            music: "Carin León - Cuando La Vida Sea Trago.mp3"
        },
        {
            id: 90,
            name: "AMG",
            artist: "Natanael Cano x Gabito Ballesteros x Peso Pluma",
            img: "PesoNatAmgPic.jpg",
            music: "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
        },
        {
            id: 91,
            name: "No Me Llores",
            artist: "Carin Leon x Manuel Carrasco",
            img: "carinmanuepic.jpg",
            music: "Carin León, Manuel Carrasco - No Me Llores.mp3"
        },
        {
            id: 92,
            name: "PRC",
            artist: "Peso Pluma x Natanael Cano",
            img: "PesoNatPic.jpg",
            music: "Peso Pluma, Natanael Cano - PRC.mp3"
        },
        {
            id: 93,
            name: "No Es Por Acá",
            artist: "Carin Leon",
            img: "noesporacapic.jpg",
            music: "Carin Leon - No Es Por Acá.mp3"
        },
        {
            id: 94,
            name: "Kbron y Medio",
            artist: "Christian Nodal",
            img: "chrispic11.jpg",
            music: "Christian Nodal - Kbron y Medio.mp3"
        },
        {
            id: 95,
            name: "La Siguiente",
            artist: "Kany García x Christian Nodal",
            img: "lasiguientepic.jpg",
            music: "Kany García, Christian Nodal - La Siguiente.mp3"
        },
        {
            id: 96,
            name: "La Bachatita",
            artist: "Christian Nodal",
            img: "chrispic33.jpg",
            music: "Christian Nodal - La Bachatita.mp3"
        },
        {
            id: 97,
            name: "Igualito A Mi Apá",
            artist: "Fuerza Regida X Peso Pluma",
            img: "PesoFuerzaPIc.jpg",
           
        }    
  ];
  
  const searchInput = document.getElementById("search-input");
  const songList = document.getElementById("song-list");
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  
  // Initialize a variable to track the current audio state (playing or paused)
  let isPlaying = false;
  let currentSongId = null;
  
  // Render all songs
  function renderSongs(filteredSongs = songs) {
    songList.innerHTML = "";
  
    filteredSongs.forEach(song => {
      const songItem = document.createElement("div");
      songItem.classList.add("song-item");
      songItem.dataset.songId = song.id;
      songItem.innerHTML = `
        <img src="${song.img}" alt="${song.name}">
        <span>${song.name} - ${song.artist}</span>
        <button class="play-button"><i><ion-icon name="play"></ion-icon></i></button>
      `;
  
      songItem.querySelector(".play-button").addEventListener("click", () => {
        playOrPauseSong(song, songItem.querySelector(".play-button"));
      });
  
      songList.appendChild(songItem);
    });
  }
  
  // Play or pause the selected song
  function playOrPauseSong(song, button) {
    if (isPlaying && currentSongId === song.id) {
      // If the song is already playing, pause it
      audioPlayer.pause();
      button.querySelector("ion-icon").setAttribute("name", "play");
      isPlaying = false;
    } else {
      // If a new song is selected or song is paused, play it
      audioSource.src = song.music;  // Update the source of the audio
      audioSource.dataset.songId = song.id; // Store the current song ID
      audioPlayer.load();            // Reload the audio element
      audioPlayer.play();            // Play the song
      button.querySelector("ion-icon").setAttribute("name", "pause");
      isPlaying = true;
      currentSongId = song.id;
    }
  }
  
  // Handle audio events to automatically play the next song
  audioPlayer.addEventListener("ended", function() {
    const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
  });
  
  // Initialize the app by rendering all songs
  renderSongs();
  
  // Search functionality
  searchInput.addEventListener("input", function() {
    const searchQuery = searchInput.value.toLowerCase();
  
    // Filter songs based on the search query (case-insensitive)
    const filteredSongs = songs.filter(song => 
      song.name.toLowerCase().includes(searchQuery) || 
      song.artist.toLowerCase().includes(searchQuery)
    );
  
    // Render filtered songs
    renderSongs(filteredSongs);
  });
  