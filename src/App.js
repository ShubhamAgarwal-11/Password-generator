import { useState } from "react";
function App() {
  const [password,setPassword] = useState("");
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
      </div>
    </>
    );
}

export default App;
