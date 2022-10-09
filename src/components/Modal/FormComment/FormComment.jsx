import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/comment/commentReducer';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();

  const [auth] = useAuth();
  const textareaRef = useRef(null);


  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        ref={textareaRef}
        value={value}
        onChange={handleChange}>
      </textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
