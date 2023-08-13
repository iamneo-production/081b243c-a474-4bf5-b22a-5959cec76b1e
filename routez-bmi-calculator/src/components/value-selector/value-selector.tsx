import React, { ChangeEvent } from "react";
import { IconButton } from "@mui/material";

import "./value-selector.css";

type Props = {
    description: string;
    value: number;
    valueOnChange: (value: number) => void;
}

export const ValueSelector = (props: Props) => {
    const handleOnClick = (val: number) => {
        if(val>=0){
            props.valueOnChange(val);
        }
    }

    const handleInputOnChange = (e:ChangeEvent<HTMLInputElement>) =>{
        const inputValue = Number(e.target.value);
        if(inputValue >= 0){
            props.valueOnChange(inputValue);
        }
    }

    return (
        <div className="value-selector">
        <p className="description">{props.description}</p>
        <div className="selector">
            <IconButton aria-label="arrow-back" size="small" className="icon-button" onClick={() => handleOnClick(props.value-1)}> 
                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Back Arrow Icon">
                        <rect width="34" height="34" rx="17" transform="matrix(-1 0 0 1 34 0.5)" fill="#414141"/>
                        <path id="Vector 1" d="M18 11.5L13.5966 16.5744C13.2584 16.9641 13.2722 17.5471 13.6285 17.9203L18 22.5" stroke="#63FFA1" strokeWidth="3" strokeLinecap="round"/>
                    </g>
                </svg>
            </IconButton>
            <input type="number" className="input-field" min="0" value={props.value} onChange={handleInputOnChange}/>
            <IconButton aria-label="arrow-back" size="small" className="icon-button" onClick={() => handleOnClick(props.value+1)}> 
                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Forward Arrow Icon">
                        <rect y="0.5" width="34" height="34" rx="17" fill="#414141"/>
                        <path id="Vector 1" d="M16 11.5L20.4034 16.5744C20.7416 16.9641 20.7278 17.5471 20.3715 17.9203L16 22.5" stroke="#63FFA1" strokeWidth="3" strokeLinecap="round"/>
                    </g>
                </svg>
            </IconButton>
        </div>
      </div>
    );
}