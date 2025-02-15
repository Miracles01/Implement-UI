
import styles from "./Victree.module.css";

const Victree = () => {
  return (
    <div className={styles.victree}>
      <main className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <img className={styles.frameItem} alt="" src="/polygon-3.svg" />
        <img className={styles.frameInner} alt="" src="/polygon-2.svg" />
        <section className={styles.vectorGroup}>
          <img className={styles.polygonIcon} alt="" src="/polygon-4.svg" />
          <img
            className={styles.previewRev12Icon}
            alt=""
            src="/-2-preview-rev-1-2@2x.png"
          />
          <img
            className={styles.badgeFreeVectorIconsDesign}
            loading="lazy"
            alt=""
            src="/badge-free-vector-icons-designed-by-freepik-preview-rev-1-1@2x.png"
          />
        </section>
        <div className={styles.adobeFireworksPaperPngFrParent}>
          <img
            className={styles.adobeFireworksPaperPngFr}
            alt=""
            src="/adobe-fireworks-paper-png--free-download-preview-rev-1-1@2x.png"
          />
          <div className={styles.victree1}>VICTREE</div>
        </div>
      </main>
    </div>
  );
};

export default Victree;
