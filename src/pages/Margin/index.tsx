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
  Radio,
  Menu,
} from 'antd';
import KpTabs from '@/components/KpTabs';
import KpRateDashboard from '@/components/KpRateDashboard';
import styles from './index.less';
import KpLongShort from '@/components/KpLongShort';
import KpPriceChart from '@/components/KpPriceChart';
import { getTokenList } from '@/constants';

const Page = () => {
  const { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();
  const [more, setMore] = useState(false);
  const [pool, setPool] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Long');
  const [chartType, setChartType] = useState('Long Token');
  const [lm, setLm] = useState(false);
  const [r1, setR1] = useState({});
  const [r2, setR2] = useState({});
  const [tokenUpdated, setTokenUpdated] = useState('Collateral');
  const [collateralToken, setCollateralToken] = useState();
  const [futureToken, setFutureToken] = useState();
  const [longToken, setLongToken] = useState();
  const [shortToken, setShortToken] = useState();
  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });
  useEffect(() => {
    // activate(injected);
  }, []);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('1');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSelectToken = () => {
    setVisible(true);
  };
  const onSelectTokenCurrent = (item) => {
    setR1(item);
    setVisible(false);
  };
  const onChange = (key: any) => {
    setKey(key);
  };
  console.log('margin, chainid: ', chainId);
  console.log('margin, tokenlist ', getTokenList(chainId));

  return (
    <div className={styles.market}>
      <Row>
        <Col className={styles.main} span={24}>
          <Row>
            <Col span={16}>
              {selectedTab == 'Hedge' ? (
                <>
                  <KpPriceChart
                    longToken={longToken?.name || 'BTC'}
                    shortToken={shortToken?.name || 'USDT'}
                    mode="hedge"
                  />
                </>
              ) : (
                <KpPriceChart token={futureToken?.name || 'BTC'} />
              )}
              <div style={{ marginTop: '50px' }}>
                <KpRateDashboard />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ paddingLeft: '25px' }}
            >
              <div className={styles.action}>
                <KpTabs
                  tabType="margin"
                  setSelectedTab={setSelectedTab}
                  onChange={() => {}}
                />
                <KpLongShort
                  collateralToken={collateralToken}
                  setCollateralToken={setCollateralToken}
                  futureToken={futureToken}
                  setFutureToken={setFutureToken}
                  longToken={longToken}
                  setLongToken={setLongToken}
                  shortToken={shortToken}
                  setShortToken={setShortToken}
                  onSelectPool={() => {}}
                  selectedTab={selectedTab}
                  selectedToken={r1}
                  tokenUpdated={tokenUpdated}
                  setTokenUpdated={setTokenUpdated}
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
                  // closeIcon={false}
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
                      if (tokenUpdated == 'future' && item.name == 'USDC')
                        return <></>;

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
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
