/*!
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
*/

(function($){

  $.fn.fontselect = function(options) {

     var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

     var _fonts = [
      "Abel",
      "Abril+Fatface",
      "Aclonica",
      "Acme",
      "Actor",
      "Adamina",
      "Advent+Pro:100",
      "Advent+Pro:200",
      "Advent+Pro:300",
      "Advent+Pro:400",
      "Advent+Pro:500",
      "Advent+Pro:600",
      "Advent+Pro:700",
      "Aguafina+Script",
      "Aladin",
      "Aldrich",
      "Alegreya:400",
      "Alegreya:400italic",
      "Alegreya:700",
      "Alegreya:700italic",
      "Alegreya:900",
      "Alegreya:900italic",
      "Alegreya+SC:400",
      "Alegreya+SC:400italic",
      "Alegreya+SC:700",
      "Alegreya+SC:700italic",
      "Alegreya+SC:900",
      "Alegreya+SC:900italic",
      "Alex+Brush",
      "Alfa+Slab+One",
      "Alice",
      "Alike",
      "Alike+Angular",
      "Allan:bold",
      "Allerta",
      "Allerta+Stencil",
      "Allura",
      "Almendra:400",
      "Almendra:400italic",
      "Almendra:bold",
      "Almendra+SC",
      "Amaranth:regular",
      "Amaranth:400italic",
      "Amaranth:700",
      "Amaranth:700italic",
      "Amatic+SC:400",
      "Amatic+SC:700",
      "Amethysta",
      "Andada",
      "Andika",
      "Angkor",
      "Annie+Use+Your+Telescope",
      "Anonymous+Pro:regular",
      "Anonymous+Pro:italic",
      "Anonymous+Pro:bold",
      "Anonymous+Pro:bolditalic",
      "Antic",
      "Antic+Didone",
      "Antic+Slab",
      "Anton",
      "Arapey:400",
      "Arapey:400italic",
      "Arbutus",
      "Architects+Daughter",
      "Arimo:regular",
      "Arimo:italic",
      "Arimo:bold",
      "Arimo:bolditalic",
      "Arizonia",
      "Armata",
      "Artifika",
      "Arvo:regular",
      "Arvo:italic",
      "Arvo:bold",
      "Arvo:bolditalic",
      "Asap:400",
      "Asap:400italic",
      "Asap:700",
      "Asap:700italic",
      "Asset",
      "Astloch:regular",
      "Astloch:bold",
      "Asul:400",
      "Asul:bold",
      "Atomic+Age",
      "Aubrey",
      "Audiowide",
      "Average",
      "Averia+Gruesa+Libre",
      "Averia+Libre:300",
      "Averia+Libre:300italic",
      "Averia+Libre:400",
      "Averia+Libre:400italic",
      "Averia+Libre:700",
      "Averia+Libre:700italic",
      "Averia+Sans+Libre:300",
      "Averia+Sans+Libre:300italic",
      "Averia+Sans+Libre:400",
      "Averia+Sans+Libre:400italic",
      "Averia+Sans+Libre:700",
      "Averia+Sans+Libre:700italic",
      "Averia+Serif+Libre:300",
      "Averia+Serif+Libre:300italic",
      "Averia+Serif+Libre:400",
      "Averia+Serif+Libre:400italic",
      "Averia+Serif+Libre:700",
      "Averia+Serif+Libre:700italic",
      "Bad+Script",
      "Balthazar",
      "Bangers",
      "Basic",
      "Battambang:regular",
      "Battambang:bold",
      "Baumans",
      "Bayon",
      "Belgrano",
      "Belleza",
      "Bentham",
      "Berkshire+Swash",
      "Bevan",
      "Bigshot+One",
      "Bilbo",
      "Bilbo+Swash+Caps",
      "Bitter:400",
      "Bitter:400italic",
      "Bitter:700",
      "Black+Ops+One",
      "Bokor",
      "Bonbon",
      "Boogaloo",
      "Bowlby+One",
      "Bowlby+One+SC",
      "Brawler",
      "Bree+Serif",
      "Bubblegum+Sans",
      "Buda:300",
      "Buenard:400",
      "Buenard:bold",
      "Butcherman",
      "Butterfly+Kids",
      "Cabin:400",
      "Cabin:400italic",
      "Cabin:500",
      "Cabin:500italic",
      "Cabin:600",
      "Cabin:600italic",
      "Cabin:bold",
      "Cabin:bolditalic",
      "Cabin+Condensed:400",
      "Cabin+Condensed:500",
      "Cabin+Condensed:600",
      "Cabin+Condensed:700",
      "Cabin+Sketch:regular",
      "Cabin+Sketch:bold",
      "Caesar+Dressing",
      "Cagliostro",
      "Calligraffitti",
      "Cambo",
      "Candal",
      "Cantarell:regular",
      "Cantarell:italic",
      "Cantarell:bold",
      "Cantarell:bolditalic",
      "Cantata+One",
      "Cardo:regular",
      "Cardo:400italic",
      "Cardo:700",
      "Carme",
      "Carter+One",
      "Caudex:400",
      "Caudex:italic",
      "Caudex:700",
      "Caudex:700italic",
      "Cedarville+Cursive",
      "Ceviche+One",
      "Changa+One:regular",
      "Changa+One:italic",
      "Chango",
      "Chau+Philomene+One:400",
      "Chau+Philomene+One:400italic",
      "Chelsea+Market",
      "Chenla",
      "Cherry+Cream+Soda",
      "Chewy",
      "Chicle",
      "Chivo:400",
      "Chivo:400italic",
      "Chivo:900",
      "Chivo:900italic",
      "Coda:400",
      "Coda:800",
      "Coda+Caption:800",
      "Codystar:300",
      "Codystar:400",
      "Comfortaa:300",
      "Comfortaa:400",
      "Comfortaa:700",
      "Coming+Soon",
      "Concert+One",
      "Condiment",
      "Content:regular",
      "Content:bold",
      "Contrail+One",
      "Convergence",
      "Cookie",
      "Copse",
      "Corben:400",
      "Corben:bold",
      "Cousine:regular",
      "Cousine:italic",
      "Cousine:bold",
      "Cousine:bolditalic",
      "Coustard:400",
      "Coustard:900",
      "Covered+By+Your+Grace",
      "Crafty+Girls",
      "Creepster",
      "Crete+Round:400",
      "Crete+Round:400italic",
      "Crimson+Text:regular",
      "Crimson+Text:400italic",
      "Crimson+Text:600",
      "Crimson+Text:600italic",
      "Crimson+Text:700",
      "Crimson+Text:700italic",
      "Crushed",
      "Cuprum:regular",
      "Cuprum:400italic",
      "Cuprum:700",
      "Cuprum:700italic",
      "Cutive",
      "Damion",
      "Dancing+Script:regular",
      "Dancing+Script:bold",
      "Dangrek",
      "Dawning+of+a+New+Day",
      "Days+One",
      "Delius",
      "Delius+Swash+Caps",
      "Delius+Unicase:400",
      "Delius+Unicase:700",
      "Della+Respira",
      "Devonshire",
      "Didact+Gothic",
      "Diplomata",
      "Diplomata+SC",
      "Doppio+One",
      "Dorsa",
      "Dosis:200",
      "Dosis:300",
      "Dosis:400",
      "Dosis:500",
      "Dosis:600",
      "Dosis:700",
      "Dosis:800",
      "Dr+Sugiyama",
      "Droid+Sans:regular",
      "Droid+Sans:bold",
      "Droid+Sans+Mono",
      "Droid+Serif:regular",
      "Droid+Serif:italic",
      "Droid+Serif:bold",
      "Droid+Serif:bolditalic",
      "Duru+Sans",
      "Dynalight",
      "EB+Garamond",
      "Eater",
      "Economica:400",
      "Economica:400italic",
      "Economica:700",
      "Economica:700italic",
      "Electrolize",
      "Emblema+One",
      "Emilys+Candy",
      "Engagement",
      "Enriqueta:400",
      "Enriqueta:700",
      "Erica+One",
      "Esteban",
      "Euphoria+Script",
      "Ewert",
      "Exo:100",
      "Exo:100italic",
      "Exo:200",
      "Exo:200italic",
      "Exo:300",
      "Exo:300italic",
      "Exo:400",
      "Exo:400italic",
      "Exo:500",
      "Exo:500italic",
      "Exo:600",
      "Exo:600italic",
      "Exo:700",
      "Exo:700italic",
      "Exo:800",
      "Exo:800italic",
      "Exo:900",
      "Exo:900italic",
      "Expletus+Sans:400",
      "Expletus+Sans:400italic",
      "Expletus+Sans:500",
      "Expletus+Sans:500italic",
      "Expletus+Sans:600",
      "Expletus+Sans:600italic",
      "Expletus+Sans:700",
      "Expletus+Sans:700italic",
      "Fanwood+Text:400",
      "Fanwood+Text:400italic",
      "Fascinate",
      "Fascinate+Inline",
      "Federant",
      "Federo",
      "Felipa",
      "Fjord+One",
      "Flamenco:300",
      "Flamenco:400",
      "Flavors",
      "Fondamento:400",
      "Fondamento:400italic",
      "Fontdiner+Swanky",
      "Forum",
      "Francois+One",
      "Fredericka+the+Great",
      "Fredoka+One",
      "Freehand",
      "Fresca",
      "Frijole",
      "Fugaz+One",
      "GFS+Didot",
      "GFS+Neohellenic:regular",
      "GFS+Neohellenic:italic",
      "GFS+Neohellenic:bold",
      "GFS+Neohellenic:bolditalic",
      "Galdeano",
      "Gentium+Basic:regular",
      "Gentium+Basic:italic",
      "Gentium+Basic:bold",
      "Gentium+Basic:bolditalic",
      "Gentium+Book+Basic:regular",
      "Gentium+Book+Basic:italic",
      "Gentium+Book+Basic:bold",
      "Gentium+Book+Basic:bolditalic",
      "Geo",
      "Geostar",
      "Geostar+Fill",
      "Germania+One",
      "Give+You+Glory",
      "Glass+Antiqua",
      "Glegoo",
      "Gloria+Hallelujah",
      "Goblin+One",
      "Gochi+Hand",
      "Gorditas:400",
      "Gorditas:bold",
      "Goudy+Bookletter+1911",
      "Graduate",
      "Gravitas+One",
      "Great+Vibes",
      "Gruppo",
      "Gudea:400",
      "Gudea:italic",
      "Gudea:bold",
      "Habibi",
      "Hammersmith+One",
      "Handlee",
      "Hanuman:regular",
      "Hanuman:bold",
      "Happy+Monkey",
      "Henny+Penny",
      "Herr+Von+Muellerhoff",
      "Holtwood+One+SC",
      "Homemade+Apple",
      "Homenaje",
      "IM+Fell+DW+Pica:regular",
      "IM+Fell+DW+Pica:italic",
      "IM+Fell+DW+Pica+SC",
      "IM+Fell+Double+Pica:regular",
      "IM+Fell+Double+Pica:italic",
      "IM+Fell+Double+Pica+SC",
      "IM+Fell+English:regular",
      "IM+Fell+English:italic",
      "IM+Fell+English+SC",
      "IM+Fell+French+Canon:regular",
      "IM+Fell+French+Canon:italic",
      "IM+Fell+French+Canon+SC",
      "IM+Fell+Great+Primer:regular",
      "IM+Fell+Great+Primer:italic",
      "IM+Fell+Great+Primer+SC",
      "Iceberg",
      "Iceland",
      "Imprima",
      "Inconsolata",
      "Inder",
      "Indie+Flower",
      "Inika:400",
      "Inika:bold",
      "Irish+Grover",
      "Istok+Web:400",
      "Istok+Web:400italic",
      "Istok+Web:700",
      "Istok+Web:700italic",
      "Italiana",
      "Italianno",
      "Jim+Nightshade",
      "Jockey+One",
      "Jolly+Lodger",
      "Josefin+Sans:100",
      "Josefin+Sans:100italic",
      "Josefin+Sans:300",
      "Josefin+Sans:300italic",
      "Josefin+Sans:400",
      "Josefin+Sans:400italic",
      "Josefin+Sans:600",
      "Josefin+Sans:600italic",
      "Josefin+Sans:700",
      "Josefin+Sans:700italic",
      "Josefin+Slab:100",
      "Josefin+Slab:100italic",
      "Josefin+Slab:300",
      "Josefin+Slab:300italic",
      "Josefin+Slab:400",
      "Josefin+Slab:400italic",
      "Josefin+Slab:600",
      "Josefin+Slab:600italic",
      "Josefin+Slab:700",
      "Josefin+Slab:700italic",
      "Judson:400",
      "Judson:400italic",
      "Judson:700",
      "Julee",
      "Junge",
      "Jura:300",
      "Jura:400",
      "Jura:500",
      "Jura:600",
      "Just+Another+Hand",
      "Just+Me+Again+Down+Here",
      "Kameron:400",
      "Kameron:700",
      "Karla:400",
      "Karla:400italic",
      "Karla:700",
      "Karla:700italic",
      "Kaushan+Script",
      "Kelly+Slab",
      "Kenia",
      "Khmer",
      "Knewave",
      "Kotta+One",
      "Koulen",
      "Kranky",
      "Kreon:300",
      "Kreon:400",
      "Kreon:700",
      "Kristi",
      "Krona+One",
      "La+Belle+Aurore",
      "Lancelot",
      "Lato:100",
      "Lato:100italic",
      "Lato:300",
      "Lato:300italic",
      "Lato:400",
      "Lato:400italic",
      "Lato:700",
      "Lato:700italic",
      "Lato:900",
      "Lato:900italic",
      "League+Script",
      "Leckerli+One",
      "Ledger",
      "Lekton:400",
      "Lekton:italic",
      "Lekton:700",
      "Lemon",
      "Lilita+One",
      "Limelight",
      "Linden+Hill:400",
      "Linden+Hill:400italic",
      "Lobster",
      "Lobster+Two:400",
      "Lobster+Two:400italic",
      "Lobster+Two:700",
      "Lobster+Two:700italic",
      "Londrina+Outline",
      "Londrina+Shadow",
      "Londrina+Sketch",
      "Londrina+Solid",
      "Lora:regular",
      "Lora:italic",
      "Lora:bold",
      "Lora:bolditalic",
      "Love+Ya+Like+A+Sister",
      "Loved+by+the+King",
      "Lovers+Quarrel",
      "Luckiest+Guy",
      "Lusitana:400",
      "Lusitana:bold",
      "Lustria",
      "Macondo",
      "Macondo+Swash+Caps",
      "Magra:400",
      "Magra:bold",
      "Maiden+Orange",
      "Mako",
      "Marck+Script",
      "Marko+One",
      "Marmelad",
      "Marvel:400",
      "Marvel:400italic",
      "Marvel:700",
      "Marvel:700italic",
      "Mate:400",
      "Mate:400italic",
      "Mate+SC",
      "Maven+Pro:400",
      "Maven+Pro:500",
      "Maven+Pro:700",
      "Maven+Pro:900",
      "Meddon",
      "MedievalSharp",
      "Medula+One",
      "Megrim",
      "Merienda+One",
      "Merriweather:300",
      "Merriweather:regular",
      "Merriweather:700",
      "Merriweather:900",
      "Metal",
      "Metamorphous",
      "Metrophobic",
      "Michroma",
      "Miltonian",
      "Miltonian+Tattoo",
      "Miniver",
      "Miss+Fajardose",
      "Modern+Antiqua",
      "Molengo",
      "Monofett",
      "Monoton",
      "Monsieur+La+Doulaise",
      "Montaga",
      "Montez",
      "Montserrat",
      "Moul",
      "Moulpali",
      "Mountains+of+Christmas:regular",
      "Mountains+of+Christmas:700",
      "Mr+Bedfort",
      "Mr+Dafoe",
      "Mr+De+Haviland",
      "Mrs+Saint+Delafield",
      "Mrs+Sheppards",
      "Muli:300",
      "Muli:300italic",
      "Muli:400",
      "Muli:400italic",
      "Mystery+Quest",
      "Neucha",
      "Neuton:200",
      "Neuton:300",
      "Neuton:regular",
      "Neuton:italic",
      "Neuton:700",
      "Neuton:800",
      "News+Cycle:regular",
      "News+Cycle:700",
      "Niconne",
      "Nixie+One",
      "Nobile:regular",
      "Nobile:italic",
      "Nobile:bold",
      "Nobile:bolditalic",
      "Nokora:400",
      "Nokora:700",
      "Norican",
      "Nosifer",
      "Nothing+You+Could+Do",
      "Noticia+Text:400",
      "Noticia+Text:400italic",
      "Noticia+Text:700",
      "Noticia+Text:700italic",
      "Nova+Cut",
      "Nova+Flat",
      "Nova+Mono",
      "Nova+Oval",
      "Nova+Round",
      "Nova+Script",
      "Nova+Slim",
      "Nova+Square",
      "Numans",
      "Nunito:300",
      "Nunito:400",
      "Nunito:700",
      "Odor+Mean+Chey",
      "Old+Standard+TT:regular",
      "Old+Standard+TT:italic",
      "Old+Standard+TT:bold",
      "Oldenburg",
      "Oleo+Script:400",
      "Oleo+Script:bold",
      "Open+Sans:300",
      "Open+Sans:300italic",
      "Open+Sans:400",
      "Open+Sans:400italic",
      "Open+Sans:600",
      "Open+Sans:600italic",
      "Open+Sans:700",
      "Open+Sans:700italic",
      "Open+Sans:800",
      "Open+Sans:800italic",
      "Open+Sans+Condensed:300",
      "Open+Sans+Condensed:300italic",
      "Open+Sans+Condensed:700",
      "Orbitron:400",
      "Orbitron:500",
      "Orbitron:700",
      "Orbitron:900",
      "Original+Surfer",
      "Oswald:300",
      "Oswald:regular",
      "Oswald:700",
      "Over+the+Rainbow",
      "Overlock:400",
      "Overlock:400italic",
      "Overlock:700",
      "Overlock:700italic",
      "Overlock:900",
      "Overlock:900italic",
      "Overlock+SC",
      "Ovo",
      "Oxygen",
      "PT+Mono",
      "PT+Sans:regular",
      "PT+Sans:italic",
      "PT+Sans:bold",
      "PT+Sans:bolditalic",
      "PT+Sans+Caption:regular",
      "PT+Sans+Caption:bold",
      "PT+Sans+Narrow:regular",
      "PT+Sans+Narrow:bold",
      "PT+Serif:regular",
      "PT+Serif:italic",
      "PT+Serif:bold",
      "PT+Serif:bolditalic",
      "PT+Serif+Caption:regular",
      "PT+Serif+Caption:italic",
      "Pacifico",
      "Parisienne",
      "Passero+One",
      "Passion+One:400",
      "Passion+One:700",
      "Passion+One:900",
      "Patrick+Hand",
      "Patua+One",
      "Paytone+One",
      "Permanent+Marker",
      "Petrona",
      "Philosopher:regular",
      "Philosopher:italic",
      "Philosopher:bold",
      "Philosopher:bolditalic",
      "Piedra",
      "Pinyon+Script",
      "Plaster",
      "Play:regular",
      "Play:bold",
      "Playball",
      "Playfair+Display:regular",
      "Playfair+Display:400italic",
      "Podkova:regular",
      "Podkova:700",
      "Poiret+One",
      "Poller+One",
      "Poly:400",
      "Poly:400italic",
      "Pompiere",
      "Pontano+Sans",
      "Port+Lligat+Sans",
      "Port+Lligat+Slab",
      "Prata",
      "Preahvihear",
      "Press+Start+2P",
      "Princess+Sofia",
      "Prociono",
      "Prosto+One",
      "Puritan:regular",
      "Puritan:italic",
      "Puritan:bold",
      "Puritan:bolditalic",
      "Quantico:400",
      "Quantico:400italic",
      "Quantico:700",
      "Quantico:700italic",
      "Quattrocento:regular",
      "Quattrocento:700",
      "Quattrocento+Sans:regular",
      "Quattrocento+Sans:400italic",
      "Quattrocento+Sans:700",
      "Quattrocento+Sans:700italic",
      "Questrial",
      "Quicksand:300",
      "Quicksand:400",
      "Quicksand:700",
      "Qwigley",
      "Radley:regular",
      "Radley:400italic",
      "Raleway:100",
      "Rammetto+One",
      "Rancho",
      "Rationale",
      "Redressed",
      "Reenie+Beanie",
      "Revalia",
      "Ribeye",
      "Ribeye+Marrow",
      "Righteous",
      "Rochester",
      "Rock+Salt",
      "Rokkitt:regular",
      "Rokkitt:700",
      "Ropa+Sans:400",
      "Ropa+Sans:400italic",
      "Rosario:regular",
      "Rosario:italic",
      "Rosario:700",
      "Rosario:700italic",
      "Rosarivo:400",
      "Rosarivo:italic",
      "Rouge+Script",
      "Ruda:400",
      "Ruda:bold",
      "Ruda:900",
      "Ruge+Boogie",
      "Ruluko",
      "Ruslan+Display",
      "Russo+One",
      "Ruthie",
      "Sail",
      "Salsa",
      "Sancreek",
      "Sansita+One",
      "Sarina",
      "Satisfy",
      "Schoolbell",
      "Seaweed+Script",
      "Sevillana",
      "Shadows+Into+Light",
      "Shadows+Into+Light+Two",
      "Shanti",
      "Share:400",
      "Share:400italic",
      "Share:700",
      "Share:700italic",
      "Shojumaru",
      "Short+Stack",
      "Siemreap",
      "Sigmar+One",
      "Signika:300",
      "Signika:400",
      "Signika:600",
      "Signika:700",
      "Signika+Negative:300",
      "Signika+Negative:400",
      "Signika+Negative:600",
      "Signika+Negative:700",
      "Simonetta:400",
      "Simonetta:400italic",
      "Simonetta:900",
      "Simonetta:900italic",
      "Sirin+Stencil",
      "Six+Caps",
      "Slackey",
      "Smokum",
      "Smythe",
      "Sniglet:800",
      "Snippet",
      "Sofia",
      "Sonsie+One",
      "Sorts+Mill+Goudy:400",
      "Sorts+Mill+Goudy:400italic",
      "Special+Elite",
      "Spicy+Rice",
      "Spinnaker",
      "Spirax",
      "Squada+One",
      "Stardos+Stencil:regular",
      "Stardos+Stencil:bold",
      "Stint+Ultra+Condensed",
      "Stint+Ultra+Expanded",
      "Stoke",
      "Sue+Ellen+Francisco",
      "Sunshiney",
      "Supermercado+One",
      "Suwannaphum",
      "Swanky+and+Moo+Moo",
      "Syncopate:regular",
      "Syncopate:bold",
      "Tangerine:regular",
      "Tangerine:bold",
      "Taprom",
      "Telex",
      "Tenor+Sans",
      "The+Girl+Next+Door",
      "Tienne:400",
      "Tienne:700",
      "Tienne:900",
      "Tinos:regular",
      "Tinos:italic",
      "Tinos:bold",
      "Tinos:bolditalic",
      "Titan+One",
      "Trade+Winds",
      "Trocchi",
      "Trochut:400",
      "Trochut:italic",
      "Trochut:bold",
      "Trykker",
      "Tulpen+One",
      "Ubuntu:300",
      "Ubuntu:300italic",
      "Ubuntu:regular",
      "Ubuntu:italic",
      "Ubuntu:500",
      "Ubuntu:500italic",
      "Ubuntu:bold",
      "Ubuntu:bolditalic",
      "Ubuntu+Condensed",
      "Ubuntu+Mono:regular",
      "Ubuntu+Mono:italic",
      "Ubuntu+Mono:bold",
      "Ubuntu+Mono:bolditalic",
      "Ultra",
      "Uncial+Antiqua",
      "UnifrakturCook:bold",
      "UnifrakturMaguntia",
      "Unkempt:regular",
      "Unkempt:700",
      "Unlock",
      "Unna",
      "VT323",
      "Varela",
      "Varela+Round",
      "Vast+Shadow",
      "Vibur",
      "Vidaloka",
      "Viga",
      "Voces",
      "Volkhov:400",
      "Volkhov:400italic",
      "Volkhov:700",
      "Volkhov:700italic",
      "Vollkorn:regular",
      "Vollkorn:italic",
      "Vollkorn:bold",
      "Vollkorn:bolditalic",
      "Voltaire",
      "Waiting+for+the+Sunrise",
      "Wallpoet",
      "Walter+Turncoat",
      "Wellfleet",
      "Wire+One",
      "Yanone+Kaffeesatz:200",
      "Yanone+Kaffeesatz:300",
      "Yanone+Kaffeesatz:400",
      "Yanone+Kaffeesatz:700",
      "Yellowtail",
      "Yeseva+One",
      "Yesteryear",
      "Zeyada"
    ];

    var settings = $.extend( {
      style:            'font-select',
      placeholder:      'Select a font',
      lookahead:        2,
      cssUrl:          'http://fonts.googleapis.com/css?family=',
      fonts:            _fonts,
      apiUrl:           'https://www.googleapis.com/webfonts/v1/webfonts',
      apiKkey:          null,
      fetch:            false,
      fetchStr:         'Fetching list...'
    }, options);
    
    var Fontselect = (function(){
    
      function Fontselect(original, o){
        this.$original = $(original);
        this.options = o;
        this.active = false;
        this.setupHtml();
        if (this.options.fetch) {
          this.fetchFonts();
        }
        else {
          this.setupFonts();
        }
      }

      Fontselect.prototype.fetchFonts = function () {
        var fontselect = this;
        var url = this.options.apiUrl;
        if (this.options.apiKey) {
          url = url + '?key=' + this.options.apiKey;
        }
        $('span', this.$select).html(this.options.fetchStr);
        $.ajax({
          url: url,
          dataType: 'jsonp',
          success: function(data) {
            if (data.items && data.items.length > 0) {
              fontselect.options.fonts = [];
              $.each(data.items, function(key, font) {
                $.each(font.variants, function(key, variant) {
                  var family = font.family.replace(/ /g, '+');
                  if (font.variants.length > 1 || (variant != 400 && variant != 'regular')) {
                    family = family + ':' + variant;
                  }
                  fontselect.options.fonts.push(family);
                  console.log('"'+family+'"');
                });
              });
            }
            $('span', fontselect.$select).html(fontselect.options.placeholder);
            fontselect.setupFonts();
          },
          error: function(xmlhttp) {
            // JSONP doesn't trigger any event if there's an error with the request
          }
        });
      }

      Fontselect.prototype.setupFonts = function() {
        this.getVisibleFonts();
        this.bindEvents();

        var font = this.$original.val();
        if (font) {
          this.updateSelected();
          this.addFontLink(font);
        }
      }
      
      Fontselect.prototype.bindEvents = function(){
      
        $('li', this.$results)
        .click(__bind(this.selectFont, this))
        .mouseenter(__bind(this.activateFont, this))
        .mouseleave(__bind(this.deactivateFont, this));
        
        $('span', this.$select).click(__bind(this.toggleDrop, this));
        this.$arrow.click(__bind(this.toggleDrop, this));
      };
      
      Fontselect.prototype.toggleDrop = function(ev){
        
        if(this.active){
          this.$element.removeClass('font-select-active');
          this.$drop.hide();
          clearInterval(this.visibleInterval);
          
        } else {
          this.$element.addClass('font-select-active');
          this.$drop.show();
          this.moveToSelected();
          this.visibleInterval = setInterval(__bind(this.getVisibleFonts, this), 500);
        }
        
        this.active = !this.active;
      };
      
      Fontselect.prototype.selectFont = function(){
        
        var font = $('li.active', this.$results).data('value');
        this.$original.val(font).change();
        this.updateSelected();
        this.toggleDrop();
      };
      
      Fontselect.prototype.moveToSelected = function(){
        
        var $li, font = this.$original.val();
        
        if (font){
          $li = $("li[data-value='"+ font +"']", this.$results);
        } else {
          $li = $("li", this.$results).first();
        }

        this.$results.scrollTop($li.addClass('active').position().top);
      };
      
      Fontselect.prototype.activateFont = function(ev){
        $('li.active', this.$results).removeClass('active');
        $(ev.currentTarget).addClass('active');
      };
      
      Fontselect.prototype.deactivateFont = function(ev){
        
        $(ev.currentTarget).removeClass('active');
      };
      
      Fontselect.prototype.updateSelected = function(){
        
        var font = this.$original.val();
        $('span', this.$element).text(this.toReadable(font)).css(this.toStyle(font));
      };
      
      Fontselect.prototype.setupHtml = function(){
      
        this.$original.empty().hide();
        this.$element = $('<div>', {'class': this.options.style});
        this.$arrow = $('<div><b></b></div>');
        this.$select = $('<a><span>'+ this.options.placeholder +'</span></a>');
        this.$drop = $('<div>', {'class': 'fs-drop'});
        this.$results = $('<ul>', {'class': 'fs-results'});
        this.$original.after(this.$element.append(this.$select.append(this.$arrow)).append(this.$drop));
        this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
      };
      
      Fontselect.prototype.fontsAsHtml = function(){

	var fonts = this.options.fonts;
        var l = fonts.length;
        var r, s, h = '';
        
        for(var i=0; i<l; i++){
          r = this.toReadable(fonts[i]);
          s = this.toStyle(fonts[i]);
          h += '<li data-value="'+ fonts[i] +'" style="font-family: '+s['font-family'] +'; font-weight: '+s['font-weight'] +'; font-style: '+s['font-style'] +'">'+ r +'</li>';
        }
        
        return h;
      };
      
      Fontselect.prototype.toReadable = function(font){
        return font.replace(/[\+|:]/g, ' ');
      };
      
      Fontselect.prototype.toStyle = function(font){
        var t = font.split(':');
        var variant = t[1] || '';
        var weight = variant.match(/(?:[0-9]+|bold)/) ? variant.match(/(?:[0-9]+|bold)/)[0] : 400;
        var style = variant.match(/italic/) ? variant.match(/italic/)[0] : 'normal';

        return {'font-family': this.toReadable(t[0]), 'font-weight': weight, 'font-style': style};
      };
      
      Fontselect.prototype.getVisibleFonts = function(){
      
        if(this.$results.is(':hidden')) return;
        
        var fs = this;
        var top = this.$results.scrollTop();
        var bottom = top + this.$results.height();
        
        if(this.options.lookahead){
          var li = $('li', this.$results).first().height();
          bottom += li*this.options.lookahead;
        }
       
        $('li', this.$results).each(function(){

          var ft = $(this).position().top+top;
          var fb = ft + $(this).height();

          if ((fb >= top) && (ft <= bottom)){
            var font = $(this).data('value');
            fs.addFontLink(font);
          }
          
        });
      };
      
      Fontselect.prototype.addFontLink = function(font){
      
        var link = this.options.cssUrl + font;
      
        if ($("link[href*='" + font + "']").length === 0){
			$('link:last').after('<link href="' + link + '" rel="stylesheet" type="text/css">');
		}
      };
    
      return Fontselect;
    })();

    return this.each(function() {
      return new Fontselect(this, settings);
    });

  };
})(jQuery);