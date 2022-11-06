/* eslint-disable react/jsx-key */
import style from './List.module.css';
import Post from './Post';
import {useRef, useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {postsSlice} from '../../../store/post/postsSlice';
import {postRequestAsync} from '../../../store/post/postAction';
import {usePost} from '../../../hooks/usePost';


export const List = () => {
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const [data] = usePost(page);
  console.log(data);
  if (!data.length || data === undefined || data === null) return;

  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {Object.values(data).map(({data}) => (
          <Post key={data.id} data={data} />
        ))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet/>
    </>
  );
};


