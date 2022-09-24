import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../hooks/useFetch.js';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [data] = useFetch();

  return (
    <postsContext.Provider value={{data}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

