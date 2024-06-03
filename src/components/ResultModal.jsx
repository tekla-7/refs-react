import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom'
const resultMOdal=forwardRef( function ResultModal({ onReset, targetTime , timeRemaining},ref){
    // const dialog=useRef()
    // useImperativeHandle(ref,()=>{
    //     return{
    //         open(){
    //             dialog.current.showModal()
    //         }
    //     }
    // })
    const userLost=timeRemaining<=0;
    const formattedTime=(timeRemaining/1000).toFixed(2)
    const score=Math.round(1-timeRemaining/(targetTime *1000))*100;
    return createPortal(<dialog ref={ref} className="result-modal" >
        {userLost && <h2>Your lost </h2>}
        {!userLost &&<h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime} score</strong></p>
        <p>Ypu stopped the timer with <strong>{formattedTime} second left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog> , document.getElementById('modal'))

})
export default resultMOdal