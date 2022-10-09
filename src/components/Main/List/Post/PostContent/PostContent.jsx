import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const PostContent = ({title, author, id}) => {
  const {page} = useParams();
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text
            bold
            size={14}
            tsize={22}
            className={style.linkPost}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        medium
        color='orange'
        className={style.linkAuthor}
        href="#author">
        {author}
      </Text>
    </div>
  );
};


PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
