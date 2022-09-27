/* eslint-disable react/jsx-key */
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const {data} = useContext(postsContext);
  console.log(data, 'data');

  return (
    <ul className={style.list}>
      {Object.values(data).map((data, index) => (
        <Post key={index} data={data} />
      ))}
    </ul>
  );
};


