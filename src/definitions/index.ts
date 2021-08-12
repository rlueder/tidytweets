/**
 * Access
 */

export type Access = {
  oauth_token: string;
  oauth_token_secret: string;
  screen_name: string;
  user_id: string;
};

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
  status: {
    created_at: string;
  };
};

/**
 * State
 */

export type State = {
  access: Access;
  friends: { data: Array<Friend>; error: string };
  request: {};
  user: {
    data: Object;
  };
};
