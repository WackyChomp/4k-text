'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Loader from './Loader'
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

/* Individual document will be collaborative */

const CollaborativeRoom = () => {
  return (
    <RoomProvider id='my-room'>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-5">
              <p className='document-title'>Sample title that elevates your life</p> 
            </div>

            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom