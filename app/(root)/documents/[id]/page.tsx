import { Editor } from '@/components/editor/Editor';
import Header from '@/components/Header';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

type Props = {}

const Document = (props: Props) => {
  return (
    <div className="">
      <h1 className='text-3xl m-1'>Document ID: INSERT NUMBER HERE</h1>
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

    
  )
}

export default Document