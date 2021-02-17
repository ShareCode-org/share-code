import React from 'react';
import { SUPDiv } from './style';

const SupCheckbox = ({ onChange }) => (
    <SUPDiv>
        <input
            className='checkbox'
            type="checkbox"
            onChange={onChange}
        />
        <label>your posts</label>
    </SUPDiv>
);

export default SupCheckbox;