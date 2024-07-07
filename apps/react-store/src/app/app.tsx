// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';
// importing the component from the library
import { Products } from '@react-monorepo/products';

function Home() {
  return <h1>Home</h1>;
}

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
