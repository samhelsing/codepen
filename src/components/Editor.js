import React,{useRef, useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
    // const editor = useRef()
    // const wrapper = useRef()
    // const editorWillUnmount = () => {
    //   editor.current.display.wrapper.remove()
    //   wrapper.current.hydrated = false
    // }
    const [open, setOpen] = useState(true)

    const {
        language,
        displayName,
        value,
        onChange,
    } = props
    function handleChange(editor,data, value){
        onChange(value)
        
    }
  return (
    <>
        <div className={`editor-container ${open ? '': 'collapsed'} `}>
            <div className='editor-tittle'>
                {displayName}
                <button 
                    className="collapsed-btn" 
                    onClick={()=> setOpen(preValue => !preValue)}>
                    <FontAwesomeIcon icon={open? faCompressAlt : faExpandAlt } />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange = {handleChange}
                value= {value}
                className="editor-wrapper"
                options={{
                    lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
                }}
                
                // editorDidMount={(e) => editor.current = e}
                // editorWillUnmount={editorWillUnmount}
            />
            
        </div>
    </>
  )
}
