'use client'

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions'
import { useRouter } from 'next/navigation'

type AddDocumentBtnProps = {
  userId: string,
  email: string,
}

const AddDocumentBtn = ({ userId, email}: AddDocumentBtnProps) => {
  const addIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1wbHVzIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik04IDEyaDgiLz48cGF0aCBkPSJNMTIgOHY4Ii8+PC9zdmc+'

  const router = useRouter();

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if(room) router.push(`/documents/${room.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button type='submit' onClick={addDocumentHandler} 
      className='flex gap-2 shadow-md hover:bg-green-800'
    >
      <Image 
        src={addIcon} alt='add-document-icon'
        width={24} height={24}
        className='bg-orange-500 rounded-2xl'
      />
      <p className="hidden sm:block text-orange-500">Start a new blank document</p>
    </Button>
  )
}

export default AddDocumentBtn