/* eslint-disable react/jsx-key */
import style from './List.module.css';
import Post from './Post';
import {useRef, useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/post/postAction';


export const List = () => {
  const data = useSelector(state => state.post.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log(page, 'page');

  console.log(data);
  useEffect(() => {
    dispatch(postRequestAsync(page));
    console.log(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
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
  console.log(data);
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


