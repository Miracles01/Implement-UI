import React, { useState } from "react";
import styles from "./Gameplay.module.css";

const totalRows = 8; // จำนวนแถว
const totalCols = 7; // จำนวนคอลัมน์

const Gameplay = () => {
  // State สำหรับติดตาม hexagon ที่ถูกเลือก
  const [selectedHexes, setSelectedHexes] = useState<{ [key: number]: boolean }>({});

  const handleHexClick = (index: number) => {
    setSelectedHexes((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle hex เรืองแสง
    }));
  };

  return (
    <div className={styles.gameplay}>
      <h1>"hello"</h1>
      <div>
        <img className={styles.GameplayBG} alt="Gameplay Background" src="src/public/Gameplay/Game play b.png" />
      </div>

      {/* Container สำหรับ hexagons */}
      <div className={styles.hexContainer}>
        {Array.from({ length: totalRows }, (_, row) => (
          <div key={row} className={styles.hexRow}>
            {Array.from({ length: totalCols }, (_, col) => {
              const index = row * totalCols + col;
              return (
                <div
                  key={index}
                  className={`${styles.hex} ${selectedHexes[index] ? styles.glow : ""}`}
                  onClick={() => handleHexClick(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gameplay;
