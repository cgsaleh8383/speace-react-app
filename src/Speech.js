import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


const Speech = () => {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
    return (
        <div className='speech'>
            <div className="group">
                <h1>Speech Synthesis App</h1>
            </div>
            <div className="group">
                <textarea value={value} onChange={e => setValue(e.target.value)} cols="30" rows="10" placeholder="input speech..."></textarea>
            </div>
            <div className="group">
                <button onClick={() => speak({ text: value })}>Speech</button>
            </div>
        </div>
    );
};

export default Speech;