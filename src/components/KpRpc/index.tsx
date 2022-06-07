import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import styles from './index.less';
const menu = (
  <div className={styles.marker}>
    <ul>
      <div className={styles.title}>
        <p>Select Market</p>
        <hr></hr>
      </div>
      <li>
        <div className={styles.icon}>
          <img src="/bnb.svg" />
        </div>
        <div>BNB Chain</div>
      </li>
      <li>
        <div className={styles.icon}>
          <img src="/polygon.svg" />
        </div>
        <div>POLYGON</div>
      </li>
    </ul>
  </div>
);
const KpTotal = (props: any) => {
  const { name, price, number, ...rest } = props;
  return (
    <div className={styles.kt} {...rest}>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <div className={styles.title}>
          <img
            style={{ width: '35px', verticalAlign: 'top', marginRight: '5px' }}
            src="/btc.svg"
          />
          Ethereum{' '}
          <DownOutlined style={{ fontSize: '20px', color: '#ffffff' }} />
        </div>
      </Dropdown>
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
