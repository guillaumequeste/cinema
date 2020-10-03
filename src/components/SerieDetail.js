import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import './SerieDetail.css'
import {Helmet} from "react-helmet"

const series = {
    100: { 
        titre: "50 nuances de grecs",
        image: "nuances.jpg",
        genre: "comédie, animation",
        saisons: "1",
        episodes: "30",
        realisateur: "Arte",
        acteurs: "Valérie Lemercier, Philippe Torreton, Clément Sibony",
        synopsis: "Les Dieux, les héros et les monstres de l'Olympe se retrouvent au grand complet, dans une joyeuse promenade à travers notre héritage commun et contemporain.",
        avis: "Très drôle."
      },
      200: { 
        titre: "Ainsi soient-ils",
        image: "ainsi.jpg",
        genre: "drame",
        saisons: "3",
        episodes: "24",
        realisateur: "Bruno Nahon, Vincent Poymiro, Rodolphe Tissot",
        acteurs: "Samuel Jouy, Jean-Luc Bideau, Clément Manuel, Julien Bouanich, Thierry Gimenez, David Baiot",
        synopsis: "Septembre 2011, Paris. Cinq jeunes candidats à la prêtrise sont sur le point de changer radicalement de vie. En entrant au Séminaire des Capucins, ils vont apprendre à suivre la voie de Dieu et devenir ses ministres. En partageant leurs espérances, leurs doutes, leurs épreuves quotidiennes, nous découvrons un monde fascinant, mystérieux, l’Eglise, qui nous mènera jusqu’au Vatican et ses coulisses politiques. Une plongée haletante dans un univers secret.",
        avis: "Très bien joué."
      },
      300: { 
        titre: "Bates Motel",
        image: "bates_motel.jpg",
        genre: "drame, policier, thriller",
        saisons: "5",
        episodes: "50",
        realisateur: "Anthony Cipriano",
        acteurs: "Vera Farmiga, Freddie Highmore, Max Thieriot",
        synopsis: "Après la mort mystérieuse de son mari, Norma Bates décide de refaire sa vie loin de l'Arizona, dans la petite ville de White Pine Bay dans l'Oregon, et emmène avec elle son fils Norman, âgé de 17 ans. Elle rachète là-bas un vieux motel abandonné depuis de nombreuses années, ainsi que le manoir qui trône majestueusement quelques mètres plus loin. La mère et le fils partagent depuis toujours une relation complexe, presque incestueuse. Des événements tragiques vont les pousser à se rapprocher encore davantage. Ils partagent désormais ensemble un lourd secret...",
        avis: "Le prequel actualisé de Psychose d'Alfred Hitchcock."
      },
      350: { 
        titre: "Big Little Lies",
        image: "big_little_lies.jpg",
        genre: "drame, thriller",
        saisons: "2",
        episodes: "14",
        realisateur: "Liane Moriarty, David E. Kelley",
        acteurs: "Reese Witherspoon, Nicole Kidman, Shailene Woodley, Laura Dern",
        synopsis: "Quand Madeline, Jane et Celeste se lient d'amitié par l'intermédiaire de leurs enfants, elles ne se doutent pas qu'elles vont se retrouver, des mois plus tard, au centre d'un tragique accident, survenu à la fête de l'école. Qui est mort ? Qui est responsable ? Et pour quelle raison ? Secrets, rumeurs et mensonges ne faisant pas bon ménage, tout l'univers de la petite ville de Monterey va être secoué de violents soubresauts.",
        avis: "Les actrices sont formidables."
      },
   400: { 
      titre: "Black Mirror",
      image: "black_mirror.jpg",
      genre: "drame, science-fiction, thriller",
      saisons: "5",
      episodes: "24",
      realisateur: "Charlie Brooker",
      acteurs: "Les acteurs changent à chaque épisode.",
      synopsis: "Chaque épisode de cette anthologie montre la dépendance des hommes vis-à-vis de tout ce qui a un écran...",
      avis: "Génial. Que serait le monde si... A noter le film 'Black Mirror: Bandersnatch' où le spectateur influe sur le scénario."
    },
    450: { 
        titre: "Bojack Horseman",
        image: "bojack.jpg",
        genre: "comédie, drame, animation",
        saisons: "6",
        episodes: "77",
        realisateur: "Raphael Bob-Waksberg",
        acteurs: "Will Arnett, Aaron Paul, Amy Sedaris",
        synopsis: "CVingt ans après avoir crevé le petit écran dans la sitcom culte Horsin’ Around, l’étalon le plus célèbre des années 1990 a perdu de sa superbe. Alcoolique et déprimé, BoJack vit dans une garçonnière à Hollywood et traîne son amertume dans des pulls bigarrés. Heureusement (ou malheureusement ?), le bourrin peut compter sur des amis parfois un brin encombrants : Diane NGuyen, nègre littéraire chargé d’écrire son autobiographie, Princess Carolyn, tour à tour ex-petite amie et agent attitrée, Todd Chavez, colocataire autoproclamé et même le cabotin Mr. Peanutbutter, rival et héros toujours populaire d’une sitcom analogue. À Los Angeles où humains et animaux de tout poil cohabitent, BoJack essaie tant bien que mal de raviver sa gloire passée.",
        avis: "Drôle, émouvant, intelligent."
      },
      500: { 
        titre: "Game of Thrones",
        image: "game_of_thrones.jpg",
        genre: "drame, fantastique",
        saisons: "8",
        episodes: "73",
        realisateur: "D.B. Weiss, David Benioff",
        acteurs: "Emilia Clarke, Kit Harrington, Peter Dinklage",
        synopsis: "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.",
        avis: "La série qui a fait tant parler."
      },
      510: { 
        titre: "Gardens of the World with Audrey Hepburn",
        image: "gardens.jpg",
        genre: "série télévisée documentaire",
        saisons: "1",
        episodes: "8",
        realisateur: "Bruce Franchini",
        acteurs: "Audrey Hepburn, Michael York",
        synopsis: "Série télévisée documentaire des années 1990 filmée sur place dans certains des plus beaux jardins du monde, animée par Audrey Hepburn, qui a également co-narré la série avec Michael York.",
        avis: "Apaisant"
      },
      600: { 
        titre: "H",
        image: "h.jpg",
        genre: "comédie",
        saisons: "4",
        episodes: "71",
        realisateur: "Kader Aoun, Xavier Matthew, Eric Judor",
        acteurs: "Eric Judor, Ramzy Bedia, Jamel Debbouze, Catherine Benguigui, Sophie Mounicot, Jean-Luc Bideau",
        synopsis: "Dans un hôpital de banlieue parisienne, 3 internes entretiennent une ambiance un peu décalée. Entre gaffes, plaisanteries de mauvais goût et autres erreurs, on ne s'ennuie jamais avec Sabri, Aymé et Jamel !",
        avis: "Cultissime !"
      },
      700: { 
        titre: "Homeland",
        image: "homeland.jpg",
        genre: "drame, thriller",
        saisons: "8",
        episodes: "97",
        realisateur: "Alex Gansa, Gideon Raff, Howard Gordon",
        acteurs: "Claire Danes, Mandy Patinkin, Elizabeth Marvel",
        synopsis: "Huit ans après la disparition de deux soldats américains lors de l'invasion de Bagdad, l'un d'entre eux réapparaît, seul survivant alors que tout le monde le pensait mort depuis longtemps. Rapatrié aux États-Unis, il est accueilli chaleureusement par sa famille, ses amis et le gouvernement. Seule contre tous, l'agent de la CIA Carrie Mathison, qui a passé plusieurs années en Afghanistan, est persuadée que le héros est en réalité devenu un espion à la solde de l'ennemi, préparant la prochaine attaque terroriste sur le sol américain. Sans réelle preuve et montrée du doigt suite à un incident diplomatique qu'elle a déclenché quelques mois plus tôt, Carrie va devoir se battre pour prouver que ce qu'elle avance est la réalité...",
        avis: "Captivant."
      },
      800: { 
        titre: "La casa de papel",
        image: "casa.jpg",
        genre: "drame, thriller",
        saisons: "4",
        episodes: "38",
        realisateur: "Alex Pina",
        acteurs: "Ursula Corbero, Alvaro Morte, Pedro Alonso",
        synopsis: "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
        avis: "Prenant."
      },
      900: { 
        titre: "La vie de famille",
        image: "famille.jpeg",
        genre: "comédie",
        saisons: "9",
        episodes: "215",
        realisateur: "William Bickley, Michael Warren",
        acteurs: "Jaleel White, Reginald Veljohnson, Jo Marie Payton, Darius McCrary, Kellie Shanygne Williams",
        synopsis: "Les Winslow forment une famille comme les autres. Carl, policier, et sa femme, Harriette, ont trois enfants : Eddie, Laura et Judy. Estelle, la mère de Carl, et Rachel, la soeur d'Harriette, habitent également avec eux. Mais leurs petites vies tranquilles sont bouleversées le jour où ils font la connaissance de leur voisin, Steve Urkel, un garçon surdoué mais très maladroit...",
        avis: "Sitcom culte."
      },
      1000: { 
        titre: "Le prisonnier",
        image: "le_prisonnier.jpg",
        genre: "drame, fantastique, science-fiction",
        saisons: "1",
        episodes: "17",
        realisateur: "Patrick McGoohan, George Markstein",
        acteurs: "Patrick McGoohan, Peter Swanwick, Angelo Muscat",
        synopsis: "Lorsqu'un agent secret britannique démissionne, il est enlevé par un mystérieux groupe, et retenu prisonnier dans 'le Village', un endroit d'où on ne peut sortir, et où on a pour seul nom un numéro. N° 6 n'a que deux solutions pour quitter 'le Village' : avouer le motif de sa démission, ou trouver un moyen de s'échapper...",
        avis: "Une série énigmatique."
      },
      1100: { 
        titre: "Les grands mythes",
        image: "les_grands_mythes.jpg",
        genre: "drame, fantastique, aventure",
        saisons: "1",
        episodes: "20",
        realisateur: "Arte",
        acteurs: "François Busnel",
        synopsis: "Initiateur de la série, François Busnel raconte lui-même en voix off, avec passion et précision, et en se fondant sur les textes les plus anciens, les destins de Zeus, Thésée, Aphrodite ou Orphée, ces mythes dont la force poétique et la portée universelle ont nourri l’imaginaire des artistes au fil des siècles. À l'image, les chefs-d’œuvre de Botticelli, Picasso, Goya ou Klimt rencontrent des silhouettes animées, inspirées des vases de la Grèce antique : un dispositif inédit pour une exploration captivante de la mythologie grecque et de ses récits originels.",
        avis: "La mythologie grecque. Captivant."
      },
      1200: {
        titre: "Les cahiers d'Esther",
        image: "esther.jpg",
        genre: "animation",
        saisons: "2",
        episodes: "85",
        realisateur: "Canal+",
        acteurs: "Eléna Plonka",
        synopsis: "Esther, une fillette de 10 ans, partage son quotidien entre son école, ses amis, sa famille, ses idoles. Ce qu’elle ne dit pas à ses parents, elle le raconte à travers ce journal intime, tour à tour drôle et émouvant, tendre et cruel, un véritable portrait de la jeunesse d’aujourd’hui et un miroir de notre société. Adaptation de la bande dessinée de Riad Sattouf.",
        avis: "Touchant."
      },
      1250: { 
        titre: "Les Simpson",
        image: "les_simpson.jpg",
        genre: "comédie, animation",
        saisons: "31",
        episodes: "679",
        realisateur: "Matt Groening",
        acteurs: "Al Jean, Mike Scully, George Meyer",
        synopsis: "Les Simpson, famille américaine moyenne, vivent à Springfield. Homer, le père, a deux passions : regarder la télé et boire des bières. Mais son quotidien est rarement reposant, entre son fils Bart qui fait toutes les bêtises possibles, sa fille Lisa qui est une surdouée, ou encore sa femme Marge qui ne supporte pas de le voir se soûler à longueur de journée.",
        avis: "Culte."
      },
      1300: { 
        titre: "Lost",
        image: "lost.jpg",
        genre: "aventure, drame, action",
        saisons: "6",
        episodes: "128",
        realisateur: "Damon Lindelof, J.J. Abrams",
        acteurs: "Matthew Fox, Evangeline Lilly, Josh Holloway",
        synopsis: "Après le crash de leur avion sur une île perdue, les survivants doivent apprendre à cohabiter et survivre dans cet environnement hostile. Bien vite, ils se rendent compte qu'une menace semble planer sur l'île...",
        avis: "Enigmatique."
      },
      1380: { 
        titre: "Love, Death + Robots",
        image: "love_death_robots.jpg",
        genre: "fantastique, science-fiction, animation",
        saisons: "1",
        episodes: "18",
        realisateur: "Tim Miller, David Fincher",
        acteurs: "différents studios d'animation",
        synopsis: "Les épisodes sont produits par différents studios d'animation. Ils durent entre 5 et 17 minutes et nous emportent dans des univers totalement différents avec pour toile de fond de l'amour, la mort et des robots.",
        avis: "Incroyable."
      },
      1400: { 
        titre: "Malcolm",
        image: "malcolm.jpg",
        genre: "comédie",
        saisons: "7",
        episodes: "151",
        realisateur: "Linwood Boomer",
        acteurs: "Frankie Muniz, Bryan Cranston, Jane Kaczmarek, Justin Berfield, Erik Per Sullivan, Christopher Masterson",
        synopsis: "Petit génie malgré lui, Malcolm vit dans une famille hors du commun. Le jeune surdoué n'hésite pas à se servir de son intelligence pour faire les 400 coups avec ses frères. Et les parents tentent tant bien que mal de canaliser l'énergie de ces petits démons.",
        avis: "Culte."
      },
      1450: { 
        titre: "Moot-Moot",
        image: "moot_moot.jpg",
        genre: "comédie, animation",
        saisons: "1",
        episodes: "15",
        realisateur: "Eric Judor, Ramzy Bedia",
        acteurs: "Eric Judor, Ramzy Bedia, Fred Testot",
        synopsis: "Bienvenue à Mootown, une ville comme il en existe beaucoup, sauf qu'elle est peuplée de moutons. C'est là que vient d'emménager la famille Moot-Moot. Bernard, le papa, a été mandaté pour améliorer la rentabilité de l'entreprise de production de gazon de la ville. Fonction importante, pourtant à la maison c'est sa femme Berthe qui porte la culotte et martyrise son mari. Et puis il y a Michel et Zinédina, les deux agneaux de la famille, aussi déjantés que leurs géniteurs...",
        avis: "Déjanté."
      },
      1500: { 
        titre: "Munch",
        image: "munch.jpg",
        genre: "drame, policier",
        saisons: "3",
        episodes: "26",
        realisateur: "Valérie Tong-Cuong, Marie Vinoy, Marie-Alice Gadea",
        acteurs: "Isabelle Nanty, Lucien Jean-Baptiste, Aurélien Wiik, Paloma Coquant, Tom Villa",
        synopsis: "Munch est une avocate hors normes, qui s’attache à défendre des innocents que tout accuse. Face à une erreur judiciaire elle est capable de franchir toutes les lignes, même celles de l’illégalité, pour prouver leur innocence.",
        avis: "Sympathique."
      },
      1600: { 
        titre: "Pitch",
        image: "pitch.jpg",
        genre: "comédie",
        saisons: "2",
        episodes: "30",
        realisateur: "Baptiste Lecaplain, FloBer, Xavier Maingon",
        acteurs: "Baptiste Lecaplain, Jeanne Arènes, Nicolas Marié, David Baiot",
        synopsis: "Lionel Planche, jeune producteur de film hyperactif et tyrannique, n’a qu’une idée en tête : produire ENFIN son premier long métrage. Épaulé par Chantal, son assistante dévouée, un brin fayote mais toujours de bonne volonté, Lionel va tout faire pour se faire une place dans le milieu du cinéma.",
        avis: "Déjanté."
      },
      1650: { 
        titre: "Platane",
        image: "platane.jpg",
        genre: "comédie",
        saisons: "3",
        episodes: "32",
        realisateur: "Eric Judor, Hafid F. Benamar",
        acteurs: "Eric Judor, Ramzy Bedia, Hafid F. Benamar",
        synopsis: "Un soir, la voiture d’Eric percute un platane. Après un an de coma, il découvre que Ramzy a brillamment poursuivi sa carrière de comique sans lui en développant la série 'HP', suite de leur sitcom à succès 'H'. Eric veut alors se lancer dans le cinéma d’auteur et prouver qu’il peut faire un fim sérieux et émouvant. Contre l’avis de tous il décide d’écrire la suite de 'La Môme', 'La Môme 2.0 New Generation'. Mais personne n’y croit vraiment. A travers les difficultés que rencontre son héros pour réaliser un chef d’oeuvre cette série se joue avec malice des dessous d’un tournage et en même temps des difficultés à se dégager du regard que les autres portent sur soi.",
        avis: "Sympathique."
      },
      1700: { 
        titre: "Prison Break",
        image: "prison_break.jpg",
        genre: "drame, thriller",
        saisons: "5",
        episodes: "92",
        realisateur: "Paul Scheuring",
        acteurs: "Wentworth Miller, Dominic Purcell, Sarah Wayne Callies",
        synopsis: "Michael Scofield s'engage dans une véritable lutte contre la montre : son frère Lincoln est dans le couloir de la mort, en attente de son exécution. Persuadé de son innocence mais à court de solutions, Michael décide de se faire incarcérer à son tour dans le pénitencier d'état de Fox River pour organiser leur évasion...",
        avis: "La première saison est incroyable."
      },
    1800: { 
        titre: "Seinfeld",
        image: "seinfeld.jpg",
        genre: "comédie",
        saisons: "9",
        episodes: "178",
        realisateur: "Larry David, Jerry Seinfeld",
        acteurs: "Jerry Seinfeld, Julia Louis-Dreyfus, Michael Richards, Jason Alexander",
        synopsis: "Dans son propre rôle de comique, le bavard Jerry Seinfeld mène une vie qui ne le gâte pas tout le temps, notamment à cause des femmes. Avec son collaborateur malhonnête et son voisin loufoque, Jerry analyse toutes les petites choses du quotidien et les absurdités de la société.",
        avis: "Culte outre-Atlantique."
      },
      1865: { 
        titre: "Sherlock",
        image: "sherlock.jpg",
        genre: "aventure, drame, policier",
        saisons: "4",
        episodes: "14",
        realisateur: "Steven Moffat, Mark Gatiss",
        acteurs: "Benedict Cumberbatch, Martin Freeman, Mark Gatiss, Amanda Abbington, Louise Brealey",
        synopsis: "Les aventures de Sherlock Holmes et de son acolyte de toujours, le docteur Watson, sont transposées au XXIème siècle...",
        avis: "Clever"
      },
      1900: { 
        titre: "South Park",
        image: "south_park.jpg",
        genre: "comédie, animation",
        saisons: "23",
        episodes: "316",
        realisateur: "Trey Parker, Matt Stone",
        acteurs: "Trey Parker, Matt Stone",
        synopsis: "La petite ville de South Park dans le Colorado est le théâtre des aventures de Cartman, Stan, Kyle et Kenny, quatre enfants qui ont un langage un peu... décalé !",
        avis: "Parental advisory explicit content."
      },
      2000: { 
        titre: "Spin City",
        image: "spin_city.jpg",
        genre: "comédie",
        saisons: "6",
        episodes: "145",
        realisateur: "Gary David Goldberg, Bill Lawrence",
        acteurs: "Michael J. Fox, Barry Bostwick, Alan Ruck, Michael Boatman, Connie Britton, Richard Kind, Charlie Sheen",
        synopsis: "Maire de New York, Randall Winston est un homme plutôt gaffeur. Heureusement, il est entouré d'une équipe de professionnels qui s'efforcent de réparer ses maladresses et soigner son image publique, avec en premier lieu son adjoint, Mike Flaherty.",
        avis: "Très bonne sitcom."
      },
      2100: { 
        titre: "Stranger Things",
        image: "stranger_things.jpg",
        genre: "drame, fantastique, thriller",
        saisons: "3",
        episodes: "25",
        realisateur: "Matt Duffer, Ross Duffer",
        acteurs: "Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Noah Schnapp",
        synopsis: "A Hawkins, en 1983 dans l'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d'amitié avec la demoiselle tatouée du chiffre '11' sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…",
        avis: "Une plongée dans les années 80."
      },
      2200: { 
        titre: "The Ricky Gervais Show",
        image: "the_ricky_gervais_show.jpeg",
        genre: "comédie, animation",
        saisons: "3",
        episodes: "39",
        realisateur: "Ricky Gervais, Stephen Merchant",
        acteurs: "Ricky Gervais, Stephen Merchant, Karl Pilkington",
        synopsis: "Les discussions animées et totalement démentes qu’entretiennent Ricky Gervais, Stephen Merchant et leur ami Karl Pilkington. Celui-ci, avec son regard bien à lui sur le monde et la vie, échafaude des théories absurdes et naïves sur n’importe quel sujet. Les thèmes les plus loufoques fusent pendant une demi-heure, passant du coq à l’âne… ou plutôt du coq au singe, véritable passion de Pilkington.",
        avis: "So british."
      }
}

/* J'aimerais tout mettre dans le fichier series.json et faire appel à lui dans la class ci-dessous au lieu d'appeler const films au-dessus */ 
class SerieDetail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../img/${series[this.props.match.params.id].image}`)
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }
        return (
            <div>
              <Helmet>
                    <meta charSet="utf-8" />
                    <title>Détails de la série</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/serie/" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react details serie" />
                    <meta name="description" content="Details de la serie" />
                    <meta property="og:title" content="Details de la serie" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/serie/" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Details de la serie" />
                    <meta property="og:description" content="Details de la serie" />
                    <meta property="og:site_name" content="Details de la serie" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Details de la serie" />
                    <meta name="twitter:description" content="Details de la serie" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(series[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                    </div>
                    <div className="description">
                        <h2 className="titreCard">{series[this.props.match.params.id].titre}</h2>
                        <ul>
                            <li className="liCard"><strong>Titre : </strong>{series[this.props.match.params.id].titre}</li>
                            <li className="liCard"><strong>Genre : </strong>{series[this.props.match.params.id].genre}</li>
                            <li className="liCard"><strong>Nombre de saisons : </strong>{series[this.props.match.params.id].saisons}</li>
                            <li className="liCard"><strong>Nombre d'épisodes : </strong>{series[this.props.match.params.id].episodes}</li>
                            <li className="liCard"><strong>Réalisateur : </strong>{series[this.props.match.params.id].realisateur}</li>
                            <li className="liCard"><strong>Acteurs : </strong>{series[this.props.match.params.id].acteurs}</li>
                            <li className="liCard"><strong>Synopsis : </strong>{series[this.props.match.params.id].synopsis}</li>
                            <li className="liCard"><strong>Avis : </strong>{series[this.props.match.params.id].avis}</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SerieDetail