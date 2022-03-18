import { magicAdmin } from "../../lib/magic";
import jwt from "jsonwebtoken";
import { isNewUser } from "../../lib/db/hasura";

export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const auth = req.headers.authorization;
      const didToken = auth ? auth.substr(7) : "";
      console.log(didToken);
      const metadata = await magicAdmin.users.getMetadataByToken(didToken);
      console.log({ metadata });
      const { issuer, publicAddress, email } = metadata;
      const token = jwt.sign(
        {
          issuer,
          publicAddress,
          email,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${metadata.issuer}`,
          },
        },
        process.env.SECRET_PHRASE
      );
      console.log({ token });

      //CHECK IF USER EXISTS

      const isNewUserQuery = await isNewUser(token);
      res.send({ done: true, isNewUserQuery });
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Something went wrong loggin in", error);
      res.status(500).json({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
