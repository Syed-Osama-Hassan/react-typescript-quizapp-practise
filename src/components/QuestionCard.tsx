import React, { useState } from 'react';
import { questionPropsType } from '../Types/data_types';

const QuestionCard: React.FC<questionPropsType> = ({question, options, callback}) => {
    let [selectedAns, setSelectedAns] = useState("");
    
    const handleSelection = (ev: any) =>{
        setSelectedAns(ev.target.value);
    }

    return(
        <div className="quiz-container">
            <div className="question">
                {question}
            </div>

            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
                className="quiz-form">
                {
                    options.map( (opt: string, ind: number) =>{
                        return(
                            <div key={ind}>
                            <label className="radio">
                                <input 
                                    type="radio"
                                    name="opt"
                                    value={opt}
                                    onChange={handleSelection}
                                    checked={selectedAns === opt}
                                    required
                                />
                                {opt}
                            </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className="submit"/>
            </form>
        </div>
    );
}

export default QuestionCard;