import React from 'react'
import Question from '../components/question'
import Timer from '../components/timer'
import { qe } from '../data/q'

export default function Home() {
  return (
    <div>
        <Timer/>
        <Question q={qe.questions} title={qe.title}/>
    </div>
  )
}
