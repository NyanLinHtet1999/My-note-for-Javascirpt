'use client';
// import './ResetCounter.css';
import {useState} from "react";

export default function ResetCounter()
{
    const [showB, setShowB] = useState(false);
    return (
        <div>
            <Counter />
            {showB && <Counter />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}
function Counter() {
    const [score, setScore] = useState(0);
  

    return (
        <div>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}