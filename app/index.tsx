import { SignOutButton } from "@/app/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import './globals.css';

export default function Page() {
  const { user } = useUser();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }}>
      <SignedIn>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 16
        }}>
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in" style={{ marginBottom: 8 }}>
          <Text style={{ color: '#3B82F6', fontSize: 16 }}>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text style={{ color: '#3B82F6', fontSize: 16 }}>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
