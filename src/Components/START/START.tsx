import styles from './START.module.css'; 
import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

const START: FunctionComponent = () => {
  	const navigate = useNavigate();

  	const onKOMBATTextClick = () => {
    	navigate('/Config'); // ไปที่หน้า Config
  	};
  
  	return (
    	<div className={styles.start}>
      	    <div className={styles.kombat} onClick={onKOMBATTextClick}>
                KOMBAT
            </div>
      	    <img className={styles.baralobaTheEagleHillsMine} alt="" src="src/public/START/Baraloba_ The Eagle Hills Mines_preview_rev_1 1.png" />
      	    <img className={styles.baralobaAlongTheHewbankPr} alt="" src="src/public/START/888.png" />
      	    <img className={styles.baralobaAlongTheHewbankPr1} alt="" src="src/public/START/Baraloba_ Along the Hewbank_preview_rev_1 (1) 2.png" />
      	    <img className={styles.markedCitiesCollinaltaPre} alt="" src="src/public/START/Marked Cities - Collinalta_preview_rev_1 1.png" />
      	    <img className={styles.baralobaTheEagleHillsMine1} alt="" src="src/public/START/11111.png" />
      	    <img className={styles.vectorIcon} alt="" src="src/public/START/Vector.png" onClick={onKOMBATTextClick} />
    	</div>
  	);
};

export default START;
