import { ReactComponent as Hot } from '@/assets/hot.svg';
import styles from './index.less';

const KpSymbolNav = (props: any) => {
  const { data } = props;
  return (
    <div className={styles.sn}>
      <div>
        <Hot />
      </div>
      <div>
        <ul className={styles.ul}>
          {data?.map((item) => (
            <li className={`${styles.hoverTranslation}`}>
              <span>{item.symbol}</span>
              <span
                className={`${
                  (item.value.indexOf('-') > -1 && styles.up) || styles.down
                }`}
              >
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default KpSymbolNav;
