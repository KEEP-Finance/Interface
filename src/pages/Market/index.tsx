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
import KpBuy from '@/components/KpBuy';
import KpRpc from '@/components/KpRpc';
import KpTabs from '@/components/KpTabs';
import KpChildTable from '@/components/KpChildTable';
import {
  columns,
  childColumns,
  data,
  childData,
  columnsPool,
  dataPool,
  childColumnsPool,
  childDataPool,
} from './data';
import styles from './index.less';
const { TabPane } = Tabs;
const tokenList = [
  {
    key: '1',
    name: 'BTC',
    age: 32,
    icon: '/btc.svg',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'BNB',
    age: 42,
    icon: '/bnb.svg',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'DAI',
    icon: '/dai.svg',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'ETH',
    icon: '/eth.svg',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'USDA',
    icon: '/usda.svg',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '6',
    name: 'USDC',
    icon: '/usdc.svg',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '7',
    name: 'USDH',
    icon: '/usdh.svg',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '8',
    name: 'USDT',
    age: 32,
    icon: '/usdt.svg',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '9',
    name: 'FOX',
    age: 32,
    icon: '/fox.svg',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '10',
    name: 'BUSD',
    age: 32,
    icon: '/busd.svg',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '11',
    name: 'POLYGON',
    age: 32,
    icon: '/polygon.svg',
    address: 'London No. 2 Lake Park',
  },
];
const Page = () => {
  // library	当前连接的library
  // deactivate	断开连接的方法
  // chainId	当前连接的链id
  // account	当前连接的钱包账户地址
  // active	当前连接的状态，是否连接
  const { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();
  const [more, setMore] = useState(false);
  const [pool, setPool] = useState(false);
  const [lm, setLm] = useState(false);
  const [r1, setR1] = useState({});
  const [r2, setR2] = useState({});
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
  const onSelectPool = () => {};
  const onChange = (key: any) => {
    setKey(key);
  };
  return (
    <div className={styles.market}>
      <Row>
        <Col className={styles.main} span={24}>
          <KpRpc />

          <Row>
            <Col span={16}>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  onChange={onChange}
                  type="card"
                  style={{
                    width: '200px',
                    border: '1px solid #1b1d23',
                    borderBottom: '0',
                    transform: 'translateY(1px)',
                  }}
                >
                  <TabPane tab="Assets" key="1"></TabPane>
                  <TabPane tab="Pools" key="2"></TabPane>
                </Tabs>
              </div>
              {(key == '1' && (
                <Table
                  style={{ border: '1px solid #1b1d23' }}
                  columns={columns}
                  dataSource={data}
                  expandable={{
                    expandRowByClick: true,
                    expandedRowRender: (record1) => (
                      <div style={{ background: '#1b1d23' }}>
                        <KpChildTable
                          style={{ margin: '0' }}
                          columns={childColumns}
                          showHeader={false}
                          pagination={false}
                          dataSource={childData}
                          onRow={(record2) => {
                            return {
                              onClick: (event) => {
                                setR1(record1);
                                setR2(record2);
                              }, // 点击行
                            };
                          }}
                        />
                      </div>
                    ),
                  }}
                  pagination={false}
                />
              )) || (
                <Table
                  style={{ border: '1px solid #1b1d23' }}
                  columns={columnsPool}
                  dataSource={dataPool}
                  expandable={{
                    expandRowByClick: true,
                    expandedRowRender: (record) => (
                      <div style={{ background: '#1b1d23' }}>
                        <KpChildTable
                          style={{ margin: '0' }}
                          columns={childColumnsPool}
                          showHeader={false}
                          pagination={false}
                          dataSource={childDataPool}
                        />
                      </div>
                    ),
                  }}
                  pagination={false}
                />
              )}
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ paddingLeft: '25px' }}
            >
              <Affix offsetTop={10}>
                <div className={styles.action}>
                  {/* <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Supply" key="1">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Borrow" key="2">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Withdraw" key="3">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                    <TabPane tab="Repay" key="4">
                      <KpBuy
                        onSelectPool={onSelectPool}
                        onSelectToken={onSelectToken}
                      />
                    </TabPane>
                  </Tabs> */}
                  <KpTabs onChange={(index) => setLm(index == 1)} />
                  <KpBuy
                    onSelectPool={onSelectPool}
                    onSelectToken={onSelectToken}
                    visibleLm={lm}
                    dataSource={{
                      r1,
                      r2,
                    }}
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
                      {tokenList.map((item) => (
                        <div className={styles.item}>
                          <div>
                            <img src={item.icon} />
                            <p>{item.name}</p>
                          </div>
                          <div>
                            <p>0</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Drawer>
                </div>
              </Affix>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
