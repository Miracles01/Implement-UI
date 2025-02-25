import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import styles from "./Join.module.css";
import React from "react";

const Join: FunctionComponent = () => {
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับนำทางไปหน้า gameplay
  const goToGameplay = () => {
    navigate("/Gameplay");  // เปลี่ยนเส้นทางไปที่หน้า Gameplay
  };

  return (
    <div className={styles.join}>
      <img className={styles.join1Icon} alt="" src="/join-1@2x.png" />
      <img
        className={styles.magePreviewRev11Icon}
        alt=""
        src="/mage-preview-rev-1-1@2x.png"
      />
      <img
        className={styles.vikingPreviewRev11Icon}
        alt=""
        src="/viking-preview-rev-1-1@2x.png"
      />
      <div className={styles.joinGame}>Join game......</div>
      <div className={styles.div}>1/2</div>

      {/* เพิ่มปุ่มที่มุมล่างขวา */}
      <button 
        className={styles.playButton} 
        onClick={goToGameplay} 
      >
        Go to Gameplay
      </button>

      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.done}></div>
      </div>
    </div>
  );
};

export default Join;
