import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import FormComment from './FormComment';
import {Comments} from './Comments/Comments';
import {useCommentsData} from '../../hooks/useCommentsData';
import {useState} from 'react';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [postData] = useCommentsData(id);
  console.log(postData);
  const [post, setPost] = useState({});

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const closeOnIcon = () => {
    closeModal();
  };

  useEffect(() => {
    console.log(post, postData);
    setPost(postData);
  }, []);


  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);


  return ReactDOM.createPortal(

    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>title</h2>

        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            markdown
          </Markdown>
        </div>

        <p className={style.author}>author</p>
        <FormComment/>
        <Comments/>
        <button className={style.close} onClick={closeOnIcon}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.string,
};

