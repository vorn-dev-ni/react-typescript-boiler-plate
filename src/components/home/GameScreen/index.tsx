import { motion } from "framer-motion"
import MoleHole from '../MoleHole'
type GameScreenProps = {
  userScore: number | string
  gameMode: any
  count: number | string
  choice: any[]
  countDown: number
  handleHit: () => void
  handleRestart: () => void
  randomIndex: number | null
}
const GameScreen = ({
  userScore,
  gameMode,
  count,
  choice, handleHit, randomIndex, handleRestart, countDown
}: GameScreenProps) => {
  return (
    <div className='bg-slate-200 flex-col items-center '>
      <h1 className='text-3xl font-semibold my-12 mx-3'>

        Score: {userScore}

      </h1>
      <div className='justify-center flex'>
        {
          !gameMode.isStart ? <motion.button

            initial={{ x: "-100vw", y: 4 }}
            animate={{ x: 0, y: 0 }}
            type="button" className="text-white  bg-black hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl" onClick={handleRestart}>


            {
              gameMode.isEnd ? "Restart" : "Start"
            }
          </motion.button> :
            <h1 className='text-4xl font-bold'>

              {
                countDown < 0 ? count : countDown == 0 ? <span className='text-green-600'>Start</span> : <span className='text-red-600'>{countDown}</span>
              }


            </h1>
        }


      </div>

      <div className={`cursor-crosshair flex w-full flex-row justify-center items-center py-36 `} >

        {
          choice.map((item, index) =>
            <MoleHole
              key={index} isHit={false} isVisible={index === randomIndex} onClick={handleHit} />
          )
        }

      </div>

    </div>
  )
}

export default GameScreen
