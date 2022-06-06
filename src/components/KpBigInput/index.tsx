import { Row, Col } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import styles from './index.less';

const KpBigInput = (props: any) => {
  const { name, price, number, ...rest } = props;
  return (
    <div className={styles.kb} {...rest}>
      <Row align="middle">
        <Col span={3}>ALL</Col>
        <Col span={18} className={styles.input}>
          <div>KEEP</div>
          <div className={styles.small}>≈ $0.00</div>
        </Col>
        <Col span={3}>
          <SwapOutlined />
        </Col>
      </Row>
    </div>
  );
};
export default KpBigInput;
