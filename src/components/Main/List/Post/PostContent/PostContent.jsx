import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const PostContent = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          bold
          size={14}
          tsize={22}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
            console.log(isModalOpen, 'isModalOpen');
          }}
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        medium
        color='orange'
        className={style.linkAuthor}
        href="#author">
        {author}
      </Text>
      {isModalOpen && (
        <Modal
          author={author}
          title={title}
          markdown={markdown}
          id={id}
          closeModal={() => {
            setIsModalOpen(false);
          }}/>
      )}
    </div>
  );
};


PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
