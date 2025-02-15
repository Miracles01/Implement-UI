import { Config } from "./Components";
import { useEffect, useState } from "react";

const ConfigP = () => {
  // สร้าง State เก็บขนาดของหน้าต่าง
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // ฟังก์ชันอัพเดทขนาดเมื่อหน้าต่างเปลี่ยนแปลง
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // เพิ่ม Event Listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // ลบ Event Listener เมื่อคอมโพเนนต์ unmount
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Config windowSize={windowSize} />
    </div>
  );
};

export default ConfigP;
