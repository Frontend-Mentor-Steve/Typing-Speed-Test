import { useState } from "react"
import Logo from './../assets/logo-large.svg'
import Throphy from '../assets/icon-personal-best.svg'
import './Typing.css'

function Navigation() {
  const [highscore, sethighscore] = useState(0)
  return (
    <>
      <header>
        <img src={Logo} />
        <div className="personal">
          <img src={Throphy} />
          <p>Personal Best: <span>{highscore}WPM</span></p>
        </div>
      </header>
    </>
  )
}

function Main() {
  return (
    <>
    </>
  )
}

export default function TypingPage() {
  return (
    <>
      <Navigation></Navigation>
      <Main></Main>
    </>
  )
}
