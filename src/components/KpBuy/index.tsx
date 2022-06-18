import { Row, Col, Button, Slider, Checkbox } from 'antd';
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
  const [lm, setLm] = useState(true);
  const [val, setVal] = useState(1);
  // 选择token
  const onChoseToken = (props: any) => {};
  return (
    <div className={styles.ki} {...rest}>
      <div style={{ padding: '36px 15px' }}>
        <KpTokenSelect
          onSelectPool={onSelectPool}
          onSelectToken={onSelectToken}
          dataSource={props.dataSource}
        />
        <KpBigInput />
        {/* {props.visibleLm && (
          <>
            <div className={styles.lm}>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                Leverage Model
              </div>
              <div className={styles.inputArea}>
                <div>
                  <input
                    value={
                      (typeof val == 'number' && (val * 1).toFixed(1)) || val
                    }
                    onChange={(e) => setVal(e.target.value)}
                  />
                  <span>x</span>
                </div>
              </div>
              <Checkbox
                checked={lm}
                onChange={(e) => setLm(e.target.checked)}
              />
            </div>
            {lm && (
              <Slider
                onChange={(e) => setVal(e)}
                marks={{ 1: '1x', 2: '2x', 3: '3x', 4: '4x', 5: '5x' }}
                value={val}
                step={0.1}
                min={1}
                max={5}
              />
            )}
          </>
        )} */}

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
