const songs = [ 
    {   id: 1,
        name: "TOUCHDOWN",
        artist: "Messiah x Myke Towers",
        img: "MessiahMikeTouchDownPic.jpg",
        music: "Messiah, Myke Towers - TOUCHDOWN.mp3"
    },
    {   id: 2,
        name: "Pa que tú me ronca",
        artist: "Químico ultra Mega x Danger",
        img: "QUIMICOPIC.jpg",
        music: "Químico ultra Mega x Danger- Pa que tú me ronca.mp3"
    },
    {   id: 3,
        name: "SEDA",
        artist: "Bad Bunny x Bryant Myers",
        img: "BadBunnyBryinSedaPic.jpg",
        music: "Bad Bunny, Bryant Myers - Seda.mp3"
    },
    {   id: 4,
        name: "Sauce Boy",
        artist: "Eladio Carrion",
        img: "EladioCarrionSauceBoyPic.jpg",
        music: "Eladio Carrión - SAUCEBOY (Freestyle).mp3"
    },
    {   id: 5,
        name: "CURIANA",
        artist: "El Poeta x CarlosCoins",
        img: "PoetaCarlosCurianaPic.jpg",
        music: "El Poeta, @CarlosCoins - Curiana.mp3"
    },
    {   id: 6,
        name: "Astronauto",
        artist: "Almighty",
        img: "AlmightyPicx.jpg",
        music: "Almighty- Astronauto.mp3"
    },
    {   id: 7,
        name: "Solo $exo",
        artist: "Myke Towers",
        img: "MYKEPIC3333.jpg",
        music: "Myke Towers - Solo $exo.mp3"
    },
    {   id: 8,
        name: "Que Loquera",
        artist: "Nino Freestyle x Yomel El Meloso",
        img: "ninoyomelPic.jpg",
        music: "Nino Freestyle x Yomel El Meloso - Que Loquera.mp3"
    },
    {   id: 9,
        name: "SASA O DINERO",
        artist: "BRAULIO FOGON",
        img: "BraulioFogonPic.jpg",
        music: "BRAULIO FOGON - SASA O DINERO.mp3"
    },
    {   id: 10,
        name: "No Soy Mujeriego",
        artist: "Nino Freestyle",
        img: "NinoFreestylePic.avif",
        music: "Nino Freestyle - No Soy Mujeriego.mp3"
    },
    {   id: 11,
        name: "ORGANICO",
        artist: "Jamby El Favo",
        img: "JambyOrganicoPic.jpg",
        music: "Jamby El Favo - Orgánico.mp3"
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
    {
        id: 16,
        name: "AFS",
        artist: "Natanael Cano",
        img: "NatanaelPic.jpg",
        music: "Natanael Cano-AFS-MP3.mp3"
    },
    {   id: 17,
        name: "Por Mi Lau",
        artist: "Miky Woodz",
        img: "MIKYWOODSPIC111.jpg",
        music: "Miky Woodz - Por Mi Lau.mp3"
    },
    {
        id: 18,
        name: "TENGO MOTIVOS",
        artist: "Junior H",
        img: "JunioHPic33333.png",
        music: "Junior H - Tengo Motivos.mp3"
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
        name: "Quienes son",
        artist: "C-Dobleta",
        img: "quieneson.jpg",
        music: "QUIENES SON- CDOBLETA.mp3"
    },
    {
        id: 27,
        name: "Beso A Beso",
        artist: "Toño Rosario",
        img: "TONOPIC2222.jpg",
        music: "Toño Rosario - Beso A Beso.mp3"
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
    {
        id: 45,
        name: "Tabaco y Ron",
        artist: "Ala Jaza",
        img: "ALAJAZApIC3333.jpg",
        music: "Ala Jaza - Tabaco y Ron.mp3"
    },
    {
        id: 46,
        name: "Alegria",
        artist: "Toño Rosario",
        img: "TONOPIC2222.jpg",
        music: "Toño Rosario - Alegria.mp3"
    },
    {
        id: 47,
        name: "MI Mamá Me Apunto En la Escuela",
        artist: "Sujeto Oro 24",
        img: "SUJETOPIC3333.jpg",
        music: "Sujeto Oro 24  -  MI Mamá Me Apunto En la Escuela.mp3"
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
    {
        id: 55,
        name: "Weje Weje",
        artist: "Sujeto Oro 24",
        img: "sujetoPic.jpg",
        music: "Sujeto Oro 24 - Weje Weje.mp3"
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
    {
        id: 59,
        name: "Tattoo",
        artist: "Ala Jaza",
        img: "alajazapic44444.jpg",
        music: "Ala Jaza - Tattoo.mp3"
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
            name: "FUEGO",
            artist: "Tito Swing",
            img: "TitoPic.jpg",
            music: "Tito Swing - Fuego.mp3"
        },
        {
            id: 82,
            name: "Quiero Volver A Empezar",
            artist: "Toño Rosario",
            img: "TonoRosariPic.jpg",
            music: "Toño Rosario - Quiero Volver A Empezar.mp3"
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
            name: "It Is What It Is",
            artist: "Big Sean  x Gunna",
            img: "BigSeanGunnaItisWhatItIsPic.jpg",
            music: "Big Sean  x Gunna - It Is What It Is.mp3"
        },  
        {
            id: 98,
            name: "Lost The Love",
            artist: "BigXthaPlug",
            img: "BigxLastPic.jpg",
            music: "BigXthaPlug - Lost The Love.mp3"
        },   
        {
            id: 99,
            name: "We Set The Trends",
            artist: "Jim Jones x Migos",
            img: "MiigosJimTrendPic.jpg",
            music: "Jim Jones, Migos - We Set The Trends.mp3"
        },
        {
            id: 100,
            name: "Good Drank",
            artist: "2 Chainz ft Quavo, Gucci Mane",
            img: "2chainGodDrunkPic.jpg",
            music: "2 Chainz - Good Drank ft. Quavo, Gucci Mane.mp3"
        },
        {
            id: 101,
            name: "Sacrifices",
            artist: "Big Sean x Migos",
            img: "SacrificesmigosBIgseanPic.jpg",
            music: "Big Sean - Sacrifices ft. Migos.mp3"
        },
        {
            id: 102,
            name: "Diet Coke",
            artist: "Pusha T",
            img: "PushaTPic.jpg",
            music: "Pusha T - Diet Coke.mp3"
        },
        {
            id: 103,
            name: "Mama Told Me",
            artist: "Tory Lanez",
            img: "ToryLanezPic.jpg",
            music: "Tory Lanez - Mama Told Me.mp3"
        },
        {
            id: 104,
            name: "Quality Control",
            artist: "Migos x Eurielle",
            img: "MigosPic1.jpg",
            music: "Quality Control - Too Hotty by Migos featuring Eurielle.mp3"
        },
        {
            id: 105,
            name: "Law & Order",
            artist: "BigXthaPlug",
            img: "BigXLawOrderPic.jpg",
            music: "BigXthaPlug - Law & Order.mp3"
        },
        {
            id: 106,
            name: "Pack Ya Bags",
            artist: "Rick Ross x Meek Mill x Wale",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross & 2 Chainz - Pack Ya Bags ft. Wale 2024.mp3"
        },
        {
            id: 107,
            name: "They Don't Really Love You",
            artist: "Rick Ross x Meek Mill",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross, Meek Mill - They Don't Really Love You.mp3"
        },
        {
            id: 108,
            name: "The Godfather",
            artist: "Tory Lanez",
            img: "ToryLanezPic.jpg",
            music: "Tory Lanez - The Godfather.mp3"
        },
        {
            id: 109,
            name: "The Largest",
            artist: "BigXThaPlug",
            img: "BigXTheLargestPic.jpg",
            music: "BigXthaPlug - The Largest.mp3"
        },
        {
            id: 110,
            name: "Iconic",
            artist: "Rick Ross x Meek Mill",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross, Meek Mill - Iconic.mp3"
        },
        {
            id: 111,
            name: "Whip It",
            artist: "BigXThaPlug",
            img: "BigXThatPlug11111.jpg",
            music: "BigXthaPlug - Whip It (Official Audio).mp3"
        },
        {
            id: 112,
            name: "Fight Night",
            artist: "Migos",
            img: "MigosPic1.jpg",
            music: "Migos - Fight Night.mp3"
        },
        {
            id: 113,
            name: "Back on my Bs",
            artist: "BigXthaPlug",
            img: "backbspic.jpg",
            music: "BigXthaPlug  - Back On My BS [Official Lyric Video].mp3"
        },
        {
            id: 114,
            name: "Million Dollar Baby",
            artist: "Tommy Richman",
            img: "milliondollarpic.jpg",
            music: "Tommy Richman - MILLION DOLLAR BABY (Official Music Video).mp3"
        },
        {
            id: 115,
            name: "800 Karats",
            artist: "Rick Ross x Meek Mill",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross, Meek Mill - 800 Karats.mp3"
        },
        {
            id: 116,
            name: "Need It",
            artist: "Migos ft. YoungBoy Never Broke Again",
            img: "MigosIneedItPic.jpg",
            music: "Migos  ft. YoungBoy Never Broke Again- Need It.mp3"
        },
        {
            id: 117,
            name: "Lyrical Eazy",
            artist: "Rick Ross x Meek Mill",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross & Meek Mill - Lyrical Eazy.mp3"
        },
        {
            id: 118,
            name: "Dope Boy",
            artist: "Young Thug x Nigo",
            img: "YoungThughNigoDopeBoyPic.jpg",
            music: "Young Thug, Nigo - Dope Boy.mp3"
        },
        {
            id: 119,
            name: "Take Care",
            artist: "BigXthaPlug",
            img: "BigxLastPic.jpg",
            music: "BigXthaPlug - Take Care.mp3"
        },
        {
            id: 120,
            name: "Star Island",
            artist: "Rick Ross x Meek Mill",
            img: "RickMeekTooGoodTobeTruePic.jpg",
            music: "Rick Ross, Meek Mill - Star Island.mp3"
        },
        {
            id: 121,
            name: "Luv Again",
            artist: "Ruger",
            img: "RugerLuvAgainPic.jpg",
            music: "Ruger - Luv Again.mp3"
        },
        {
            id: 122,
            name: "Change Me",
            artist: "BigXthaPlug",
            img: "BigXcHangeMePic.jpg",
            music: "BigXthaPlug - Change Me.mp3"
        },
        {
            id: 123,
            name: "Big Stepper",
            artist: "BigXThaPlug",
            img: "BigXThatPlug11111.jpg",
            music: "BigXThaPlug - Big Stepper.mp3"
        },
        {
            id: 124,
            name: "Back Then",
            artist: "Mike Jones",
            img: "MikeJonesPic.jpg",
            music: "Mike Jones-Back Then.mp3"
        },
        {
            id: 125,
            name: "PLAIN JANE",
            artist: "A$AP Ferg",
            img: "AsaFergPic.jpg",
            music: "A$AP Ferg - Plain Jane.mp3"
        },
        {
            id: 126,
            name: "Emotionally Scarred",
            artist: "Lil Baby",
            img: "LilBbayPic2.webp",
            music: "Lil Baby - Emotionally Scarred.mp3"
        },
        {
            id: 127,
            name: "Rap Niggas",
            artist: "BigXthaPlug ",
            img: "BigXThatPlug11111.jpg",
            music: "BigXthaPlug - Rap Niggas.mp3"
        },
        {
            id: 128,
            name: "I Get The Bag",
            artist: "Gucci Mane ft Migos",
            img: "IgetThebagPic.jpg",
            music: "Gucci Mane ft Migos - I Get The Bag [Audio].mp3"
        },
        {
            id: 129,
            name: "TOO FAST",
            artist: "Future",
            img: "futuretoofastpic.jpg",
            music: "Future - TOO FAST.mp3"
        },
        {
            id: 130,
            name: "Lakers",
            artist: "BigXThaPlug ft. Ro$ama",
            img: "BixLakersPic.jpg",
            music: "BigXthaPlug  - '02 Lakers feat  Ro$ama.mp3"
        },
        {
            id: 131,
            name: "HOTEL LOBBY",
            artist: "Quavo & Takeoff",
            img: "MigosHotelPic.jpg",
            music: "Quavo & Takeoff - HOTEL LOBBY.mp3"
        },
        {
            id: 132,
            name: "California Breeze",
            artist: "Lil Baby",
            img: "LilBabyPic.jpg",
            music: "Lil Baby - California Breeze.mp3"
        },
        {
            id: 133,
            name: "Climate",
            artist: "BigXthaPlug Ft Offset",
            img: "BigOffClimPic.jpg",
            music: "BigXthaPlug Ft Offset - Climate.mp3"
        },
        {
            id: 134,
            name: "PRIMETIME",
            artist: "BigXThaPlug",
            img: "BIGXPICC.jpg",
            music: "BigXthaPlug - Primetime.mp3"
        },
        {
            id: 135,
            name: "Shorty Wanna Ride",
            artist: "Young Buck",
            img: "YoungBuckPic.jpg",
            music: "Young Buck -  Shorty Wanna Ride.mp3"
        },
        {
            id: 136,
            name: "Badu Flow",
            artist: "BigXthaPlug",
            img: "bigxpicccccc.png",
            music: "BigXthaPlug - Badu Flow.mp3"
        },
        {
            id: 137,
            name: "Mr.Trouble",
            artist: "BigXThaPlug",
            img: "BIGXPICC.jpg",
            music: "BigXThaPlug _Mr.Trouble.mp3"
        },
        {
            id: 138,
            name: "Ric Flair Drip",
            artist: "Offset & Metro Boomin",
            img: "Ricflarsonpic.jpg",
            music: "Offset & Metro Boomin  - Ric Flair Drip.mp3"
        },
        {
            id: 139,
            name: "Straightenin",
            artist: "Migos",
            img: "MigosCulturPic.jpg",
            music: "Migos - Straightenin (Audio).mp3"
        },
        {
            id: 140,
            name: "Back On",
            artist: "Quality Control x Lil Baby",
            img: "LilBabyPic.jpg",
            music: "Quality Control, Lil Baby - Back On.mp3"
        },
        {
            id: 141,
            name: "PESO",
            artist: "A$AP Rocky",
            img: "ASAPPIC222.jpg",
            music: "A$AP Rocky - Peso.mp3"
        },
        {
            id: 142,
            name: "OOOUUU",
            artist: "Young MA",
            img: "YounOUUUPIC.jpg",
            music: "Young MA-OOOUUU.mp3"
        },
        {
            id: 143,
            name: "Praise The Lord",
            artist: "A$AP Rocky Ft. Skepta",
            image: "ASAPPIC1.jpg",
            music: "A$AP Rocky Ft. Skepta- Praise The Lord.mp3"
        },
        {
            id: 144,
            name: "Active",
            artist: "BigXthaPlug",
            img: "BigXactivePic.jpg",
            music: "BigXthaPlug - Active (Official Music Video).mp3"
        },
        {
            id: 145,
            name: "OFFICER RICKY",
            artist: "50 Cent",
            img: "50centPic.jpg",
            music: "50 Cent - Officer Ricky.mp3"
        },
        {
            id: 146,
            name: "Get Buck",
            artist: "Young Buck",
            img: "YoungBuckPic.jpg",
            music: "Young Buck-Get Buck.mp3"
        },
        {
            id: 147,
            name: "Close Friends",
            artist: "Lil Baby x Gunna",
            img: "LilCloseFPic.jpg",
            music: "Lil Baby, Gunna - Close Friends.mp3"
        },
        {
            id: 148,
            name: "Still Tippin",
            artist: "Miike Jones ft. Slim Thug and Paul Wall",
            img: "MikeJonesPic.jpg",
            music: "Still Tippin' (feat. Slim Thug and Paul Wall).mp3"
        },
        {
            id: 149,
            name: "Sippin On Some Syrup",
            artist: "3Six Mafia",
            img: "3SixMafia-Sippin.jpg",
            music: "3SixMafia-Sippin On Some Syrup.mp3"
        },
        {
            id: 150,
            name: "A CUALTA MI GATA",
            artist: "Omega El Fuerte",
            img: "omegapic.jpg",
            music: "Omega-A Cualta Mi Gata.mp3"
        },
        {
            id: 151,
            name: "Con Quién Te Olvido",
            artist: "Ala Jaza",
            img: "ALAJAPICCCC.jpg",
            music: "Ala Jaza - Con Quién Te Olvido.mp3"
        },
        {
            id: 152,
            name: "LA NOTA",
            artist: "GABRIEL PAGAN x OMEGA",
            img: "GABRIELOMEGAPIC.jpg",
            music: "GABRIEL PAGAN  OMEGA - LA NOTA.mp3"
        },
        {
            id: 153,
            name: "Si antes te hubiera conocido",
            artist: "Karol G",
            img: "MECUROPIC.jpg",
            music: "KAROL G - Si Antes Te Hubiera Conocido.mp3"
        },
        {
            id: 154,
            name: "EL MERENGUE",
            artist: "Marshmello x Manuel Turizo",
            img: "ManuelTurizoMerenguwPic.jpg",
            music: "Marshmello, Manuel Turizo - El Merengue.mp3"
        },
        {
            id: 155,
            name: "Tu Mayimbe",
            artist: "Sujeto Oro 24",
            img: "SUJETOPIC3333.jpg",
            music: "sujeto Oro 24 - Tu Mayimbe.mp3"
        },
        {
            id: 156,
            name: "Vieja Dale Dale",
            artist: "Toño Rosario",
            img: "TonoRosariPic.jpg",
            music: "Toño Rosario - Vieja Dale Dale.mp3"
        },
        {
            id: 157,
            name: "PEPAS",
            artist: "Ala Jaza",
            img: "ALAJAZApIC3333.jpg",
            music: "ALAJAZA-PEPAS.mp3"
        },
        {
            id: 158,
            name: "To' la Mujeres Rapan",
            artist: "Amarfis Y la banda de Atakke",
            img: "AmarfisPic1.jpg",
            music: "Amarfis Y la banda de Atakke-To' la Mujeres Rapan.mp3"
        },
        {
            id: 159,
            name: "Mi Forma De Ser",
            artist: "Ala Jaza",
            img: "ALAJAPICCCC.jpg",
            music: "Ala Jaza - Mi Forma De Ser.mp3"
        },
        {
            id: 160,
            name: "No me hable de Gente",
            artist: "Sujeto Oro 24",
            img: "SUJETOPIC3333.jpg",
            music: "Sujeto Oro 24 - No me hable de Gente.mp3"
        },
        {
            id: 161,
            name: "Simplemente Gracias",
            artist: "Ala Jaza",
            img: "ALAJAPICCCC.jpg",
            music: "Ala Jaza - Simplemente Gracias.mp3"
        },
        {
            id: 162,
            name: "HEAVY",
            artist: "Sujeto Oro 24",
            img: "SUJETOPICCCC222222.jpg",
            music: "Sujeto oro 24 - Heavy.mp3"
        },
        {
            id: 163,
            name: "Yo Quiero Un Vacilon",
            artist: "Toño Rosario",
            img: "TonoRosariPic.jpg",
            music: "Yo Quiero Un Vacilon.mp3"
        },
        {
            id: 164,
            name: "El Guayo",
            artist: "Amarfis y la banda de Atakke",
            img: "amarfispic222.jpg",
            music: "Amarfis y la banda de Atakke-El Guayo.mp3"
        },
        {
            id: 165,
            name: "Mi Mundo Lo Controlo Yo",
            artist: "Sujeto Oro 24",
            img: "SujetoMimundoPic.jpg",
            music: "Sujeto Oro 24  -  Mi Mundo Lo Controlo Yo.mp3"
        },
        {
            id: 166,
            name: "Ando En La Versace",
            artist: "Omega El Fuerte",
            img: "omegapic.jpg",
            music: "Omega El  Fuerte-Ando En La Versace.mp3"
        },
        {
            id: 167,
            name: "BOBO",
            artist: "Sujeto",
            img: "sujetoPic.jpg",
            music: "SUJETO ORO 24 - BOBO.mp3"
        },
        {
            id: 168,
            name: "Nadie Se Meta",
            artist: "Ala Jaza",
            img: "ALAJAPICCCC.jpg",
            music: "Ala Jaza - Nadie Se Meta.mp3"
        },
        {
            id: 169,
            name: "Toma Lo Que Te Mandé",
            artist: "Toño Rosario",
            img: "TonoRosariPic.jpg",
            music: "Toño Rosario - Toma Lo Que Te Mandé.mp3"
        },
        {
            id: 170,
            name: "El Vecino",
            artist: "Sujeto oro 24",
            img: "SUJETOPICCCC222222.jpg",
            music: "Sujeto oro 24-El Vecino.mp3"
        },
        {
            id: 171,
            name: "Fariseo",
            artist: "Omega El Fuerte",
            img: "omegapic2.jpg",
            music: "Omaga El Fuerte-Fariseo.mp3"
        },
        {
            id: 172,
            name: "SUJETO ORO 24",
            artist: "CUIDATE",
            img: "sujetocuidatepiiccc.jpg",
            music: "SUJETO ORO 24 - CUIDATE.mp3"
        },
        {
            id: 173,
            name: "El Pollo",
            artist: "Amarfis y la banda de Atakke",
            img: "AmarfisPic1.jpg",
            music: "Amarfis y la banda de Atakee-El Pollo.mp3"
        },
        {
            id: 174,
            name: "NO ME HABLEN DE ELLA",
            artist: "SUJETO 0R0 24",
            img: "SUJETOPIC3333.jpg",
            music: "SUJETO 0R0 24 - NO ME HABLEN DE ELLA.mp3"
        },
        {
            id: 175,
            name: "Yemaya",
            artist: "Amarfis Y la banda de Atakke",
            img: "amarfispic333.jpg",
            music: "Amarfis Y la banda de Atakke-Yemaya.mp3"
        },
        {
            id: 176,
            name: "TU NO CORRE",
            artist: "SUJETO ORO 24",
            img: "SUJETOPICCCC222222.jpg",
            music: "TU NO CORRE - SUJETO ORO 24.mp3"
        },
        {
            id: 177,
            name: "ME VOY PAL PUEBLO",
            artist: "Toño Rosario",
            img: "TONOPIC2222.jpg",
            music: "Toño Rosario - ME VOY PAL PUEBLO.mp3"
        },
        {
            id: 178,
            name: "Misericordia",
            artist: "Ala Jaza",
            img: "alajazapic222.jpg",
            music: "Ala Jaza - Misericordia.mp3"
        },
        {   id: 179,
            name: "KIANA",
            artist: "Tali Goya",
            img: "TALIPIC.jpg",
            music: "Tali Goya - Kianna (Tiradera a Lito Kirino).mp3"
        },
        {   id: 180,
            name: "Tiempos de Plan B",
            artist: "Maldy",
            img: "MaldyTiemplosDeplanBPic.jpg",
            music: "Maldy - Tiempos de Plan B.mp3"
        },
        {   id: 181,
            name: "Pila De Cotorra",
            artist: "El Fother x Darlyn Nay",
            img: "FotherDarlinPilaDeCotorraPic.jpg",
            music: "El Fother x Darlyn Nay - Pila De Cotorra.mp3"
        },
        {   id: 182,
            name: "C473",
            artist: "Chucky73 x YOVNGCHIMI",
            img: "./Chucky73xYOVNGCHIMI-C4-73.jpg",
            music: "./Chucky73 x YOVNGCHIMI - C473.mp3"
        },
        {   id: 183,
            name: "BALA POR TI",
            artist: "Dowel King",
            img: "./DowelKingPic.webp",
            music: "./DOWEL KING - BALA POR TI.mp3"
        },
        {   id: 184,
            name: "CORAZONES",
            artist: "@420luisbrown X @johanDza",
            img: "./LuisBrownCorazonezPic.jpg",
            music: "./@420luisbrown  X @johanDza  - Corazones.mp3"
        },
        {   id: 185,
            name: "BALA",
            artist: "Dowel King",
            img: "./DowelKingPic.webp",
            music: "./DOWEL KING - BALA.mp3"
        },
        {   id: 186,
            name: "BUSCA ESO",
            artist: "Dowel King",
            img: "./DowelKingPic.webp",
            music: "./DOWEL KING - BUSCA ESO.mp3"
        },
        {   id: 187,
            name: "ESO DA PENA",
            artist: "Dowel King",
            img: "./DowelKingPic.webp",
            music: "./DOWEL KING - ESO DA PENA.mp3"
        },
        {   id: 188,
            name: "FUEGO A LA LATA",
            artist: "Dowel King",
            img: "./DowelKingPic.webp",
            music: "./DOWEL KING - FUEGO A LA LATA.mp3"
        }            
 ];
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
    songList.innerHTML = "";

    filteredSongs.forEach(song => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.dataset.songId = song.id;
        songItem.innerHTML = `
            <img src="${song.img}" alt="${song.name}">
            <span>${song.name} - ${song.artist}</span>
        `;

        const songImage = songItem.querySelector("img"); // Get the image element
        songImage.addEventListener("click", () => {
            playOrPauseSong(song);
        });

        songList.appendChild(songItem);
    });
}
 
 function playOrPauseSong(song, img) {
    // Get the song image element by ID
    const songImageDisplay = document.getElementById("current-song-image");

    if (isPlaying && currentSongId === song.id) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioSource.src = song.music;
        audioSource.dataset.songId = song.id;
        audioPlayer.load();
        audioPlayer.play();
        isPlaying = true;
        currentSongId = song.id;
    }

    // Update the current song name display
    const songNameDisplay = document.getElementById("current-song-name");
    songNameDisplay.textContent = song.name;
    
    // Update the current artist name display
    const artistNameDisplay = document.getElementById("current-artist-name");
    artistNameDisplay.textContent = song.artist; // Display the artist name
    
    // Update the current song ID display
    const idNumberDisplay = document.getElementById("current-id");
    idNumberDisplay.textContent = song.id; // Display the song ID

    // Update the song image
    songImageDisplay.src = song.img; // Set the image source to the song's image
}

 

 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });

 ///voice search ///
 const voiceSearchButton = document.getElementById("voice-search-button");

// Check if the SpeechRecognition API is available
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "es-ES"; // Set language for recognition (you can change this to other languages)
    recognition.continuous = false; // Only listen for a single command
    recognition.interimResults = false; // No need for interim results

    // Function to start the voice recognition when the button is clicked
    voiceSearchButton.addEventListener("click", () => {
        recognition.start();
    });

    // Handle the speech recognition result
    recognition.addEventListener("result", (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
        searchInput.value = transcript; // Set the search input to the recognized speech

        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );

        renderSongs(filteredSongs); // Render the filtered song list
    });

    // Handle speech recognition errors
    recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error:", event.error);
    });

    // Optionally, handle the end of recognition
    recognition.addEventListener("end", () => {
        console.log("Voice search ended");
    });
} else {
    console.error("Sorry, Lollita can not recognized your voice");
}

// Assuming you already have the following in your HTML:
// <audio id="notification-sound" src="notification.mp3" preload="auto"></audio>

const notificationSound = document.getElementById("notification-sound");

// Voice search event listener for recognition result
recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
    searchInput.value = transcript; // Set the search input to the recognized speech

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list
    
    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

// Optional: Handle other events like error and end if you want to give feedback for those situations
recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error:", event.error);
});

// Optional: Handle end of recognition event
recognition.addEventListener("end", () => {
    console.log("Voice search ended");
});


recognition.addEventListener("result", (event) => {
    // Get the transcript from the speech recognition result
    let transcript = event.results[0][0].transcript.toLowerCase();

    // Remove the period at the end of the text if it exists
    if (transcript.endsWith(".")) {
        transcript = transcript.slice(0, -1); // Remove the last character (the period)
    }

    // Set the search input to the recognized speech (without period)
    searchInput.value = transcript;

    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );

    renderSongs(filteredSongs); // Render the filtered song list

    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
});

function toggleClassPlayer(){

    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }
