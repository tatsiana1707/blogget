import style from './Post.module.css';
import PropTypes from 'prop-types';
import {Avatar} from './Avatar/Avatar';
import {PostContent} from './PostContent/PostContent';
import {Rating} from './Rating/Rating';
import {DeletePost} from './DeletePost/DeletePost';
import {CurrentTime} from './CurrentTime/CurrentTime';


export const Post = (data) => {
  console.log(data, 'data');

  return (
    <li className={style.post}>
      <Avatar title={data.title}/>
      <PostContent author={data.author} title={data.title}/>
      <Rating ups={data.ups}/>
      <DeletePost title={data.title}/>
      <CurrentTime date={data.date}/>
    </li>
  );
};

Post.propTypes = {
  data: PropTypes.any,
};

