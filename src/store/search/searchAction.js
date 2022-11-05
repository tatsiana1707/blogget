export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';


export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  search,
});

export const searchRequestSuccess = ({children, after}) => {
  console.log(children, after);
  return {
    type: SEARCH_REQUEST_SUCCESS,
    data: children,
    after,
  };
};

export const searchRequestError = ({error}) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});
