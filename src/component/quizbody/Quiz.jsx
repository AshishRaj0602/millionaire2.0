import React,{useState,useEffect}from 'react'
import useSound from 'use-sound';
// import play from '../Assert/waw.mp3';
import correct from '../Assert/correct2.mp3';
import wrong from '../Assert/wron.mp3';
import "./quiz.css"
const Quiz = ({data,setStop,queNum,setqueNum}) => { 
  const [question, setQuestion] =useState(null);
  const [selectedAns, setSelectedAns] =useState(null);
  const [className, setClassName] =useState("answer");
  // const [letsPlay] =useSound(play);
  const [correctAnswer] =useSound(correct);
  const [wrongAnswer] =useSound(wrong);
  //  useEffect(()=>{
  //     letsPlay(); 
  //    },[letsPlay])
  const delay = (duration,callback)=>{
    setTimeout(()=>{
      callback();
    },duration);
  }
  const handleClick=(opt)=>{
    setSelectedAns(opt);
    setClassName("answer active");
    delay(0,()=>setClassName(opt.correct ? "answer correct" : "answer wrong"));
    delay(3000,()=>{
      if(opt.correct){
        correctAnswer();
        setqueNum((prev)=> prev+1);
        setSelectedAns(null);
      }
      else{
        setStop(true);
        wrongAnswer();
      }
    });
    // setTimeout(()=>{
    //   setClassName(opt.correct ? "answer correct" : "answer wrong");
    //    },3000);
     }

    //  useEffect(()=>{
    //   letsPlay(); 
    //  },[letsPlay])
  useEffect(() => {
    setQuestion(data[queNum-1]);
  }, [data,queNum]);
  return (
    <div className='quiz'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {
          question?.answers.map((opt)=>{
            return <div className={selectedAns ===opt ? className:"answer"} onClick={()=>handleClick(opt)}>{opt?.text}</div>
          })
        }
        {/* <div className="answer">OOPs</div>
        <div className="answer">OOPs</div>
        <div className="answer">OOPs</div>
        <div className="answer">OOPs</div> */}
      </div>
    </div>
  )
}

export default Quiz
