import { FunctionComponent, useCallback } from 'react';
import styles from './Config.module.css';
import React from 'react';


const Config:FunctionComponent = () => {
  	
  	const onDONETextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.config}>
      			<img className={styles.config11} alt="" src="src\public\Config\Config.png" />
      			<div className={styles.configChild} />
      			<div className={styles.score}>
        				<b className={styles.text}>{`5      `}</b>
      			</div>
      			<b className={styles.interestRate}>Interest Rate (%)</b>
      			<div className={styles.scoreParent}>
        				<div className={styles.score1} />
        				<b className={styles.configuration}>CONFIGURATION</b>
      			</div>
      			<div className={styles.score2}>
        				<b className={styles.text}>{`100      `}</b>
      			</div>
      			<b className={styles.initialMinionHp}>Initial Minion HP</b>
      			<div className={styles.score3}>
        				<b className={styles.text2}>1000</b>
      			</div>
      			<b className={styles.costToPurchase}>Cost to Purchase Hex</b>
      			<div className={styles.score4}>
        				<b className={styles.text}>{`90      `}</b>
      			</div>
      			<b className={styles.budgetPerTurn}>Budget per Turn</b>
      			<div className={styles.score5}>
        				<b className={styles.text}>{`23456      `}</b>
      			</div>
      			<b className={styles.maximumBudget}>Maximum Budget</b>
      			<div className={styles.score6}>
        				<b className={styles.text}>{`10000     `}</b>
      			</div>
      			<b className={styles.initialBudget}>Initial Budget</b>
      			<div className={styles.score7}>
        				<b className={styles.text}>{`47      `}</b>
      			</div>
      			<b className={styles.maximumSpawnsPer}>Maximum Spawns per Player</b>
      			<div className={styles.score8}>
        				<b className={styles.text}>{`100      `}</b>
      			</div>
      			<b className={styles.costToSpawn}>Cost to Spawn Minion</b>
      			<div className={styles.score9}>
        				<b className={styles.text}>{`69      `}</b>
      			</div>
      			<b className={styles.maximumTurnsPer}>Maximum Turns per Game</b>
      			<div className={styles.scoreGroup}>
        				<div className={styles.score10}>
          					<b className={styles.text2}>{` `}</b>
        				</div>
        				<b className={styles.done} onClick={onDONETextClick}>DONE</b>
      			</div>
      			<img className={styles.vectorIcon} alt="" src="src\public\Config\hi.png" onClick={onDONETextClick} />
      			<img className={styles.vectorIcon1} alt="" src="src\public\Config\Vector.png" onClick={onDONETextClick} />
    		</div>);
};

export default Config;
