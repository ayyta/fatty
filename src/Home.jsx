import { Link } from 'react-router-dom'
import { useState } from 'react'
import gif from './giphy.gif'

function Home () {
  const nearDistance = 70;
  const moveAmount = 1000;
  const containerW = window.innerWidth-100;
  const containerH = window.innerHeight-50;

  const [position, setPosition] = useState({top: 552, left: 1000})

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const buttonX = position.left + e.currentTarget.offsetLeft;
    const buttonY = position.top + e.currentTarget.offsetTop;

    const deltaX = mouseX - buttonX;
    const deltaY = mouseY - buttonY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distance < nearDistance) {
      let newLeft = position.left + (deltaX / distance) * moveAmount
      let newTop = position.top + (deltaY / distance) * moveAmount

      newLeft = Math.max(0, Math.min(containerW-100, newLeft))
      newTop = Math.max(0, Math.min(containerH-100, newTop))
      setPosition({top: newTop, left: newLeft})
    }
  }
  return (
    <>
      <div className="all-container" onMouseMove={handleMouseMove}>
        <div className="question-container">
          <p className="q">Are you a fatass?</p>
          <img src={gif} className="gif" allowFullScreen></img>


        </div>
        <Link to="/guilty">
          <button className="yes-b">Yes</button>
        </Link>
        <button className="no-b" style={{
          top: `${position.top}px`,
          left: `${position.left}px`
        }}>No</button>

      </div>
    </>

  )


}



export default Home