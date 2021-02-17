import React from 'react';
import { SUPDiv } from './style';

const SupCheckbox = ({ onChange }) => (
    <SUPDiv>
        <input type="checkbox" onChange={onChange} />
        <label>your posts</label>
    </SUPDiv>
);

export default SupCheckbox;