import React from "react";

export const ClerkProvider = ({ children }) => <>{children}</>;
export const useAuth = () => ({ isSignedIn: true, isLoaded: true, userId: "mock_admin_123" });
export const useUser = () => ({ 
  user: { 
    fullName: "Admin User", 
    primaryEmailAddress: { emailAddress: "admin@example.com" }, 
    imageUrl: "https://ui-avatars.com/api/?name=Admin&background=random" 
  } 
});
export const UserButton = () => (
  <div style={{width: 32, height: 32, borderRadius: 16, background: '#4F46E5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
    A
  </div>
);
export const SignIn = () => <div>Login Disabled in Sandbox Mode</div>;
