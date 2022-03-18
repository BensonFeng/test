import { Magic } from "magic-sdk";

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
  );
};

export const magic = createMagic();

console.log("Magic", magic);

// const didToken = await magic.auth.loginWithMagicLink({
//   email,
//   redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
// });
