import { FunctionComponent, useCallback } from 'react';
import styles from './Join.module.css';
import React from 'react';


const Join:FunctionComponent = () => {
  	
  	const onJoinGameTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.join}>
      			<img className={styles.join1Icon} alt="" src="src\public\JOINimg\join 1.png" />
      			<img className={styles.magePreviewRev11Icon} alt="" src="src\public\JOINimg\Mage_preview_rev_1 1.png" />
      			<img className={styles.vikingPreviewRev11Icon} alt="" src="src\public\JOINimg\Viking_preview_rev_1 1.png" />
      			<img className={styles.shadowRoguePreviewRev11} alt="" src="src\public\JOINimg\Shadow Rogue_preview_rev_1 1.png" />
      			<img className={styles.restlessSpiritPreviewRev1} alt="" src="src\public\JOINimg\Restless Spirit_preview_rev_1 1.png" />
      			<div className={styles.joinGame} onClick={onJoinGameTextClick}>Join game......</div>
      			<div className={styles.div}>1/2</div>
    		</div>);
};

export default Join;
