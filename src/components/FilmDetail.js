import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import './FilmDetail.css'
import {Helmet} from "react-helmet"

const films = {
   100: { 
      titre: "13 Tzameti",
      image: "13_tzameti.jpg",
      genre: "thriller",
      annee: "2006",
      realisateur: "Gela Babluani",
      acteurs: "George Babluani, Aurélien Recoing, Augustin Legrand, Philippe Passon",
      synopsis: "Quelque part, dans un endroit reculé au bord de la mer, Sébastien, 22 ans, répare le toit d'une maison. Le propriétaire meurt d'une overdose après avoir reçu une étrange convocation censée lui rapporter beaucoup d'argent. Sébastien récupère l'enveloppe et décide de prendre sa place...",
      avis: "J'ai vu ce film sans avoir lu le synopsis... glaçant. Le film est en noir et blanc et rend l'atmosphère encore plus oppressante."
    },
    101: { 
        titre: "187 : Code meurtre",
        image: "187_code_meurtre.jpg",
        genre: "drame, thriller",
        annee: "1997",
        realisateur: "Kevin Reynolds",
        acteurs: "Samuel L. Jackson, Clifton Collins Jr., Kelly Rowan, John Heard",
        synopsis: "À New York, Garfield, professeur de biologie dans un établissement 'difficile', est agressé et gravement blessé par un de ses élèves. Quelques mois plus tard, il accepte un poste à Los Angeles, dans un autre établissement où règne la violence. Il décide alors de répondre à la violence par la violence. Ce choix sera fatal à plusieurs personnes.",
        avis: "Oeil pour oeil, dent pour dent où comment la violence entraîne la violence..."
      },
    200: { 
        titre: "21 grammes",
        image: "21_grammes.jpg",
        genre: "drame",
        annee: "2003",
        realisateur: "Alejandro Gonzàlez Inàrritu",
        acteurs: "Sean Penn, Benicio del Toro, Naomi Watts, Charlotte Gainsbourg",
        synopsis: "On dit que nous perdons tous 21 grammes au moment précis de notre mort... Le poids de cinq pièces de monnaie. Le poids d'une barre de chocolat. Le poids d'un colibri. 21 grammes. Est-ce le poids de notre âme ? Est-ce le poids de la vie ? Paul attend une transplantation cardiaque. Cristina, ex-junkie, est mère de deux petites filles. Jack sort de prison et redécouvre la foi.A cause d'un accident, ils vont s'affronter, se haïr... et s'aimer.",
        avis: "Casting incroyable. Bouleversant."
    },
    300: { 
        titre: "American History X",
        image: "american_history_x.jpg",
        genre: "drame",
        annee: "1998",
        realisateur: 'Tony Kaye',
        acteurs: "Edward Norton, Edward Furlong, Beverly d'Angelo, Avery Brooks",
        synopsis: "A travers l'histoire d'une famille américaine, ce film tente d'expliquer l'origine du racisme et de l'extrémisme aux États-Unis. Il raconte l'histoire de Derek qui, voulant venger la mort de son père, abattu par un dealer noir, a épousé les thèses racistes d'un groupuscule de militants d'extrême droite et s'est mis au service de son leader, brutal théoricien prônant la suprématie de la race blanche. Ces théories le mèneront à commettre un double meurtre entrainant son jeune frère, Danny, dans la spirale de la haine.",
        avis: "Film choc"
    },
    350: { 
        titre: "Amours chiennes",
        image: "amours_chiennes.jpg",
        genre: "drame, thriller",
        annee: "2000",
        realisateur: 'Alejandro Gonzalez Inarritu',
        acteurs: "Emilio Echevarria, Gael Garcia Bernal, Goya Toledo, Alvaro Guerrero",
        synopsis: "A Mexico, un tragique accident de la route va mettre en relation les trois protagonistes de cette histoire bien mouvementée : Octavio, le jeune sans foi ni loi, Valéria, mannequin célèbre, et El Chivo, vieux révolutionnaire clochardisé, tous trois punis par la fatalité.",
        avis: "Le premier film de 'la trilogie de la mort' d'Alejandro Gonzalez Inarritu"
    },
    400: { 
        titre: "Astérix et Obélix : Mission Cléopâtre",
        image: "asterix.jpg",
        genre: "comédie",
        annee: "1998",
        realisateur: 'Alain Chabat',
        acteurs: "Christian Clavier, Gérard Depardieu, Jamel Debbouze, Monica Bellucci, Alain Chabat, Claude Rich, Gérard Darmon, Edouard Baer, Dieudonné, Isabelle Nanty...",
        synopsis: "Cléopâtre, la reine d’Égypte, décide, pour défier l'Empereur romain Jules César, de construire en trois mois un palais somptueux en plein désert. Si elle y parvient, celui-ci devra concéder publiquement que le peuple égyptien est le plus grand de tous les peuples. Pour ce faire, Cléopâtre fait appel à Numérobis, un architecte d'avant-garde plein d'énergie. S'il réussit, elle le couvrira d'or. S'il échoue, elle le jettera aux crocodiles. Celui-ci, conscient du défi à relever, cherche de l'aide auprès de son vieil ami Panoramix. Le druide fait le voyage en Égypte avec Astérix et Obélix. De son côté, Amonbofis, l'architecte officiel de Cléopâtre, jaloux que la reine ait choisi Numérobis pour construire le palais, va tout mettre en œuvre pour faire échouer son concurrent.",
        avis: "Cultissime. Une pléïade de guests."
    },
    450: { 
        titre: "Babel",
        image: "babel.jpg",
        genre: "drame, thriller",
        annee: "2006",
        realisateur: 'Alejandro Gonzalez Inarritu',
        acteurs: "Brad Pitt, Cate Blanchett, Gael Garcia Bernal, Elle Fanning",
        synopsis: "En plein désert marocain, un coup de feu retentit. Il va déclencher toute une série d'événements qui impliqueront un couple de touristes américains au bord du naufrage, deux jeunes Marocains auteurs d'un crime accidentel, une nourrice qui voyage illégalement avec deux enfants américains, et une adolescente japonaise rebelle dont le père est recherché par la police à Tokyo. Séparés par leurs cultures et leurs modes de vie, chacun de ces quatre groupes de personnes va cependant connaître une même destinée d'isolement et de douleur...",
        avis: "Le troisième film de la 'trilogie de la mort' d'Alejandro Gonzalez Inarritu"
    },
    500: { 
        titre: "Babysitting",
        image: "babysitting.jpg",
        genre: "comédie",
        annee: "2014",
        realisateur: 'Philippe Lacheau et Nicolas Benamou',
        acteurs: "Philippe Lacheau, Alcie David, Vincent Desagnat, Enzo Tomasini, Tarek Boudali, Julien Arruti",
        synopsis: "Franck, agent d'accueil aux éditions Schaudel, souhaite devenir dessinateur de bande dessinée. Alors lorsque son patron lui propose de lire une ébauche à condition qu'il garde son fils ce soir, Franck ne peut pas refuser. Le problème, c'est qu'il s'agit du jour de son anniversaire et ses amis ne comptent pas laisser tomber la fête qu'ils avaient préparée.",
        avis: "Une comédie filmée en vue subjective. Délirant."
    },
    600: { 
        titre: "Babysitting 2",
        image: "babysitting_2.jpg",
        genre: "comédie",
        annee: "2015",
        realisateur: 'Philippe Lacheau et Nicolas Benamou',
        acteurs: "Philippe Lacheau, Alcie David, Vincent Desagnat, Enzo Tomasini, Tarek Boudali, Julien Arruti",
        synopsis: "Sonia souhaite présenter Franck à son père, Jean-Pierre directeur d’un hôtel écologique au Brésil. Toute la bande s’y retrouve ainsi pour y passer des vacances de rêve. Un matin, les garçons partent en excursion dans la forêt amazonienne. Jean-Pierre leur confie sa mère acariâtre Yolande. Le lendemain, ils ont tous disparu… On a juste retrouvé la petite caméra avec laquelle ils étaient partis. Sonia et son père vont regarder cette vidéo pour retrouver leur trace…",
        avis: "La suite. Sympathique."
    },
    700: { 
        titre: "Batman",
        image: "batman.jpg",
        genre: "fantastique, thriller, action, aventure",
        annee: "1989",
        realisateur: 'Tim Burton',
        acteurs: "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
        synopsis: "Batman s'apprête à affronter le terrible Joker.",
        avis: "Gotham City dans l'univers de Tim Burton."
    },
    800: { 
        titre: "Batman, le défi",
        image: "batman_le_defi.jpg",
        genre: "fantastique, thriller, action, aventure",
        annee: "1992",
        realisateur: 'Tim Burton',
        acteurs: "Michael Keaton, Danny DeVito, Michelle Pfeiffer, Christopher Walken",
        synopsis: "Non seulement Batman doit affronter le Pingouin, monstre génétique doté d'une intelligence à toute épreuve, qui sème la terreur mais, plus difficile encore, il doit faire face à la séduction de deux super-femmes, la douce Selina Kyle et la féline Catwoman qui va lui donner bien du fil a retordre. Si Bruce Wayne apprécie Selina, Batman n'est pas insensible au charme de Catwoman.",
        avis: "Le 2ème Batman de Tim Burton. Envoûtant."
    },
    900: { 
        titre: "Batman begins",
        image: "batman_begins.jpg",
        genre: "action, thriller",
        annee: "2005",
        realisateur: 'Christopher Nolan',
        acteurs: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman, Morgan Freeman",
        synopsis: "Comment un homme seul peut-il changer le monde ? Telle est la question qui hante Bruce Wayne depuis cette nuit tragique où ses parents furent abattus sous ses yeux, dans une ruelle de Gotham City. Torturé par un profond sentiment de colère et de culpabilité, le jeune héritier de cette richissime famille fuit Gotham pour un long et discret voyage à travers le monde. Le but de ses pérégrinations : sublimer sa soif de vengeance en trouvant de nouveaux moyens de lutter contre l'injustice.",
        avis: "Le début de la trilogie de Christopher Nolan. Noir."
    },
    1000: { 
        titre: "Bienvenue à Gattaca",
        image: "bienvenue_a_gattaca.jpg",
        genre: "science-fiction",
        annee: "1998",
        realisateur: 'Andrew Nicool',
        acteurs: "Ethan Hawke, Uma Thurman, Jude Law, Loren Dean",
        synopsis: "Dans un monde parfait, Gattaca est un centre d'études et de recherches spatiales pour des jeunes gens au patrimoine génétique impeccable. Jérôme, candidat idéal, voit sa vie détruite par un accident tandis que Vincent, enfant naturel, rêve de partir pour l'espace. Chacun des deux va permettre à l'autre d'obtenir ce qu'il souhaite en déjouant les lois de Gattaca.",
        avis: "Très beau film de SF qui pose de véritables questions sur l'attitude à adopter face aux progrès scientifiques."
    },
    1050: { 
        titre: "Biutiful",
        image: "biutiful.jpg",
        genre: "drame",
        annee: "2010",
        realisateur: 'Alejandro Gonzalez Inarritu',
        acteurs: "Javier Bardem, Luo Jin, Maricel Alvarez, Hanaa Bouchaib",
        synopsis: "C’est l’histoire d’un homme en chute libre. Sensible aux esprits, Uxbal, père de deux enfants, sent que la mort rôde. Confronté à un quotidien corrompu et à un destin contraire, il se bat pour pardonner, pour aimer, pour toujours…",
        avis: "Noir"
    },
    1100: { 
        titre: "Blanche-Neige et le Chasseur",
        image: "blanche_neige.jpg",
        genre: "fantastique, action",
        annee: "2012",
        realisateur: 'Rupert Sanders',
        acteurs: "Kristen Stewart, Charlize Theron, Chris Hemsworth, Sam Claflin",
        synopsis: "Dans des temps immémoriaux où la magie, les fées et les nains étaient monnaie courante, naquit un jour l’unique enfant d’un bon roi et de son épouse chérie : une fille aux lèvres rouge sang, à la chevelure noire comme l’ébène et à la peau blanche comme neige.",
        avis: "L'histoire de Blanche-Neige revue par un réalisateur de publicités. Visuellement magnifique."
    },
    1200: { 
        titre: "Dans la maison",
        image: "dans_la_maison.jpg",
        genre: "thriller",
        annee: "2012",
        realisateur: 'François Ozon',
        acteurs: "Fabrice Luchini, Ernst Umhauer, Kristin Scott Thomas, Emmanuelle Seigner",
        synopsis: "Claude, un élève brillant, doué et manipulateur du lycée Gustave Flaubert, à tendance pervers narcissique, provoque l’enthousiasme de son professeur de français à qui il fait part de ses écrits voyeuristes, qu'il rédige au détriment d'un camarade de classe.",
        avis: "Un thriller psychologique avec la musique de Philippe Rombi."
    },
    1300: { 
        titre: "Diamants sur canapé",
        image: "diamants_sur_canape.jpg",
        genre: "comédie dramatique",
        annee: "1962",
        realisateur: 'Blake Edwards',
        acteurs: "Audrey Hepburn, George Peppard, Patricia Neal",
        synopsis: "Une croqueuse de diamants cherche à épouser un homme riche alors que son voisin écrivain s'intéresse à elle.",
        avis: "Breakfast at Tiffany's"
    },
    1310: { 
        titre: "Django Unchained",
        image: "django_unchained.jpg",
        genre: "western",
        annee: "2013",
        realisateur: 'Quentin Tarantino',
        acteurs: "Jamie Foxx, Christophe Waltz, Leonardo DiCaprio, Samuel L. Jackson",
        synopsis: "Dans le sud des États-Unis, deux ans avant la guerre de Sécession, le Dr King Schultz, un chasseur de primes allemand, fait l’acquisition de Django, un esclave qui peut l’aider à traquer les frères Brittle, les meurtriers qu’il recherche. Schultz promet à Django de lui rendre sa liberté lorsqu’il aura capturé les Brittle – morts ou vifs.",
        avis: "Quentin Tarantino s'attaque à la question de l'esclavagisme et ça fait des étincelles."
    },
    1400: { 
        titre: "Docteur Mabuse, le joueur",
        image: "docteur_mabuse_le_joueur.jpg",
        genre: "drame, policier",
        annee: "1922",
        realisateur: 'Fritz Lang',
        acteurs: "Rudolf Klein-Rogge, Aud Egede Nissen, Gertrude Welcker, Alfred Abel",
        synopsis: "Les crimes diaboliques du docteur Mabuse finalement capturé et enfermé dans un asile d'aliénés. Mais il continuera de sevir parmi les fous.",
        avis: "Le premier film de la trilogie de Fritz Lang consacré au Docteur Mabuse. Chef-d'oeuvre."
    },
    1500: { 
        titre: "Dog Pound",
        image: "dog_pound.jpg",
        genre: "drame, thriller",
        annee: "2010",
        realisateur: 'Kim Chapiron',
        acteurs: "Adam Butcher, Shane Kippel, Mateo Morales, Slim Twig, Lawrence Bayne",
        synopsis: "L'établissement pénitentiaire pour mineurs d'Enola Vale aux États-Unis accueille trois nouveaux détenus : Davis, seize ans, condamné pour trafic de drogues, Angel, quinze ans, pour vol de voiture avec violence et Butch, dix-sept ans, transféré d'une autre prison pour avoir éborgné un officier de probation. Ils seront affiliés au dortoir de l'agent Goodyear et seront confrontés à leurs camarades de cellules, notamment Banks, un jeune délinquant qui purge sa peine et s'amuse à briser les nouveaux venus. Chacun sera confronté à la réalité de l'univers carcéral et devra survivre tant bien que mal dans celui-ci.",
        avis: "L'univers carcéral, dur."
    },
    1600: { 
        titre: "Drive",
        image: "drive.jpg",
        genre: "action, thriller",
        annee: "2011",
        realisateur: 'Nicolas Winding Refn',
        acteurs: "Ryan Gosling, Cary Mulligan, Bryan Cranston, Albert Brooks, Ron Perlman",
        synopsis: "Un jeune homme solitaire, 'The Driver', conduit le jour à Hollywood pour le cinéma en tant que cascadeur et la nuit pour des truands. Ultra professionnel et peu bavard, il a son propre code de conduite. Jamais il n’a pris part aux crimes de ses employeurs autrement qu’en conduisant - et au volant, il est le meilleur !",
        avis: "Ryan Gosling parle peu, ce qui le rend énigmatique."
    },
    1700: { 
        titre: "Drôle de drame",
        image: "drole_de_drame.jpg",
        genre: "comédie",
        annee: "1937",
        realisateur: 'Marcel Carné',
        acteurs: "Michel Simon, Louis Jouvet, Françoise Rosay, Jean-Pierre Aumont",
        synopsis: "Londres 1900. Le très sérieux professeur de botanique Irwin Molyneux n'est autre que Felix Chapel, auteur de romans policiers. L'évèque de Bedford, cousin d'Irwin, n'apprecie guère ce genre de littérature et le déclare bien fort lors d'un souper où il est invité chez les Molyneux. L'absence de Margaret, la femme de Molyneux, à ce souper, va déclencher une série de quiproquos fort amusants.",
        avis: "Michel Simon, Louis Jouvet, formidable."
    },
    1750: { 
        titre: "Dumbo",
        image: "dumbo.jpg",
        genre: "famille, aventure",
        annee: "2019",
        realisateur: 'Tim Burton',
        acteurs: "Colin Farrell, Eva Green, Michael Keaton, Danny DeVito",
        synopsis: "Les enfants de Holt Farrier, ex-artiste de cirque chargé de s’occuper d’un éléphanteau dont les oreilles démesurées sont la risée du public, découvrent que ce dernier sait voler...",
        avis: "L'univers de Walt Disney revisité par Tim Burton. Magique."
    },
    1775: { 
        titre: "Et pour quelques dollars de plus",
        image: "quelques.jpg",
        genre: "western",
        annee: "1965",
        realisateur: 'Sergio Leone',
        acteurs: "Clint Eastwood, Lee Van Cleef, Gian Maria Volonte, Mara Krupp, Luigi Pistilli",
        synopsis: "'L'indien', bandit cruel et fou, s'est évadé de prison. Il se prépare à attaquer la banque d'El Paso, la mieux gardée de tout l'Ouest, avec une quinzaine d'autres malfaiteurs. Le 'Manchot' et le Colonel Douglas Mortimer, deux chasseurs de primes concurrents, décident, après une confrontation tendue, de faire finalement équipe pour arrêter les bandits. Mais leurs motivations ne sont pas forcément les mêmes...",
        avis: "Le deuxième film de la trilogie du dollar."
    },
    1800: { 
        titre: "Fenêtre sur cour",
        image: "fenetre_sur_cour.jpg",
        genre: "policier, thriller",
        annee: "1954",
        realisateur: 'Alfred Hitchcock',
        acteurs: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
        synopsis: "A cause d'une jambe cassée, le reporter-photographe L. B. Jeffries est contraint de rester chez lui dans un fauteuil roulant. Homme d'action et amateur d'aventure, il s'aperçoit qu'il peut tirer parti de son immobilité forcée en étudiant le comportement des habitants de l'immeuble qu'il occupe dans Greenwich Village. Et ses observations l'amènent à la conviction que Lars Thorwald, son voisin d'en face, a assassiné sa femme. Sa fiancée, Lisa Fremont, ne le prend tout d'abord pas au sérieux, ironisant sur l'excitation que lui procure sa surveillance, mais finit par se prendre au jeu...",
        avis: "Comment rendre une histoire captivante en filmant un homme qui regarde par la fenêtre chez ses voisins."
    },
    1900: { 
        titre: "Fight Club",
        image: "fight_club.jpg",
        genre: "thriller, drame",
        annee: "1999",
        realisateur: 'David Fincher',
        acteurs: "Edawrd Norton, Brad Pitt, Helena Bonham Carter, Meet Loaf",
        synopsis: "Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres personnes seules qui connaissent la misère humaine, morale et sexuelle. C'est pourquoi il va devenir membre du Fight club, un lieu clandestin ou il va pouvoir retrouver sa virilité, l'échange et la communication. Ce club est dirigé par Tyler Durden, une sorte d'anarchiste entre gourou et philosophe qui prêche l'amour de son prochain.",
        avis: "Génial."
    },
    2000: { 
        titre: "Gatsby le Magnifique",
        image: "gatsby.jpg",
        genre: "thriller, drame",
        annee: "2013",
        realisateur: 'Baz Luhmann',
        acteurs: "Leonardo DiCaprio, Tobey Maguire, Carey Mulligan, Joel Edgerton",
        synopsis: "Nick Carraway est un jeune homme du Midwest proche de la trentaine. Il quitte sa région pour travailler dans la finance à New York. Il emménage alors à côté de Jay Gatsby, dont l'immense maison occulte celle de Nick. De plus, Gatsby donne fréquemment de somptueuses et importantes réceptions. Mais Nick ignore tout de cet homme, sujet des plus folles rumeurs.",
        avis: "Leonardo DiCaprio incarne un personnage qui fait les choses en (très) grand."
    },
    2100: { 
        titre: "Gravity",
        image: "gravity.jpg",
        genre: "thriller, aventure",
        annee: "2013",
        realisateur: 'Alfonso Cuaron',
        acteurs: "Leonardo DiCaprio, Tobey Maguire, Carey Mulligan, Joel Edgerton",
        synopsis: "Pour sa première expédition à bord d'une navette spatiale, le docteur Ryan Stone, brillante experte en ingénierie médicale, accompagne l'astronaute chevronné Matt Kowalsky. Mais alors qu'il s'agit apparemment d'une banale sortie dans l'espace, une catastrophe se produit.",
        avis: "L'espace, le vide, comme si vous y étiez."
    },
    2200: { 
        titre: "Guerre et Paix (1956)",
        image: "guerre_et_paix_1956.jpg",
        genre: "historique, drame",
        annee: "1956",
        realisateur: 'King Vidor',
        acteurs: "Audrey Hepburn, Henry Fonda, Mel Ferrer, John Mills",
        synopsis: "Moscou, 1805. La jeune comtesse Natacha est fiancée au prince André et a pour meilleur ami le Prince Pierre. La guerre éclate, André et Pierre partent au front tandis que Natacha décide de s'occuper des malheureux. Mais André est tué au combat. A son retour, Pierre retrouve une jeune femme assagie par les épreuves et la dureté des temps...",
        avis: "Guerre et Paix de Tolstoï façon Hollywood."
    },
    2300: { 
        titre: "Guerre et Paix (1967)",
        image: "guerre_et_paix_1967.jpg",
        genre: "historique, drame",
        annee: "1967",
        realisateur: 'Sergeï Bondartchouk',
        acteurs: "Sergeï Bondartchoik, Lioudmila Savelieva, Viatcheslav Tikhonov, Victor Stanitsyne",
        synopsis: "Apres la version de King Vidor, la campagne de Russie de Napoleon vue par les Russes. Oscar du meilleur film etranger.",
        avis: "Guerre et Paix de Tolstoï vu par les russes, cela donne une fresque grandiose."
    },
    2400: { 
        titre: "Habemus papam",
        image: "habemus_papam.jpg",
        genre: "comédie dramatique",
        annee: "2011",
        realisateur: 'Nanni Moretti',
        acteurs: "Michel Piccoli, Nanni Moretti, Jerzy Stuhr, Renato Scarpa",
        synopsis: "Après la mort du Pape, le Conclave se réunit afin d’élire son successeur. Plusieurs votes sont nécessaires avant que ne s’élève la fumée blanche. Enfin, un cardinal est élu ! Mais les fidèles massés sur la place Saint-Pierre attendent en vain l’apparition au balcon du nouveau souverain pontife. Ce dernier ne semble pas prêt à supporter le poids d’une telle responsabilité. Angoisse ? Dépression ? Peur de ne pas se sentir à la hauteur ? Le monde entier est bientôt en proie à l’inquiétude tandis qu’au Vatican, on cherche des solutions pour surmonter la crise…",
        avis: "Magnifique Michel Piccoli."
    },
    2500: { 
        titre: "Halloween, la Nuit des masques",
        image: "halloween.jpg",
        genre: "épouvante - horreur",
        annee: "1979",
        realisateur: 'John Carpenter',
        acteurs: "Jamie Lee Curtis, Donald Pleasance, Nick Castle, Tony Moran",
        synopsis: "L'histoire se déroule dans la ville d'Haddonfield, dans l'Illinois. Le soir d'Halloween, Michael Myers, âgé de six ans, assassine sa sœur à coups de couteau de cuisine. Il est interné jusqu'à sa majorité pour ensuite être jugé. Cependant, à l'âge de vingt-et-un ans, alors qu'il est transféré pour son procès, il réussit à s'échapper, et prend la route de sa ville natale. Se produit alors une succession de meurtres. Son psychiatre, le docteur Loomis, se lance à sa poursuite...",
        avis: "LE Classique du cinéma d'horreur."
    },
    2600: { 
        titre: "Hard Candy",
        image: "hard_candy.jpg",
        genre: "thriller, drame",
        annee: "2006",
        realisateur: 'David Slade',
        acteurs: "Ellen Page, Patrick Wilson, Sandra Oh, Jennifer Holmes, Gilbert John",
        synopsis: "Tout commence par un chat entre deux internautes aux pseudonymes de Thonggrrrrrl14 et Lensman319. Les deux personnes, respectivement Hayley Stark, adolescente de quatorze ans et Jeff Kohlver, photographe de trente-deux ans, se mettent d'accord pour se donner rendez-vous.",
        avis: "Un huis clos oppressant."
    },
    2700: { 
        titre: "Haute tension",
        image: "haute_tension.jpg",
        genre: "thriller, épouvante - horreur",
        annee: "2003",
        realisateur: 'Alexandre Aja',
        acteurs: "Cécile de France, Maïwenn, Philippe Nahon, Franck Khalfoun",
        synopsis: "Marie, une étudiante de vingt ans, révise ses examens dans la ferme isolée des parents de sa meilleure amie. En l'espace d'une nuit, un tueur, qui ignore son existence, assassine à tour de rôle les membres de cette famille...",
        avis: "Je ne m'attendais pas à voir Cécile de France dans ce genre de film."
    },
    2800: { 
        titre: "Hôtel du Nord",
        image: "hotel_du_nord.jpg",
        genre: "comédie dramatique",
        annee: "1938",
        realisateur: 'Marcel Carné',
        acteurs: "Arletty, Annabella, Louis Jouvet, Jean-Pierre Aumont",
        synopsis: "Un hôtel modeste au bord du canal Saint-Martin abrite une clientèle bigarrée. Pierre et Renée, un couple d'amoureux, décident d'en finir avec la vie. Ce qui va s'avérer plus difficile que prévu. Un autre couple, M. Edmond, mystérieux homme, et Raymonde, une prostituée, vont se mêler à l'histoire des amoureux désespérés.",
        avis: "Arletty dans le paris de l'entre-deux-guerres."
    },
    2900: { 
        titre: "Ils",
        image: "ils.jpg",
        genre: "thriller",
        annee: "1938",
        realisateur: 'Xavier Palud et David Moreau',
        acteurs: "Olivia Bonamy, Michaël Cohen",
        synopsis: "Lucas et Clémentine, un couple trentenaire expatrié en Roumanie, habite depuis peu de temps une maison isolée en banlieue de Bucarest. Elle, professeur de français, lui, romancier, vivent un bonheur paisible... Pourtant, un soir dans leur maison, tout va basculer. La pluie battante fait rage à l'extérieur. Le téléphone retentit, des voix lointaines au bout du fil, incompréhensibles. Le couple n'est en effet pas seul. Le cauchemar commence... 'Ils' sont là...",
        avis: "Tiré d'une histoire vraie."
    },
    3000: { 
        titre: "Irréversible",
        image: "irreversible.jpg",
        genre: "drame, thriller",
        annee: "2002",
        realisateur: 'Gaspar Noé',
        acteurs: "Monica Bellucci, Vincent Cassel, Albert Dupontel, Jo Prestia",
        synopsis: "Une jeune femme, Alex, se fait violer par un inconnu dans un tunnel. Son compagnon Marcus et son ex-petit ami Pierre décident de faire justice eux-mêmes.",
        avis: "Film antéchronologique"
    },
    3100: { 
        titre: "Jason Bourne",
        image: "jason_bourne.jpg",
        genre: "action, thriller",
        annee: "2016",
        realisateur: 'Paul Greengrass',
        acteurs: "Matt Damon, Tommy Lee Jones, Alicia Vikander, Vincent Cassel",
        synopsis: "La traque de Jason Bourne par les services secrets américains se poursuit. Des îles Canaries à Londres en passant par Las Vegas...",
        avis: "On ne s'ennuie pas."
    },
    3200: { 
        titre: "Jason Bourne : l'héritage",
        image: "jason_bourne_l_heritage.jpg",
        genre: "espionnage, action",
        annee: "2012",
        realisateur: 'Tony Gilroy',
        acteurs: "Jeremy Renner, Rachel Weisz, Edward Norton, Stacy Keach",
        synopsis: "On croyait tout connaître de l'histoire de Jason Bourne et de son passé d’agent tueur malgré lui. Mais l’essentiel restait à découvrir. Le programme Treadstone dont Jason était le cobaye n’était que la partie émergée d’une conspiration plus ténébreuse, ourdie par d’autres branches du gouvernement et mettant en jeu d’autres agences de renseignement, d’autres programmes militaires, d’autres laboratoires secrets…",
        avis: "Cette fois, le héros se nomme Jeremy Renner."
    },
    3250: { 
        titre: "Joker",
        image: "joker.jpg",
        genre: "drame",
        annee: "2019",
        realisateur: 'Todd Phillips',
        acteurs: "Joaquin Phoenix, Robert de Niro, Zazia Beetz, Frances Conroy",
        synopsis: "En 1981, à Gotham City. Arthur Fleck travaille dans une agence de clowns. Méprisé et incompris, il mène une vie en marge et vit dans un immeuble miteux avec sa mère, Penny. Un soir, il se fait agresser dans le métro par trois hommes, le poussant à les tuer en retour. Si son geste inspire une partie de la population, Arthur bascule lui peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
        avis: "Joaquin Phoenix est incroyable."
    },
    3300: { 
        titre: "Jurassic Park",
        image: "jurassic_park.jpg",
        genre: "aventure, science-fiction",
        annee: "1993",
        realisateur: 'Steven Spielberg',
        acteurs: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
        synopsis: "John Parker Hammond, le PDG de la puissante compagnie InGen, parvient à donner vie à des dinosaures grâce à la génétique et décide de les utiliser dans le cadre d’un parc d'attractions qu’il compte ouvrir sur une île au large du Costa Rica. Avant l'ouverture, il fait visiter le parc à un groupe d'experts pour obtenir leur aval. Mais c'était sans compter la cupidité et la malveillance de l'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l'île...",
        avis: "Mythique."
    },
    3400: { 
        titre: "Knock",
        image: "knock.jpg",
        genre: "comédie",
        annee: "1951",
        realisateur: 'Guy Lefranc',
        acteurs: "Louis Jouvet, Jean Brochard, Pierre Renoir, Pierre Bertin",
        synopsis: "Voulant assurer le triomphe de la médecine qu’il fait passer avant l’intérêt des malades, le docteur Knock arrive à Saint-Maurice pour succéder au docteur Parpalaid dont la clientèle est rare, l’état de santé du pays étant excellent. Loin de se décourager, Knock fait comprendre à chaque patient qui se presse à ses consultations gratuites, que tout bien portant est un malade qui s’ignore. Le résultat ne se fait pas attendre et tout le village se retrouve au lit....",
        avis: "Du grand Louis Jouvet."
    },
    3500: { 
        titre: "L'étrange Noël de Monsieur Jack",
        image: "jack.jpg",
        genre: "fantastique, animation",
        annee: "1994",
        realisateur: 'Henry Selick',
        acteurs: "Ed Ivory, Chris Sarandon, Danny Elfman, Catherine O'Hara",
        synopsis: "VJack Skellington, roi des citrouilles et guide de Halloween-ville, s'ennuie : depuis des siècles, il en a assez de préparer la même fête de Halloween qui revient chaque année, et il rêve de changement. C'est alors qu'il a l'idée de s'emparer de la fête de Noël...",
        avis: "Tim Burton est le producteur de ce film. Poétique."
    },
    3600: { 
        titre: "L'homme qui en savait trop",
        image: "homme.jpg",
        genre: "thriller",
        annee: "1956",
        realisateur: 'Alfred Hitchcock',
        acteurs: "James Stewart, Doris Day, Daniel Gélin, Brenda de Banzie",
        synopsis: "Le docteur Benjamin McKenna, sa femme Jo et leur fils Hank passent quelques jours de vacances à Marrakech, au Maroc. Ils font la rencontre de Louis Bernard, un membre du Deuxième Bureau. Ce dernier est assassiné, et juste avant de mourir, confie à Benjamin qu'un attentat contre un homme d'État étranger se prépare à Londres. Pour contraindre le couple au silence, les comploteurs kidnappent Hank.",
        avis: "Alfred Hitchcock."
    },
    3650: { 
        titre: "L'horloger de Sain-Paul",
        image: "horloger.jpg",
        genre: "drame",
        annee: "1974",
        realisateur: 'Bertrand Tavernier',
        acteurs: "Philippe Noiret, Jean Rochefort, Jacques Denis, Yves Afonso",
        synopsis: "Abandonné par sa femme, Michel Descombes, horloger à Lyon, élève seul son fils, Bernard. Un jour, la police vient faire une perquisition à son domicile. Surpris, le père apprend que son fils est en fuite avec sa compagne car il a tué un des gardiens d'une usine. Michel se rend alors à l'évidence, il ne connaît pas vraiment Bernard. Lorsque ce dernier se fait arrêter, Mr Descombes met tout en œuvre pour créer une véritable relation avec lui.",
        avis: "Magnifique Philippe Noiret."
    },
    3700: { 
        titre: "L'illusionniste",
        image: "l_illusionniste.jpg",
        genre: "animation",
        annee: "2010",
        realisateur: 'Alfred Hitchcock',
        acteurs: "Jean-Claude Donda, Edith Rankin",
        synopsis: "À la fin des années 1950, le monde du music-hall penche vers sa fin depuis la naissance du rock 'n' roll. Un vieil illusionniste se considère comme un artiste en voie de disparition et quitte les salles de spectacle parisiennes pour tenter sa nouvelle chance à Londres, mais la situation est malheureusement la même au Royaume-Uni. Il continue alors à faire ses tours dans de petits théâtres et dans des bars. Un jour, il va rencontrer une jeune fille nommée Alice dans un pub d’un village écossais qui le prend pour un vrai magicien…",
        avis: "On se tait et on regarde."
    },
    3800: { 
        titre: "L'oeil du Monocle",
        image: "l_oeil_du_monocle.jpg",
        genre: "policier",
        annee: "1962",
        realisateur: 'Georges Lautner',
        acteurs: "Paul Meurisse, Elga Andersen, Robert Dalban, Maurice Biraud",
        synopsis: "1942, au large de Bonifacio. La Wehrmacht a fait immerger de l'or et des documents classés secret défense. Les espions du monde entier convoîtent ce trésor. Les services secrets français font alors appel à leur meilleur agent, Dromart, alias 'Le Monocle'.",
        avis: "Le deuxième volet de la trilogie centrée sur le commandant Théobald Dromard dit Le Monocle."
    },
    3900: { 
        titre: "La cité de la peur",
        image: "la_cite_de_la_peur.jpg",
        genre: "comédie",
        annee: "1994",
        realisateur: 'Alain Berbérian et Alain Chabat',
        acteurs: "Alain Chabat, Chantal Lauby, Dominique Farrugia, Gérard Darmon, Sam Karmann",
        synopsis: "Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film 'Red is Dead'. Malheureusement, celui-ci est d'une telle faiblesse que personne ne souhaite en faire l'écho. Mais lorsque les projectionnistes du long-métrage en question meurent chacun leur tour dans d'étranges circonstances, 'Red is dead' bénéficie d'une incroyable publicité. Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film...",
        avis: "L'humour des Nuls."
    },
    4000: { 
        titre: "La cité des anges",
        image: "la_cite_des_anges.jpg",
        genre: "fantastique, romance",
        annee: "1997",
        realisateur: 'Brad Silberling',
        acteurs: "Nicolas Cage, Meg Ryan, Andre Braugher, Dennis Franz",
        synopsis: "Seth est un ange des temps modernes: une créature céleste qui aspire à se rendre utile sur terre. Pour ce faire, il prend de temps en temps une apparence humaine, mais la mission exige le plus souvent qu'il reste invisible. Les êtres les plus sensibles soupçonnent de temps en temps sa présence lorsque, pris par une angoisse, ils ont la sensation qu'une main invisible à l'oeil nu vient se poser sur eux, dissiper leurs ennuis.",
        avis: "Une histoire d'amour 'presque' impossible."
    },
    4100: { 
        titre: "La fureur de vivre",
        image: "la_fureur_de_vivre.jpg",
        genre: "drame",
        annee: "1955",
        realisateur: 'Nicholas Ray',
        acteurs: "James Dean, Natalie Wood, Sal Mineo, Jim Backus",
        synopsis: "Jim Stark est le petit nouveau au lycée. Un jeune homme accablé de problèmes familiaux et brimé par ses camarades mais qui n'aspire qu'à se faire une place parmi ses camarades. Entraîné malgré lui dans un défi de vitesse face à Buzz, chef d'un groupe un peu rebelle, ce dernier y perdra la vie. Suite à ce drame, Jim est entraîné dans une spirale de violence.",
        avis: "James Dean."
    },
    4200: { 
        titre: "La liste de Schindler",
        image: "la_liste_de_schindler.jpg",
        genre: "historique, guerre",
        annee: "1993",
        realisateur: 'Steven Spielberg',
        acteurs: "Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall",
        synopsis: "Evocation des années de guerre d'Oskar Schindler, fils d'industriel d'origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver huit cents hommes et trois cents femmes du camp d'extermination de Auschwitz-Birkenau.",
        avis: "Poignant."
    },
    4300: { 
        titre: "La mémoire dans la peau",
        image: "la_memoire_dans_la_peau.jpg",
        genre: "action, thriller",
        annee: "2002",
        realisateur: 'Doug Liman',
        acteurs: "Matt Damon, Franka Potente, Chris Cooper, Clive Owen",
        synopsis: "Sur la côte adriatique, un petit bateau de pêche repère le corps inanimé d'un homme ballotté par les flots. Des marins s'empressent de le repêcher. Portant des traces de balles dans le dos, cet homme à l'identité inconnue a miraculeusement survécu, mais il ne se souvient plus de rien. Même pas de son nom. Et encore moins des raisons pour lesquelles on a tenté de le tuer.",
        avis: "Le premier épisode de la série consacrée à Jason Bourne."
    },
    4400: { 
        titre: "La mort dans la peau",
        image: "la_mort_dans_la_peau.jpg",
        genre: "action, espionnage",
        annee: "2004",
        realisateur: 'Paul Greengrass',
        acteurs: "Matt Damon, Franka Potente, Brian Cox, Julia Stiles",
        synopsis: "Depuis deux ans, l'ex-agent / tueur à gages de la CIA Jason Bourne et sa compagne Marie ont réussi à tromper leurs poursuivants au prix d'une vigilance sans faille. Ce paisible village de Goa aurait dû être leur dernier refuge. Vain espoir. Deux ans plus tôt, Jason avait juré de se venger de quiconque le relancerait. Il tiendra parole...",
        avis: "Le deuxième épisode de la série consacrée à Jason Bourne."
    },
    4500: { 
        titre: "La vengeance dans la peau",
        image: "la_vengeance_dans_la_peau.jpg",
        genre: "action, espionnage",
        annee: "2007",
        realisateur: 'Paul Greengrass',
        acteurs: "Matt Damon, Franka Potente, Brian Cox, Julia Stiles",
        synopsis: "Laissé pour mort, Jason se réfugie en Italie et entreprend une lente et périlleuse remontée dans le temps à la recherche de son identité.",
        avis: "Le troisième épisode de la série consacrée à Jason Bourne."
    },
    4600: { 
        titre: "La vérité",
        image: "la_verite.jpg",
        genre: "drame",
        annee: "1960",
        realisateur: 'Henri-Georges Clouzot',
        acteurs: "Brigitte Bardot, Sami Frey, Marie-José Nat, Charles Vanel, Paul Meurisse",
        synopsis: "Dominique Marceau, une jeune fille provocante, est accusée du meurtre de son ancien amant Gilbert Tellier. Au cours du procès, l'histoire de sa relation avec la victime est reconstituée.",
        avis: "Magnifique casting."
    },
    4700: { 
        titre: "Le bon, la brute et le truand",
        image: "le_bon_la_brute_et_le_truand.jpg",
        genre: "western",
        annee: "1966",
        realisateur: 'Sergio Leone',
        acteurs: "Clint Eastwood, Lee Van Cleef, Eli Wallach, Aldo Giuffrè",
        synopsis: "Pendant la Guerre de Sécession, trois hommes, préférant s'intéresser à leur profit personnel, se lancent à la recherche d'un coffre contenant 200 000 dollars en pièces d'or volés à l'armée sudiste. Tuco sait que le trésor se trouve dans un cimetière, tandis que Joe connaît le nom inscrit sur la pierre tombale qui sert de cache. Chacun a besoin de l'autre. Mais un troisième homme entre dans la course : Setenza, une brute qui n'hésite pas à massacrer femmes et enfants pour parvenir à ses fins.",
        avis: "Sergio Leone - Ennio Morricone. Le dernier film de la trilogie du dollar."
    },
    4800: { 
        titre: "Le Chasseur et la Reine des glaces",
        image: "le_chasseur_et_la_reine_des_glaces.jpg",
        genre: "action, aventure, fantastique",
        annee: "2016",
        realisateur: 'Cedric Nicolas-Troyan',
        acteurs: "Charlize Theron, Chris Hemsworth, Jessica Chastain, Emily Blunt",
        synopsis: "A l’annonce de la défaite de sa sœur, Freya envoie ses guerriers récupérer le miroir dont elle est la seule à pouvoir catalyser les sombres facultés. Des tréfonds dorés de la psyché, elle réussit à ressusciter Ravenna. Les deux sœurs vont alors retourner leur puissance maléfique, décuplée par la rage, sur le royaume enchanté. Leur armée s’avèrera désormais invincible…à moins que… les deux proscrits qui avaient jadis trahi la règle d’or, subissant l’exil et la séparation, ne parviennent à se retrouver…",
        avis: "La suite de Blanche-Neige et le Chasseur."
    },
    4900: { 
        titre: "Le crime de l'Orient-Express (2017)",
        image: "le_crime_de_l_orient_express.jpg",
        genre: "thriller, policier",
        annee: "2017",
        realisateur: 'Kenneth Brannagh',
        acteurs: "Kenneth Brannagh, Johnny Depp, Michelle Pfeiffer, Penelope Cruz, Willem Dafoe, Tom Bateman, Daisy Ridley",
        synopsis: "Le célèbre détective belge Hercule Poirot prend l'Orient-Express pour rentrer d’Istanbul à Londres. Mais alors que le train se retrouve bloqué par la neige dans les montagnes yougoslaves, Samuel Ratchett, un riche Américain, est assassiné. À la demande de son ami M. Bouc, directeur de la ligne, Poirot se met à enquêter pour découvrir le meurtrier parmi les passagers.",
        avis: "Superbe casting, visuellement très beau."
    },
    5000: { 
        titre: "Le crime était presque parfait",
        image: "le_crime_etait_presque_parfait.jpg",
        genre: "thriller, policier",
        annee: "1954",
        realisateur: 'Alfred Hitchcock',
        acteurs: "Ray Milland, Grace Kelly, Robert Cummings, John Williams",
        synopsis: "Tony Wendice, une ancienne gloire du tennis, s'est marié avec Margot pour sa richesse. Mais celle-ci le trompe depuis peu avec Mark Halliday, un jeune auteur de romans policiers. Craignant que sa femme le quitte et le laisse sans le sou, Tony fait appel au capitaine Lesgate et le charge d'assassiner Margot en échange d'une grosse somme d'argent.",
        avis: "Un huis clos hitchcockien."
    },
    5100: { 
        titre: "Le diabolique Docteur Mabuse",
        image: "le_diabolique_docteur_mabuse.jpg",
        genre: "thriller",
        annee: "1960",
        realisateur: 'Fritz Lang',
        acteurs: "Peter Van Eyck, Dawn Addams, Wolfgang Preiss, Gert Fröbe",
        synopsis: "Un journaliste est tué dans sa voiture sur la route de son travail. L'inspecteur Kras apprend de son informateur Cornelius, diseur de bonne aventure, qu'il voit le crime mais pas son coupable. Pendant ce temps, Henry Travers, riche industriel américain, s'installe à l'hôtel Luxor, aménagé par les nazis pendant la Seconde Guerre mondiale pour espionner les chambres. Il rencontre Marion Menil qui est menacée par son mari. Hieronymus B. Mistelzweig, supposé représentant, qui est également logé à l'hôtel, semble toujours sur ses gardes. Ces différents personnages devront s'unir pour éclaircir l'apparent retour du Dr Mabuse, disparu depuis longtemps...",
        avis: "Le dernier volet de la trilogie de Fritz Lang."
    },
    5110: { 
        titre: "Le Hobbit : un voyage inattendu",
        image: "un_voyage_inattendu.jpg",
        genre: "fantastique, aventure",
        annee: "2012",
        realisateur: 'Peter Jackson',
        acteurs: "Martin Freeman, Ian McKellen, Richard Armitage, Cate Blanchett, Elijah Wood",
        synopsis: "Bilbon Sacquet cherche à reprendre le Royaume perdu des Nains d'Erebor, conquis par le redoutable dragon Smaug. Alors qu'il croise par hasard la route du magicien Gandalf le Gris, Bilbon rejoint une bande de 13 nains dont le chef n'est autre que le légendaire guerrier Thorin Écu-de-Chêne. Leur périple les conduit au cœur du Pays Sauvage, où ils devront affronter des Gobelins, des Orques, des Ouargues meurtriers, des Araignées géantes, des Métamorphes et des Sorciers…",
        avis: "Le premier volet de la trilogie du Hobbit."
    },
    5111: { 
        titre: "Le Hobbit : la désolation de Smaug",
        image: "la_desolation_de_smaug.jpg",
        genre: "fantastique, aventure",
        annee: "2013",
        realisateur: 'Peter Jackson',
        acteurs: "Martin Freeman, Ian McKellen, Richard Armitage, Cate Blanchett, Elijah Wood",
        synopsis: "Les aventures de Bilbon Sacquet, paisible hobbit, qui sera entraîné, lui et une compagnie de Nains, par le magicien Gandalf pour récupérer le trésor détenu par le dragon Smaug. Au cours de ce périple, il mettra la main sur l'anneau de pouvoir que possédait Gollum...",
        avis: "Le deuxième de la trilogie du Hobbit."
    },
    5112: { 
        titre: "Le Hobbit : la bataille des Cinq Armées",
        image: "la_bataille_des_cinq_armees.jpg",
        genre: "fantastique, aventure",
        annee: "2014",
        realisateur: 'Peter Jackson',
        acteurs: "Martin Freeman, Ian McKellen, Richard Armitage, Cate Blanchett, Elijah Wood",
        synopsis: "Atteignant enfin la Montagne Solitaire, Thorin et les Nains, aidés par Bilbon le Hobbit, ont réussi à récupérer leur royaume et leur trésor. Mais ils ont également réveillé le dragon Smaug qui déchaîne désormais sa colère sur les habitants de Lac-ville. A présent, les Nains, les Elfes, les Humains mais aussi les Wrags et les Orques menés par le Nécromancien, convoitent les richesses de la Montagne Solitaire. La bataille des cinq armées est imminente et Bilbon est le seul à pouvoir unir ses amis contre les puissances obscures de Sauron.",
        avis: "La fin de la trilogie du Hobbit."
    },
    5200: { 
        titre: "Le Monde Perdu : Jurassic Park",
        image: "le_monde_perdu.jpg",
        genre: "aventure, fantastique",
        annee: "1997",
        realisateur: 'Steven Spielberg',
        acteurs: "Jeff Goldblum, Julianne Moore, Pete Postlethwaite, Arliss Howard",
        synopsis: "Quatre ans après le terrible fiasco de son Jurassic Park, le milliardaire John Hammond rappelle le Dr Ian Malcolm pour l'informer de son nouveau projet. Sur une île déserte, voisine du parc, vivent en liberté des centaines de dinosaures de toutes tailles et de toutes espèces. Ce sont des descendants des animaux clônes en laboratoire. D'abord réticent, Ian se décide à rejoindre le docteur quand il apprend que sa fiancée fait partie de l'expédition scientifique. Il ignore qu'une autre expédition qui n'a pas les mêmes buts est également en route.",
        avis: "Les dinosaures sont toujours là pour notre plus grand plaisir."
    },
    5300: { 
        titre: "Le Monocle noir",
        image: "le_monocle_noir.jpg",
        genre: "policier",
        annee: "1961",
        realisateur: 'Georges Lautner',
        acteurs: "Paul Meurisse, Elga Andersen, Bernard Blier, Pierre Blanchar",
        synopsis: "Le marquis de Villemaur a décidé d'inviter d'étranges individus dans sa demeure, afin de leur faire rencontrer un rescapé du IIIe Reich. Ainsi, il réunit un Italien fasciste, Heinrich, un Allemand et Dromard, un Français ex-commandant aveugle qui porte un monocle noir.",
        avis: "Le premier épisode de la trilogie du Monocle."
    },
    5400: { 
        titre: "Le Monocle rit jaune",
        image: "le_monocle_rit_jaune.jpg",
        genre: "espionnage, comédie",
        annee: "1964",
        realisateur: 'Georges Lautner',
        acteurs: "Paul Meurisse, Robert Dalban, Marcel Dalio, Olivier Despax",
        synopsis: "Après une vague d'attentats visant des centrales atomiques, le commandant Dromard, des services secrets français, est envoyé à Hong Kong sur les traces d'un suspect, Bergourian. Il se lance à la poursuite d'un gang de terroristes asiatiques qui projetent de faire exploser un porte avion nucléaire américain.",
        avis: "La fin de la trilogie du Monocle."
    },
    5500: { 
        titre: "Le mystère de la chambre jaune",
        image: "le_mystere_de_la_chambre_jaune.jpg",
        genre: "policier",
        annee: "2003",
        realisateur: 'Bruno Podalydès',
        acteurs: "Denis Podalydès, Pierre Arditi, Claude Rich, Sabine Azéma, Michael Lonsdale, Jean-Noël Brouté, Olivier Gourmet",
        synopsis: "À la suite de la tentative d'assassinat de la belle Mathilde, fille du célèbre Professeur Stangerson, le jeune reporter Joseph Rouletabille, accompagné de son ami et photographe Sainclair, se rend au château du Glandier pour élucider le mystère.",
        avis: "Une adaptation sympathique du roman de Gaston Leroux."
    },
    5600: { 
        titre: "Le parfum de la dame en noir",
        image: "le_parfum_de_la_dame_en_noir.jpg",
        genre: "policier",
        annee: "2005",
        realisateur: 'Bruno Podalydès',
        acteurs: "Denis Podalydès, Pierre Arditi, Claude Rich, Sabine Azéma, Michael Lonsdale, Jean-Noël Brouté, Olivier Gourmet, Zabou Breitman, Vincent Elbaz",
        synopsis: "Joseph Rouletabille est hanté par une femme qui venait lui rendre visite, enfant, au pensionnat et dont il conserve le souvenir obsédant du parfum. Tandis qu'il s'en ouvre à Sainclair, son fidèle acolyte, il apprend que son amie Mathilde Stangerson convolant en voyage de noces avec son mari Robert Darzac, est en danger. Il s'empresse de la rejoindre, craignant le retour de l'illusioniste et intrépide Ballmeyer.",
        avis: "La suite du mystère de la chambre jaune. Toujours aussi sympathique."
    },
    5650: { 
        titre: "Le Pas Petit Poucet",
        image: "le_pas_petit_poucet.jpg",
        genre: "téléfilm, comédie",
        annee: "2010",
        realisateur: 'Christophe Campos',
        acteurs: "Omar Sy, Fred Testot, Jonathan Lambert, Fanny Valette, Julie Ferrier, Pio Marmaï, Vincent Desagnat",
        synopsis: "L'adaptation déjantée du conte Le petit Poucet.",
        avis: "Omar et Fred. Délirant."
    },
    5700: { 
        titre: "Le projet Blair Witch",
        image: "le_projet_blair_witch.jpg",
        genre: "épouvante - horreur",
        annee: "1999",
        realisateur: 'Daniel Myrick et Eduardo Sanchez',
        acteurs: "Heather Donahue, Joshua Leonard, Michael C. Williams, Bob Griffith",
        synopsis: "En octobre 1994, trois jeunes cineastes, Heather Donahue, Joshua Leonard et Michael Williams, disparaissent en randonnee dans la foret de Black Hill au cours d'un reportage sur la sorcellerie. Un an plus tard, on a retrouve le film de leur enquete.",
        avis: "Le premier film de genre 'Found footage'."
    },
    5800: { 
        titre: "Le Roi et l'Oiseau",
        image: "le_roi_et_l_oiseau.jpg",
        genre: "animation",
        annee: "1980",
        realisateur: 'Paul Grimault',
        acteurs: "Anouk Aimée, Serge Reggiani, Pierre Brasseur, Fernand Ledoux",
        synopsis: "Le Roi Charles V et Trois font Huit et Huit font Seize règne en tyran sur le royaume de Takicardie. Seul un Oiseau, enjoué et bavard, qui a construit son nid en haut du gigantesque palais, tout près des appartements secrets de Sa Majesté, ose le narguer. Le Roi est amoureux d’une charmante et modeste Bergère qu’il veut épouser sous la contrainte. Mais celle-ci aime un petit Ramoneur. Tous deux s’enfuient pour échapper au Roi...",
        avis: "Des Dialogues de Jacques Prévert. Merveilleux."
    },
    5900: { 
        titre: "Le Roi Lion",
        image: "le_roi_lion.jpg",
        genre: "animation, aventure",
        annee: "1994",
        realisateur: 'Roger Allers et Rob Minkoff',
        acteurs: "Matthew Broderick, James Earl Jones, Jeremy Irons, Nathan Lane, Rowan Atkinson, Woopi Goldberg",
        synopsis: "Sur les Hautes terres d’Afrique règne un lion tout-puissant, le roi Mufasa, que tous les hôtes de la jungle respectent et admirent pour sa sagesse et sa générosité. Son jeune fils Simba sait qu’un jour il lui succèdera, conformément aux lois universelles du cycle de la vie, mais il est loin de deviner les épreuves et les sacrifices que lui imposera l’exercice du pouvoir.",
        avis: "LE classique des films Disney."
    },
    6000: { 
        titre: "Le Seigneur des anneaux : la communauté de l'anneau",
        image: "le_seigneur_des_anneaux.jpg",
        genre: "fantastique, aventure",
        annee: "2001",
        realisateur: 'Peter Jackson',
        acteurs: "Elijah Wood, Ian McKellen, Sean Astin, Viggo Mortensen, Andy Serkis, Orlando Bloom, Cate Blanchett, Liv Tyler",
        synopsis: "Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau. Bien loin d'être une simple babiole, il s'agit de l'Anneau Unique, un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. À moins que Frodon, aidé d'une Compagnie constituée de Hobbits, d'Hommes, d'un Magicien, d'un Nain, et d'un Elfe, ne parvienne à emporter l'Anneau à travers la Terre du Milieu jusqu'à la Crevasse du Destin, lieu où il a été forgé, et à le détruire pour toujours.",
        avis: "Le début de la trilogie. Grandiose."
    },
    6100: { 
        titre: "Le Seigneur des anneaux : les deux tours",
        image: "les_deux_tours.jpg",
        genre: "fantastique, aventure",
        annee: "2001",
        realisateur: 'Peter Jackson',
        acteurs: "Elijah Wood, Ian McKellen, Sean Astin, Viggo Mortensen, Andy Serkis, Orlando Bloom, Cate Blanchett, Liv Tyler",
        synopsis: "Après la mort de Boromir et la disparition de Gandalf, la Communauté s'est scindée en trois. Perdus dans les collines d'Emyn Muil, Frodon et Sam découvrent qu'ils sont suivis par Gollum, une créature versatile corrompue par l'Anneau. Celui-ci promet de conduire les Hobbits jusqu'à la Porte Noire du Mordor.",
        avis: "Le deuxième volet de la trilogie. Grandiose."
    },
    6200: { 
        titre: "Le Seigneur des anneaux : le retour du roi",
        image: "le_retour_du_roi.jpg",
        genre: "fantastique, aventure",
        annee: "2001",
        realisateur: 'Peter Jackson',
        acteurs: "Elijah Wood, Ian McKellen, Sean Astin, Viggo Mortensen, Andy Serkis, Orlando Bloom, Cate Blanchett, Liv Tyler",
        synopsis: "Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n'a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d'accomplir sa destinée ?",
        avis: "La fin de la trilogie. Grandiose."
    },
    6300: { 
        titre: "Le septième juré",
        image: "le_septieme_jure.jpeg",
        genre: "drame",
        annee: "1962",
        realisateur: 'Georges Lautner',
        acteurs: "Bernard Blier, Danièle Delorme, René Tramoni, Paloma Matta",
        synopsis: "Dans un élan de folie inexpliqué, Duval, un homme sans histoire, étrangle une jeune femme. La Justice accuse un innoncent de ce meurtre et le véritable assassin se retrouve juré au procès de son propre crime. Une fois le jugement rendu et l'homme acquitté, Duval va se livrer à la police afin de puger la peine qu'il mérite, mais les notables de la ville refusent de poursuivre l'un des leurs... Il va alors commetre l'irréparable pour obtenir enfin une sentence.",
        avis: "Bernard Blier épatant.."
    },
    6400: { 
        titre: "Le testament du Docteur Mabuse",
        image: "le_testament_du_docteur_mabuse.jpg",
        genre: "drame, fantastique",
        annee: "1932",
        realisateur: 'Fritz Lang',
        acteurs: "Oscar Beregi, Rudolf Klein-Rogge, Paul Bernd, Henry Pless",
        synopsis: "Alors que le Docteur Mabuse est interné dans un asile psychiatrique, un gang de malfaiteurs sévit.",
        avis: "Le scénario est incroyable pour l'époque."
    },
    6500: { 
        titre: "Le tombeau des lucioles",
        image: "le_tombeau_des_lucioles.jpg",
        genre: "animation, drame",
        annee: "1988",
        realisateur: 'Isao Takahata',
        acteurs: "Yoshiko Shinohara, Ayano Shiraishi, Tsutomu Tatsumi, Akemi Yamaguchi",
        synopsis: "Japon, été 1945. Après le bombardement de Kobé, Seita, un adolescent de quatorze ans et sa petite soeur de quatre ans, Setsuko, orphelins, vont s'installer chez leur tante à quelques dizaines de kilomètres de chez eux. Celle-ci leur fait comprendre qu'ils sont une gêne pour la famille et doivent mériter leur riz quotidien. Seita décide de partir avec sa petite soeur. Ils se réfugient dans un bunker désaffecté en pleine campagne et vivent des jours heureux illuminés par la présence de milliers de lucioles. Mais bientôt la nourriture commence cruellement à manquer.",
        avis: "..."
    },
    6600: { 
        titre: "Le vieux fusil",
        image: "le_vieux_fusil.jpg",
        genre: "drame, guerre, thriller",
        annee: "1975",
        realisateur: 'Robert Enrico',
        acteurs: "Philippe Noiret, Romy Schneider, Jean Bouise, Joachim Hansen",
        synopsis: "Peu après le débarquement de Normandie, en juin 1944, l'histoire d'un médecin vengeant la mort de sa femme et de sa fille, sauvagement assassinées par un détachement de soldats SS stationnés dans le château du petit hameau où elles s'étaient réfugiées.",
        avis: "Philippe Noiret - Romy Schneider"
    },
    6700: { 
        titre: "Léon",
        image: "leon.jpg",
        genre: "policier, drame",
        annee: "1994",
        realisateur: 'Luc Besson',
        acteurs: "Jean Reno, Natalie Portman, Gary Oldman, Danny Aiello",
        synopsis: "Un tueur à gages répondant au nom de Léon prend sous son aile Mathilda, une petite fille de douze ans, seule rescapée du massacre de sa famille. Bientôt, Léon va faire de Mathilda une 'nettoyeuse', comme lui.",
        avis: "Natalie Portmann toute jeune aux côtés de Jean Réno et Gary Oldman dans le rôle d'un flic pourri."
    },
    6800: { 
        titre: "Les assassins de l'ordre",
        image: "les_assassins_de_l_ordre.jpg",
        genre: "drame",
        annee: "1971",
        realisateur: 'Marcel Carné',
        acteurs: "Jacques Brel, Didier Haudepin, Paola Pitagora, Michael Lonsdale",
        synopsis: "Soupçonné d'avoir participé à un cambriolage, Michel Saugeat est arrêté et meurt juste après son interrogatoire. Convaincue qu'il a été battu sauvagement durant sa détention, sa femme porte plainte. Envers et contre tout, avec l'aide du juge Level, elle tentera de faire éclater la vérité.",
        avis: "Marcel Carné - Jacques Brel"
    },
    6900: { 
        titre: "Les bronzés",
        image: "les_bronzes.jpg",
        genre: "comédie",
        annee: "1978",
        realisateur: 'Patrice Leconte',
        acteurs: "Christian Clavier, Thierry Lhermitte, Michel Blanc, Marie-Anne Chazel, Gérard Jugnot, Josiane Balasko, Luis Rego, Dominique Lavanant, Michel Creton, Martin Lamotte, Bruno Moynot",
        synopsis: "Un groupe de vingt personnes arrive extenué dans un club situé en Afrique pour passer quelques jours de repos. Et ils sont bien décidés a rentabiliser au maximum leurs vacances. C'est ainsi que nous suivrons les aventures tragi-comiques de la colérique Nathalie, de Gigi, de Jerôme le sûr-de-lui, Christiane, le malchanceux Jean-Claude, et bien-sûr celles des G.O (gentils organisateurs). Nouvelles rencontres, liaisons momentanées, petits et grands drames seront au programme...",
        avis: "Le Splendid"
    },
    7000: { 
        titre: "Les bronzés font du ski",
        image: "les_bronzes_font_du_ski.jpg",
        genre: "comédie",
        annee: "1979",
        realisateur: 'Patrice Leconte',
        acteurs: "Christian Clavier, Thierry Lhermitte, Michel Blanc, Marie-Anne Chazel, Gérard Jugnot, Josiane Balasko, Dominique Lavanant, Maurice Chevit, Bruno Moynot",
        synopsis: "Après le Club méditerranée, la joyeuse troupe d'amis (plus connu sous le nom Des Bronzés) se retrouvent aux sports d'hiver. Ils vivront encore d'autres problèmes sentimentaux, et mésaventures. L'équipe ira même se perdre en montagne.",
        avis: "Culte"
    },
    7100: { 
        titre: "Les diaboliques",
        image: "les_diaboliques.jpg",
        genre: "drame, thriller",
        annee: "1955",
        realisateur: 'Henri-Georges Clouzot',
        acteurs: "Simone signoret, Véra Clouzot, Paul Meurisse, Charles Vanel",
        synopsis: "Dans une institution destinée à l'éducation des jeunes garçons, Christina et Nicole, respectivement épouse et maîtresse du directeur Michel Delasalle, s'associent afin d'assassiner l'homme qu'ells ont fini par haïr. Mais quelques jours après leur méfait, le corps de Michel disparaît...",
        avis: "Pas besoin de grands effets spéciaux pour créer de la tension."
    },
    7200: { 
        titre: "Les enfants du marais",
        image: "les_enfants_du_marais.jpg",
        genre: "comédie dramatique",
        annee: "1999",
        realisateur: 'Jean Becker',
        acteurs: "Jacques Villeret, Jacques Gamblin, André Dussollier, Michel Serrault, Isabelle Carré, Eric Cantona, Marlène Baffier, Suzanne Flon",
        synopsis: "'On est des gagne-misère, mais on n'est pas des peigne-culs', telle est la philosophie de Garris, homme simple, généreux et quelque peu poête qui vit au bord d'un étang avec son ami Riton, qui élève trois enfants turbulents issus de son second mariage. Riton, de temps en temps, noie son chagrin dans le vin rouge pour tenter d'oublier sa première femme et grand amour. Autour d'eux il y a également Amédée, un rêveur passionné de lecture, Pépé, un ancien du marais devenu riche et Tane, le conducteur du petit train local. Un jour, Garris rencontre une jeune femme, Marie.",
        avis: "La France rurale de l'entre-deux-guerres avec des acteur formidables."
    },
    7300: { 
        titre: "Les enfants du paradis",
        image: "les_enfants_du_paradis.jpg",
        genre: "drame, romance",
        annee: "1945",
        realisateur: 'Marcel Carné',
        acteurs: "Arletty, Jean-Louis Barrault, Maria Casarès, Pierre Brasseur, Marcel Herrand, Pierre Renoir",
        synopsis: "Paris, 1828. Sur le boulevard du Crime, au milieu de la foule, des acteurs et des bateleurs, le mime Baptiste Deburau, par son témoignage muet, sauve Garance d'une erreur judiciaire. C'est ici que commencent les amours contrariées de Garance, femme libre et audacieuse, et de Baptiste qu'elle intimide et qui n'ose lui déclarer sa flamme. Mais aussi ceux de Nathalie, la fille du directeur du théâtre, qui aime Baptiste, et Frédérick Lemaître, un jeune acteur prometteur, qui entame une liaison avec Garance, tandis que cette dernière aime aussi Baptiste en secret.",
        avis: "Les dialogues de Jacques Prévert pour un chef-d'oeuvre absolu."
    },
    7400: { 
        titre: "Les huit salopards",
        image: "les_huit_salopards.jpg",
        genre: "western",
        annee: "2015",
        realisateur: 'Quentin Tarantino',
        acteurs: "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins, Damian Bichir, Tim Roth, Michael Madsen, Bruce Dern, Channing Tatum",
        synopsis: "Quelques années après la Guerre de Sécession, le chasseur de primes John Ruth, dit Le Bourreau, fait route vers Red Rock, où il conduit sa prisonnière Daisy Domergue se faire pendre. Sur leur route, ils rencontrent le Major Marquis Warren, un ancien soldat lui aussi devenu chasseur de primes, et Chris Mannix, le nouveau shérif de Red Rock. Surpris par le blizzard, ils trouvent refuge dans une auberge au milieu des montagnes, où ils sont accueillis par quatre personnages énigmatiques : le confédéré, le mexicain, le cowboy et le court-sur-pattes.",
        avis: "Du pur Tarantino : dialogues, violence, musique."
    },
    7500: { 
        titre: "Les poings contre les murs",
        image: "les_poings_contre_les_murs.jpg",
        genre: "drame",
        annee: "2014",
        realisateur: 'David Mackenzie',
        acteurs: "Jack O'Connell, Rupert Friend, Ben Mendelsohn, Sam Spruell, Anthony Welsh",
        synopsis: "Eric est un jeune délinquant violent prématurément jeté dans le monde sinistre d’une prison pour adultes. Alors qu’il lutte pour s’affirmer face aux surveillants et aux autres détenus, il doit également se mesurer à son propre père, Nev, un homme qui a passé la majeure partie de sa vie derrière les barreaux. Eric, avec d’autres prisonniers, apprend à vaincre sa rage et découvre de nouvelles règles de survie, mais certaines forces sont à l’œuvre et menacent de le détruire..",
        avis: "L'univers carcéral."
    },
    7600: { 
        titre: "Les tontons flingueurs",
        image: "les_tontons_flingueurs.jpg",
        genre: "comédie, policier",
        annee: "1963",
        realisateur: 'Georges Lautner',
        acteurs: "Lino Ventura, Bernard Blier, Francis Blanche, Sabine Sinjen, Claude Rich, Robert Dalban, Jean Lefebvre",
        synopsis: "Propriétaire d'une petite usine de tracteurs, Fernand Naudin mène une vie tranquille et sans histoire quand un télégramme l'appelle à Paris. Il arrive à temps pour recueillir le dernier soupir d'un ami de jeunesse, Louis dit « le Mexicain », qui lui confie ses affaires louches en même temps que la garde de sa fille Patricia. Et les ennuis commencent...",
        avis: "Les dialogues de Michel Audiard. Un régal."
    },
    7700: { 
        titre: "Les trois frères",
        image: "les_trois_freres.jpg",
        genre: "comédie",
        annee: "1995",
        realisateur: 'Bernard Campan et Didier Bourdon',
        acteurs: "Didier Bourdon, Pascal Légitimus, Bernard Campan, Antoine du Merle",
        synopsis: "Le même jour, trois hommes découvrent qu'ils sont frères et héritent de 3 millions. Mais dix jours plus tard, l'héritage est détourné... et la galère commence pour trois frères qui n'ont que faire d'être frères.",
        avis: "Les dialogues de Michel Audiard. Un régal."
    },
    7800: { 
        titre: "M le Maudit",
        image: "m_le_maudit.jpg",
        genre: "policier, thriller",
        annee: "1931",
        realisateur: 'Fritz Lang',
        acteurs: "Peter Lorre, Ellen Widmann, Inge Landgut, Otto Wernicke",
        synopsis: "Toute la presse ne parle que de ça : le maniaque tueur d’enfants, qui terrorise la ville depuis quelques temps, vient de faire une nouvelle victime. Chargé de l’enquête, le commissaire Lohmann multiplie les rafles dans les bas-fonds. Gênée par toute cette agitation la pègre décide de retrouver elle-même le criminel : elle charge les mendiants et les clochards de surveiller chaque coin de rue…",
        avis: "Classique."
    },
    7900: { 
        titre: "Mulholland Drive",
        image: "mulholland_drive.jpg",
        genre: "fantastique, thriller, drame",
        annee: "2001",
        realisateur: 'David Lynch',
        acteurs: "Naomi Watts, Laura Harring, Justin Theroux, Ann Miller",
        synopsis: "A Hollywood, durant la nuit, Rita, une jeune femme, devient amnésique suite à un accident de voiture sur la route de Mulholland Drive. Elle fait la rencontre de Betty Elms, une actrice en devenir qui vient juste de débarquer à Los Angeles. Aidée par celle-ci, Rita tente de retrouver la mémoire ainsi que son identité.",
        avis: "David Lynch - Naomi Watts."
    },
    8000: { 
        titre: "Ne nous fâchons pas",
        image: "ne_nous_fachons_pas.jpg",
        genre: "comédie, policier",
        annee: "1966",
        realisateur: 'Georges Lautner',
        acteurs: "Lino Ventura, Jean Lefebvre, Michel Constantin, Mireille Darc",
        synopsis: "A Hollywood, durant la nuit, Rita, une jeune femme, devient amnésique suite à un accident de voiture sur la route de Mulholland Drive. Elle fait la rencontre de Betty Elms, une actrice en devenir qui vient juste de débarquer à Los Angeles. Aidée par celle-ci, Rita tente de retrouver la mémoire ainsi que son identité.",
        avis: "Une géniale comédie des années 60."
    },
    8050: { 
        titre: "Once Upon a Time... in Hollywood",
        image: "once.jpg",
        genre: "drame, comédie",
        annee: "2019",
        realisateur: 'Quentin Tarantino',
        acteurs: "Leonardo DiCaprio, Brad Pitt, Margot Robbie, Al Pacino",
        synopsis: "En 1969, la star de télévision Rick Dalton et le cascadeur Cliff Booth, sa doublure de longue date, poursuivent leurs carrières au sein d’une industrie qu’ils ne reconnaissent plus.",
        avis: "Bande-son, dialogues, violence. Du grand Tarantino."
    },
    8100: { 
        titre: "Peter Pan",
        image: "peter_pan.jpg",
        genre: "animation",
        annee: "1953",
        realisateur: 'Hamilton Luske, Clyde Geronimi et Wilfred Jackson',
        acteurs: "Bobby Driscoll, Kathryn Beaumont, Hans Conried, Bill Thompson",
        synopsis: "Wendy devient une grande fille. Aussi passe-t-elle sa derniere nuit dans la nursery avec ses jeunes freres. C'est cette nuit-la que Peter Pan choisit pour les entrainer dans un grand voyage au pays imaginaire.",
        avis: "Magique."
    },
    8150: { 
        titre: "Pour une poignée de dollars",
        image: "poignee.jpg",
        genre: "western",
        annee: "1964",
        realisateur: 'Sergio Leone',
        acteurs: "Clint Eastwood, Gian Maria Volonte, Marianne Koch, Wolfgang Lukschy",
        synopsis: "Deux bandes rivales, les Baxter, trafiquants d'armes, et les Rojo, qui font de la contrebande d'alcool, se disputent la suprématie et la domination de la ville de San Miguel, au sud de la frontière américano-mexicaine. Un étranger, vêtu d'un poncho, arrive à dos de mulet dans cette petite ville et s'immisce entre les deux bandes. Proposant d'abord ses services aux Rojo, l'étranger va très vite tirer profit des deux camps à la fois, à la grande joie du fabricant de cercueils Piripero.",
        avis: "Le premier film de la trilogie du dollar."
    },
    8200: { 
        titre: "Pulp Fiction",
        image: "pulp_fiction.jpg",
        genre: "policier, thriller",
        annee: "1994",
        realisateur: 'Quentin Tarantino',
        acteurs: "John Travolta, Samuel L. Jackson, Bruce Willis, Uma Thurman, Ving Rhames, Harvey Keitel, Tim Roth, Amanda Plummer",
        synopsis: "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent.",
        avis: "Tarantino"
    },
    8300: { 
        titre: "Rabia",
        image: "rabia.jpg",
        genre: "thriller",
        annee: "2009",
        realisateur: 'Sebastian Cordero',
        acteurs: "Martina Garcia, Gustavo Sanchez Parra, Concha Velasco, Xabier Elorriaga",
        synopsis: "Madrid. Rosa et José-Maria, immigrés sud-américains viennent de se rencontrer lorsque ce dernier provoque la mort de son chef de chantier. Il doit alors se cacher et trouve refuge à l'insu de tous dans la grande maison bourgeoise où Rosa est employée comme domestique. Rosa malgré elle va devenir le centre de tous les fantasmes.",
        avis: "Très bin film mexicain."
    },
    8400: { 
        titre: "[REC]",
        image: "rec.jpg",
        genre: "épouvante - horreur",
        annee: "2007",
        realisateur: 'Paco Plaza, Jaume Balaguero',
        acteurs: "Manuela Velasco, Pablo Rosso, Ferran Terraza, Jorge-Yamam Serrano",
        synopsis: "Angéla est journaliste pour une télévision locale. Accompagnée de son caméraman, elle relate le quotidien de ceux qui travaillent la nuit. Ce soir, elle est dans une caserne de pompiers. La nuit est calme, aucune urgence. Jusqu'au coup de fil d'une vieille dame qui réclame du secours. Le tandem suit les pompiers et découvre en arrivant sur place des voisins très inquiets. D'horribles cris ont été entendus dans l'appartement de la vieille dame. Angéla perçoit la tension des habitants, son reportage devrait enfin sortir de la routine... Elle n'imagine pas à quel point !",
        avis: "Un film d'horreur façon 'Found footage' très réussi."
    },
    8500: { 
        titre: "Rencontre avec Joe Black",
        image: "rencontre_avec_joe_black.jpg",
        genre: "fantastique, drame, romance",
        annee: "1998",
        realisateur: 'Martin Brest',
        acteurs: "Brad Pitt, Anthony Hopkins, Claire Forlani, Jake Weber",
        synopsis: "Une nuit le magnat William Parrish ressent une violente douleur tandis qu'une voix surgissant des tenebres lui annonce sa mort prochaine. A ce moment-la, un jeune inconnu se presente a son domicile pour l'accompagner a son dernier voyage. Ce messager de l'au-dela impose a Parrish de l'heberger chez lui afin de lui donner l'occasion de partager un temps les experiences, les joies, les emotions et les drames des vivants, qui semblent lui etre etrangers. En l'espace de trois jours, Joe Black révèlera toute la famille Parrish a elle-même.",
        avis: "Très beau film."
    },
    8600: { 
        titre: "Retour vers le futur",
        image: "retour_vers_le_futur.jpg",
        genre: "science-fiction, aventure",
        annee: "1985",
        realisateur: 'Robert Zemeckis',
        acteurs: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
        synopsis: "1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955.",
        avis: "Culte."
    },
    8700: { 
        titre: "Retour vers le futur II",
        image: "retour_vers_le_futur_2.jpg",
        genre: "science-fiction, aventure",
        annee: "1989",
        realisateur: 'Robert Zemeckis',
        acteurs: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Thomas F. Wilson",
        synopsis: "Lors de son premier voyage en 1985, Marty a commis quelques erreurs. L'avenir qu'il s'était tracé n'est pas si rose, et son rejeton est tombé sous la coupe du voyou Griff Tannen, qui veut régner sur la ville. En compagnie de son ami Emmett 'Doc' Brown et de sa fiancée Jennifer, Marty va devoir entreprendre un voyage vers le futur, pour tenter de donner un peu plus de moralité à son héritier. Un voyage aux conséquences dramatiques...",
        avis: "Culte."
    },
    8800: { 
        titre: "Retour vers le futur III",
        image: "retour_vers_le_futur_3.jpg",
        genre: "science-fiction, aventure",
        annee: "1990",
        realisateur: 'Robert Zemeckis',
        acteurs: "Michael J. Fox, Christopher Lloyd, Mary Steenburgen, Thomas F. Wilson, Lea Thompson",
        synopsis: "Après son voyage mouvementé entre passé, présent et futur, Marty McFly apprend par une lettre vieille de cent ans que son vieil ami Emmett 'Doc' Brown se serait crashé en 1880 au volant de sa DeLorean, restant ainsi prisonnier du far-west, sous la menace de Buford 'Molosse' Tannen qui s'est juré de le tuer. Il n'a que cinq jours pour retrouver Doc et le ramener vivant vers le présent...",
        avis: "Culte."
    },
    8900: { 
        titre: "Rogue One : A Star Wars Story",
        image: "rogue_one.jpg",
        genre: "science-fiction, aventure",
        annee: "2016",
        realisateur: 'Gareth Edwards',
        acteurs: "Felicity Jones, Diego Luna, Donnie Yen, Ben Mendelsohn",
        synopsis: "Situé entre les épisodes III et IV de la saga Star Wars, le film nous entraîne aux côtés d’individus ordinaires qui, pour rester fidèles à leurs valeurs, vont tenter l’impossible au péril de leur vie. Ils n’avaient pas prévu de devenir des héros, mais dans une époque de plus en plus sombre, ils vont devoir dérober les plans de l’Étoile de la Mort, l’arme de destruction ultime de l’Empire.",
        avis: "Un superbe épisode de la saga."
    },
    9000: { 
        titre: "RRRrrrr !!!",
        image: "rrr.jpg",
        genre: "comédie",
        annee: "2003",
        realisateur: 'Alain Chabat',
        acteurs: "Felicity Jones, Diego Luna, Donnie Yen, Ben Mendelsohn",
        synopsis: "Il y a 37 000 ans, deux tribus voisines vivaient en paix... à un cheveu près. Pendant que la tribu des Cheveux Propres coulait des jours paisibles en gardant pour elle seule le secret de la formule du shampooing, la tribu des Cheveux Sales se lamentait. Son chef décida d'envoyer un espion pour voler la recette. Mais un événement bien plus grave allait bouleverser la vie des Cheveux Propres : pour la première fois dans l'histoire de l'humanité, un crime venait d'être commis. Comment découvrir son auteur ?",
        avis: "Les Robins des Bois."
    },
    9100: { 
        titre: "Santa & Cie",
        image: "santa.jpg",
        genre: "comédie",
        annee: "2017",
        realisateur: 'Alain Chabat',
        acteurs: "Alain Chabat, Pio Marmaï, Golshifteh Farahani, Bruno Sanches, Audrey Tautou, Jean-Pierre Bacri, Patrick Timsit",
        synopsis: "Rien ne va plus à l'approche du réveillon : les 92 000 lutins chargés de fabriquer les cadeaux des enfants tombent tous malades en même temps ! C'est un coup dur pour Santa (Claus), plus connu sous le nom de Père Noël... il n'a pas le choix : il doit se rendre d'urgence sur Terre avec ses rennes pour chercher un remède. À son arrivée, il devra trouver des alliés pour l'aider à sauver la magie de Noël.",
        avis: "Un très bon film de Noël."
    },
    9200: { 
        titre: "Scarface",
        image: "scarface.jpg",
        genre: "action, drame",
        annee: "1983",
        realisateur: 'Brian De Palma',
        acteurs: "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        synopsis: "En 1980, Tony 'Scarface' Montana bénéficie d'une amnistie du gouvernement cubain pour retourner en Floride. Ambitieux et sans scrupules, il élabore un plan pour éliminer un caïd de la pègre et prendre la place qu'il occupait sur le marché de la drogue.",
        avis: "'The world is yours.'"
    },
    9300: { 
        titre: "Scream",
        image: "scream.jpg",
        genre: "épouvante - horreur",
        annee: "1996",
        realisateur: 'Wes Craven',
        acteurs: "Neve Campbell, David Arquette, Courteney Cox, Rose McGowan, drew Barrymore",
        synopsis: "Casey Becker, une belle adolescente, est seule dans la maison familiale. Elle s'apprête à regarder un film d'horreur, mais le téléphone sonne. Au bout du fil, un serial killer la malmène, et la force à jouer à un jeu terrible : si elle répond mal à ses questions portant sur les films d'horreur, celui-ci tuera son copain...",
        avis: "Le premier film de la série consacrée au tueur au masque dans un campus universitaire."
    },
    9400: { 
        titre: "Scream 2",
        image: "scream_2.jpg",
        genre: "épouvante - horreur",
        annee: "1997",
        realisateur: 'Wes Craven',
        acteurs: "Neve Campbell, David Arquette, Courteney Cox, Sarah Michelle Gellar",
        synopsis: "Phil Stevens et sa copine Maureen Evans sortent ensemble voir en avant-première le film 'Stab', inspirée de la tuerie de la ville de Woodsboro l'année précédente. Le public porte d'ailleurs en grande partie le costume du tueur. Mais parmi les fans déchaînés se cachent un nouvel assassin, qui poignarde devant toute l'audience la pauvre Maureen...",
        avis: "Le deuxième film de la quadrilogie."
    },
    9500: { 
        titre: "Scream 3",
        image: "scream_3.jpg",
        genre: "épouvante - horreur",
        annee: "2000",
        realisateur: 'Wes Craven',
        acteurs: "Neve Campbell, David Arquette, Courteney Cox, Patrick Dempsey",
        synopsis: "Cotton Weary, l'un des survivants de la tuerie de la fac de Windsor, rentre tranquillement chez lui après avoir terminé le tournage de l'émission quotidienne qu'il anime. Le téléphone sonne. Au bout du fil, une fan... qui s'avère être un dangereux tueur, prêt à tout pour retrouver la trace de Sydney Prescott.",
        avis: "Le troisième film de la quadrilogie."
    },
    9600: { 
        titre: "Scream 4",
        image: "scream_4.jpg",
        genre: "épouvante - horreur",
        annee: "2011",
        realisateur: 'Wes Craven',
        acteurs: "Neve Campbell, David Arquette, Courteney Cox, Emma Roberts",
        synopsis: "10 ans se sont écoulés depuis les terribles meurtres commis par Ghostface. Sidney Prescott est parvenue à tourner la page mais c’est tout de même avec appréhension qu’elle retourne à Woodsboro pour le lancement de son premier roman. Ses retrouvailles avec sa cousine Jill ainsi qu’avec le duo de choc Dewey et Gale seront de courtes durées : Ghostface est de retour mais cette fois-ci les règles vont changer.",
        avis: "Le dernier film de la quadrilogie."
    },
    9700: { 
        titre: "Se souvenir des belles choses",
        image: "se_souvenir.jpg",
        genre: "drame, romance",
        annee: "2001",
        realisateur: 'Zabou Breitman',
        acteurs: "Isabelle Carré, Bernard Campan, Bernard Le Coq, Zabou, Anne Le Ny, Dominique Pinon",
        synopsis: "Nathalie conduit sa soeur cadette Claire, une jeune femme réservée d'une trentaine d'années, dans un centre pour amnésiques appelé 'Aux écureuils'. Celle-ci a reçu un coup de foudre en forêt et présente de légers troubles de la mémoire. Le centre 'Les Ecureuils' a accueilli quelques années auparavant leur mère, décédée jeune de la maladie d'Alzheimer. Claire pénètre au sein d'un univers curieux et décalé. Elle y fait la connaissance de Philippe, un homme de quarante ans qui a perdu la mémoire à la suite d'un accident de voiture qui a coûté la vie à sa femme et son fils. Tous deux tombent amoureux l'un de l'autre.",
        avis: "Des acteurs magnifiques."
    },
    9800: { 
        titre: "Sept ans de réflexion",
        image: "sept_ans_de_reflexion.jpg",
        genre: "action, drame",
        annee: "1955",
        realisateur: 'Billy Wilder',
        acteurs: "Marilyn Monroe, Tom Ewell, Evelyn Keyes, Sonny Tufts",
        synopsis: "Richard Sherman, un publiciste, vient de déposer à la gare sa femme et ses enfants. Il prévoit de rester seul pour les vacances d'été dans son appartement new-yorkais. Après sept ans de mariage, il fantasme allègrement sur les filles qu'il rêve de séduire. Sa solitude va vite être troublée par sa charmante voisine blonde du dessus. Il ne tarde pas à l'inviter chez lui pour prendre un verre.",
        avis: "Un classique."
    },
    9900: { 
        titre: "Seven",
        image: "seven.jpg",
        genre: "action, drame",
        annee: "1995",
        realisateur: 'David Fincher',
        acteurs: "Brad Pitt, Morgan Freeman, Kevin Spacey, Gwyneth Paltrow",
        synopsis: "Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
        avis: "Glaçant.."
    },
    9950: { 
        titre: "Solo : A Star Wars Story",
        image: "solo.jpg",
        genre: "science-fiction, fantastique",
        annee: "2018",
        realisateur: 'Ron Howard',
        acteurs: "Alden Ehrenreich, Emilia Clarke, Woody Harrelson, Donald Glover",
        synopsis: "Embarquez à bord du Faucon Millenium et partez à l’aventure en compagnie du plus célèbre vaurien de la galaxie. Au cours de périlleuses aventures dans les bas-fonds d’un monde criminel, Han Solo va faire la connaissance de son imposant futur copilote Chewbacca et croiser la route du charmant escroc Lando Calrissian… Ce voyage initiatique révèlera la personnalité d’un des héros les plus marquants de la saga Star Wars.",
        avis: "Un préquel basé sur Han Solo. Sympathique."
    },
    10000: { 
        titre: "Star Wars : Episode I - La Menace fantôme",
        image: "star_wars_1.jpg",
        genre: "science-fiction, aventure, fantastique",
        annee: "1999",
        realisateur: 'Georges Lucas',
        acteurs: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
        synopsis: "Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l’âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. Le maître Jedi Qui-Gon Jinn le découvre et entrevoit alors son immense potentiel.",
        avis: "Premier épisode de la trilogie prequel."
    },
    10100: { 
        titre: "Star Wars : Episode II - L'attaque des clones",
        image: "star_wars_2.jpg",
        genre: "science-fiction, aventure, fantastique",
        annee: "2002",
        realisateur: 'Georges Lucas',
        acteurs: "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee, Ian McDiamid, Samuel L. Jackson",
        synopsis: "Depuis le blocus de la planète Naboo par la Fédération du commerce, la République, gouvernée par le Chancelier Palpatine, connaît une véritable crise. Un groupe de dissidents, mené par le sombre Jedi comte Dooku, manifeste son mécontentement envers le fonctionnement du régime. Le Sénat et la population intergalactique se montrent pour leur part inquiets face à l'émergence d'une telle menace.",
        avis: "Deuxième épisode de la trilogie prequel."
    },
    10200: { 
        titre: "Star Wars : Episode III - La revanche des Sith",
        image: "star_wars_3.jpg",
        genre: "science-fiction, aventure, fantastique",
        annee: "2005",
        realisateur: 'Georges Lucas',
        acteurs: "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiamid, Samuel L. Jackson",
        synopsis: "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador.",
        avis: "Troisième épisode de la trilogie prequel avec une première scène à couper le souffle."
    },
    10300: { 
        titre: "Star Wars : Episode IV - Un nouvel espoir (La guerre des étoiles)",
        image: "star_wars_4.jpg",
        genre: "science-fiction, aventure",
        annee: "1977",
        realisateur: 'Georges Lucas',
        acteurs: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Anthony Daniels",
        synopsis: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi.",
        avis: "Le premier épisode. Mythique."
    },
    10400: { 
        titre: "Star Wars : Episode V - L'Empire contre-attaque",
        image: "star_wars_5.jpg",
        genre: "science-fiction, aventure",
        annee: "1980",
        realisateur: 'Irvin Kershner',
        acteurs: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels",
        synopsis: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi.",
        avis: "Le deuxième épisode. L'apparition de Yoda. La phrase culte."
    },
    10500: { 
        titre: "Star Wars : Episode VI - Le retour du Jedi",
        image: "star_wars_6.jpg",
        genre: "science-fiction, aventure",
        annee: "1983",
        realisateur: 'Richard Marquand',
        acteurs: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels",
        synopsis: "L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l'Etoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis.",
        avis: "Le troisième épisode de la trilogie originale."
    },
    10600: { 
        titre: "Star Wars : Episode VII - Le réveil de la Force",
        image: "star_wars_7.jpg",
        genre: "science-fiction, aventure",
        annee: "2015",
        realisateur: 'J.J. Abrams',
        acteurs: "Daisy Ridley, John Boyega, Oscar Isaac, Adam Driver, Harrison Ford, Carrie Fisher, Mark Hamill",
        synopsis: "Dans une galaxie lointaine, très lointaine, un nouvel épisode de la saga 'Star Wars', 30 ans après les événements du 'Retour du Jedi'.",
        avis: "Le premier épisode de la nouvelle trilogie."
    },
    10700: { 
        titre: "Star Wars : Episode VIII - Les derniers Jedi",
        image: "star_wars_8.jpg",
        genre: "science-fiction, aventure",
        annee: "2017",
        realisateur: 'Rian Johnson',
        acteurs: "Daisy Ridley, John Boyega, Oscar Isaac, Adam Driver, Mark Hamill, Carrie Fisher",
        synopsis: "Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de surprenantes révélations sur le passé…",
        avis: "Le deuxième épisode de la nouvelle trilogie."
    },
    10750: { 
        titre: "Star Wars : Episode IX - L'ascension de Skywalker",
        image: "star_wars_9.jpg",
        genre: "science-fiction, aventure",
        annee: "2019",
        realisateur: 'J. J. Abrams',
        acteurs: "Daisy Ridley, John Boyega, Oscar Isaac, Adam Driver, Mark Hamill, Carrie Fisher",
        synopsis: "La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.",
        avis: "La fin de la nouvelle trilogie."
    },
    10800: { 
        titre: "The Dark Knight, le Chevalier Noir",
        image: "the_dark_knight.jpg",
        genre: "action, thriller",
        annee: "2008",
        realisateur: 'Christopher Nolan',
        acteurs: "Christian Bale, Heath Ledger, Michael Caine, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, Morgan Freeman",
        synopsis: "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.",
        avis: "Le deuxième épisode de la trilogie de Christopher Nolan."
    },
    10900: { 
        titre: "The Dark Knight rises",
        image: "the_dark_knight_rises.jpg",
        genre: "action, thriller",
        annee: "2012",
        realisateur: 'Christopher Nolan',
        acteurs: "Christian Bale, Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, Morgan Freeman, Matthew Modine, Ben Mendelsohn, Liam Neeson",
        synopsis: "Il y a huit ans, Batman a disparu dans la nuit : lui qui était un héros est alors devenu un fugitif. S'accusant de la mort du procureur-adjoint Harvey Dent, le Chevalier Noir a tout sacrifié au nom de ce que le commissaire Gordon et lui-même considéraient être une noble cause. Et leurs actions conjointes se sont avérées efficaces pour un temps puisque la criminalité a été éradiquée à Gotham City grâce à l'arsenal de lois répressif initié par Dent.",
        avis: "Le dernier épisode de la trilogie de Christopher Nolan. Epoustouflant."
    },
    10930: { 
        titre: "The Mask",
        image: "the_mask.jpg",
        genre: "fantastique, comédie, action",
        annee: "1994",
        realisateur: 'Chuck Russell',
        acteurs: "Jim Carrey, Cameron Diaz, Peter Greene, Peter Riegert",
        synopsis: "Stanley Ipkiss, modeste employé de banque, passionné par l'univers de Tex Avery, trouve un masque ancien aux pouvoirs surnaturels. Il est néanmoins partagé entre devenir cette créature verte sûre d'elle ou rester le timide Stanley Ipkiss, incapable d'aborder la magnifique chanteuse de cabaret Tina Carlyle.",
        avis: "Génial."
    },
    10950: { 
        titre: "The Revenant",
        image: "the_revenant.jpg",
        genre: "western, aventure",
        annee: "2015",
        realisateur: 'Alejandro Gonzalez Inarritu',
        acteurs: "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, Will Poulter",
        synopsis: "Dans une Amérique profondément sauvage, Hugh Glass, un trappeur, est attaqué par un ours et grièvement blessé. Abandonné par ses équipiers, il est laissé pour mort. Mais Glass refuse de mourir. Seul, armé de sa volonté et porté par l’amour qu’il voue à sa femme et à leur fils, Glass entreprend un voyage de plus de 300 km dans un environnement hostile, sur la piste de l’homme qui l’a trahi. Sa soif de vengeance va se transformer en une lutte héroïque pour braver tous les obstacles, revenir chez lui et trouver la rédemption.",
        avis: "Les paysages sont magnifiques. Leonardo DiCaprio est extraordinaire."
    },
    11000: { 
        titre: "Turf",
        image: "turf.jpg",
        genre: "comédie",
        annee: "2012",
        realisateur: 'Fabien Onteniente',
        acteurs: "Alain Chabat, Edouard Baer, Lucien Jean-Baptiste, Philippe Duquesne, Gérard Depardieu, Héléna Noguerra, Pierre Bénichou, Marthe Villalonga, Alex Lutz, Jérôme Commandeur, Rolland Courbis, Christiana Réali, Thierry Roland, Laurent Broomhead, Sophie Thalmann, Pierre Ménès, Nikos Aliagas",
        synopsis: "Quatre turfistes achètent un cheval et tournent entre Paris, la Normandie et Monaco.",
        avis: "L'univers des courses hippiques avec beaucoup de guests."
    },
    11100: { 
        titre: "Un chien andalou",
        image: "un_chien_andalou.jpg",
        genre: "essai surréaliste",
        annee: "1929",
        realisateur: 'Luis Bunuel',
        acteurs: "Pierre Batcheff, Simone Mareuil",
        synopsis: "Tout commence sur un balcon où un homme aiguise un rasoir...",
        avis: "Luis Bunuel et Salvador Dali s'associent pour nous proposer un court métrage muet sonorisé surréaliste."
    },
    11150: { 
        titre: "Une vit de chat",
        image: "une_vie_de_chat.jpg",
        genre: "animation, policier",
        annee: "2010",
        realisateur: 'Alain Gagnol, Jean-Loup Felicioli',
        acteurs: "Dominique Blanc, Bruno Salomone, Jean Benguigui, Bernadette Lafont",
        synopsis: "Un chat nommé Dino mène une double vie : il passe ses journées avec Zoé, la fille de Jeanne, commissaire de police, mais la nuit il accompagne un voleur, Nico, sur les toits de Paris. Alors que la mère de Zoé enquête sur les cambriolages nocturnes, un autre truand, Victor Costa, kidnappe la fillette.",
        avis: "Un film d'animation sympathique dans Paris."
    },
    11200: { 
        titre: "Usual suspects",
        image: "usual_suspects.jpg",
        genre: "policier, thriller",
        annee: "1995",
        realisateur: 'Bryan Singer',
        acteurs: "Chazz Palminteri, Kevin Spacey, Gabriel Byrne, Stephen Baldwin",
        synopsis: "Une légende du crime contraint cinq malfrats à aller s'acquitter d'une tâche très périlleuse. Ceux qui survivent pourront se partager un butin de 91 millions de dollars.",
        avis: "Haletant."
    },
    11300: { 
        titre: "Steamboat Willie",
        image: "steamboat_willie.jpg",
        genre: "animation",
        annee: "1928",
        realisateur: 'Walt Disney, Ub Iwerks',
        acteurs: "Chazz Palminteri, Kevin Spacey, Gabriel Byrne, Stephen Baldwin",
        synopsis: "Mickey et Pat travaillent sur un bateau de marchandises et font un voyage mouvementé sur une rivière peu paisible avec Minnie comme unique passager en dehors des animaux de ferme.",
        avis: "Le premier film d'animation où le son est synchronisé avec l'image."
    },
    11600: { 
        titre: "Vacances romaines",
        image: "vacances_romaines.jpg",
        genre: "romance",
        annee: "1954",
        realisateur: 'William Wyler',
        acteurs: "Audrey Hepburn, Gregory Peck, Eddie Albert",
        synopsis: "Princesse soumise à un étouffant protocole, Ann n'a pas une minute de liberté. En déplacement à Rome, elle fait la rencontre du journaliste Joe Bradley qui la reçoit chez lui sans connaître son statut. Sous le charme du jeune homme, Ann profite enfin d'un moment d'évasion avant que sa condition ne la rattrape.",
        avis: "Quand l'éphémère devient éternel."
    },
    11700: { 
        titre: "Ожидая (En attendant)",
        image: "en_attendant.jpg",
        genre: "animation",
        annee: "2008",
        realisateur: 'Vera Miakicheva',
        acteurs: "Vera Miakicheva, Viktor Bazanov, Guennadi Logounov, Isolda Solodova",
        synopsis: "Un éléphanteau attend que sa mère revienne.",
        avis: "Travail de fin d'études de Vera Miakicheva."
    }
}

/* J'aimerais tout mettre dans le fichier films.json et faire appel à lui dans la class ci-dessous au lieu d'appeler const films au-dessus */ 
class FilmDetail extends Component {
    render () {
        const requireImage = () => {
            try {
                return require(`../img/${films[this.props.match.params.id].image}`)
            } catch (err) {
                return require('../img/paint.jpg')
            }
        }
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Détails du film</title>
                    <link rel="canonical" href="http://cinema.guillaumequeste.fr/film/" />
                    <meta name="keywords" content="Guillaume Queste developpeur web portfolio projet react details film" />
                    <meta name="description" content="Details du film" />
                    <meta property="og:title" content="Details du film" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://cinema.guillaumequeste.fr/film/" />
                    <meta property="og:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:title" content="Details du film" />
                    <meta property="og:description" content="Details du film" />
                    <meta property="og:site_name" content="Details du film" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Details du film" />
                    <meta name="twitter:description" content="Details du film" />
                    <meta name="twitter:image" content="http://www.guillaumequeste.fr/img/cinema.png" />
                </Helmet>
                <Header />
                <div className="fiche">
                    <div className="image">
                        <img src={requireImage(films[this.props.match.params.id].image)} className="tailleImage" alt={this.props.match.params.titre}/>
                    </div>
                    <div className="description">
                        <h2 className="titreCard">{films[this.props.match.params.id].titre}</h2>
                        <ul>
                            <li className="liCard"><strong>Titre : </strong>{films[this.props.match.params.id].titre}</li>
                            <li className="liCard"><strong>Genre : </strong>{films[this.props.match.params.id].genre}</li>
                            <li className="liCard"><strong>Année : </strong>{films[this.props.match.params.id].annee}</li>
                            <li className="liCard"><strong>Réalisateur : </strong>{films[this.props.match.params.id].realisateur}</li>
                            <li className="liCard"><strong>Acteurs : </strong>{films[this.props.match.params.id].acteurs}</li>
                            <li className="liCard"><strong>Synopsis : </strong>{films[this.props.match.params.id].synopsis}</li>
                            <li className="liCard"><strong>Avis : </strong>{films[this.props.match.params.id].avis}</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FilmDetail