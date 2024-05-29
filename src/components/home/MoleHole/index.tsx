import { motion } from 'framer-motion'
import moleImage from "../../../assets/images/mole.png"
import holeImage from "../../../assets/images/hole2.png"
const MoleHole = (
    {
        isVisible = false,
        isHit = false,
        onClick
    }: {
        isVisible: boolean
        isHit: boolean,
        onClick?: () => void
    }
) => {
    return (
        <div className='flex-row items-center relative mx-10'>
            {isVisible ? <div className='img '>
                {
                    !isHit && <motion.img

                        initial={{
                            y: 15
                        }}
                        animate={{
                            y: 0
                        }}
                        onClick={onClick}
                        className='w-full h-20 text-center object-contain absolute bottom-4 z-50 '
                        src={moleImage} alt="mold-image" >

                    </motion.img>
                }
            </div> : <>
                <div
                    className='w-full h-20 text-center object-contain absolute bottom-4 z-50 '
                ></div>
            </>}
            <div className="">
                <img
                    onClick={onClick}
                    className='w-[100px] text-center object-contain '
                    src={holeImage} alt="mold-image" />
            </div>
        </div>
    )
}

export default MoleHole
