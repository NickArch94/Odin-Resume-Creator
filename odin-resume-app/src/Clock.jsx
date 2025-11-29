import { useState } from 'react';
import { useEffect } from 'react';


export default function Clock() {
    const [counter, setCounter] = useState(0);
    // Increment counter every second
    useEffect(() => {
      const key = setInterval(() => {
          setCounter(count => count + 1)
      }, 1000);
      // Cleanup interval on component unmount
      return () => {
            clearInterval(key);
      };
    }, []);

    return (
        <p>{counter} seconds have passed.</p>
    );
}