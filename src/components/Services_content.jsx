import React from "react";

const Services_content = ({heading,text,color}) => {
  return (
    <div className="">
      <div className={`text-center p-5 ${color} rounded-2 shadow`} >
        @<h3>{heading}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Services_content;
