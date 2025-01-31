import React from 'react'

const Prop = ({setup,punchline}) => {
  return (
    <div>
        <h1>Joke Component.</h1>
        <p>{setup && <p> setup:{setup}</p>}
            {punchline}.
        </p>

    </div>
  )
}

export default Prop




