'use client';

import TypeIt from 'typeit-react';
import { Slogans } from '@/constants';

function TypeItSlogans() {
  return (
    <TypeIt
      options={{
        strings: Slogans,
        speed: 90,
        waitUntilVisible: true,
      }}
    />
  );
}

export default TypeItSlogans;
