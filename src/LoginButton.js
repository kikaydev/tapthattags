import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Context } from "./Context";
import { auth } from "./firebase";
import { signInWithGoogle } from "./signInWithGoogle";
import { Button } from "./styled";

export const LoginButton = () => {
  const { user } = useContext(Context);

  return (
    <div>
      {!user ? (
        <Button onClick={() => signInWithGoogle()}>Sign In</Button>
      ) : (
        <Button onClick={() => signOut(auth)}>Logout</Button>
      )}
    </div>
  );
};
