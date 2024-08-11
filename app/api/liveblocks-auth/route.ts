import { liveblocks } from "@/lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


// Used snippets from --- https://liveblocks.io/docs/authentication/access-token/nextjs


export async function POST(request: Request) {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect('/sign-in');

  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;
  // Get the current user from your database (clerk)
  const user = {
    id,       // prop of clerkUser --- clerkUser.id
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress,
      avatar: imageUrl,
      color: '[RANDOM PLACEHOLDER]'
    },
  }


  // Authorize the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
    userId: user.info.email,
    groupIds: [],
    },
    {
      userInfo: user.info
    }
  
  );
  return new Response(body, { status });
}

