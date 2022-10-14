import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Row, Col, Drawer } from 'antd';

import KpPriceChart from '@/components/KpPriceChart';
import KpTabs from '@/components/KpTabs';
import KpRateSwap from '@/components/KpRateSwap';
import KpRateDashboard from '@/components/KpRateDashboard';
import { getTokenList } from '@/constants';

import styles from './index.less';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState('Fixed Yield');
  const [selectedToken, setSelectedToken] = useState({
    key: '3',
    name: 'ETH',
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    decimals: 18,
    icon: '/eth.svg',
    pools: ['main pool', 'eth-usdc pool'],
  });
  const [visible, setVisible] = useState(false);

  const { chainId } = useWeb3React();

  const onSelectToken = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSelectTokenCurrent = (item) => {
    setSelectedToken(item);
    setVisible(false);
  };

  return (
    <div className={styles.market}>
      <Row>
        <Col className={styles.main} span={24}>
          <Row>
            <Col span={16}>
              <KpPriceChart token="BTC" />
              <div style={{ marginTop: '50px' }}>
                <KpRateDashboard />
              </div>
            </Col>
            <Col style={{ paddingLeft: '25px' }} span={8}>
              <div className={styles.action}>
                <KpTabs
                  tabType="rate"
                  setSelectedTab={setSelectedTab}
                  onChange={() => {}}
                />
                <KpRateSwap
                  selectedTab={selectedTab}
                  selectedToken={selectedToken}
                  onSelectToken={onSelectToken}
                />
                <Drawer
                  title="Select a Token"
                  className={styles.h100}
                  placement="bottom"
                  onClose={onClose}
                  visible={visible}
                  getContainer={false}
                  maskClosable={false}
                  style={{ position: 'absolute' }}
                >
                  <div className={styles.title}>
                    <div>
                      <p>Token Name</p>
                    </div>
                    <div>
                      <p>Balance</p>
                    </div>
                  </div>
                  <hr />

                  <div className={styles.tokenlist}>
                    {getTokenList(chainId).map((item) => {
                      return (
                        <div
                          className={styles.item}
                          onClick={() => onSelectTokenCurrent(item)}
                        >
                          <div>
                            <img src={item.icon} />
                            <p>{item.name}</p>
                          </div>
                          <div>
                            <p>0</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Drawer>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
