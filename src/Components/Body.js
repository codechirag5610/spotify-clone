import PlayCircleFilledOutlined from '@material-ui/icons/PlayCircleFilledOutlined';
import React from 'react'
import { useDataLayerValue } from '../DataLayer';
import './Body.css';
import SongRow from './SongRow';
import Header from './Header';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
        <Header spotify={spotify} />
        {/* <div className="body__info">
          <img src={discover_weekly?.img[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
              <PlayCircleFilledOutlined onClick={playPlaylist} className='body__shuffle' />
              <FavouriteIcon fontSize='large' />
              <MoreHorizIcon />
          </div>  

          
          {discover_weekly?.tracks.items.Map(item => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div> */}
    </div>
  )
}

export default Body