import { Redirect, Stack } from "expo-router";
import { useAuth } from "../clerk-mock";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null; // for a better ux

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
