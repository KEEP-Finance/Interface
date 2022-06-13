import { Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import { ReactComponent as Expand } from '@/assets/expand.svg';
import KpBigInput from '@/components/KpBigInput';
import KpInfoList from '@/components/KpInfoList';
import KpTokenInput from '@/components/KpTokenInput';
import KpTokenSelect from '@/components/KpTokenSelect';

import styles from './index.less';
const infolistMain = [
  ['User borrow limit', '$0.00'],
  ['Utilization', '0%'],
  ['Supply APR', '3.41%'],
];
const infolistMore = [
  ['Reserve deposit limit', '1,000,000,000 USDC'],
  ['Loan to value (LTV ratio) ', '75%'],
  ['Liquidation threshold ', '85%'],
  ['Liquidation penalty', '5%'],
  ['Max borrow APR ', '50%'],
  ['Target borrow APR ', '8%'],
  ['Target utilization metric info', '80%'],
  ['Current asset utilization', '58.48%'],
  ['Reserve address', 'Bgxf...Mpmw '],
  ['Token mint', 'Bgxf...Mpmw '],
  ['cToken mint', 'Bgxf...Mpmw '],
  ['Pyth oracle address', 'Bgxf...Mpmw '],
  ['Switchboard oracle address', 'Bgxf...Mpmw '],
];

const KpTotal = (props: any) => {
  const { dataSource, onSelectPool, onSelectToken, ...rest } = props;
  const [more, setMore] = useState(false);
  // 选择token
  const onChoseToken = () => {};
  return (
    <div className={styles.ki} {...rest}>
      <div style={{ padding: '36px' }}>
        <KpTokenSelect
          onSelectPool={onSelectPool}
          onSelectToken={onSelectToken}
        />
        <KpBigInput />
        <KpInfoList dataSource={infolistMain} />
        <p
          className={`${styles.seemore} ${more && styles.seeless}`}
          onClick={() =>
            setMore((data) => {
              return !data;
            })
          }
        >
          See {(!more && 'More') || 'Less'} <Expand />
        </p>
        {more && <KpInfoList dataSource={infolistMore} />}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button onClick={props.open}>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};
export default KpTotal;
