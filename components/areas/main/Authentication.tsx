import React from 'react';
import { Button } from '../../primitives/Base';

export default function Authentication() {
  return <>
        {Button("Log in")}
        <div className='ml-2' />
        {Button("Sign up in")}
    </>;
}
