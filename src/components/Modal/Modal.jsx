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
  const [showForm, setShowForm] = useState(false);
  const [post, isLoading] = useCommentsData(id);

  console.log(typeof post.comments);
  console.log(post);

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
        {isLoading ?
      (
          <>
            <h2 className={style.title}>{post.post.title}</h2>

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
                {post.post.selftext}
              </Markdown>
            </div>

            <p className={style.author}>{post.post.author}</p>
            { showForm ?
            (
            <FormComment/>
          ) : (<button className={style.btn}
            onClick={() => setShowForm(true)}>Написать комментарий</button>)}
            <Comments comments={post.comments}/>
          </>
      ) : (<h2>Загрузка...</h2>)
        }
        <button className={style.close} onClick={closeOnIcon}>
          <CloseIcon/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  post: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.string,
};

