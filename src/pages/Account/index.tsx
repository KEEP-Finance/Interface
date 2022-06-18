import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import {
  Row,
  Col,
  Skeleton,
  Tabs,
  Button,
  Table,
  Affix,
  Drawer,
  Slider,
} from 'antd';
import styles from './index.less';
const Page = () => {
  const [tabIndex, setTabIndex] = useState('2');
  const columns = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
    },
    {
      title: 'Transaction type',
      dataIndex: 'type',
    },
    {
      title: 'Balance changes',
      dataIndex: 'balance',
    },
    {
      title: 'Txn details',
      dataIndex: 'txn',
    },
  ];
  const data = [
    {
      timestamp: 'today',
      type: 'Borrow',
      balance: '0.001ETH',
      txn: '',
    },
    {
      timestamp: 'today',
      type: 'Borrow',
      balance: '0.2USDC',
      txn: '',
    },
    {
      timestamp: 'today',
      type: 'Deposit',
      balance: '0.2BTC',
      txn: '',
    },
  ];
  return (
    <div className={styles.account}>
      <Row>
        <Col className={styles.main} span={24}>
          <Row>
            <Col span={16}>
              <div>
                <Tabs
                  defaultActiveKey="2"
                  onChange={setTabIndex}
                  type="card"
                  style={{
                    width: '320px',
                    border: '1px solid #1b1d23',
                    borderBottom: '0',
                    transform: 'translateY(1px)',
                  }}
                >
                  <Tabs.TabPane tab="Balance" key="2"></Tabs.TabPane>
                  <Tabs.TabPane tab="Monitor" key="1"></Tabs.TabPane>
                  <Tabs.TabPane tab="Activity" key="3"></Tabs.TabPane>
                </Tabs>
              </div>
              {tabIndex == '1' && (
                <div>
                  <h1 className={styles.h1}>
                    Manage your risk with what-if mode! Set some hypothetical
                    asset prices below and find out how they may put your
                    account at risk
                  </h1>

                  <div className={styles.boxB}>
                    <div className={styles.boxItem}>
                      <div>
                        <p className={styles.small}>Net value</p>
                        <p className={styles.title}>$5.04</p>
                      </div>
                      <div>
                        <p className={styles.small}>Borrow Utilization</p>
                        <p className={styles.title}>27.45%</p>
                      </div>
                    </div>
                    <hr />
                    <div className={styles.boxItem}>
                      <div>
                        <p className={styles.small}>Borrow Balance</p>
                        <p className={styles.title}>$1.43</p>
                      </div>
                      <div>
                        <p className={styles.small}>Supply Balance</p>
                        <p className={styles.title}>$6.31</p>
                      </div>
                    </div>
                    <div className={styles.steps}>
                      <div className={styles.steps_len}></div>
                      <div className={styles.steps_l}></div>
                      <div className={styles.steps_g}></div>
                    </div>
                    <div className={styles.boxItem}>
                      <div>
                        <p className={styles.small}>Borrow Limit</p>
                      </div>
                      <div>
                        <p className={styles.title}>$6.31</p>
                      </div>
                    </div>
                    <div className={styles.boxItem}>
                      <div>
                        <p className={styles.small}>Liquidation Threshold</p>
                      </div>
                      <div>
                        <p className={styles.title}>$6.31</p>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.small}>Assets Supplied </p>
                    </div>
                    <div>
                      <p className={styles.small}>Blanace</p>
                    </div>
                  </div>
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.title}>SOL</p>
                      <p className={styles.small}>
                        <input />
                      </p>
                    </div>
                    <div>
                      <p className={styles.title}>0.2 SOL</p>
                      <p className={styles.small}>$6.31</p>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.small}>Assets Borrowed</p>
                    </div>
                    <div>
                      <p className={styles.small}>Blanace</p>
                    </div>
                  </div>
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.title}>USDC</p>
                      <p className={styles.small}>
                        <input />
                      </p>
                    </div>
                    <div>
                      <p className={styles.title}>0.2 USDC</p>
                      <p className={styles.small}>$1.01</p>
                    </div>
                  </div>
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.title}>ETH</p>
                      <p className={styles.small}>
                        <input />
                      </p>
                    </div>
                    <div>
                      <p className={styles.title}>0.2 ETH</p>
                      <p className={styles.small}>$131</p>
                    </div>
                  </div>
                </div>
              )}
              {tabIndex == '2' && (
                <div>
                  <h1 className={styles.h1}>
                    Amounts below are based on current market price for the
                    lifetime interest/rewards accrued
                  </h1>
                  <div className={styles.boxB}>
                    <div className={styles.boxItemCen}>
                      <div>
                        <p className={styles.small}>Net Earnings</p>
                        <p className={styles.title}>$5.04</p>
                      </div>
                      <div>
                        <p className={styles.small}>Total Supply Interest</p>
                        <p className={styles.title}>$5.04</p>
                      </div>
                      <div>
                        <p className={styles.small}>Reward Earnings</p>
                        <p className={styles.title}>$5.04</p>
                      </div>
                      <div>
                        <p className={styles.small}>Total bBorrow Interest</p>
                        <p className={styles.title}>$5.04</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.boxItem}>
                    <div>
                      <p className={styles.small}>Assets Supplied</p>
                      <p className={styles.title}>SOL</p>
                    </div>
                    <div>
                      <p className={styles.small}>Lifetime Interest</p>
                      <p className={styles.title}>0</p>
                    </div>
                    <div>
                      <p className={styles.small}>Rewards Earned</p>
                      <p className={styles.title}>0</p>
                    </div>
                  </div>
                  <hr />
                  <div className={`${styles.boxItem}`}>
                    <div>
                      <p className={styles.small}>Assets Borrowed</p>
                    </div>
                    <div>
                      <p className={styles.small}>Lifetime Interest</p>
                    </div>
                    <div>
                      <p className={styles.small}>Rewards Earned</p>
                    </div>
                  </div>
                  <div className={`${styles.boxItem} ${styles.light}`}>
                    <div>
                      <p className={styles.title}>USDC</p>
                    </div>
                    <div>
                      <p className={styles.title}>-0.0002 USDC</p>
                    </div>
                    <div>
                      <p className={styles.title}>0</p>
                    </div>
                  </div>
                  <div className={`${styles.boxItem} ${styles.light}`}>
                    <div>
                      <p className={styles.title}>ETH</p>
                    </div>
                    <div>
                      <p className={styles.title}>+0.001 ETH</p>
                    </div>
                    <div>
                      <p className={styles.title}>0</p>
                    </div>
                  </div>
                </div>
              )}
              {tabIndex == '3' && (
                <div>
                  <h1 className={styles.h1}>
                    *New transactions may take up to a minute to show up in your
                    account history.
                  </h1>

                  <hr />
                  <Table columns={columns} dataSource={data} />
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
