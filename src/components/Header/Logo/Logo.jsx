import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';


export const Logo = () => {
  console.log(style);
  return (
    <a className={style.link} href='/'>
      <LogoIcon/>
    </a>
  );
};
