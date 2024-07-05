import React from "react";

export default function NewsLetterSignup() {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://robindeneef.substack.com/embed"
        className="rounded-lg drop-shadow-lg w-full md:w-5/6 h-96"
        style={{
          border: "1px solid #EEE",
          background: "white",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
