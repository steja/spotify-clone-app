// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


export const authEndpoint=
"https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId="3c45c3a661f24369a4eb561159f99a3d";

const scopes = [
  "user-read-currently-playing",             
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {                // This function is to get access_token from the url
  return window.location.hash
    .substring (1)
     .split("&")
     .reduce((initial, item) => {
      var parts=item.split("=");
      initial[parts [0]] = decodeURIComponent(parts[1]);

      return initial;
     }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
          