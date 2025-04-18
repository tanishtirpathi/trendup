import React, { useState } from "react";
import RightBar from "../rightBar"; // Adjust path as needed
import "./preimum.css";
import { BorderBeam } from "../magicui/border-beam";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Premium() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹215.87",
      billed: "₹2,590.48 billed annually",
      features: [
        "✓ Small reply boost",
        "✓ Encrypted direct messages",
        "✓ Bookmark folders",
        "✓ Highlights tab",
        "✓ Edit post",
        "✓ Longer posts",
      ],
    },
    {
      id: "advance",
      name: "Advance",
      price: "₹515.87",
      billed: "₹6,190.48 billed annually",
      features: [
        "✓ All Basic features",
        "✓ Priority customer support",
        "✓ Profile customization options",
        "✓ Advanced analytics",
        "✓ Undo Send",
        "✓ Scheduled Posts",
      ],
    },
    {
      id: "luxury",
      name: "Luxury",
      price: "₹915.87",
      billed: "₹10,990.48 billed annually",
      features: [
        "✓ All Advance features",
        "✓ Verified Badge",
        "✓ Exclusive creator tools",
        "✓ Monetization options",
        "✓ Premium-only content feed",
        "✓ Invite-only community access",
      ],
    },
  ];

  return (
    <div className="flex h-screen w-screen font-syne text-white overflow-hidden">
      <RightBar />
      <main className="h-screen w-full overflow-y-auto">
        <div className="flex flex-col justify-center items-center mt-10 px-4">
          <h1 className="font-bold text-4xl mb-2">Upgrade to Premium</h1>
          <h3 className="font-light text-center max-w-xl text-sm tracking-widest text-gray-300">
            Go Premium to unlock exclusive features, stand out from the crowd,
            and take your social experience to the next level.
          </h3>
          <div className="my-10 flex flex-wrap justify-center gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex justify-center items-center bg-[#747474] rounded-xl transition-transform ${
                  selectedPlan === plan.id ? "scale-105" : ""
                }`}
              >
                <label
                  className={`relative bg-[#101828] text-white px-6 py-14 rounded-xl w-72 h-full transition-all cursor-pointer border-2 ${
                    selectedPlan === plan.id
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    className="absolute top-4 right-4 h-5 w-5 text-blue-500"
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                  />
                  <div className="font-semibold text-sm mb-2">{plan.name}</div>
                  <div className="text-2xl font-bold">
                    {plan.price}{" "}
                    <span className="text-base font-normal">/ month</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1 mb-3">
                    {plan.billed}
                    <span className="ml-2 text-green-400 bg-green-900 text-xs px-2 py-0.5 rounded">
                      SAVE 11%
                    </span>
                  </div>
                  <ul className="text-sm space-y-2 list-inside">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </label>
              </div>
            ))}
          </div>{" "}
          <AlertDialog>
            <AlertDialogTrigger className="bg-black">
              {" "}
             select and pay
          
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-black'>
              <AlertDialogHeader>   <BorderBeam
                     size={200}
                     initialOffset={30}
                     className="from-transparent via-blue-500 to-transparent"
                     transition={{
                       type: "spring",
                       stiffness: 80,
                       damping: 50,
                     }}
                   />
                <AlertDialogTitle className='text-white'>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className=' font-light'>
                 Jyada paise hai kya tere pass to ja ke garibo me bant simple hi use kar tu 
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>use simple version  </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </main>
    </div>
  );
}

export default Premium;
