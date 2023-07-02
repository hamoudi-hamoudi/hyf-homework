import React, { useEffect, useState } from "react";

function TimeCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>You have used {count} on this website</div>;
}
export default TimeCount;
