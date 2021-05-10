import * as React from 'react';
import {useCallback, useRef, useState} from 'react';
import NumberBaseballTry from './NumberBaseballTry';
import {ITries} from '../types';

const getNumbers = (): number[] => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default function () {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState<ITries[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (value === answer.join('')) {
      setTries(t => ([
        ...t,
        {
          type  : value,
          result: '홈런'
        }
      ]));
      setResult('홈런!!');
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      if (input) input.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번을 실패 했습니다. 정답은 ${answer.join('')}`);
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        if (input) input.focus();
      } else {
        console.log(`정답은 ${answer.join('')}`);
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            console.log(`스트라이크! ${answerArray[i]} : ${answer[i]}`);
            strike++;
          } else if (answer.includes(answerArray[i])) {
            console.log(`볼 ${answerArray[i]} : ${answer[i]}`);
            ball++;
          }
        }
        setTries(t => ([
          ...t,
          {
            type  : value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`
          }
        ]));
        setValue('');
        if (input) input.focus();
      }
    }
  }, [value, answer]);

  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <h3>숫자 야구 컴포넌트</h3>
      <p>결과?! {result}</p>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputEl} maxLength={4} value={value} onChange={onChange}/>
      </form>
      <p>시도 : {tries.length}</p>
      {tries.map((v, i) => {
        <NumberBaseballTry key={i} info={v}/>;
      })}
    </>
  );
}
