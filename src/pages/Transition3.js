// src/pages/Transition3.js

import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
//css 로딩
import './css/transition3.css'

const modes = ["out-in", "in-out"];

export default function Transition3(){
    
    const [mode, setMode] = useState("out-in");
    const [state, setState] = useState(true);
    const helloRef = useRef(null);
    const goodbyeRef = useRef(null);
    const nodeRef = state ? helloRef : goodbyeRef;

    return (
      <>
        <div className="label">Mode:</div>
        <div className="modes">
          {modes.map((m) => (
            <Form.Check
              key={m}
              label={m}
              type="radio"
              name="mode"
              checked={mode === m}
              value={m}
              onChange={(event) => {
                //변경된 radio 의 value 값을 읽어와서 mode 에 반영한다 
                setMode(event.target.value);
              }}
            />
          ))}
        </div>
        <div className="main">
          <SwitchTransition mode={mode}>
            <CSSTransition
              key={state}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                //transition 이 끝났을때 실행할 함수를 등록한다 
                //done 함수가 호출되어야 다음 동작이 이어진다 
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div ref={nodeRef} className="button-container">
                <Button onClick={() => setState((state) => !state)}>
                    {/* state 가 true 면 "Hello, world" false 면 "Goobbye, world" 출력 */}
                  {state ? "Hello, world!" : "Goodbye, world!"}
                </Button>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </>
    );
}

