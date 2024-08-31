import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthRequestConfig, useAuthRequest } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet } from 'react-native';

interface UserData {
  name: string;
}

interface CustomAuthRequestConfig extends AuthRequestConfig {
  discovery: {
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
  }
}

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; 

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  userInfoEndpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#4285F4', 
    color: '#fff',
  },
  signOutButton: {
    backgroundColor: '#ddd',
  },
});

export default function GoogleAuthScreen() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: GOOGLE_CLIENT_ID,
      redirectUri: 'https://auth.expo.io/@your-username/your-app-slug',
      scopes: ['openid', 'profile', 'email'],
      discovery,
    },
    Google
  );

  const [user, setUser] = useState<UserData | null>(null);

  const handleSignIn = async () => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const userInfoResponse = await fetch(discovery.userInfoEndpoint, {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      });
      const userInfo = await userInfoResponse.json();

      setUser(userInfo as UserData); 
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          {/* ... */}
          <Button
            title="Sign Out"
            onPress={() => setUser(null)}
            style={styles.signOutButton}
          />
        </>
      ) : (
        <Button
          title="Sign In with Google"
          onPress={() => promptAsync()} 
          style={styles.signInButton}
        />
      )}
    </View>
  );
}