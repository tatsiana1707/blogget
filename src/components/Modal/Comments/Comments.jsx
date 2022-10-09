import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {CurrentTime} from './../../Main/List/Post/CurrentTime/CurrentTime';

export const Comments = ({comments}) => (<ul className={style.list}>

  {comments.length ? (
      comments.filter((item) => item.author !== 'deleted')
        .map(({author, body, id, created}) => (
          body &&
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


Comments.propTypes = {
  comments: PropTypes.any,
};

