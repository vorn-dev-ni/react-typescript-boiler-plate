import React, { forwardRef } from 'react';

type ModalProps = {
    onClose: () => void;
    highestScore: number;
    yourScore: number;
};

const ModalDialog = forwardRef<HTMLDivElement, ModalProps>(({ onClose, highestScore, yourScore }, ref) => {
    return (
        <div ref={ref}
            id="popup-modal" tabIndex={-1} className=" z-50 hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal"

                        onClick={onClose}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-red-600 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className='text-3xl font-semibold'>TIME'S UP</h3>
                        <div className='my-3'>
                            <h1>Highest Score: <span className='text-xl font-semibold text-green-600'>

                                {highestScore}
                            </span></h1>
                            <h1>Your Score:  <span className='text-lg font-semibold'>

                                {yourScore}
                            </span> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});


export default ModalDialog;
