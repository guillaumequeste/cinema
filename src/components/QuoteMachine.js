import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./QuoteMachine.css";
import { Helmet } from "react-helmet";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

const quotes = [
  {
    replique: "Que la force soit avec toi.",
    personnage: "Un peu tout le monde",
    film: "Star Wars"
  },
  {
    replique:
      "Je pense que quand on mettra les cons sur orbite, t'as pas fini de tourner.",
    personnage: "Jean Gabin",
    film: "Le Pacha"
  },
  {
    replique:
      "Tu vois, le monde se divise en deux catégories : ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses.",
    personnage: "Clint Eastwood",
    film: "Le bon, la brute et le truand"
  },
  {
    replique: "Chewie, on est à la maison.",
    personnage: "Harrison Ford",
    film: "Star Wars épisode VII : Le réveil de la force"
  },
  {
    replique: "Miroir, mon beau miroir, dis-moi qui est la plus belle.",
    personnage: "La Reine",
    film: "Blanche-Neige et les sept nains"
  },
  {
    replique: "Adrian !",
    personnage: "Sylvester Stallone",
    film: "Rocky"
  },
  {
    replique: "Mon précieux !",
    personnage: "Gollum",
    film: "Le Seigneur des anneaux"
  },
  {
    replique: "Hasta la vista, baby.",
    personnage: "Arnold Schwarzenegger",
    film: "Terminator 2 : Le jugement dernier"
  },
  {
    replique: "Je suis le roi du monde !",
    personnage: "Leonardo di Caprio",
    film: "Titanic"
  },
  {
    replique: "ET téléphone maison.",
    personnage: "ET",
    film: "ET"
  },
  {
    replique: "Je suis ton père.",
    personnage: "Dark Vador",
    film: "Star Wars épisode V : L'Empire contre-attaque"
  },
  {
    replique: "Prenez un chewing-gum Emile.",
    personnage: "Chantal Lauby",
    film: "La cité de la peur"
  },
  {
    replique: "- Il s'appelle Juste Leblanc. - Ah bon, il a pas de prénom ?",
    personnage: "Thierry Lhermitte et Jacques Villeret",
    film: "Le dîner de cons"
  },
  {
    replique: "C'est fin, c'est très fin, ça se mange sans faim",
    personnage: "Anémone",
    film: "Le père Noël est une ordure"
  },
  {
    replique:
      "Vous avez de la pâte ? Vous avez du sucre ? Alors avec la pâte vous faîtes une crêpe et puis vous mettez du sucre dessus !",
    personnage: "Bruno Moynot",
    film: "Les bronzés font du ski"
  },
  {
    replique: "Votre colin, avec ou sans patate ? - Cent patates !",
    personnage: "Annick Alane et Didier Bourdon",
    film: "Les trois frères"
  },
  {
    replique: "Alors, on attend pas Patrick ?",
    personnage: "Franck Dubosc",
    film: "Camping"
  },
  {
    replique: "Pastis par temps bleu, Pastis délicieux !",
    personnage: "Claude Brasseur",
    film: "Camping"
  },
  {
    replique: "Maintenant elle va marcher beaucoup moins bien, forcément...",
    personnage: "Bourvil",
    film: "Le Corniaud"
  },
  {
    replique: "Cassé !!!",
    personnage: "Jean Dujardin",
    film: "Brice de Nice"
  },
  {
    replique: "Comment Salomon vous êtes juif ?",
    personnage: "Louis de Funès",
    film: "Les aventures de Rabbi Jacob"
  },
  {
    replique: "C'est le Nooooord.",
    personnage: "Michel Galabru",
    film: "Bienvenue chez les Ch'tis"
  },
  {
    replique: "Les cons ça ose tout, c'est même à ça qu'on les reconnaît.",
    personnage: "Lino Ventura",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "J'ai glissé chef...",
    personnage: "Jean Lefebvre",
    film: "Mais où est donc passée la 7ème compagnie ?"
  },
  {
    replique: "Marie-Thérèse, ne jurez pas !",
    personnage: "Hélène Vincent",
    film: "La vie est un long fleuve tranquille"
  },
  {
    replique: "Ca va être tout noir ! - Ta gueule !",
    personnage: "Pascal Vincent",
    film: "RRRrrrr !!!"
  },
  {
    replique: "C'est des malades !",
    personnage: "Théophile Moussa Sowie",
    film: "Les visiteurs"
  },
  {
    replique: "T'es mignon mais t'es un tout petit breton",
    personnage: "Eric Judor",
    film: "La tour Montparnasse infernale"
  },
  {
    replique: "Vous ne passerez pas !!!",
    personnage: "Gandalf",
    film: "Le Seigneur des anneaux : la communauté de l'anneau"
  },
  {
    replique:
      "Si mes calculs sont exacts, lorsque ce petit bolide atteindra les 88 miles à l'heure, attends-toi à voir quelque chose qui décoiffe.",
    personnage: "Doc",
    film: "Retour vers le futur"
  },
  {
    replique: "Nom de Zeus !!",
    personnage: "Doc",
    film: "Retour vers le futur"
  },
  {
    replique:
      "moi j'aime pas la guerre parce que la guerre ça se passe à la campagne et la campagne ça m'emmerde.",
    personnage: "F. Céline",
    film: "L'horloger de Saint-Paul"
  },
  {
    replique:
      "Maman disait toujours, 'la vie, c'est comme une boîte de chocolats : on ne sait jamais sur quoi on va tomber.'",
    personnage: "Tom Hanks",
    film: "Forrest Gump"
  },
  {
    replique: "I'll be back.'",
    personnage: "Arnold Scwarzenegger",
    film: "Terminator"
  },
  {
    replique: "C'est des malades !!!.'",
    personnage: "Théophile Moussa Sowié",
    film: "Les visiteurs"
  },
  {
    replique:
      "Est-ce que ça vous chatouille ou est-ce que ça vous gratouille ?",
    personnage: "Louis Jouvet",
    film: "Knock"
  },
  {
    replique: "Moi j'ai dit bizarre ? Comme c'est bizarre.",
    personnage: "Louis Jouvet",
    film: "Drôle de drame"
  },
  {
    replique: "Vers l'infini et au-delà !",
    personnage: "Buzz l'Eclair",
    film: "Toy Story"
  },
  {
    replique: "Bah maintenant elle va marcher beaucoup moins bien, forcément !",
    personnage: "Bourvil",
    film: "Le corniaud"
  },
  {
    replique: "Oh une serpillère, c'est formidable Thérèse !",
    personnage: "Thierry Lhermitte",
    film: "Le Père-Noël est une ordure"
  },
  {
    replique: "C'est à moi que tu parles ?",
    personnage: "Robert de Niro",
    film: "Taxi driver"
  },
  {
    replique:
      "Atmosphère ! Atmosphère ! Est-ce que j'ai une gueule d'atmosphère ?",
    personnage: "Arletty",
    film: "Hôtel du Nord"
  },
  {
    replique:
      "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation.",
    personnage: "Edouard Baer",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique: "Prends ton manteau, on s'en va !",
    personnage: "Didier Bourdon",
    film: "Les trois frères"
  },
  {
    replique:
      "Il y a des pendules qui marquent 2 heures, il en sonne 4 et il est midi moins le quart. Eh ben ton ami Régis, il est comme ça, il sonne faux.",
    personnage: "Jean Gabin",
    film: "Pépé le Moko"
  },
  {
    replique: "Touche pas au grisbi, salope !",
    personnage: "Francis Blanche",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "C'est curieux chez les marins ce besoin de faire des phrases...",
    personnage: "Francis Blanche",
    film: "Les Tontons flingueurs"
  },
  {
    replique:
      "On a dû arrêter la fabrication, y a des clients qui devenaient aveugles. Alors, ça faisait des histoires !",
    personnage: "Francis Blanche",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "Yes sir !",
    personnage: "Robert Dalban",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "J'annonce les employés, pas le patron...",
    personnage: "Venantino Venantini",
    film: "Les Tontons flingueurs"
  },
  {
    replique:
      "Mais dis donc, on n'est quand même pas venus pour beurrer les sandwichs !",
    personnage: "Bernard Blier",
    film: "Les Tontons flingueurs"
  },
  {
    replique:
      "Je vais lui montrer qui c'est Raoul. Aux quatre coins de Paris qu'on va le retrouver, éparpillé par petits bouts, façon puzzle.",
    personnage: "Bernard Blier",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "Alors, il dort le gros con ?",
    personnage: "Bernard Blier",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "Faut r'connaître… c'est du brutal !",
    personnage: "Bernard Blier",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "Ton Antoine commence à me les briser menu !",
    personnage: "Lino Ventura",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "J'ai connu une Polonaise qu'en prenait au p'tit déjeuner.",
    personnage: "Lino Ventura",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "Vous avez beau dire, y a pas seulement que d'la pomme...",
    personnage: "Jean Lefebvre",
    film: "Les Tontons flingueurs"
  },
  {
    replique: "La bave du crapaud n'empêche pas la caravane de passer !",
    personnage: "Horst Frank",
    film: "Les Tontons flingueurs"
  },
  {
    replique:
      "Y'a des impulsifs qui téléphonent, y'en a d'autres qui se déplacent.",
    personnage: "Horst Frank",
    film: "Les Tontons flingueurs"
  },
  {
    replique:
      "Je suis obligé de constater, Madame, que votre éclat rendrait jaloux le soleil lui-même. ",
    personnage: "Paul Meurisse",
    film: "L'oeil du monocle"
  },
  {
    replique: "C'mon, Dover ! Move your bloomin' arse !",
    personnage: "Audrey Hepburn",
    film: "My fair lady"
  },
  {
    replique: "La vie trouve toujours un chemin.",
    personnage: "Jeff Goldblum",
    film: "Jurassic Park"
  },
  {
    replique: "Jamais je n'aurais cru que ça aurait pu être aussi beau.",
    personnage: "La Bergère",
    film: "Le Roi et l'Oiseau"
  },
  {
    replique:
      "Bah, maintenant elle va marcher beaucoup moins bien, forcément !",
    personnage: "Bourvil",
    film: "Le corniaud"
  },
  {
    replique: "Non ! N'allez pas dans les hautes herbes",
    personnage: "Harvey Jason",
    film: "Le Monde perdu : jurassic Park"
  },
  {
    replique: "Alerte générale !!!",
    personnage: "Bernard Farcy",
    film: "Taxi"
  },
  {
    replique: "Splendide !",
    personnage: "Jim Carrey",
    film: "The Mask"
  },
  {
    replique: "Wakatépé baboune.",
    personnage: "Ludwig Briand",
    film: "Un indien dans la ville"
  },
  {
    replique: "Jésus, mon mari ?",
    personnage: "Valda Campos",
    film: "Les Rois Mages"
  },
  {
    replique: "La famille, ça va ? - Ca va, ça va, Imhotep.",
    personnage: "",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique: "Sarah Connor ? - C'est à côté.",
    personnage: "Chantal Lauby",
    film: "La cité de la peur"
  },
  {
    replique: "Cours Forrest ! Cours !",
    personnage: "Robin Wright",
    film: "Forrest Gump"
  },
  {
    replique: "Le lion ne s'associe pas avec le cafard.",
    personnage: "Gérard Darmon",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique: "Salut ! Je m'appelle Quentin, je suis de Montargis.",
    personnage: "Gérard Depardieu",
    film: "Tais-toi !"
  },
  {
    replique: "Et arrête de dire OK sans arrêt. Ok ? Ok.",
    personnage: "Jean Réno, Nathalie Portman",
    film: "Léon"
  },
  {
    replique:
      "La peur mène à la colère. La colère mène à la haine. La haine mène à la souffrance.",
    personnage: "Yoda",
    film: "La Menace fantôme"
  },
  {
    replique:
      "Toujours par deux ils vont. Ni plus, ni moins. Le maître et son apprenti.",
    personnage: "Yoda",
    film: "La Menace fantôme"
  },
  {
    replique: "Beaucoup encore il te reste à apprendre.",
    personnage: "Yoda",
    film: "L'Attaque des clones'"
  },
  {
    replique: "Un grand guerrier ? Personne par la guerre ne devient grand.",
    personnage: "Yoda",
    film: "L'Empire contre-attaque"
  },
  {
    replique:
      "Pas de pierres, pas de construction. Pas de construction, pas de palais. Pas de palais, pas de palais.",
    personnage: "Gérard Darmon",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique: "Sympa ta robe !",
    personnage: "Edouard Montoute",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique: "Ca va être du grand Mendez !",
    personnage: "Abbes Zahmani",
    film: "Camping"
  },
  {
    replique: "Y a un très gros problème en défense !",
    personnage: "Isabelle Nanty",
    film: "3 zéros"
  },
  {
    replique:
      "Le fil vert sur le bouton vert, le fil rouge sur le bouton rouge.",
    personnage: "Robert Lamoureux",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Groupir ! Reste groupir !",
    personnage: "Michel Modo",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Si j' connaissais l' con qu'a fait sauter l' pont.",
    personnage: "Jean Lefebvre",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Vous affez du à l'ail ?",
    personnage: "Jean Lefebvre",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Qu'est-ce que vous nagez bien, chef !",
    personnage: "Jean Lefebvre",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "La main en sifflet et vers l'extérieur.",
    personnage: "Pierre Mondy",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Comment on fait pour devenir chef, chef ?",
    personnage: "Jean Lefebvre",
    film: "On a retrouvé la 7ème Compagnie"
  },
  {
    replique: "Nous fouloir fin rouche !",
    personnage: "Jean Lefebvre",
    film: "Mais où est donc passée la èème Compagnie"
  },
  {
    replique: "Obé ? - Non c'est Pano !",
    personnage: "Christian Clavier et Claude Rich",
    film: "Astérix et Obélix : Mission Cléopâtre"
  },
  {
    replique:
      "All I have in this world is my balls and my word, and I don't break 'em for no one !",
    personnage: "Al Pacino",
    film: "Scarface"
  },
  {
    replique:
      "I'm Tony Montana ! You fuck with me, you fucking with the best !",
    personnage: "Al Pacino",
    film: "Scarface"
  },
  {
    replique:
      "You wanna fuck with me ? Okay. You wanna play rough ? Okay. Say hello to my little friend !",
    personnage: "Al Pacino",
    film: "Scarface"
  },
  {
    replique: "I'm gonna make him an offer he can't refuse.",
    personnage: "Marlon Brando",
    film: "Le Parrain"
  },
  {
    replique: "Mio padre si chiamava Antonio Andolini... E chistu è pi tia !",
    personnage: "Robert De Niro",
    film: "Le Parrain, 2e partie"
  },
  {
    replique: "Vous vous couchez à l'heure des poules ? - Eh oui, pour me lever à celle des chevaux.",
    personnage: "Paul Frankeur et Jean Gabin",
    film: "Le Gentleman d'Epsom"
  },
  {
    replique: "SSSplendide !!!",
    personnage: "Jim Carrey",
    film: "The Mask"
  },
  {
    replique: "Si la connerie n'est pas remboursée par les assurances sociales, vous finirez sur la paille.",
    personnage: "Jean-Paul Belmondo",
    film: "Un singe en hiver"
  }
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citation: "",
      auteur: "",
      metrage: "",
      bgColor: ""
    };
    this.newQuote = this.newQuote.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  newQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex].replique;
    this.setState({ citation: quote });
    let author = quotes[randomIndex].personnage;
    this.setState({ auteur: author });
    let movie = quotes[randomIndex].film;
    this.setState({ metrage: movie });
  }

  boxClick = e => {
    let randomColor = Math.floor(Math.random() * colors.length);
    let color = colors[randomColor];
    this.setState({
      bgColor: color
    });
  };

  componentDidMount() {
    // affiche une citation dès le chargement de la page
    this.newQuote();
    this.boxClick();
  }

  handleClick() {
    this.newQuote();
    this.boxClick();
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Générateur de répliques cultes</title>
          <link
            rel="canonical"
            href="http://cinema.guillaumequeste.fr/repliques"
          />
          <meta
            name="keywords"
            content="Guillaume Queste developpeur web portfolio projet react quote machine generateur repliques"
          />
          <meta name="description" content="Quote machine" />
          <meta property="og:title" content="Quote machine" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="http://cinema.guillaumequeste.fr/repliques"
          />
          <meta
            property="og:image"
            content="http://www.guillaumequeste.fr/img/cinema.png"
          />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:title" content="Quote machine" />
          <meta property="og:description" content="Quote machine" />
          <meta property="og:site_name" content="Quote machine" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Quote machine" />
          <meta name="twitter:description" content="Quote machine" />
          <meta
            name="twitter:image"
            content="http://www.guillaumequeste.fr/img/cinema.png"
          />
        </Helmet>
        <Header />
        <div
          style={{ backgroundColor: this.state.bgColor }}
          className="bodyQuoteMachine"
        >
          <div className="quoteMachine">
            <div className="quoteStyles">
              <h1 className="citation">" {this.state.citation} "</h1>
              <div className="auteur">-{this.state.auteur}</div>
              <div>{this.state.metrage}</div>
            </div>
          </div>
          <div className="divButton">
            <button onClick={this.handleClick} className="buttonQuote">
              {" "}
              Réplique{" "}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default QuoteMachine;
