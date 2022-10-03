import style from './Comments.module.css';
import {Text} from '../../../UI/Text';

export const Comments = () => {
  console.log(style);
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Text As='h3' className={style.author} size={18} tsize={22}>Maks</Text>
        <Text As='p' className={style.comment} size={14} tsize={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat natus eaque modi!
        </Text>
      </li>
    </ul>
  );
};
