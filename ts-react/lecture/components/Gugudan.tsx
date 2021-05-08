import * as React from 'react'
import {useState} from 'react'

export default function Gugudan() {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9))
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9))
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (parseInt(value) === first * second) {
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setResult('정답입니다.')
        } else {
            setResult('땡!!')
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <p>{first} 곱하기 {second}는?</p>
            <form onSubmit={onSubmit}>
                <input type="number" onChange={onChange} value={value}/>
            </form>
            <p>결과는? {result}</p>
        </>
    )
}
