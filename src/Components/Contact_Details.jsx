import React from 'react';

export const Contact_Details = () => {
  return (
    <div className="border border-black m-2 md:m-6 shadow-lg shadow-gray-600 py-10 md:py-28">
      <div className="md:text-center">
        <h1 className="text-lg md:text-xl p-1 mb-4 text-center">
          If you want to discuss more in detail, please contact me
        </h1>
        <div className="flex flex-col items-center space-y-1">
          <a
            href="mailto:bharathi.janarthanan2002@gmail.com"
            className="cursor-pointer text-lg md:text-xl p-3 break-words w-full"
          >
            <h1 className="font-semibold">
              Email: bharathi.janarthanan2002@gmail.com
            </h1>
          </a>
          <a
            href="tel:+6383765538"
            className="cursor-pointer text-lg md:text-xl p-3 w-full"
          >
            <h1 className="font-semibold">Mobile No: 6383765538</h1>
          </a>
        </div>
      </div>
    </div>
  );
};
