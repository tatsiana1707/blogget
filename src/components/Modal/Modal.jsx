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
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [post, status, comments] = useCommentsData(id);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const closeOnIcon = () => {
    navigate(`/category/${page}`);
  };


  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.code === 'Escape') {
        navigate(`/category/${page}`);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
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
        {status === 'loading' && 'Загрузка...'}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{post.title}</h2>
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
                {post.selftext}
              </Markdown>
            </div>
            <p className={style.author}>{post.author}</p>

            { showForm ?
            (
            <FormComment/>
          ) : (<button className={style.btn}
            onClick={() => setShowForm(true)}>Написать комментарий</button>)}
            <Comments comments={comments}/>
          </>
        )}
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
  comments: PropTypes.any,
};

