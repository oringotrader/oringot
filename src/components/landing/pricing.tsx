'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function PricingSection() {
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  // Dynamically load Razorpay SDK script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => console.error("Razorpay SDK failed to load");
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!(window as any).Razorpay || !isRazorpayLoaded) {
      alert("Payment system is still loading. Please try again shortly.");
      return;
    }

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      alert("Razorpay key not set in environment variables.");
      return;
    }

    const options = {
      key: razorpayKey,
      amount: 499900, // Amount in paisa
      currency: "INR",
      name: "OringoTrader",
      description: "All-Inclusive Access",
      image: "/logo.png", // optional logo
      handler: function (response: any) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#f97316",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="text-center mt-12">
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg"
        onClick={handlePayment}
        disabled={!isRazorpayLoaded}
      >
        Get All–Inclusive Access
      </Button>
    </div>
  );
}
