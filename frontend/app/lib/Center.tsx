import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Center(props: Props) {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen">
      {props.children}
    </div>
  )
}
