import {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])


  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <a href= "/">
          <li className="items">Home</li>
        </a>
        <a href= "/profile">
         <li className="items">Profile</li>
        </a>
        <a href= "/test">
          <li className="items">Test</li>
        </a>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}
