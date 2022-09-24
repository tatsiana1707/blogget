/* eslint-disable react/jsx-key */
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 84,
      date: '2022-01-21T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 14,
      date: '2022-03-24T00:00:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 94,
      date: '2022-07-24T09:45:00.000Z',
    },
  ];

  console.log(style);
  return (
    <ul className={style.list}>
      {postsData.map((data, index) => (
        <Post key={index} data={data} />
      ))}
    </ul>
  );
};


