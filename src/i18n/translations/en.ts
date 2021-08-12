import { formatTranslations } from "utils";

/**
 * @name en
 * @type {Function}
 * @returns {string}
 */

const en = () => {
  return formatTranslations([
    {
      Following: {
        actions: "What would you want to do next?",
        "empty__paragraph--1": "Looks tidy already!",
        "empty__paragraph--2": "Try a different time frame above.",
        intro:
          "You're following {total} accounts that have not been active in the last",
        "unfollow--all": "Unfollow All",
        "unfollow--selected": "Unfollow Selected",
      },
    },
    {
      Friend: {
        unfollow: "Unfollow",
      },
    },
    {
      Footer: {
        link: "buying me a coffee?",
        paragraph:
          "TidyTweets is free and open-source software, if you find it useful perhaps consider",
      },
    },
    {
      LandingPage: {
        about:
          "TidyTweets analyses your Following list on Twitter telling you which accounts haven't been active in a specific time   frame (one week, two weeks, one month, three months, six months  and a year). You can then unfollow individual accounts, selected accounts or all at once.",
        intro: "Tidy up your {italics} list on Twitter.",
        "intro--italics": "Following",
        "intro--welcome": "Welcome back,",
        label: "Continue to App",
      },
    },
    {
      Loading: {
        "paragaph--1": "Analyzing your Twitter Following list...",
        "paragaph--2":
          "(this might take a while depending on how many accounts you follow)",
      },
    },
    {
      LogIn: {
        label: "Sign In with Twitter",
      },
    },
    {
      LogOut: {
        label: "Log Out",
      },
    },
  ]);
};

export default en;
