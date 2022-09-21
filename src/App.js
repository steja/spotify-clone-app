import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();            //This acts as a instance of spotify app in our program which helps us to communicate with spotify

function App() {

  // const [token, setToken] = useState(null);     instead of using state we will use reducer as it can be used along with context
  const [{user, token}, dispatch] = useDataLayerValue();     //Using context values

  // Run code based on a given condition
  useEffect(() => {

    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if (_token) {

     // setToken (_token)     instead of using state we will use reducer as it can be used along with context

     dispatch({                                   //Here we are dispatching the token into the data layer/ Context
       type: "SET_TOKEN",
       token: _token,
     })

      spotify.setAccessToken(_token);          //Here we're giving the access token to spotify API

      spotify.getMe().then((user) => {

        dispatch({                                //Here we are shooting the user into the data layer/ Context
           type: 'SET_USER',
           user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })  
      })

      spotify.getPlaylist('37i9dQZEVXcRaaxwbMpUkr').then(response =>           //taken from spotify app url when in discover weekly page
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
        )  
      
    }


  }, []);

  return (
    <div className="app">
      {
        token ? (                                  //if you have a token you'll be logged in
          <Player spotify = {spotify}/>     //passing spotify as a prop to player
        ) : (
          <Login/>
        )

      }
    </div>
  );
}
 
export default App;
