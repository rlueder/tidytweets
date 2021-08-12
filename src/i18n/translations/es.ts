import { formatTranslations } from "utils";

/**
 * @name es
 * @type {Function}
 * @returns {string}
 */

const es = () => {
  return formatTranslations([
    {
      Following: {
        actions: "¿Qué te gustaría hacer a continuación?",
        "empty__paragraph--1": "Todo limpio!",
        "empty__paragraph--2": "Pruebe un rango de tiempo diferente arriba.",
        intro:
          "Estás siguiendo {total} perfiles que no han estado activos en los ultimos",
        "unfollow--all": "Dejar de seguir todos",
        "unfollow--selected": "Dejar de seguir selecionados",
      },
    },
    {
      Friend: {
        unfollow: "Dejar de seguir",
      },
    },
    {
      Footer: {
        link: "comprandome un café?",
        paragraph:
          "TidyTweets es un software grátis y de código aberto, si lo vé util tal vez consideré",
      },
    },
    {
      LandingPage: {
        about:
          "TidyTweets analiza las cuentas que sigues en Twitter, mostrando cuáles no tuvieron actividad en un período específico (una semana, dos semanas, un mes, tres meses, seis meses o un año). A continuación, puede dejar de seguir cuentas individuales, cuentas seleccionadas o todos al mismo tiempo.",
        intro: "Organiza las cuentas que sigues de Twitter.",
        "intro--italics": "Following",
        "intro--welcome": "Bienvenido de vuelta,",
        label: "Continuar a la aplicación",
      },
    },
    {
      Loading: {
        "paragaph--1": "Analizando las cuentas que sigues en Twitter...",
        "paragaph--2":
          "(Puede llevar un poco de tiempo dependiendo de cuantas cuentas sigues)",
      },
    },
    {
      LogIn: {
        label: "Ingresar con Twitter",
      },
    },
    {
      LogOut: {
        label: "Salir",
      },
    },
  ]);
};

export default es;
