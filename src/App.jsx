import './App.css';
import { NavLink } from 'react-router';

function App() {
  return (
    <>
      <h1>Trang chủ</h1>
      <NavLink to="/vite-react-deploy/register">Đăng ký</NavLink> |{' '}
      <NavLink to="/vite-react-deploy/login">Đăng nhập</NavLink> |{' '}
      <NavLink to="/vite-react-deploy/dashboard">Quản trị</NavLink>
      <div>
        <p>
          <NavLink to="/vite-react-deploy/posts/1">
            React khai tử công cụ create-react-app
          </NavLink>
        </p>
        <p>
          <NavLink to="/vite-react-deploy/posts/2">React 19 có gì mới?</NavLink>
        </p>
      </div>
    </>
  );
}

export default App;
