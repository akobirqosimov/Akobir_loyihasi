import { SignInButton, SignedOut } from '@clerk/clerk-react'
import React from 'react'

function Auth() {
  return (
    <div className=' h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center'>
      <SignedOut>
        <SignInButton className="bg-green-700 text-white font-bold py-3 px-9 rounded-md text-2xl" />
      </SignedOut>
    </div>
  )
}

export default Auth