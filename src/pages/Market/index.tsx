import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Row, Col, Skeleton, Tabs, Button, Table, Affix } from 'antd';
import KpToken from '@/components/KpToken';
import KpTotal from '@/components/KpTotal';
import KpBuy from '@/components/KpBuy';

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
      dataIndex: 'name',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.name.length - b.name.length,
      render: () => (
        <KpToken
          icon="https://solend.fi/assets/tokens/ust.png"
          name="BTC"
          price="$28903.2"
          pool={pool}
        />
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
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  useEffect(() => {
    activate(injected);
  }, []);
  return (
    <div className={styles.market}>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <div className={styles.nav}>
            <span
              style={{ fontWeight: (pool && 'bold') || 'unset' }}
              onClick={() => setPool(true)}
            >
              All pools
            </span>
            <span
              style={{ fontWeight: (!pool && 'bold') || 'unset' }}
              onClick={() => setPool(false)}
            >
              All assets
            </span>
          </div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingTop: '62px' }}>
          <Affix offsetTop={10}>
            <div className={styles.action}>
              <Tabs defaultActiveKey="1">
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
    </div>
  );
};
export default Page;
