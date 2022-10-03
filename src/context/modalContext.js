import React from 'react';
import PropTypes from 'prop-types';
import {useCommentsData} from '../hooks/useCommentsData';

export const modalContext = React.createContext({});

export const ModalContextProvider = ({children}) => {
  const [data] = useCommentsData('');

  return (
    <modalContext.Provider value={{data}}>
      {children}
    </modalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
