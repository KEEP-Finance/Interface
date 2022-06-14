import styles from './index.less';
const KpTabs = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.activity}>Supply</div>
      <div>Borrow</div>
      <div>Withdraw</div>
      <div>Repay</div>
    </div>
  );
};
export default KpTabs;
