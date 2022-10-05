import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useContext, useRef} from 'react';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };


  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text As='h3' size={14} tsize={18}>Имя авторизованного пользователя
        {auth.name}</Text>
      <textarea className={style.textarea} ref={textareaRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};