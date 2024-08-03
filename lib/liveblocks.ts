import { Liveblocks } from "@liveblocks/node";

// Creates instance with api key
// api key found in -- .env.local

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
