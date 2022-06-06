import { Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import KpBigInput from '@/components/KpBigInput';
import KpInfoList from '@/components/KpInfoList';
import styles from './index.less';
const infolist = [1, 2, 3, 4, 5, 6];

const KpTotal = (props: any) => {
  const { dataSource, ...rest } = props;
  const [more, setMore] = useState(false);

  return (
    <div className={styles.ki} {...rest}>
      <div style={{ padding: '36px' }}>
        <KpBigInput />
        <KpInfoList dataSource={infolist} />
        <p
          className={styles.seemore}
          onClick={() =>
            setMore((data) => {
              return !data;
            })
          }
        >
          See More
        </p>
        {more && <KpInfoList dataSource={infolist} />}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};
export default KpTotal;
