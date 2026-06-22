import React from "react";
import { Alert } from "react-native";

export const StripeProvider = ({ children }: any) => <>{children}</>;

export const useStripe = () => ({
  initPaymentSheet: async () => {
    console.log("Mock initPaymentSheet called");
    return { error: null };
  },
  presentPaymentSheet: async () => {
    console.log("Mock presentPaymentSheet called");
    Alert.alert("Sandbox Mode", "Payment successful! (Mocked)");
    return { error: null };
  }
});
