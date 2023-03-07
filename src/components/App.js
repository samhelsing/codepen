
import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import localStorage from "../hooks/localstorage";
function App() {
  const [html, setHtml] = localStorage('html','')
  const [css, setCss] = localStorage('css', '')
  const [js, setJs] = localStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
            `)
  },500)
  return () => clearTimeout(timeout)
    },[html,css,js])


   

    
  return (
    <>
      <div className="code top-code">
      <Editor 
        language='xml' 
        displayName='HTML' 
        value={html}
        onChange={setHtml} 
      />
     <Editor 
        language='css' 
        displayName='CSS' 
        value={css}
        onChange={setCss} 
      />
    <Editor 
      language='javascript' 
      displayName='JS' 
      value={js}
      onChange={setJs} 
      />
      </div>
      <div className="code">
        <iframe
          title="output"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
