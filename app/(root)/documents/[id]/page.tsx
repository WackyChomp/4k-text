import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

{/*
Documents page with unique id
Renders CollaborativeRoom component
*/}


const Document = async ({ params: {id} }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  })

  if(!room) redirect('/');    // go back to home page

  return (
    <main className="flex w-full flex-col items-center">
      <h1 className='text-3xl m-1'>Document ID: INSERT NUMBER HERE</h1>
      <CollaborativeRoom 
        roomId={id}
        roomMetaData={room.metadata}
      />
    </main>
    
  )
}

export default Document