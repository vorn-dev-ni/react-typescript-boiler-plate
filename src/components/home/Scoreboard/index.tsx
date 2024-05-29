import React from 'react'

type scoreboardProps = {
  score?: string | number,
  highscore?: string | number
}
export const Scoreboard = ({
  score = 0, highscore
}: scoreboardProps) => {
  return (
    <div className='mx-4 lg:mx-0'>
      <h5 className='text-white'>Highest Score : <span className='font-bold text-xl text-green-600'>

        {highscore}
      </span></h5>
      <h5 className='text-white'>Your Score :
        <span className='font-normal text-xl '>

          {score}
        </span></h5>
    </div>
  )
}
