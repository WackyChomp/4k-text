import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import AddDocumentBtn from '@/components/AddDocumentBtn';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type Props = {}

const Home = async (props: Props) => {
  const documentIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZpbGUtdGV4dCI+PHBhdGggZD0iTTE1IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY3WiIvPjxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0Ii8+PHBhdGggZD0iTTEwIDlIOCIvPjxwYXRoIGQ9Ik0xNiAxM0g4Ii8+PHBhdGggZD0iTTE2IDE3SDgiLz48L3N2Zz4='

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
            src={documentIcon}
            alt='logo-name-text'
            width={120}
            height={40}
            className='bg-pink-700 hover:bg-pink-500 p-2 rounded-2xl'
          />

          <AddDocumentBtn 
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  )
}

export default Home