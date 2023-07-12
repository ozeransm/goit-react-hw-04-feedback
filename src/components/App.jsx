import { useState } from "react";
import css from './App.module.css';
import { SectionTitle } from "./SectionTitle";

export const App = ()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = {
                  good,
                  neutral,
                  bad

                }
  const countTotalFeedback = ()=>{
    return good+neutral+bad;
  }
  
  const handlerBtn = (data)=>{
    switch (data){
    case 'good': setGood(good+1);break;
    case 'neutral': setNeutral(neutral+1);break;
    case 'bad': setBad(bad+1);break;
    default : console.log('No such field');
    }
    
  }

  return (
    <div className={css.common}>
        <h1>Please leave feedback</h1>
        <SectionTitle state={state} total={()=>countTotalFeedback()} handlerBtn={handlerBtn}/>
    </div>
  );
}
