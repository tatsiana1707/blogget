import style from './Post.module.css';
import PropTypes from 'prop-types';
import {Avatar} from './Avatar/Avatar';
import {PostContent} from './PostContent/PostContent';
import {Rating} from './Rating/Rating';
import {DeletePost} from './DeletePost/DeletePost';
import {CurrentTime} from './CurrentTime/CurrentTime';


export const Post = (data) => {
  const {data: {thumbnail, author, title, ups,
    created, selftext: markdown, id}
  } = data;
  console.log(data, 'data');
  return (
    <li className={style.post}>
      <Avatar thumbnail={thumbnail} title={title}/>
      <PostContent author={author} title={title} markdown={markdown} id={id}/>
      <Rating ups={ups}/>
      <DeletePost title={title}/>
      <CurrentTime date={created}/>
    </li>
  );
};

Post.propTypes = {
  data: PropTypes.any,
};

