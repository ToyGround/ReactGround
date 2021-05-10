import * as React from 'react';
import {ITries} from '../types';

const NumberBaseballTry: React.FC<{ info: ITries }> = ({info}) => {
  return (
    <>
      <p>{info.type}</p>
      <p>{info.result}</p>
    </>
  );
};
export default NumberBaseballTry;