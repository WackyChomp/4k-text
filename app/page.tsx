import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}

const Home = async (props: Props) => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in')

  const documents = [];

  return (
    <main className='home-container'>
      <Header>
        <div className="bg-red-400 p-1.5 gap-4 flex items-center">
          Notification

          <Button>Button</Button>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
        <div>
          {/* List of options */}
        </div>
      ): (
        <div className='document-list-empty'>
          <Image
            src='../next.svg'
            alt='logo-name-text'
            width={120}
            height={40}
            className='bg-blue-400 p-2'
          />

          AddDocumentBtn
        </div>
      )}
    </main>
  )
}

export default Home