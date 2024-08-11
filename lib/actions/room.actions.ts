'use server';      // need this b/c the instance of liveblocks is running on node

import { nanoid } from 'nanoid';
import { liveblocks } from '../liveblocks';
import { RoomAccesses } from '@liveblocks/node';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';
import { parse } from 'path';


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

/* ----------------------------------------------------- */

export const getDocument = async ({ roomId, userId}: {roomId:string; userId:string;}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    {/* commented out to allow access for everyone */}
    // const hasAccess = Object.keys(room.usersAccesses).includes(userId);
  
    // if(!hasAccess){
    //   throw new Error('You do not have access to the document');
    // }
  
    return parseStringify(room);

  } catch (error) {
    console.log(`Error occurred when getting a room: ${error}`)
  }
}