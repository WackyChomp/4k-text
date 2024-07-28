import React from 'react';
import { Editor } from '@/components/editor/Editor';

type Props = {}

const Document = (props: Props) => {
  return (
    <div className="">
      <h1 className='text-3xl'>Document ID: INSERT NUMBER HERE</h1>
      <Editor />
    </div>
  )
}

export default Document