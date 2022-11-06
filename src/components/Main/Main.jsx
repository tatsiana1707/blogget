import List from './List';
import {Navigate, Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import Home from '../../pages/Home';
import {MainLayout} from '../../pages/MainLayout';
import style from '../Main/Main.module.css';
import Layout from '../Layout';
import Tabs from '../Main/Tabs';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/auth' element={<Home/>} />
          <Route path='category/:page' element={<List />}>
            <Route path='post/:id' element={<Modal/>}/>
          </Route>
          <Route path='category/home' element={<Navigate to='/' />}/>
          <Route path='auth' element={<Navigate to='/' />} />
        </Route>
        <Route path='*' element={<Home text='404'/>} />
      </Routes>
    </Layout>
  </main>
);


