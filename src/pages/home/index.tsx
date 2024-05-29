import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import moleImage from "../../assets/images/mole.png"
import startSound from "../../assets/audio/startsound.mp3"
import TimeUpSound from "../../assets/audio/timeup.mp3"
import HitSound from "../../assets/audio/tick.mp3"
import YaySound from "../../assets/audio/yay.mp3"
// import hammerImage from "../../assets/images/hammer.png"
import { Scoreboard } from '../../components/home/Scoreboard'
import Footer from '../../components/home/Footer'
import GameScreen from '../../components/home/GameScreen';
import ModalDialog from '../../components/home/DialogTimeup';
import { getUserHS, setUserHs } from '../../utils/getUserInfo';
const HomePage = () => {
  const timeUpSound = new Audio(TimeUpSound)
  const hitSound = new Audio(HitSound)
  const yaySound = new Audio(YaySound)
  const StartSound = new Audio(startSound)
  const choice = [1, 2, 3]
  const [randomIndex, setRandom] = useState<number | null>(null)
  const [gameMode, setGameMode] = useState({
    isStart: false,
    isEnd: false
  })
  const [count, setCount] = useState(15)
  const [countDown, setCountdown] = useState(3)
  const [modal, setModal] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [hasHit, setHit] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null);

  const getRandom = (max: number) => Math.floor(Math.random() * max)
  const handleHit = () => {
    hitSound.volume = 0.2

    hitSound.play()
    setRandom(-1)
    setHit(true)
  }
  const onClose = () => {
    modalRef.current!.classList.remove("flex")
    modalRef.current!.classList.add("hidden")
    setModal(false)
  }

  const checkScore = async () => {
    if (userScore > highscore) {
      yaySound.volume = 0.2
      yaySound.play()

      await setUserHs(userScore)
      setHighscore(userScore)
    }
  }
  const handleRestart = () => {
    setGameMode({
      isStart: true,
      isEnd: false
    })
    setCount(15)
    setUserScore(0)
    setCountdown(3)
  }
  useEffect(() => {
    let intervalid: any
    let intervalcount: any
    if (gameMode.isStart) {
      StartSound.volume = 0.2
      StartSound.play()

      intervalcount = setInterval(() => {
        setCountdown(pre => pre - 1)
      }, 1000)

      setTimeout(() => {

        intervalid = setInterval(() => {
          const random = getRandom(choice.length)
          setRandom(random)
          setCount(pre => pre - 1)



        }, 1000)
      }, 4000)


      setTimeout(() => {
        setTimeout(() => {
          setGameMode({
            isStart: false,
            isEnd: true
          })

          setHit(false)
          setRandom(-1)
          clearInterval(intervalid)
        }, count * 1000)
      }, 4000)

    }

    if (gameMode.isEnd) {
      checkScore()
      timeUpSound.play()

      modalRef!.current!.classList.remove('hidden');
      setModal(true)

      modalRef!.current!.classList.add('flex');
    }

    return () => {
      clearInterval(intervalid)
      clearInterval(intervalcount)
    }
  }, [gameMode])


  useEffect(() => {
    if (hasHit) {
      setUserScore(pre => pre = pre + 1)
      setHit(false)
    }

  }, [hasHit])

  const getUserHighscore = async () => {
    const score = await getUserHS()
    setHighscore(+score)
  }

  useEffect(() => {
    getUserHighscore()
  }, [])


  return (
    <div className='max-w-[1200px] mx-auto my-7 space-y-7  lg:px-0'>
      <motion.h1 animate={{ fontSize: "36px", color: "white" }} className=' text-center font-semibold'>
        Wrack a Mole 🛠️
      </motion.h1>


      <Scoreboard highscore={highscore} score={userScore} />
      <img
        className='w-16 h-16 mx-4 lg:mx-0'
        src={moleImage} alt="mold-image" />

      <GameScreen countDown={countDown} handleRestart={handleRestart} choice={choice} gameMode={gameMode} count={count} randomIndex={randomIndex} handleHit={handleHit} userScore={userScore} />
      <Footer />

      {
        modal && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      }

      <ModalDialog highestScore={highscore} onClose={onClose} yourScore={userScore} ref={modalRef} />

    </div>
  )
}

export default HomePage