import styles from './index.less';
const KpTabs = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="">First</a>
        </li>
        <li>
          <a href="">Second</a>
        </li>
        <li>
          <a href="">Third</a>
        </li>
      </ul>
      <div
        className={styles.line}
        style={{ left: '210.359px', width: '59.8125px' }}
      ></div>
    </nav>
  );
};
export default KpTabs;
