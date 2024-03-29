// src/pages/EditorComponent.js

import { useEffect, useRef, useState } from "react"
import { initEditor } from "../editor/SmartEditor";

export default function EditorComponent(){
    //입력한 내용을 얻어오기 위한 useRef()
    const inputTitle=useRef();
    const inputContent=useRef();
    //SmartEditor 에 작성한 내용을 textarea 의 value 로 넣어 줄때 필요한 함수가 editorTool 이다 
    const [editorTool, setEditorTool] = useState([])

    useEffect(()=>{
        //initEditor() 함수를 호출하면서 SmartEditor 로 변환할 textarea 의 id 를 전달하면
		//textarea 가 SmartEditor 로 변경되면서 에디터 tool 객체가 리턴된다.  
		setEditorTool(initEditor("content"));
    }, [])

    return (
        <>
            <h3>SmartEditor 테스트</h3>
            <form>
                <div>
                    <label htmlFor="title">제목</label>
                    <input ref={inputTitle}  type="text" name="title" id="title"/>
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea ref={inputContent} name="content" id="content"  rows="10"></textarea>
                </div>
                <button type="submit" onClick={(e)=>{
                    e.preventDefault()
                    //에디터 tool 을 이용해서 SmartEditor 에 입력한 내용을 textarea 의 value 값으로 변환
                    editorTool.exec();
                    //폼 요소에 입력한 내용 읽어오기 
                    const title=inputTitle.current.value;
                    const content=inputContent.current.value;
                    alert(content)
                }}>저장</button>
            </form>
        </>
    )
}