import { useState } from 'react';
import { history } from 'umi';
import { Layout, Menu, Row, Col } from 'antd';
import { createFromIconfontCN, CheckCircleOutlined } from '@ant-design/icons';
import KpModal from '@/components/KpModal';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Opera } from './Opera.svg';
import iconjs from './iconfont.js';

import styles from './index.less';
const IconFont = createFromIconfontCN({
  scriptUrl: iconjs,
});
const network = [
  {
    name: 'BNB Chain',
    img: '/bnb.svg',
    checked: false,
  },
  {
    name: 'Polygon',
    img: '/polygon.svg',
    checked: false,
  },
  {
    name: 'Ethereum',
    img: '/eth.svg',
    checked: false,
  },
  {
    name: 'Fox',
    img: '/fox.svg',
    checked: false,
  },
];
const Header = () => {
  const [visibleMetaMask, setVisibleMetaMask] = useState(false);
  const onhandCancel = () => {
    setVisibleMetaMask((data) => !data);
  };
  const [networkList, setNetworkList] = useState(network);
  return (
    <Layout.Header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col>
          <Logo width={100} style={{ verticalAlign: 'middle' }} />
        </Col>
        <Col style={{ flex: '1' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
              lineHeight: '64px',
              marginLeft: '24px',
              transform: 'translateY(-1px)',
            }}
          >
            <Menu.Item key="1" onClick={() => history.push('/')}>
              Market
            </Menu.Item>
            {/* <Menu.Item key="3" onClick={() => history.push('/')}>
             Margin
            </Menu.Item> */}

            <Menu.Item key="2" onClick={() => history.push('/account')}>
              Account
            </Menu.Item>
            <Menu.Item key="3" onClick={() => history.push('/margin')}>
              Margin
            </Menu.Item>
          </Menu>
        </Col>
        <div
          className={styles.connect}
          onClick={() => setVisibleMetaMask(true)}
        >
          Connect Wallet
        </div>
      </Row>
      <KpModal
        width={420}
        visible={visibleMetaMask}
        onCancel={onhandCancel}
        bodyStyle={{
          padding: '21px',
          background: '#1b1d23',
          borderRadius: ' 5px',
        }}
      >
        <div className={styles.witem}>
          <div className={styles.title}>1. Select a Network</div>
          <Row>
            {networkList.map((item, index) => {
              return (
                <Col span={12}>
                  <div
                    onClick={() => {
                      setNetworkList((data) => {
                        let newData = data.map((item) => {
                          item.checked = false;
                          return item;
                        });
                        newData[index].checked = true;
                        return newData;
                      });
                    }}
                    className={`${styles.tokenBox} ${
                      item.checked && styles.tokenChecked
                    }`}
                  >
                    <img src={item.img} />
                    {item.name}
                    <CheckCircleOutlined className={styles.checked} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className={styles.witem} style={{ marginTop: '20px' }}>
          <div className={styles.title}>2. Select a Wallet</div>
          <Row>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <IconFont
                  style={{ fontSize: '20px', marginRight: '10px' }}
                  type="Metamask"
                />
                Metamask
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <IconFont
                  style={{ fontSize: '20px', marginRight: '10px' }}
                  type="Binance"
                />
                Binance Wallet
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <Opera style={{ width: '20px', marginRight: '10px' }} />
                Opera
              </div>
            </Col>
          </Row>
        </div>
      </KpModal>
    </Layout.Header>
  );
};
export default Header;
