import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MINION.module.css"; 
import React from "react";

const MINION: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false); // ฟังก์ชันควบคุมเปิดปิด popup

  // ฟังก์ชันเปิด popup
  const openPopup = () => setPopupOpen(true);

  // ฟังก์ชันปิด popup
  const closePopup = () => setPopupOpen(false);

  // ฟังก์ชันสำหรับการคลิกที่ vectorIcon และนำทางไปยังหน้า Configwfh
  const handleVectorClick = () => {
    navigate("/Config");  // เปลี่ยนเส้นทางไปหน้า Config
  };

  const onGroupContainerClick = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    // Logic สำหรับการคลิก REBUILD (อาจจะเพิ่ม logic การรีเซ็ตหรืออื่นๆ)
  }, []);

  return (
    <div className={styles.minion}>
      <img className={styles.config113} alt="" src="/config-1-1-3@2x.png" />
      <div className={styles.minionChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.minion1}>MINION</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainerClick}>
        <div className={styles.groupItem} />
        <div className={styles.done}>DONE</div>
      </div>

      {/* รูปภาพ Vector ที่สามารถคลิกแล้วขยายตัว */}
      <img 
        className={`${styles.vectorIcon}`} 
        alt="" 
        src="public/Vector Back.png" 
        onClick={handleVectorClick} // เมื่อคลิกที่รูปจะนำทางไปหน้า Configwfh
      />

      {/* ข้อมูลการ์ด */}
      <img className={styles.cart3i1Icon} alt="" src="/cart3i-1@2x.png" />
      <div className={styles.grimrik}>Grimrik</div>
      <div className={styles.div}>50</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} onClick={onRectangleClick} />
        <div className={styles.rebuild} onClick={openPopup}>REBUILD</div> {/* เปิด popup */}
      </div>
      <img className={styles.cart1i1Icon} alt="" src="/cart1i-1@2x.png" />
      <img className={styles.cart2i1Icon} alt="" src="/cart2i-1@2x.png" />
      <div className={styles.selene}>Selene</div>
      <div className={styles.veyron}>Veyron</div>
      <div className={styles.div1}>50</div>
      <div className={styles.div2}>50</div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} onClick={onRectangleClick} />
        <div className={styles.rebuild} onClick={openPopup}>REBUILD</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupInner} onClick={onRectangleClick} />
        <div className={styles.rebuild} onClick={openPopup}>REBUILD</div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Edit Information</h2>
            <label>
              NAME:
              <input type="text" placeholder="Enter Input" />
            </label>
            <label>
              Defent:
              <input type="text" placeholder="Enter Input" />
            </label>
            <label>
              Strategy:
              <input 
                type="text" 
                placeholder="Enter Input" 
                className={styles.strategyInput} 
              />
            </label>

            <button onClick={closePopup}>DONE</button> {/* ปุ่ม DONE */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MINION;
