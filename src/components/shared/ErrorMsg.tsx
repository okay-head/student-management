import React from 'react'
type TChildren = {
  children: React.ReactNode
}
export default function ErrorMsg({ children }: TChildren) {
  return <p className='error-elements text-xs text-primary-red'>{children}</p>
}
