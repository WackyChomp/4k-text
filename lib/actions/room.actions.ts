'use server';      // need this b/c the instance of liveblocks is running on node

import { nanoid } from 'nanoid';
import { liveblocks } from '../liveblocks';
import { RoomAccesses } from '@liveblocks/node';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';


// function creates a new document/room

type CreateDocumentParams = {
  userId: string,
  email: string,
}

export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: 'The Untitled One'
    }

    const usersAccesses: RoomAccesses = {
      [email]: ['room:write']
    }

    const room = await liveblocks.createRoom( roomId, {
      metadata, 
      usersAccesses,
      defaultAccesses: ['room:write']
    });

    revalidatePath('/');

    return parseStringify(room);

  } catch (error) {
    console.log(`Error occurred when attempting to create a room: ${error}`)
  }
}