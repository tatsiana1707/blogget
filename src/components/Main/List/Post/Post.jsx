import style from './Post.module.css';
import PropTypes from 'prop-types';
import {Avatar} from './Avatar/Avatar';
import {PostContent} from './PostContent/PostContent';
import {Rating} from './Rating/Rating';
import {DeletePost} from './DeletePost/DeletePost';
import {CurrentTime} from './CurrentTime/CurrentTime';
import {useContext} from 'react';
import {postsContext} from '../../../../context/postsContext';


export const Post = ({postData}) => {
  console.log(postData, 'postData');
  const {data} = useContext(postsContext);
  console.log(data, 'data');
  const {title, author, ups, date} = postData;
  console.log(postData, 'postData');
  return (
    <li className={style.post}>
      <Avatar title={title}/>
      <PostContent author={author} title={title}/>
      <Rating ups={ups}/>
      <DeletePost title={title}/>
      <CurrentTime date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.any,
};

