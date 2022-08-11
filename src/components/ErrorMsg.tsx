import React from 'react'

interface IErrorMsgProps {
  error: string
}

export function ErrorMsg({ error }: IErrorMsgProps) {
  return <p className='text-center text-red-600'>{error}</p>
}
