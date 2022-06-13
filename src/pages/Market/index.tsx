import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Row, Col, Skeleton, Tabs, Button, Table, Affix, Drawer } from 'antd';
import KpBuy from '@/components/KpBuy';
import KpRpc from '@/components/KpRpc';
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
  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });
  useEffect(() => {
    activate(injected);
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
                    expandedRowRender: (record) => (
                      <div style={{ background: '#1b1d23' }}>
                        <KpChildTable
                          style={{ margin: '0' }}
                          columns={childColumns}
                          showHeader={false}
                          pagination={false}
                          dataSource={childData}
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
                  <Tabs defaultActiveKey="1" type="card">
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
                  </Tabs>
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
                      <div className={styles.item}>
                        <div>
                          <img src="/usdc.svg" />
                          <p>USDC</p>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <div>
                          <img src="/usdt.svg" />
                          <p>USDT</p>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                      </div>
                      <div className={styles.item}>
                        <div>
                          <img src="/fox.svg" />
                          <p>FOX</p>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                      </div>
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
