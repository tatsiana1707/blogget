/* eslint-disable react/jsx-key */
import {usePost} from '../../../hooks/usePost';
import style from './List.module.css';
import Post from './Post';
import PreLoader from '../../../UI/Preloader';


export const List = () => {
  const [data, loading] = usePost();

  return (
    <>
      {loading ? (<PreLoader size={1000}/>) :
      (<ul className={style.list}>
        {Object.values(data).map(({data}, index) => (
          <Post key={index} data={data} />
        ))
        }
      </ul>)
      }
    </>
  );
};


