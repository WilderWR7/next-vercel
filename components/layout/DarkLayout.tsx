import React, { FC, ReactNode } from 'react'


type ComponentNameProps= {
  children: ReactNode
}

export const DarkLayout: FC<ComponentNameProps> = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '10px'
    }} >
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
