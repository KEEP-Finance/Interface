import styles from './index.less';
import { useState, useEffect } from 'react';

const Segmented = (props: any) => {
  const { options } = props;
  const [data, setData] = useState([]);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    setData(options);
  }, [options]);
  return (
    <div className={`${styles.seg} flex flex-between`}>
      {data.map((item, index) => (
        <div
          onClick={() => setInd(index)}
          className={`${styles.item} ${(index == ind && styles.active) || ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default Segmented;
