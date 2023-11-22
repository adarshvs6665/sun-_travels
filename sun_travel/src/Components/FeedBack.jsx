import React from "react";

import { testimonials } from "./NavItems";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="card-wrapper p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">" "</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 feed-card rounded-[20px]`}>
      <div
        className={`bg-transparent rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
      >
        <div>
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 sm:px-16 px-6 flex gap-7 bg-transparent`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
