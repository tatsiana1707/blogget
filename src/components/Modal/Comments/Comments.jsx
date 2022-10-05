import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import {CurrentTime} from './../../Main/List/Post/CurrentTime/CurrentTime';

export const Comments = ({comments}) => {
  console.log(comments);
  return (<ul className={style.list}>

    {comments.length ? (
      comments.map(({author, body, id, created}) => (
        created &&
        <li key={id} className={style.item}>
          <Text As='h3' className={style.author} size={18} tsize={22}>
            {author}</Text>
          <Text As='p' className={style.comment} size={14} tsize={18}>
            {body}
          </Text>
          <CurrentTime date={created}/>
        </li>
      ))
    ) :
    (
      <p>Нет комментариев</p>
    )}

  </ul>
  );
};

