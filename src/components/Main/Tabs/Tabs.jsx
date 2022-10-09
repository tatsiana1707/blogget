import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useEffect} from 'react';
import {debounceRaf} from '../../../utils/debounce.js';
import {Text} from '../../../UI/Text';
import {useNavigate} from 'react-router-dom';


const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: '/'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropDown] = useState(true);
  const [itemMenu, setItemMenu] = useState('Главная');
  const navigate = useNavigate();


  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (

    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn} >
          <button className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {itemMenu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, link, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <button className={style.btn}
                onClick={() => {
                  setItemMenu(value);
                  navigate(`/category/${link}`);
                }}>
                {value}
                <Icon width={30} height={30}/>
              </button>
            </Text>
          ))}
        </ul>
      )
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
