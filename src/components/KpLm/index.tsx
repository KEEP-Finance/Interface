import { Checkbox, Slider } from 'antd';
import { useState } from 'react';
import styles from './index.less';
const KpLm = () => {
  const [lm, setLm] = useState(true);
  const [slider, setSlider] = useState(1.0);
  const onChangeLeverage = (e) => {
    setSlider(e);
  };
  return (
    <>
      <div className={styles.lm}>
        <div style={{ color: 'rgba(255,255,255,0.8)' }}>Leverage Model</div>
        <div className={styles.inputArea}>
          <div>
            <input
              value={
                (typeof slider == 'number' && (slider * 1).toFixed(1)) || slider
              }
              onChange={(e) => onChangeLeverage(e.target.value)}
            />
            <span>x</span>
          </div>
        </div>
        <Checkbox checked={lm} onChange={(e) => setLm(e.target.checked)} />
      </div>
      {lm && (
        <Slider
          onChange={onChangeLeverage}
          marks={{ 1.0: '1.0x', 5: '5x', 10: '10x', 15: '15x', 20: '20x' }}
          value={slider}
          step={0.1}
          min={1.0}
          max={20}
        />
      )}
    </>
  );
};
export default KpLm;
