'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Loader from './Loader'
import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';
import ActiveCollaborators from './ActiveCollaborators';
import { Input } from './ui/input';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';

/* Individual document will be collaborative */

type CollaborativeRoomProps ={
  roomId: string,
  roomMetaData: any,
}

const CollaborativeRoom = ({ roomId, roomMetaData }: CollaborativeRoomProps) => {
  const currentUserType = 'editor';     // change later on to be more dynamic

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(roomMetaData.title)
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {}

  useEffect(()=> {
    const handleClickOutside = (e:MouseEvent) =>{
      if(containerRef.current && !containerRef.current.contains(e.target as Node)){
        setEditing(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div ref={containerRef} className="flex w-fit items-center justify-center gap-5">
              {editing && !loading ? (
                <Input 
                  type='text'
                  value={documentTitle}
                  ref={inputRef}
                  placeholder='Enter Title Plz'
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHandler}
                  disabled={!editing}
                  className='bg-blue-700'
                />
              ): (
                <>
                <p className='document-title'>{documentTitle}</p>
                </>
              )}


              {/* Editing state */}
              {currentUserType === 'editor' && !editing && (
                <Image
                  src='/next.svg'
                  alt='edit'
                  width={26}
                  height={26}
                  onClick={() => setEditing(true)}
                  className='cursor-pointer hover:bg-red-400 hover:mx-3'
                />
              )}

              {/* Not editing state */}
              {currentUserType !== 'editor' && !editing && (
                <h1 className='text-2xl'>View Only</h1>
              )}

              {loading && <p className='text-2xl text-green-600'>saving...</p>}
            </div>

            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-7">
              <ActiveCollaborators />
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