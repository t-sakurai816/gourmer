import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
          <Link to="copy-right">
            <IconButton>
              <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
          </Link>
        )}

      <Link to="/">
        <img className="header__logo" src="https://icooon-mono.com/i/icon_11165/icon_111651_64.png" alt="Gourmer-logo" />
      </Link>

      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowForwardIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
          <Link to="/chat">
            <IconButton>
              <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
          </Link>
        )}
      {/* <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link> */}
    </div>
  )
}

export default Header;