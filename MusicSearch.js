// Sample song data
const songs = [
  {
    name: "It Is What It Is",
    artist: "Big Sean  x Gunna",
    img: "BigSeanGunnaItisWhatItIsPic.jpg",
    music: "Big Sean  x Gunna - It Is What It Is.mp3"
  },  
  {
     name: "Lost The Love",
     artist: "BigXthaPlug",
     img: "BigxLastPic.jpg",
     music: "BigXthaPlug - Lost The Love.mp3"
  },   
  {
    name: "We Set The Trends",
    artist: "Jim Jones x Migos",
    img: "MiigosJimTrendPic.jpg",
    music: "Jim Jones, Migos - We Set The Trends.mp3"
  },
  {
    name: "Good Drank",
    artist: "2 Chainz ft Quavo, Gucci Mane",
    img: "2chainGodDrunkPic.jpg",
    music: "2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3"
  },
  {
    name: "Sacrifices",
    artist: "Big Sean x Migos",
    img: "SacrificesmigosBIgseanPic.jpg",
    music: "Big Sean - Sacrifices ft. Migos.mp3"
  },
  {
    name: "Diet Coke",
    artist: "Pusha T",
    img: "PushaTPic.jpg",
    music: "Pusha T - Diet Coke.mp3"
  },
  {
    name: "Mama Told Me",
    artist: "Tory Lanez",
    img: "ToryLanezPic.jpg",
    music: "Tory Lanez - Mama Told Me.mp3"
  },
  {
    name: "Quality Control",
    artist: "Migos x Eurielle",
    img: "MigosPic1.jpg",
    music: "Quality Control - Too Hotty by Migos featuring Eurielle.mp3"
  },
  {
    name: "Law & Order",
    artist: "BigXthaPlug",
    img: "BigXLawOrderPic.jpg",
    music: "BigXthaPlug - Law & Order.mp3"
  },
  {
    name: "Pack Ya Bags",
    artist: "Rick Ross x Meek Mill x Wale",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross & 2 Chainz - Pack Ya Bags ft. Wale 2024.mp3"
  },
  {
    name: "They Don't Really Love You",
    artist: "Rick Ross x Meek Mill",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross, Meek Mill - They Don't Really Love You.mp3"
   },
   {
    name: "The Godfather",
    artist: "Tory Lanez",
    img: "ToryLanezPic.jpg",
    music: "Tory Lanez - The Godfather.mp3"
   },
   {
    name: "The Largest",
    artist: "BigXThaPlug",
    img: "BigXTheLargestPic.jpg",
    music: "BigXthaPlug - The Largest.mp3"
  },
   {
    name: "Iconic",
    artist: "Rick Ross x Meek Mill",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross, Meek Mill - Iconic.mp3"
   },
   {
    name: "Whip It",
    artist: "BigXThaPlug",
    img: "BigXThatPlug11111.jpg",
    music: "BigXthaPlug - Whip It (Official Audio).mp3"
   },
{
    name: "Fight Night",
    artist: "Migos",
    img: "MigosPic1.jpg",
    music: "Migos - Fight Night.mp3"
},
{
    name: "Back on my Bs",
    artist: "BigXthaPlug",
    img: "backbspic.jpg",
    music: "BigXthaPlug  - Back On My BS [Official Lyric Video].mp3"
},
{
    name: "Million Dollar Baby",
    artist: "Tommy Richman",
    img: "milliondollarpic.jpg",
    music: "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
},
{
    name: "800 Karats",
    artist: "Rick Ross x Meek Mill",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross, Meek Mill - 800 Karats.mp3"
},
{
    name: "Need It",
    artist: "Migos ft. YoungBoy Never Broke Again",
    img: "MigosIneedItPic.jpg",
    music: "Migos  ft. YoungBoy Never Broke Again- Need It.mp3"
},
  
{
    name: "Lyrical Eazy",
    artist: "Rick Ross x Meek Mill",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross & Meek Mill - Lyrical Eazy.mp3"
},
{
    name: "Dope Boy",
    artist: "Young Thug x Nigo",
    img: "YoungThughNigoDopeBoyPic.jpg",
    music: "Young Thug, Nigo - Dope Boy.mp3"
},
{
    name: "Take Care",
    artist: "BigXthaPlug",
    img: "BigxLastPic.jpg",
    music: "BigXthaPlug - Take Care.mp3"
},
{
    name: "Star Island",
    artist: "Rick Ross x Meek Mill",
    img: "RickMeekTooGoodTobeTruePic.jpg",
    music: "Rick Ross, Meek Mill - Star Island.mp3"
},
  {
      name: "Luv Again",
      artist: "Ruger",
      img: "RugerLuvAgainPic.jpg",
      music: "Ruger - Luv Again.mp3"
  },
  {
      name: "Change Me",
      artist: "BigXthaPlug",
      img: "BigXcHangeMePic.jpg",
      music: "BigXthaPlug - Change Me.mp3"
  },
  {
      name: "Big Stepper",
      artist: "BigXThaPlug",
      img: "BigXThatPlug11111.jpg",
      music: "BigXThaPlug - Big Stepper.mp3"
  },
  {
      name: "Back Then",
      artist: "Mike Jones",
      img: "MikeJonesPic.jpg",
      music: "Mike Jones-Back Then.mp3"
  },
  {
      name: "PLAIN JANE",
      artist: "A$AP Ferg",
      img: "AsaFergPic.jpg",
      music: "A$AP Ferg - Plain Jane.mp3"
  },
  {
      name: "Emotionally Scarred",
      artist: "Lil Baby",
      img: "LilBbayPic2.webp",
      music: "Lil Baby - Emotionally Scarred.mp3"
  },
  {
      name: "Rap Niggas",
      artist: "BigXthaPlug ",
      img: "BigXThatPlug11111.jpg",
      music: "BigXthaPlug - Rap Niggas.mp3"
  },
  {
      name: "I Get The Bag",
      artist: "Gucci Mane ft Migos",
      img: "IgetThebagPic.jpg",
      music: "Gucci Mane ft Migos - I Get The Bag [Audio].mp3"
  },
  {
      name: "TOO FAST",
      artist: "Future",
      img: "futuretoofastpic.jpg",
      music: "Future - TOO FAST.mp3"
  },
  {
      name: "Lakers",
      artist: "BigXThaPlug ft. Ro$ama",
      img: "BixLakersPic.jpg",
      music: "BigXthaPlug  - '02 Lakers feat  Ro$ama.mp3"
  },
  {
      name: "HOTEL LOBBY",
      artist: "Quavo & Takeoff",
      img: "MigosHotelPic.jpg",
      music: "Quavo & Takeoff - HOTEL LOBBY.mp3"
  },
  {
      name: "California Breeze",
      artist: "Lil Baby",
      img: "LilBabyPic.jpg",
      music: "Lil Baby - California Breeze.mp3"
  },
  {
      name: "Climate",
      artist: "BigXthaPlug Ft Offset",
      img: "BigOffClimPic.jpg",
      music: "BigXthaPlug Ft Offset - Climate.mp3"
  },
  {
      name: "PRIMETIME",
      artist: "BigXThaPlug",
      img: "BIGXPICC.jpg",
      music: "BigXthaPlug - Primetime.mp3"
  },
  {
      name: "Shorty Wanna Ride",
      artist: "Young Buck",
      img: "YoungBuckPic.jpg",
      music: "Young Buck -  Shorty Wanna Ride.mp3"
  },
  {
      name: "Badu Flow",
      artist: "BigXthaPlug",
      img: "bigxpicccccc.png",
      music: "BigXthaPlug - Badu Flow.mp3"
  },
  {
      name: "Mr.Trouble",
      artist: "BigXThaPlug",
      img: "BIGXPICC.jpg",
      music: "BigXThaPlug _Mr.Trouble.mp3"
  },
  {
      name: "Ric Flair Drip",
      artist: "Offset & Metro Boomin",
      img: "Ricflarsonpic.jpg",
      music: "Offset & Metro Boomin  - Ric Flair Drip.mp3"
  },
  {
      name: "Straightenin",
      artist: "Migos",
      img: "MigosCulturPic.jpg",
      music: "Migos - Straightenin (Audio).mp3"
  },
  {
      name: "Back On",
      artist: "Quality Control x Lil Baby",
      img: "LilBabyPic.jpg",
      music: "Quality Control, Lil Baby - Back On.mp3"
  },
  {
      name: "PESO",
      artist: "A$AP Rocky",
      img: "ASAPPIC222.jpg",
      music: "A$AP Rocky - Peso.mp3"
  },
  {
      name: "OOOUUU",
      artist: "Young MA",
      img: "YounOUUUPIC.jpg",
      music: "Young MA-OOOUUU.mp3"
  },
  {
      name: "Praise The Lord",
      artist: "A$AP Rocky Ft. Skepta",
      img: "ASAPPIC1.jpg",
      music: "A$AP Rocky Ft. Skepta- Praise The Lord.mp3"
  },
  {
      name: "Active",
      artist: "BigXthaPlug",
      img: "BigXactivePic.jpg",
      music: "BigXthaPlug - Active (Official Music Video).mp3"
  },
  {
      name: "OFFICER RICKY",
      artist: "50 Cent",
      img: "50centPic.jpg",
      music: "50 Cent - Officer Ricky.mp3"
  },
  {
      name: "Get Buck",
      artist: "Young Buck",
      img: "YoungBuckPic.jpg",
      music: "Young Buck-Get Buck.mp3"
  },
  {
      name: "Close Friends",
      artist: "Lil Baby x Gunna",
      img: "LilCloseFPic.jpg",
      music: "Lil Baby, Gunna - Close Friends.mp3"
  },
  {
      name: "Still Tippin",
      artist: "Miike Jones ft. Slim Thug and Paul Wall",
      img: "MikeJonesPic.jpg",
      music: "Still Tippin' (feat. Slim Thug and Paul Wall).mp3"
  },
  {
      name: "Sippin On Some Syrup",
      artist: "3Six Mafia",
      img: "3SixMafia-Sippin.jpg",
      music: "3SixMafia-Sippin On Some Syrup.mp3"
  },
{
    name: "Na Conmigo",
    artist: "Lapiz Conciente",
    img: "LapizNaConmigoPic.jpg",
    music: "Lapiz Conciente - Na Conmigo.mp3"
},
{
    name: "TOUCHDOWN",
    artist: "Messiah x Myke Towers",
    img: "MessiahMikeTouchDownPic.jpg",
    music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
},
{
    name: "CURIANA",
    artist: "El Poeta x CarlosCoins",
    img: "PoetaCarlosCurianaPic.jpg",
    music: "El Poeta, @CarlosCoins - Curiana.mp3"
},
{
    name: "Pila De Cotorra",
    artist: "El Fother x Darlyn Nay",
    img: "FotherDarlinPilaDeCotorraPic.jpg",
    music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
},
{
    name: "Astronauto",
    artist: "Almighty",
    img: "AlmightyPicx.jpg",
    music: "Almighty- Astronauto.mp3"
},
{
    name: "Que Loquera",
    artist: "Nino Freestyle x Yomel El Meloso",
    img: "ninoyomelPic.jpg",
    music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
},
{
    name: "SEDA",
    artist: "Bad Bunny x Bryant Myers",
    img: "BadBunnyBryinSedaPic.jpg",
    music: "Bad Bunny, Bryant Myers - Seda.mp3"
},
{
    name: "SASA O DINERO",
    artist: "BRAULIO FOGON",
    img: "BraulioFogonPic.jpg",
    music: "BRAULIO FOGON - SASA O DINERO.mp3"
},
{
    name: "No Soy Mujeriego",
    artist: "Nino Freestyle",
    img: "NinoFreestylePic.avif",
    music: "Nino Freestyle - No Soy Mujeriego.mp3"
},
{
    name: "ORGANICO",
    artist: "Jamby El Favo",
    img: "JambyOrganicoPic.jpg",
    music: "Jamby El Favo - Orgánico.mp3"
},
{
    name: "KIANA",
    artist: "Tali Goya",
    img: "TALIPIC.jpg",
    music: "Tali Goya - Kianna (Tiradera a Lito Kirino).mp3"
},
{
    name: "Pana Mío",
    artist: "Polakan Ft. Melymel",
    img: "panamiopic.jpg",
    music: "Polakan Ft. Melymel - Pana Mío.mp3"
},
{
    name: "EL MEJOR",
    artist: "Nino Freestyle",
    img: "NinoFreeElMejorPic.jpg",
    music: "Nino Freestyle - El Mejor  2 Millones De Seguidores.mp3"
},
{
    name: "PASSOA",
    artist: "Jhayco x Kapo",
    img: "JhayKapoPassoaPic.jpg",
    music: "JHAYCO, Kapo - Passoa.mp3"
},
{
    name: "CRYPTO",
    artist: "Miky Woodz",
    img: "mikypic5555.jpg",
    music: "Miky Woodz - CRYPTO.mp3"
},
{
    name: "Mujeres Como Tu",
    artist: "Lapiz Conciente X Shadow Blow",
    img: "LAPIZSHADOWPIC.jpg",
    music: "Lapiz Conciente ft. Shadow Blow - Mujeres Como Tu.mp3"
},
{
    name: "Por Mi Lau",
    artist: "Miky Woodz",
    img: "MIKYWOODSPIC111.jpg",
    music: "Miky Woodz - Por Mi Lau.mp3"
},
{
    name: "27 Mensajes",
    artist: "Shadow Blow X Lapiz Conciente",
    img: "LAPIZSHADOWPIC.jpg",
    music: "Shadow Blow  Lapiz Conciente  27 Mensajes.mp3"
},
{
    name: "Otra Vez",
    artist: "El Fother , Mestizo Is Back",
    img: "MestizoFotheOtraVezrPic.jpg",
    music: "El Fother , Mestizo Is Back - Otra Vez.mp3"
},
{
    name: "LA MAFIA",
    artist: "Anuel AA",
    img: "ANUELLAMAFIAPICCC.jpg",
    music: "ANUEL AA - LA MAFIA.mp3"
},
{
    name: "Where You At",
    artist: "Lito Kirino",
    img: "LitoKirinoWhereuatPic.jpg",
    music: "Lito Kirino - Where You At.mp3"
},
{
    name: "BAJA Y SUBE",
    artist: "Rokero x Luar La L",
    img: "LualLSubeBajPic.jpg",
    music: "Rokero x Luar La L - Baja y Sube.mp3"
},
{
    name: "SOLITA",
    artist: "Ozuna, Bad Bunny, Wisin, Almighty",
    img: "SolitaRemmixPic.jpg",
    music: "Ozuna, DJ Luian, Mambo Kingz - Solita (Audio) ft. Bad Bunny, Wisin, Almighty.mp3"
},
{
    name: "KINGDOM",
    artist: "Tali Goya",
    img: "TALIGOYAkINDOMPIC.jpg",
    music: "Tali Goya - Kingdom.mp3"
},
{
    name: "BACK TO BACK",
    artist: "BRAULIO FOGON X LUIS BROWN",
    img: "fogobackPic.jpg",
    music: "BRAULIO FOGON X LUIS BROWN - BACK TO BACK.mp3"
},
{
    name: "ASEGURAO",
    artist: "Shadow Blow X Lapiz Conciente",
    img: "SHADOWLAPIS5555.jpg",
    music: "Shadow Blow  Lapiz Conciente - ASEGURAO.mp3"
},
{
    name: "Solo $exo",
    artist: "Myke Towers",
    img: "mykepic2.jpg",
    music: "Myke Towers - Solo $exo.mp3"
},
{
    name: "Pauta y Flow",
    artist: "Myke Towers",
    img: "mykepic4.jpg",
    music: "Myke Towers - Pauta y Flow.mp3"
},
{
    name: "777",
    artist: "Lito Kirino ft. Tali",
    img: "777PIC.jpg",
    music: "Lito Kirino - 777 ft. Tali.mp3"
},
{
    name: "Quienes son",
    artist: "C-Dobleta",
    img: "quieneson.jpg",
    music: "QUIENES SON- CDOBLETA.mp3"
},
{
    name: "Freestyle 8",
    artist: "Mandrake",
    img: "MANDRAKEPIC2.jpg",
    music: "Mandrake - Freestyle 8.mp3"
},
{
    name: "FreeStyle 5",
    artist: "ManDrake El MaloCorita",
    img: "MANDRAKEPIC1.jpg",
    music: "ManDrake El MaloCorita - FreeStyle 5.mp3"
},
{
    name: "FreeStyle 4",
    artist: "Mandrake El Malocorita",
    img: "MANDRAKEPIC3.jpg",
    music: "Mandrake El Malocorita - FreeStyle 4.mp3"
},
{
    name: "31",
    artist: "Miky Woodz",
    img: "MIKYWOODSPIC111.jpg",
    music: "Miky Woodz - 31.mp3"
},
{
    name: "OG CITY",
    artist: "Miky Woodz",
    img: "MIKYPIC33333.jpg",
    music: "Miky Woodz - OG CITY.mp3"
},
{
    name: "Drip",
    artist: "Luar La L & Sinfonico",
    img: "LUALLPICCC1111.jpg",
    music: "Luar La L & Sinfonico - Drip.mp3"
},
{
    name: "La Pieza",
    artist: "Luar La L",
    img: "LUAPIC333.jpg",
    music: "La Pieza - Luar La L.mp3"
},
{
    name: "Alto Riesgo",
    artist: "Myke Towers",
    img: "MYKEPIC3333.jpg",
    music: "Myke Towers - Alto Riesgo.mp3"
},
{
    name: "Joven Leyenda",
    artist: "Myke Towers",
    img: "MYKEPIC3333.jpg",
    music: "Myke Towers - Joven Leyenda.mp3"
},
{
    name: "Los Angeles",
    artist: "Myke Towers",
    img: "MYKEPIC3333.jpg",
    music: "Myke Towers - Los Angeles.mp3"
}, 
{
    name: "Atras del Peso",
    artist: "Mozart La Para x Black Jonas Point",
    img: "ATRASDELPESOPICCCCC.jpg",
    music: "Atras del Peso - Mozart La Para x Black Jonas Point.mp3"
},
{
    name: "Ajedrez",
    artist: "Myke Towers",
    img: "1MYKEPIC1.jpg",
    music: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
},
{
    name: "Cuando me Ven",
    artist: "Myke Towers",
    img: "1MYKEPIC1.jpg",
    music: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
},
{
    name: "34.PFA",
    artist: "Myke Towers",
    img: "1MYKEPIC1.jpg",
    music: "Myke Towers - PFA (Lyric Video).mp3"
},
{
    name: "Tú No Ta'",
    artist: "Lapiz Conciente",
    img: "LAPIZPIC222222.jpg",
    music: "Lapiz Conciente - Tú No Ta'.mp3"
},
{
    name: "9 Dias",
    artist: "Lapiz Conciente",
    img: "lapizPi.jpg",
    music: "Lapiz Conciente - 9 Dias.mp3"
},
{
    name: "Que Esta Pasando",
    artist: "El Jincho",
    img: "JINCHOPIC.jpg",
    music: "El Jincho - Que Esta Pasando (VIDEOCLIP OFICIAL).mp3"
},
{
    name: "EL NUEVO PAPA",
    artist: "QUIMICO ULTRA MEGA",
    img: "QUIMICOPIC.jpg",
    music: "QUIMICO_NUEVO_PAPA.mp3"
},
{
    name: "Demasiado Yagala",
    artist: "QUIMICO ULTRA MEGA",
    img: "QUIMICOPIC.jpg",
    music: "Quimico Ultra Mega - Demasiado Yagala (Official Music Video).mp3"
},
{
    name: "Rest in Peace",
    artist: "Darell, Ñengo Flow",
    img: "NENGODARPIC.jpg",
    music: "Darell, Ñengo Flow - Rest in Peace (Official Video).mp3"
},
{
    name: "TA TO SALDO",
    artist: "Miky Woodz ft Myke Towers",
    img: "TATOSALDOPIC.jpg",
    music: "Miky Woodz , Myke Towers - Ta To Saldo (Video Oficial).mp3"
},
{
    name: "Jovenes Millonarios",
    artist: "Eladio Carrion ft Myke Towers",
    img: "JMILLONARIOSPIC.jpg",
    music: "Eladio Carrión, Myke Towers - Jóvenes Millonarios (Video Oficial).mp3"
},
{
    name: "Fast Money",
    artist: "Ñengo Flow ft Myke Towers",
    img: "FASTMONEYPC.jpg",
    music: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
},
{
    name: "OBVIO",
    artist: "Myke Towers",
    img: "MykeObvioPIC.jpg",
    music: "Myke Towers - OBVIO (Visualizer).mp3"
},
{
    name: "La Música No Miente",
    artist: "Lapiz Conciente",
    img: "lapizPi.jpg",
    music: "Lapiz Conciente - La Música No Miente.mp3"
},
{
    name: "Respeten o Respeten",
    artist: "Maiky el antivirus musical",
    img: "maikyima3.jpg",
    music: "Maiky El Antivirus Musical-Respeten o Respeten(H M-2018).mp3"
},
{
    name: "Mi Progreso",
    artist: "Maiky el antivirus musical",
    img: "miprogresopic.jpg",
    music: "Mi progreso-Maiky el antivirus musical .mp3"
},
{
    name: "Megvtron",
    artist: "YoungChimi",
    img: "younChimmi.jpg",
    music: "YOVNGCHIMI - Megvtron (Official Visualizer).mp3"
},
{
    name: "Quienes son",
    artist: "C-Dobleta",
    img: "quieneson.jpg",
    music: "QUIENES SON- CDOBLETA.mp3"
},
{
    name: "En Mi Mundo",
    artist: "Jasiel Nuñez x Peso Pluma",
    img: "JasielPesoplumaEnmiMundoPIc.jpg",
    music: "En Mi Mundo - Jasiel Nuñez, Peso Pluma.mp3"
 },
 {
     name: "NO ME PESA",
     artist: "Junior H",
     img: "jUNIORhpIC.jpg",
     music: "Junior H-No Me Pesa.mp3"
 },
 {
     name: "CORAZON FRIO",
     artist: "Jasiel Nuñez x DannyLux",
     img: "CorazonFrionJasielNuPic.jpg",
     music: "Jasielcorazonfriomp3.mp3"
 },
 {
     name: "Qué Tal",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal - Qué Tal.mp3"
 },
 {
     name: "MENTE POSITIVA",
     artist: "Junior H",
     img: "JuniorMentePosPic.jpg",
     music: "Junior H - MENTE POSITIVA.mp3"
 },
 {
     name: "Probablemente",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal-Probablemente.mp3"
 },
 {
     name: "Mas Altas Que Bajadas",
     artist: "Natanael Cano",
     img: "NatanaelPic22222.jpg",
     music: "Natanael Cano - Mas Altas Que Bajadas.mp3"
 },
 {
     name: "Nace Un Borracho",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Nace Un Borracho.mp3"
 },
 {
     name: "MORRITAS",
     artist: "Natanael Cano",
     img: "NataMorritaPicx.jpg",
     music: "Natanael Cano - Morritas.mp3"
 },
 {
     name: "NUEVA VIDA",
     artist: "Peso Pluma",
     img: "PesoPlumaPic1111.jpg",
     music: "NUEVA VIDA - Peso Pluma.mp3"
 },
 {
     name: "No te contaron mal",
     artist: "Christian Nodal",
     img: "notecontaronmal.jpg",
     music: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
 },
 {
     name: "Pacas De Billetes",
     artist: "Natanael Cano",
     img: "NatanaelPic.jpg",
     music: "Natanael Cano - Pacas De Billetes.mp3"
 },
 {
     name: "De Los Besos Que Te Di",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - De Los Besos Que Te Di.mp3"
 },
 {
     name: "CARNAL",
     artist: "Peso Pluma x Natanael Cano",
     img: "PESONATAPIC22222.jpg",
     music: "CARNAL - Peso Pluma, Natanael Cano.mp3"
 },
 {
     name: "Por el Resto de Tu Vida",
     artist: "Christian Nodal x TINI",
     img: "chrisporelrestopicc.jpg",
     music: "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
 },
 {
     name: "Según Quién",
     artist: "Maluma x Carin Leon ",
     img: "malumacaripic.jpg",
     music: "Maluma, Carin Leon - Según Quién.mp3"
 },
 {
     name: "POR LAS NOCHES",
     artist: "Peso Pluma",
     img: "PesoPlumaPic1111.jpg",
     music: "Peso Pluma - Por Las Noches.mp3"
 },
 {
     name: "Te Fallé",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Te Fallé.mp3"
 },
 {
     name: "BYE",
     artist: "Peso Pluma",
     img: "PESOPLUMABYE.jpg",
     music: "BYE - Peso Pluma.mp3"
 },
 {
     name: "SE AMERITA",
     artist: "Junior H",
     img: "JuniorHPic2222.jpg",
     music: "Junior H-Se Amerita.mp3"
 },
 {
     name: "ANDO SOLTERO",
     artist: "Natanael Cano",
     img: "NataAndoSolteroPic.jpg",
     music: "Ando Soltero - Natanael.mp3"
 },
 {
     name: "ADRENALINA",
     artist: "Natanael Cano x Dan Sanchez",
     img: "NatAdrenalinaPic.jpg",
     music: "Natanael Cano-ADRENALINA.mp3"
 },
 {
     name: "TENGO MOTIVOS",
     artist: "Junior H",
     img: "JunioHPic33333.png",
     music: "Junior H - Tengo Motivos.mp3"
 },
 {
     name: "AFS",
     artist: "Natanael Cano",
     img: "NatanaelPic.jpg",
     music: "Natanael Cano-AFS-MP3.mp3"
 },
 {
     name: "LAGUNAS",
     artist: "Peso Pluma X Jasiel Nuñez",
     img: "PESOJASLAGUNASPIC.jpeg",
     music: "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
 },
 {
     name: "CIELO ETERNO",
     artist: "Jasiel Núñez x ",
     img: "JASIELNUPICCC.jpg",
     music: "cielo-eterno-jasiel-nunez-dannyluxMP33.mp3"
 },
 {
     name: "BACCARAT",
     artist: "Natanael Cano & Peso Pluma",
     img: "PESONATAPIC22222.jpg",
     music: "Baccarat - Natanael Cano & Peso Pluma.mp3"
 },
 {
     name: "ROSA PASTEL",
     artist: "Peso Pluma x Jasiel Nuñez",
     img: "PesoJasiel-RossaPaPic.jpg",
     music: "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
 },
 {
     name: "Aquí Abajo",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Aquí Abajo.mp3"
 },
 {
     name: "BIPOLAR",
     artist: "Peso Pluma, Jasiel Nuñez, Junior H",
     img: "PesoJaieslJunirHPIC.jpg",
     music: "Peso Pluma, Jasiel Nuñez, Junior H-bipolar.mp3"
 },
 {
     name: "Cuando La Vida Sea Trago",
     artist: "Carin León",
     img: "CARINLEONCUANLAVIDASEAPIC.jpg",
     music: "Carin León - Cuando La Vida Sea Trago.mp3"
 },
 {
     name: "AMG",
     artist: "Natanael Cano x Gabito Ballesteros x Peso Pluma",
     img: "PesoNatAmgPic.jpg",
     music: "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
 },
 {
     name: "No Me Llores",
     artist: "Carin Leon x Manuel Carrasco",
     img: "carinmanuepic.jpg",
     music: "Carin León, Manuel Carrasco - No Me Llores.mp3"
 },
 {
     name: "PRC",
     artist: "Peso Pluma x Natanael Cano",
     img: "PesoNatPic.jpg",
     music: "Peso Pluma, Natanael Cano - PRC.mp3"
 },
 {
     name: "No Es Por Acá",
     artist: "Carin Leon",
     img: "noesporacapic.jpg",
     music: "Carin Leon - No Es Por Acá.mp3"
 },
 {
     name: "Kbron y Medio",
     artist: "Christian Nodal",
     img: "chrispic11.jpg",
     music: "Christian Nodal - Kbron y Medio.mp3"
 },
 {
     name: "La Siguiente",
     artist: "Kany García x Christian Nodal",
     img: "lasiguientepic.jpg",
     music: "Kany García, Christian Nodal - La Siguiente.mp3"
 },
 {
     name: "La Bachatita",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal - La Bachatita.mp3"
 },
 {
     name: "Igualito A Mi Apá",
     artist: "Fuerza Regida X Peso Pluma",
     img: "PesoFuerzaPIc.jpg",
     music: "Fuerza Regida X Peso Pluma - Igualito A Mi Apá.mp3"
 },
 {
     name: "Y LLORO",
     artist: "Junior H",
     img: "jUNIORhpIC.jpg",
     music: "Junior H - Y LLORO.mp3"
 },
 {
     name: "Me Dejé Llevar",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Me Dejé Llevar.mp3"
 },
 {
     name: "Confieso",
     artist: "Kany García ",
     img: "kanypic.jpg",
     music: "Kany García - Confieso.mp3"
 },
 {
     name: "Vamos Para Arriba",
     artist: "Junior H Ft. Gabito Ballesteros",
     img: "JunioGabitoPic.jpg",
     music: "Vamos Para Arriba - Junior H Ft. Gabito Ballesteros.mp3"
 },
 {
     name: "Ojalá",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal-Ojalá.mp3"
 },
 {
     name: "LA GLORIA ERES TU",
     artist: "Luis Miguel",
     img: "luismiguel.jpg",
     music: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3"
 },
 {
     name: "Te Lo Agradezco",
     artist: "Kany Garcia x Carin Leon ",
     img: "teloagradezcopic.jpg",
     music: "Kany Garcia x Carin Leon - Te Lo Agradezco.mp3"
 },
 {
     name: "Eres",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal-Eres.mp3"
 },
 {
     name: "Te Voy A Olvidar",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Te Voy A Olvidar.mp3"
 },
 {
     name: "Sabor a Mi",
     artist: "Luis Miguel",
     img: "luismiguel.jpg",
     music: "Sabor a Mi.mp3"
 },
 {
     name: "La Intención",
     artist: "Christian Nodal x Peso Pluma ",
     img: "PespoChrisPic.jpg",
     music: "Christian Nodal, Peso Pluma - La Intención.mp3"
 },
 {
     name: "Ya No Somos Ni Seremos",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
 },
 {
    name: "En Mi Mundo",
    artist: "Jasiel Nuñez x Peso Pluma",
    img: "JasielPesoplumaEnmiMundoPIc.jpg",
    music: "En Mi Mundo - Jasiel Nuñez, Peso Pluma.mp3"
 },
 {
     name: "NO ME PESA",
     artist: "Junior H",
     img: "jUNIORhpIC.jpg",
     music: "Junior H-No Me Pesa.mp3"
 },
 {
     name: "CORAZON FRIO",
     artist: "Jasiel Nuñez x DannyLux",
     img: "CorazonFrionJasielNuPic.jpg",
     music: "Jasielcorazonfriomp3.mp3"
 },
 {
     name: "Qué Tal",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal - Qué Tal.mp3"
 },
 {
     name: "MENTE POSITIVA",
     artist: "Junior H",
     img: "JuniorMentePosPic.jpg",
     music: "Junior H - MENTE POSITIVA.mp3"
 },
 {
     name: "Probablemente",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal-Probablemente.mp3"
 },
 {
     name: "Mas Altas Que Bajadas",
     artist: "Natanael Cano",
     img: "NatanaelPic22222.jpg",
     music: "Natanael Cano - Mas Altas Que Bajadas.mp3"
 },
 {
     name: "Nace Un Borracho",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Nace Un Borracho.mp3"
 },
 {
     name: "MORRITAS",
     artist: "Natanael Cano",
     img: "NataMorritaPicx.jpg",
     music: "Natanael Cano - Morritas.mp3"
 },
 {
     name: "NUEVA VIDA",
     artist: "Peso Pluma",
     img: "PesoPlumaPic1111.jpg",
     music: "NUEVA VIDA - Peso Pluma.mp3"
 },
 {
     name: "No te contaron mal",
     artist: "Christian Nodal",
     img: "notecontaronmal.jpg",
     music: "Christian Nodal - No Te Contaron Mal (Audio).mp3"
 },
 {
     name: "Pacas De Billetes",
     artist: "Natanael Cano",
     img: "NatanaelPic.jpg",
     music: "Natanael Cano - Pacas De Billetes.mp3"
 },
 {
     name: "De Los Besos Que Te Di",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - De Los Besos Que Te Di.mp3"
 },
 {
     name: "CARNAL",
     artist: "Peso Pluma x Natanael Cano",
     img: "PESONATAPIC22222.jpg",
     music: "CARNAL - Peso Pluma, Natanael Cano.mp3"
 },
 {
     name: "Por el Resto de Tu Vida",
     artist: "Christian Nodal x TINI",
     img: "chrisporelrestopicc.jpg",
     music: "Christian Nodal x TINI - Por el Resto de Tu Vida.mp3"
 },
 {
     name: "Según Quién",
     artist: "Maluma x Carin Leon ",
     img: "malumacaripic.jpg",
     music: "Maluma, Carin Leon - Según Quién.mp3"
 },
 {
     name: "POR LAS NOCHES",
     artist: "Peso Pluma",
     img: "PesoPlumaPic1111.jpg",
     music: "Peso Pluma - Por Las Noches.mp3"
 },
 {
     name: "Te Fallé",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Te Fallé.mp3"
 },
 {
     name: "BYE",
     artist: "Peso Pluma",
     img: "PESOPLUMABYE.jpg",
     music: "BYE - Peso Pluma.mp3"
 },
 {
     name: "SE AMERITA",
     artist: "Junior H",
     img: "JuniorHPic2222.jpg",
     music: "Junior H-Se Amerita.mp3"
 },
 {
     name: "ANDO SOLTERO",
     artist: "Natanael Cano",
     img: "NataAndoSolteroPic.jpg",
     music: "Ando Soltero - Natanael.mp3"
 },
 {
     name: "ADRENALINA",
     artist: "Natanael Cano x Dan Sanchez",
     img: "NatAdrenalinaPic.jpg",
     music: "Natanael Cano-ADRENALINA.mp3"
 },
 {
     name: "TENGO MOTIVOS",
     artist: "Junior H",
     img: "JunioHPic33333.png",
     music: "Junior H - Tengo Motivos.mp3"
 },
 {
     name: "AFS",
     artist: "Natanael Cano",
     img: "NatanaelPic.jpg",
     music: "Natanael Cano-AFS-MP3.mp3"
 },
 {
     name: "LAGUNAS",
     artist: "Peso Pluma X Jasiel Nuñez",
     img: "PESOJASLAGUNASPIC.jpeg",
     music: "Peso Pluma, Jasiel Nuñez - LAGUNAS-MP3.mp3"
 },
 {
     name: "CIELO ETERNO",
     artist: "Jasiel Núñez x ",
     img: "JASIELNUPICCC.jpg",
     music: "cielo-eterno-jasiel-nunez-dannyluxMP33.mp3"
 },
 {
     name: "BACCARAT",
     artist: "Natanael Cano & Peso Pluma",
     img: "PESONATAPIC22222.jpg",
     music: "Baccarat - Natanael Cano & Peso Pluma.mp3"
 },
 {
     name: "ROSA PASTEL",
     artist: "Peso Pluma x Jasiel Nuñez",
     img: "PesoJasiel-RossaPaPic.jpg",
     music: "ROSA PASTEL - Peso Pluma, Jasiel Nuñez.mp3"
 },
 {
     name: "Aquí Abajo",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Aquí Abajo.mp3"
 },
 {
     name: "BIPOLAR",
     artist: "Peso Pluma, Jasiel Nuñez, Junior H",
     img: "PesoJaieslJunirHPIC.jpg",
     music: "Peso Pluma, Jasiel Nuñez, Junior H-bipolar.mp3"
 },
 {
     name: "Cuando La Vida Sea Trago",
     artist: "Carin León",
     img: "CARINLEONCUANLAVIDASEAPIC.jpg",
     music: "Carin León - Cuando La Vida Sea Trago.mp3"
 },
 {
     name: "AMG",
     artist: "Natanael Cano x Gabito Ballesteros x Peso Pluma",
     img: "PesoNatAmgPic.jpg",
     music: "Natanael Cano x Gabito Ballesteros x Peso Pluma - AMG.mp3"
 },
 {
     name: "No Me Llores",
     artist: "Carin Leon x Manuel Carrasco",
     img: "carinmanuepic.jpg",
     music: "Carin León, Manuel Carrasco - No Me Llores.mp3"
 },
 {
     name: "PRC",
     artist: "Peso Pluma x Natanael Cano",
     img: "PesoNatPic.jpg",
     music: "Peso Pluma, Natanael Cano - PRC.mp3"
 },
 {
     name: "No Es Por Acá",
     artist: "Carin Leon",
     img: "noesporacapic.jpg",
     music: "Carin Leon - No Es Por Acá.mp3"
 },
 {
     name: "Kbron y Medio",
     artist: "Christian Nodal",
     img: "chrispic11.jpg",
     music: "Christian Nodal - Kbron y Medio.mp3"
 },
 {
     name: "La Siguiente",
     artist: "Kany García x Christian Nodal",
     img: "lasiguientepic.jpg",
     music: "Kany García, Christian Nodal - La Siguiente.mp3"
 },
 {
     name: "La Bachatita",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal - La Bachatita.mp3"
 },
 {
     name: "Igualito A Mi Apá",
     artist: "Fuerza Regida X Peso Pluma",
     img: "PesoFuerzaPIc.jpg",
     music: "Fuerza Regida X Peso Pluma - Igualito A Mi Apá.mp3"
 },
 {
     name: "Y LLORO",
     artist: "Junior H",
     img: "jUNIORhpIC.jpg",
     music: "Junior H - Y LLORO.mp3"
 },
 {
     name: "Me Dejé Llevar",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Me Dejé Llevar.mp3"
 },
 {
     name: "Confieso",
     artist: "Kany García ",
     img: "kanypic.jpg",
     music: "Kany García - Confieso.mp3"
 },
 {
     name: "Vamos Para Arriba",
     artist: "Junior H Ft. Gabito Ballesteros",
     img: "JunioGabitoPic.jpg",
     music: "Vamos Para Arriba - Junior H Ft. Gabito Ballesteros.mp3"
 },
 {
     name: "Ojalá",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal-Ojalá.mp3"
 },
 {
     name: "LA GLORIA ERES TU",
     artist: "Luis Miguel",
     img: "luismiguel.jpg",
     music: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3"
 },
 {
     name: "Te Lo Agradezco",
     artist: "Kany Garcia x Carin Leon ",
     img: "teloagradezcopic.jpg",
     music: "Kany Garcia x Carin Leon - Te Lo Agradezco.mp3"
 },
 {
     name: "Eres",
     artist: "Christian Nodal",
     img: "chrispic44.jpg",
     music: "Christian Nodal-Eres.mp3"
 },
 {
     name: "Te Voy A Olvidar",
     artist: "Christian Nodal",
     img: "chrispic33.jpg",
     music: "Christian Nodal-Te Voy A Olvidar.mp3"
 },
 {
     name: "Sabor a Mi",
     artist: "Luis Miguel",
     img: "luismiguel.jpg",
     music: "Sabor a Mi.mp3"
 },
 {
     name: "La Intención",
     artist: "Christian Nodal x Peso Pluma ",
     img: "PespoChrisPic.jpg",
     music: "Christian Nodal, Peso Pluma - La Intención.mp3"
 },
 {
     name: "Ya No Somos Ni Seremos",
     artist: "Christian Nodal",
     img: "CHRISTIANNODALPIC.jpg",
     music: "Christian Nodal - Ya No Somos Ni Seremos.mp3"
 },

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
      <img src="${song.img}" alt="${song.music}">
      <span>${song.name}-</br>${song.artist}</span>
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
    audioPlayer.load();            // Reload the audio element
    audioPlayer.play();            // Play the song
    button.querySelector("ion-icon").setAttribute("name", "pause");
    isPlaying = true;
    currentSongId = song.id;
  }
}

// Handle audio events
audioPlayer.addEventListener("ended", function() {
  // Automatically play the next song
  const currentSongIndex = songs.findIndex(song => song.id === audioSource.dataset.songId);
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