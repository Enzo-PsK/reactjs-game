import React from "react";

export default function Square(props) {
    let className = 'square'
    if(props.value === 'X'){
        className += ' xColor'
    }
    if(props.value === 'O'){
        className += ' oColor'
    }
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
