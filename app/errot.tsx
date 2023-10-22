'use client'

import React, { useEffect } from 'react'
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
    error:Error;
}

const Error: React.FC<ErrorStateProps>= ({error}) => {
    useEffect(() => {
     console.log(error)
      return () => {
        <EmptyState title='Uh Oh' subtitle='Something went wrong.'/>
      }
    }, [error])
    
  return (
    <div>Error</div>
  )
}

export default Error