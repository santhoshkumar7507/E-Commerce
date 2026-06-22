import React from "react";

export const ClerkProvider = ({ children }: any) => <>{children}</>;
export const useAuth = () => ({ isSignedIn: true, isLoaded: true, userId: "mock_admin_123", signOut: () => {} });
export const useUser = () => ({ 
  user: { 
    fullName: "Admin User", 
    primaryEmailAddress: { emailAddress: "admin@example.com" }, 
    imageUrl: "https://ui-avatars.com/api/?name=Admin&background=random" 
  } 
});

export const useSSO = () => ({
  startSSOFlow: async () => ({ createdSessionId: "mock_session" }),
});
