import React from 'react'

export default function NumberIndicator({number, total}) {
    // let 
  return (
    <div>
        <h4>Question {number>0 && <span>{number}</span>} {number<1 && <span>{number+1}</span>} of {total}</h4>
    </div>
  )
}
