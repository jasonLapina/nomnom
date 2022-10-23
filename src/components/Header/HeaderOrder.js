import { useState } from 'react';
import Tiptool from '../UI/TipTool';

const HeaderOrder = (props) => {
  const style = { color: 'white' };
  return (
    <Tiptool title='Active Order'>
      <button style={style} onClick={props.onClick}>
        <ion-icon name='reader-outline' />
      </button>
    </Tiptool>
  );
};

export default HeaderOrder;
