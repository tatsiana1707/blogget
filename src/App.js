import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {ModalContextProvider} from './context/modalContext';


function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <ModalContextProvider>
            <Header/>
            <Main/>
          </ModalContextProvider>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
