import { useState } from "react";
import languages from "./assets/lang";
function App() {
 const [currentLang,setLang] = useState(languages[0]);
  return (
    <>
    <header>
      <h1 className="head">Learn web development</h1>
    </header>
     <div className="container">
        <div className="row">
          {languages.map((language,index)=> (
            <button onClick={()=> setLang(language)}>{language.title}</button>
          ))}
        </div>
        <div className="card">
          <h2>{currentLang.title}</h2>
          <p>{currentLang.description}</p>
        </div>
      
     </div>
    </>
  )
}

export default App
