import React from 'react'
import { useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image'

// Show every user that can view/edit within the active document as icon

type Props = {}

const ActiveCollaborators = (props: Props) => {
  const others = useOthers();

  const collaborators = others.map((other) => other.info);

  return (
    <ul className="">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id}>
          <Image 
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className='rounded-full bg-pink-300'
            style={{border: `3px solid ${color}`}}
          />
        </li>
      ))}
    </ul>
  )
}

export default ActiveCollaborators