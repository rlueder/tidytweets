/**
 * Friend
 */

export type Friend = {
  description: string;
  id: number;
  id_str: string;
  name: string;
  profile_image_url_https: string;
  screen_name: string;
};

/**
 * State
 */

export type State = {
  access: {
    oauth_token: string;
    oauth_token_secret: string;
    screen_name: string;
  };
  friends: { data: Array<Object>; ids: Array<number> };
  request: {};
  user: {
    data: Object;
  };
};
