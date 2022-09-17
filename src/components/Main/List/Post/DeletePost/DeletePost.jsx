import style from './DeletePost.module.css';
import {ReactComponent as DeleteBtnIcon} from '../img/delete.svg';

export const DeletePost = () => {
  console.log(style);
  return (
    <button className={style.delete}>
      <DeleteBtnIcon/>
    </button>
  );
};
