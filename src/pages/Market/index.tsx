import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Row, Col, Skeleton, Tabs, Button, Table, Affix } from 'antd';
import KpToken from '@/components/KpToken';
import KpTotal from '@/components/KpTotal';
import KpBuy from '@/components/KpBuy';
import KpRpc from '@/components/KpRpc';

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
  const columns = [
    {
      title: 'Asset name',
      dataIndex: 'icon',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text, item) => (
        <KpToken icon={text} name={item.name} price="$28903.2" pool={pool} />
      ),
    },
    {
      title: 'LTV',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
      render: (text) => `${text}%`,
    },
    {
      title: 'Total supply',
      dataIndex: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      render: () => <KpTotal number="1,234" name="BTC" price="$28903.2" />,
    },
    {
      title: 'Supply APR',
      dataIndex: 'age',
      sorter: (a, b) => a.address.length - b.address.length,
      render: (text) => `${text * 1 + 100}%`,
    },
    {
      title: 'Total borrow',
      dataIndex: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      render: () => <KpTotal number="1,234" name="BTC" price="$28903.2" />,
    },
    {
      title: 'Borrow APR',
      dataIndex: 'age',
      sorter: (a, b) => a.address.length - b.address.length,
      render: (text) => `${text * 1 + 100}%`,
    },
  ];

  const data = [
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
      key: '4',
      name: 'USDA',
      icon: '/usda.svg',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'USDC',
      icon: '/usdc.svg',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'USDH',
      icon: '/usdh.svg',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'USDT',
      age: 32,
      icon: '/usdt.svg',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'FOX',
      age: 32,
      icon: '/fox.svg',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'BUSD',
      age: 32,
      icon: '/busd.svg',
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'POLYGON',
      age: 32,
      icon: '/polygon.svg',
      address: 'London No. 2 Lake Park',
    },
  ];
  useEffect(() => {
    activate(injected);
  }, []);
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
              <Table
                style={{ border: '1px solid #1b1d23' }}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
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
                      <KpBuy />
                    </TabPane>
                    <TabPane tab="Borrow" key="2">
                      <KpBuy />
                    </TabPane>
                    <TabPane tab="Withdraw" key="3">
                      <KpBuy />
                    </TabPane>
                    <TabPane tab="Repay" key="4">
                      <KpBuy />
                    </TabPane>
                  </Tabs>
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
