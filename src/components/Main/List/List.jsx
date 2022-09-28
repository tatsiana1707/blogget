/* eslint-disable react/jsx-key */
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const {dat} = useContext(postsContext);
  const {...obj} = dat;
  const {...data} = obj;

  return (
    <ul className={style.list}>
      {Object.values(data).map((d, index) => (
        <Post key={index} data={d.data} />
      ))
      }
    </ul>
  );
};


