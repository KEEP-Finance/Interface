import { Row, Col, Button } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { readState } from '@/apis';
import { useWeb3React } from '@web3-react/core';
import { toFloat } from '@/utils';

import DataProvider from '@/abis/DataProvider.json';
import { getContractAddr } from '@/constants/addresses';

const KpBigInput = (props: any) => {
  const {
    name,
    price,
    number,
    placeholder,
    inputVal,
    setInputVal,
    KpTokenList,
    tokenName,
    ...rest
  } = props;

  const { active, library, chainId, account } = useWeb3React();

  const [balance, setBalance] = useState('');

  const fetchBalance = async () => {
    if (tokenName) {
      const res = await readState(
        library,
        DataProvider.abi,
        getContractAddr('dataProvider'),
        'getUserReserveData',
        [0, KpTokenList[tokenName].address, account],
      );
      let decimals = KpTokenList[tokenName].decimals;
      let bal = toFloat(res.currentKTokenBalance, decimals);
      setBalance(bal);

      if (!res) {
        console.warn(
          'kpMarketDashboard, failed to fetch data from DataProvider',
        );
      }
    }
  };

  const onButtonClicked = () => {
    console.log('hjhjhj max button');
    //should be set to maximum balance
    setInputVal('100000');
  };
  useEffect(() => {
    fetchBalance();
  }, [library, KpTokenList, tokenName]);

  return (
    <div className={styles.kb} style={{ boxSizing: 'content-box' }} {...rest}>
      <div className={styles.areaInput}>
        <input
          placeholder={placeholder}
          value={inputVal}
          onChange={(e) => {
            if (isNaN(e.target.value)) {
              return;
            }
            setInputVal(e.target.value);
          }}
        />
        <Row style={{ width: '100%' }}>
          <Col span={4}>
            <div className={styles.price}>${balance}</div>
          </Col>
          <Col span={4} offset={16} style={{ marginBottom: '0.3rem' }}>
            <Button
              style={{
                fontSize: '0.6rem',
                padding: '0px',
                width: '30px',
                height: '20px',
              }}
              onClick={onButtonClicked}
            >
              MAX
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default KpBigInput;
