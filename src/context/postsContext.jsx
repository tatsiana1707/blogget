import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../hooks/useFetch.js';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [dat] = useFetch();
  console.log(dat);

  return (
    <postsContext.Provider value={{dat}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

