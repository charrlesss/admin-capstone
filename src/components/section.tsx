import React from 'react'

export const Section:React.FC<{children:JSX.Element}> = ({children}):JSX.Element => {
  return (
    <section className='container mx-auto border'>
        {children}
    </section>
  )
}
