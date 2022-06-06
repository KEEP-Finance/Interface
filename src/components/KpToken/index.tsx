import styles from './index.less';

const KpToken = (props: any) => {
  const { icon, name, price, ...rest } = props;
  return (
    <div className={styles.kt} {...rest}>
      <div className={styles.wrap}>
        <img src={icon} />
        <div className={styles.tokenCol}>
          <span className={styles.name}>{name}</span>
          <br />
          <label className={styles.price}>{price}</label>
        </div>
      </div>
    </div>
  );
};
export default KpToken;
