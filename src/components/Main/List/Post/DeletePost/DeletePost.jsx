import style from './DeletePost.module.css';
import {ReactComponent as DeleteBtnIcon} from '../img/delete.svg';

export const DeletePost = () => (
  <button className={style.delete}>
    <DeleteBtnIcon/>
  </button>
);

