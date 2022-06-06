import { Layout, Menu, Row, Col } from 'antd';
import { ReactComponent as Logo } from '@/assets/logo.svg';

import styles from './index.less';

const Header = () => {
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
      </Row>
    </Layout.Header>
  );
};
export default Header;
