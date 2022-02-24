import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import {useState , useEffect}  from 'react';
import axios from 'axios';

    
const Result = () => {
    const [title2,setTitle2] = useState('')
    const [result, setResult] = useState(null)
    const { search } = useLocation();

    useEffect(() => {
        const resultAPI = async () => {
            setTitle2(await axios.get('https://mbti-api-thbds.run.goorm.io/mbtilist'));
        };
        resultAPI();
        if (search) {
            const value = search.substring(7)
        }
    }, [])

    useEffect(() => {
        if (title2 && search) {
            const value = search.substring(7)
            const res = title2?.data?.find(el => el.Name === value)
            setResult(res)
        }
    }, [title2, search])

    console.log("res >>" , result)
    return (
         <>
        <Link to='/'>
            <button>테스트 다시하기</button>
        </Link>
        </>
    )
}
              
export default Result;