import { StrictMode } from 'react';
import LoginApp from './LoginApp';
import './Loginindex.css';

function LoginMain() {
  return (
    <StrictMode>
      <LoginApp />
    </StrictMode>
  );
}

export default LoginMain; // Ensure this is the default export
