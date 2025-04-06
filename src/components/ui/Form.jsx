import React from 'react'

export default function Form({children}) {
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()}>
        {children}
    </form>
  )
}
