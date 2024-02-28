// src/pages/Home.js

import axios from "axios"
import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home(){

    const [notice, setNotice] = useState([])

    useEffect(()=>{
        //공지사항 받아오기
        axios.get("/notice")
        .then(res=>setNotice(res.data))
        .catch(error=>console.log(error))
    }, [])

    return (
        <>
            <h1>인덱스 페이지입니다</h1>
            <ul>
                <li><Link to="/editor">SmartEditor 테스트</Link></li>
            </ul>
            <h2>공지사항</h2>
            <ListGroup as="ol" numbered>
                {notice.map((item, index)=><ListGroup.Item as="li" key={index}>{item}</ListGroup.Item>)}
            </ListGroup>
        </>
    )
}