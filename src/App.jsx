import { useState } from 'react'
import './App.css'
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Result from "./components/Result";
function App() {
  
  const [vis,setvis]=useState(1);
  const [ans,setans]=useState(0);
  const [eg,seteg]=useState(0);

  return (
    <div className='w-[100vw] h-[100vh] bg-blue-950 flex flex-col items-center justify-center gap-y-10'>
      <p className='text-white text-3xl font-bold'>I Can Read Your Mind !</p>

      <div>
        {vis==1 && <Step1 vis={vis} setvis={setvis}/>}
        {vis==2 && <Step2 vis={vis} setvis={setvis}/>}
        {vis==3 && <Step3 vis={vis} setvis={setvis} setans={setans}/>}
        {vis==4 && <Step4 vis={vis} setvis={setvis}/>}
        {vis==5 && <Step5 vis={vis} setvis={setvis}/>}
        {vis==6 && <Result vis={vis} setvis={setvis} ans={ans}/>}
      </div>

    </div>
  )
}

export default App
