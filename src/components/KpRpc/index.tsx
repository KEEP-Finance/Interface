import styles from './index.less';

const KpTotal = (props: any) => {
  const { name, price, number, ...rest } = props;
  return (
    <div className={styles.kt} {...rest}>
      <div className={styles.title}>
        <img
          style={{ width: '35px', verticalAlign: 'top', marginRight: '5px' }}
          src="/btc.svg"
        />
        Ethereum
      </div>
      <div className={styles.dashboard}>
        <div className={styles.item}>
          <div>
            <div></div>
            <div>
              <span>$5.69M</span>
              <br />
              <span>Total market size</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <div></div>
            <div>
              <span>$5.69M</span>
              <br />
              <span>Total market size</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <div></div>
            <div>
              <span>$5.69M</span>
              <br />
              <span>Total market size</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KpTotal;
