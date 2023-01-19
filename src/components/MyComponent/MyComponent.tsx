import React from 'react'

export interface MyComponentProps {
  name: string
}

const MyComponent = (props: MyComponentProps) => {
  return (
    <>
      <p>Hello, {props.name}</p>
    </>
  )
}

export default MyComponent
