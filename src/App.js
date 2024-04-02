import { useState, useCallback, useEffect } from "react";
function App() {
  const [password,setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  
  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklxcvbnm";
    if(charAllowed)  str+="!@#$%^&*(){}[]:;><~";
    if(numberAllowed) str+="0123456789";
    
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[setPassword,length,numberAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <>
      <div className="className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            className='outline-none w-full py-1 px-3'
            readOnly
            placeholder="Password"
            value={password}
          />
          <button className="text-white bg-blue-700 px-4 py-1">copy</button>
        </div>
        <div className="flex text-smgap-x-2">
          <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={5}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 px-2">
            <input
              type="checkbox"
              defaultChecked = {numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=> !prev)
              }}
              id="numberInput"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked = {charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
    );
}

export default App;
