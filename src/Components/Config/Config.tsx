import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate
import styles from "./Config.module.css";
import React from "react";

const Config: FunctionComponent = () => {
  const navigate = useNavigate(); // สร้างฟังก์ชัน navigate
  const goBackToStart = () => {
    navigate("/MODE"); // นำทางไปที่หน้า START
  };
  // กำหนดค่าเริ่มต้นของ state จากค่าใน localStorage หรือค่าเริ่มต้น
  const [inputs, setInputs] = useState({
    interestRate: localStorage.getItem("interestRate") || "",
    initialBudget: localStorage.getItem("initialBudget") || "",
    maximumBudget: localStorage.getItem("maximumBudget") || "",
    budgetPerTurn: localStorage.getItem("budgetPerTurn") || "",
    costToPurchaseHex: localStorage.getItem("costToPurchaseHex") || "",
    maxTurnsPerGame: localStorage.getItem("maxTurnsPerGame") || "",
  });

  // ฟังก์ชันจัดการการเปลี่ยนแปลงและบันทึกข้อมูลลง localStorage
  const handleChange = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputs(prevState => {
      const updatedInputs = { ...prevState, [field]: newValue };
      // อัพเดทค่าใน localStorage ด้วย
      localStorage.setItem(field, newValue);
      return updatedInputs;
    });
  };

  const onGroupContainerClick = useCallback(() => {
    console.log("Configuration Saved:", inputs);
    navigate("/MINION"); // ไปยังหน้า MINION เมื่อคลิก DONE
  }, [inputs, navigate]);

  useEffect(() => {
    // ฟังก์ชันนี้จะทำการบันทึกค่าใน localStorage เมื่อหน้าโหลด
    Object.entries(inputs).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(key, value);
      }
    });
  }, [inputs]);

  return (
    <div className={styles.config}>
      <img className={styles.config11} alt="" src="public\config-1-1@2x.png" />
      <div className={styles.configChild} />
      <div className={styles.scoreWrapper}>
        <div className={styles.score}>
          <div className={styles.configuration}>CONFIGURATION</div>
        </div>
      </div>
      <img className={styles.markedCitiesCollinaltaPre} alt="" src="src\public\START\Marked Cities - Collinalta_preview_rev_1 1.png" />

      <div className={styles.property1defaultParent}>
        {Object.entries(inputs).map(([key, value], index) => (
          <div key={key} className={styles[`property1variant${index + 1}`]}>
            <div className={styles.interestRateParent}>
              <div className={styles.interestRate}>{key.replace(/([A-Z])/g, " $1")}</div>
              <div className={styles.enterInputWrapper}>
                <input
                  type="text"
                  value={value}
                  onChange={(event) => handleChange(key, event)}
                  placeholder="Enter Input"
                  className={styles.enterInput}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className={styles.vectorIcon}
        alt="Back"
        src="public/Vector Back.png"
        onClick={goBackToStart} // เมื่อคลิก จะกลับไปหน้า START
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.done}>DONE</div>
      </div>
    </div>
    
  );
};

export default Config;
