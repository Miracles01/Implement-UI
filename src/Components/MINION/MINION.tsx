import { FunctionComponent, useCallback } from "react";
import styles from "./MINION.module.css";
import React from "react";

const MINION: FunctionComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Victree" to the project
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "Defeat" to the project
  }, []);

  return (
    <div className={styles.minion}>
      <img className={styles.config111} alt="" src="public\minion\config-1-1-1@2x.png" />
      <div className={styles.structure}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <a className={styles.minion1}>MINION</a>
        </div>
      </div>
      <main className={styles.classPreview}>
        <section className={styles.boundingRect} />
        <section className={styles.images}>
          <div className={styles.fighters}>
            <div className={styles.fightersInner}>
              <div className={styles.previewBackgroundParent}>
                <div className={styles.previewBackground} />
                <div
                  className={styles.vectorParent}
                  onClick={onGroupContainerClick}
                >
                  <img className={styles.vectorIcon} alt="" src="public\minion\vector.svg" />
                  <img
                    className={styles.previewRev11Icon}
                    loading="lazy"
                    alt=""
                    src="public\minion\-2-preview-rev-1-1@2x.png"
                  />
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.crystalFighterPreviewRev1}
                    loading="lazy"
                    alt=""
                    src="public\minion\crystal-fighter-preview-rev-1-1@2x.png"
                  />
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.restlessSpiritPreviewRev1}
                    loading="lazy"
                    alt=""
                    src="public\minion\restless-spirit-preview-rev-1-2@2x.png"
                  />
                </div>
                <div className={styles.heroTopParent}>
                  <div className={styles.heroTop} />
                  <img
                    className={styles.chronomancerPreviewRev11Icon}
                    loading="lazy"
                    alt=""
                    src="public\minion\chronomancer-preview-rev-1-1@2x.png"
                  />
                </div>
                <div className={styles.thiefRectParent}>
                  <div className={styles.thiefRect} />
                  <img
                    className={styles.humanThiefPreviewRev11}
                    loading="lazy"
                    alt=""
                    src="public\minion\human-thief-preview-rev-1-1@2x.png"
                  />
                </div>
                <div className={styles.vikingRectParent}>
                  <div className={styles.vikingRect} />
                  <img
                    className={styles.vikingPreviewRev12Icon}
                    loading="lazy"
                    alt=""
                    src="public\minion\viking-preview-rev-1-2@2x.png"
                  />
                </div>
                <img
                  className={styles.crownRedSealWaxStampHdPn}
                  loading="lazy"
                  alt=""
                  src="public\minion\crown-red-seal-wax-stamp-hd-png-preview-rev-1-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.classPreviewsWrapper}>
            <div className={styles.classPreviews}>
              <div className={styles.classBackground} />
              <div
                className={styles.vectorGroup}
                onClick={onGroupContainerClick1}
              >
                <img className={styles.vectorIcon} alt="" src="public\minion\vector-1.svg" />
                <img
                  className={styles.kitchenWitchPreviewRev11}
                  loading="lazy"
                  alt=""
                  src="public\minion\kitchen-witch-preview-rev-1-1@2x.png"
                />
              </div>
              <div className={styles.heroContentParent}>
                <div className={styles.heroContent} />
                <img
                  className={styles.shadowRoguePreviewRev12}
                  loading="lazy"
                  alt=""
                  src="public\minion\shadow-rogue-preview-rev-1-2@2x.png"
                />
              </div>
              <div className={styles.emptyRectParent}>
                <div className={styles.emptyRect} />
                <img
                  className={styles.inventorPreviewRev11Icon}
                  loading="lazy"
                  alt=""
                  src="public\minion\inventor-preview-rev-1-1@2x.png"
                />
              </div>
              <div className={styles.heroContentGroup}>
                <div className={styles.heroContent1} />
                <img
                  className={styles.berserkerBeetlePreviewRev1Icon}
                  loading="lazy"
                  alt=""
                  src="public\minion\berserker-beetle-preview-rev-1-2@2x.png"
                />
              </div>
              <div className={styles.heroContentContainer}>
                <div className={styles.heroContent2} />
                <img
                  className={styles.magePreviewRev12Icon}
                  loading="lazy"
                  alt=""
                  src="public\minion\mage-preview-rev-1-2@2x.png"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.rectangleDiv} />
                </div>
                <img
                  className={styles.magicArcherPreviewRev11}
                  loading="lazy"
                  alt=""
                  src="public\minion\magic-archer-preview-rev-1-1@2x.png"
                />
              </div>
              <img
                className={styles.crownRedSealWaxStampHdPn1}
                alt=""
                src="/public\minion\crown-red-seal-wax-stamp-hd-png-preview-rev-1-2@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.completionStatus}>
            <div className={styles.completionStatusChild} />
            <div className={styles.done}>DONE</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MINION;
