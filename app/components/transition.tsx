import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image component

function MyComponent() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 2000); // Delay for 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pb-0 pt-[115px]">
      <a
        href=""
        className="block rounded-[10px] overflow-hidden relative z-[1] before:bg-[#ffffff17] before:absolute before:h-[200%] before:top-[-50%] before:w-20 before:transform before:z-[1] before:rotate-[35deg] before:transition before:duration-[2s] before:left-[-280px] after:bg-[#ffffff17] after:transformafter:absolute after:h-[200%] after:top-[-50%] after:w-20 after:z-[1] after:rotate-[35deg] after:transition after:duration-[2s] after:left-[180%] ease-in-out"
      >
        {showImage && (
          <Image
            src="https://via.placeholder.com/1170x200"
            alt="Image-HasTech"
            width={1170}
            height={200}
            className="rounded-[10px] transition duration-2000 ease-in-out w-[100%] transform"
            priority // Load image with higher priority
          />
        )}
      </a>
    </div>
  );
}

export default MyComponent;
