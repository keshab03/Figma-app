import React from 'react';
import { Link} from 'react-router-dom';
import './nav.css'
const Nav = () => {
  
  return (
    <section id='nav'>
      <div id='div1'>
        <Link to="/figmawind">
          <svg class="svg" width="38" height="57" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-5.247 0-9.5-4.253-9.5-9.5z" fill-rule="nonzero" fill-opacity="1" fill="#1abcfe" stroke="none"></path><path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5C4.253 57 0 52.747 0 47.5z" fill-rule="nonzero" fill-opacity="1" fill="#0acf83" stroke="none"></path><path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5C38 4.253 33.747 0 28.5 0H19z" fill-rule="nonzero" fill-opacity="1" fill="#ff7262" stroke="none"></path><path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill-rule="nonzero" fill-opacity="1" fill="#f24e1e" stroke="none"></path><path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill-rule="nonzero" fill-opacity="1" fill="#a259ff" stroke="none"></path></svg>
        </Link>
        
        <Link to="/community"> <svg class="svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.018 16.5c.219 3.104 2.46 5.649 5.415 6.324-.81-1.325-1.365-3.646-1.427-6.324H9.018zM16 24c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8zM14.434 9.176c-2.955.675-5.197 3.22-5.416 6.324h3.988c.062-2.678.618-5 1.428-6.324zm3.133 0c2.954.675 5.196 3.22 5.415 6.324h-3.988c-.062-2.678-.618-5-1.427-6.324zm5.415 7.324h-3.988c-.062 2.678-.618 5-1.427 6.324 2.954-.675 5.196-3.22 5.415-6.324zm-5.797 4.806c.452-1.206.763-2.891.809-4.806h-3.988c.046 1.915.357 3.6.809 4.806.247.658.517 1.121.766 1.402.25.282.394.292.419.292.026 0 .17-.01.42-.292.248-.28.518-.744.765-1.402zm-2.37-10.612c-.452 1.205-.762 2.891-.809 4.806h3.988c-.046-1.915-.357-3.6-.809-4.806-.247-.658-.517-1.121-.765-1.402C16.17 9.01 16.024 9 16 9c-.025 0-.17.01-.42.292-.248.28-.518.744-.765 1.402z" fill-rule="evenodd" fill-opacity=".9" fill="#000" stroke="none"></path></svg>Community</Link>

        <Link to="/body" ><i class="fa-solid fa-house"></i></Link>

        <div id='div2'>
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input id='input' type="text" placeholder='Search for resources like "portfolio"' />
        </div>

        <div id='div3'>
          <Link id='login' to="./login"><button>login</button></Link>
          <Link id='signup' to="./signup"><button>sign up</button></Link>
        </div>
      </div>
    </section>
  )
}
export default Nav;
