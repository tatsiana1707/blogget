import style from './Post.module.css';
import PropTypes from 'prop-types';
import {Avatar} from './Avatar/Avatar';
import {PostContent} from './PostContent/PostContent';
import {Rating} from './Rating/Rating';
import {DeletePost} from './DeletePost/DeletePost';
import {CurrentTime} from './CurrentTime/CurrentTime';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(author, ups, date);
  return (
    <li className={style.post}>
      <Avatar title={title}/>
      <PostContent author={author} title={title}/>
      <Rating ups={ups}/>
      <DeletePost/>
      <CurrentTime date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
