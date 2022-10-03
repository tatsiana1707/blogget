import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';

export const FormComment = () => {
  console.log(style);
  return (
    <form className={style.form}>
      <Text As='h3' size={14} tsize={18}>Имя авторизованного пользователя</Text>
      <textarea className={style.textarea}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
