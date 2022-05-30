
import discord from '../img/discord.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

import './footer.css';

function Footer() {
  return (
    <footer>
        <div className='redes'>
        <img src={discord} alt="Logo discord" />
        <img src={twitter} alt="Logo twitter"/>
        <img src={instagram}alt="Logo instagram"/>
        </div>
    </footer>
  );
}

export default Footer;
