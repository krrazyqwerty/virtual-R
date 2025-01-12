import React from "react";
import { CheckCircle2 } from "lucide-react";
import pricingOptions from "../constants";

const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex-wrap">
        {pricingOptions.map((options, index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:2-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                    <p>
                        {options.titile}
                    </p>
                </div>
            </div>
        ))}

      </div>
    </div>
  );
};

export default Price;
