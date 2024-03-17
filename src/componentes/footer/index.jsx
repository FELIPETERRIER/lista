import './style.css';
import Image from '../../imagens/github.png';


function Footer() {
  return (
   
   <footer>
        <p>Desenvolvido por Felipe Bitencourt do Valle</p>
        <a href='https://github.com/'><img src={Image} alt='Meu gitHub'/> </a>
       
    </footer>
   
   
  );
}

export default Footer;