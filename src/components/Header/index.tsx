import { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import KpModal from '@/components/KpModal';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as Opera } from './Opera.svg';
import iconjs from './iconfont.js';

import styles from './index.less';
const IconFont = createFromIconfontCN({
  scriptUrl: iconjs,
});
const Header = () => {
  const [visibleMetaMask, setVisibleMetaMask] = useState(true);
  const onhandCancel = () => {
    setVisibleMetaMask((data) => !data);
  };
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
            <Menu.Item key="1">Market</Menu.Item>
            <Menu.Item key="2">Account</Menu.Item>
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
          borderRadius: ' 20px',
        }}
      >
        <div className={styles.witem}>
          <div className={styles.title}>Select a Network</div>
          <Row>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <img src="/bnb.svg" />
                BNB Chain
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <img src="/polygon.svg" />
                Polygon
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <img src="/eth.svg" />
                Ethereum
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.tokenBox}>
                <img src="/fox.svg" />
                Fox
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.witem} style={{ marginTop: '20px' }}>
          <div className={styles.title}>Select a Wallet</div>
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
