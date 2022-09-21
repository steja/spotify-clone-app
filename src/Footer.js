import React, { useEffect, useState } from "react";
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import {useDataLayerValue} from './DataLayer'                               //After video



function Footer({spotify}) {

  const [{ token, item, playing }, dispatch] = useDataLayerValue();                //After video
 
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);


  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  return (
    <div className="footer">
        <div className="footer__left">
             <img className= "footer__albumLogo"
                src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg"
                alt=""
              />
              <div className='footer__songInfo'>
                  <h4>Yeah!</h4>
                  <p>Usher</p>
              </div>
        </div>

        <div className="footer__center">
              <ShuffleIcon className = "footer__green"/>
              <SkipPreviousIcon className = "footer__icon"/>
               {playing ? (                                                              //After video
                 <PauseCircleOutlineIcon
                     onClick={handlePlayPause}
                     fontSize="large"
                     className="footer__icon"
                 />
               ) : (
                <PlayCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer__icon"
                 />
                 )}
              <SkipNextIcon className = "footer__icon"/>
              <RepeatIcon className = "footer__green"/>
        </div>

        <div className="footer__right">   
        <Grid container spacing={2}>
  <Grid item>
     <PlaylistPlayIcon/>
  </Grid>
  <Grid item>
    <VolumeDownIcon/>
  </Grid>
  <Grid item xs>
    <Slider size = "small"/>
  </Grid>
</Grid>
        </div>
    </div>
  )
}

export default Footer