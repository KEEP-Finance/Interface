import { useEffect, useState, useMemo } from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import {
  Row,
  Col,
  Skeleton,
  Tabs,
  Button,
  Table,
  Affix,
  Drawer,
  Slider,
  TimePicker,
} from 'antd';
import { getNetworks, getTokenList, pools } from '@/constants';
import usePriceFeed from '@/components/Covalent';
import { readState } from '@/apis';
import { getContractAddr } from '@/constants/addresses';
import DataProvider from '@/abis/DataProvider.json';
import { toFloat } from '@/utils';
import KpBuy from '@/components/KpBuy';
import KpRpc from '@/components/KpRpc';
import KpTabs from '@/components/KpTabs';
import KpChildTable from '@/components/KpChildTable';
import {
  columns,
  childColumns,
  childData,
  columnsPool,
  dataPool,
  childColumnsPool,
  childDataPool,
} from './data';

import styles from './index.less';
import MarketDashboard from '@/components/KpMarketDashboard';

const { TabPane } = Tabs;
// const tokenList = [
//   {
//     key: '1',
//     name: 'BTC',
//     age: 32,
//     icon: '/btc.svg',
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'BNB',
//     age: 42,
//     icon: '/bnb.svg',
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'DAI',
//     icon: '/dai.svg',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'ETH',
//     icon: '/eth.svg',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '5',
//     name: 'USDA',
//     icon: '/usda.svg',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '6',
//     name: 'USDC',
//     icon: '/usdc.svg',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '7',
//     name: 'USDH',
//     icon: '/usdh.svg',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '8',
//     name: 'USDT',
//     age: 32,
//     icon: '/usdt.svg',
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '9',
//     name: 'FOX',
//     age: 32,
//     icon: '/fox.svg',
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '10',
//     name: 'BUSD',
//     age: 32,
//     icon: '/busd.svg',
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '11',
//     name: 'POLYGON',
//     age: 32,
//     icon: '/polygon.svg',
//     address: 'London No. 2 Lake Park',
//   },
// ];

const Page = (props) => {
  // library	当前连接的library
  // deactivate	断开连接的方法
  // chainId	当前连接的链id
  // account	当前连接的钱包账户地址
  // active	当前连接的状态，是否连接
  let { library, deactivate, chainId, account, active, activate, error } =
    useWeb3React();
  chainId = getNetworks()[3].id;
  // const tokenList = [
  //   {
  //     key: '0',
  //     name: 'POLYGON',
  //     icon: '/polygon.svg',
  //     address: '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44',
  //     pools: ['Main Pool', 'MATIC Pool'],
  //   },
  //   {
  //     key: '1',
  //     name: 'BTC',
  //     age: 32,
  //     icon: '/btc.svg',
  //     address: 'New York No. 1 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '2',
  //     name: 'ETH',
  //     icon: '/eth.svg',
  //     age: 32,
  //     address: '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44',
  //     pools: ['Main Pool', 'MATIC Pool'],
  //   },
  //   {
  //     key: '3',
  //     name: 'USDC',
  //     icon: '/usdc.svg',
  //     age: 32,
  //     address: '0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1',
  //     pools: ['Main Pool'],
  //   },
  //   //random inputs
  //   {
  //     key: '4',
  //     name: 'BNB',
  //     age: 42,
  //     icon: '/bnb.svg',
  //     address: 'London No. 1 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '5',
  //     name: 'DAI',
  //     icon: '/dai.svg',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '6',
  //     name: 'USDA',
  //     icon: '/usda.svg',
  //     age: 32,
  //     address: 'London No. 2 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '7',
  //     name: 'USDH',
  //     icon: '/usdh.svg',
  //     age: 32,
  //     address: 'London No. 2 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '8',
  //     name: 'USDT',
  //     age: 32,
  //     icon: '/usdt.svg',
  //     address: 'London No. 2 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '9',
  //     name: 'FOX',
  //     age: 32,
  //     icon: '/fox.svg',
  //     address: 'London No. 2 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  //   {
  //     key: '10',
  //     name: 'BUSD',
  //     age: 32,
  //     icon: '/busd.svg',
  //     address: 'London No. 2 Lake Park',
  //     pools: ['Main Pool'],
  //   },
  // ];

  const tokenList = getTokenList(chainId);

  const [selectedTab, setSelectedTab] = useState('Supply');
  const [more, setMore] = useState(false);
  const [pool, setPool] = useState(false);
  const [lm, setLm] = useState(false);
  const [r1, setR1] = useState({});
  const [r2, setR2] = useState({});
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [tokenListData, setTokenListData] = useState({});
  const [poolListData, setPoolListData] = useState({});
  // const [poolData, setPoolData] = useState({});
  const [dashboardData, setDashboardData] = useState({});
  const [assetData, setAssetData] = useState({});
  const [tokenTMP, setTokenTMP] = useState({});
  const [tmpPools, setTmpPools] = useState({});

  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });
  useEffect(() => {
    // activate(injected);
  }, []);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('1');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSelectToken = () => {
    setVisible(true);
  };
  const onSelectTokenCurrent = (item) => {
    setR1(item);
    setVisible(false);
  };
  const onSelectPool = (key, name) => {
    setR2((data) => {
      return { key, name };
    });
  };
  const onChange = (key: any) => {
    setKey(key);
  };
  // const tokenList = getTokenList(chainId);
  // const parentTable = tokenList.map(token => ({
  //   icon: token.icon,
  //   name: token.name,
  //   price: token.price,
  //   lev: token.lev,

  //   ltv: 5,
  //   totalSupply: 123,
  //   totalBorrow: 123,
  //   supplyApr: 5,
  //   borrowApr: 8,
  // }))

  //

  // Covalent price feed
  const latestPrices = usePriceFeed();
  let poolListDataKeys = [];
  let poolTokenDataKeys = [];
  // let tokenTMP = {}

  const fetchTokensData = async () => {
    // const tokenList = getTokenList(chainId);
    // const newDashboardData = {};
    const poolListFetched = await readState(
      library,
      DataProvider.abi,
      getContractAddr('dataProvider'),
      'getAllPoolData',
      [],
    );
    if (!poolListFetched) {
      console.warn('market, failed to fetch pool list from DataProvider');
    }

    let newTokenList = {};
    for (let i = 0; i < poolListFetched.length; i++) {
      let pool = poolListFetched[i];
      const tokenListFetched = await readState(
        library,
        DataProvider.abi,
        getContractAddr('dataProvider'),
        'getAllReservesTokens',
        [i],
      );
      console.warn('warning while fetch tokenlist');

      if (!tokenListFetched) {
        console.warn(
          'market, failed to fetch tokenlist data from DataProvider',
        );
      }
      let data = {};
      for (let j = 0; j < tokenListFetched.length; j++) {
        data[tokenListFetched[j][0].toString()] = {
          name: tokenListFetched[j][0],
          address: tokenListFetched[j][1],
          symbol: tokenListFetched[j].symbol,
          tokenAddress: tokenListFetched[j].tokenAddress,
          pool: pool.name,
        };
      }
      newTokenList[`${pool.name} pool`] = data;
    }
    console.log('hjhjhj icon newtokenlist', newTokenList);
    setPoolListData(newTokenList);
  };
  // fetch asset, ltv, totalSupply, supplyApr, totalBorrow, borrowApr for all token, all pools
  // dashboard data fetching
  const fetchDashboardData = async () => {
    // const tokenList = getTokenList(chainId);
    const newDashboardData = {};

    // const data = {};
    poolListDataKeys = Object.keys(poolListData);
    let tmp = {};
    let tmpPool = {};
    setTmpPools(poolListDataKeys);
    for (let i = 0; i < poolListDataKeys.length; i++) {
      tmp[poolListDataKeys[i]] = {};
      newDashboardData[poolListDataKeys[i]] = {};
      let poolTokenData = poolListData[poolListDataKeys[i]];
      poolTokenDataKeys = Object.keys(poolTokenData);

      for (let j = 0; j < poolTokenDataKeys.length; j++) {
        let poolToken = poolTokenData[poolTokenDataKeys[j]];
        const res = await readState(
          library,
          DataProvider.abi,
          getContractAddr('dataProvider'),
          'getReserveData',
          [0, poolToken.address],
        );
        console.warn('dashboard fetch has warning');
        if (!res) {
          console.warn('market, failed to fetch board data from DataProvider');
          break;
        }
        console.log(
          'hjhjhj see dashboard data fetched',
          res,
          'length: ',
          res.length,
          'ltv: ',
          toFloat(res[0][0], 2),
          'totalSupply: ',
          toFloat(res[1], 27),
          'totalBorrow:',
          toFloat(res[2], 27),
          'supplyAPR',
          toFloat(res[3], 27),
          'borrowAPR',
          toFloat(res[4], 27),
        );
        // data[([i][j]).toString()] = {
        let data = {
          ltv: toFloat(res[0][0], 2),
          totalSupply: toFloat(res[1], 27),
          totalBorrow: toFloat(res[2], 27),
          supplyApr: toFloat(res[3], 27),
          borrowApr: toFloat(res[4], 27),
        };
        newDashboardData[`${poolListDataKeys[i]}`][`${poolToken.name}`] = data;
      }

      tmp[poolListDataKeys[i]] = poolTokenDataKeys;
    }
    setTokenTMP(tmp);
    setDashboardData(newDashboardData);
  };

  const getAssetData = () => {
    if (tokenTMP == {}) {
      return;
    }
    let poolKeys = Object.keys(tokenTMP);
    let newTokenList = {};
    for (let i = 0; i < poolKeys.length; i++) {
      let poolKey = poolKeys[i];
      let tokenKeys = tokenTMP[`${poolKey}`];
      for (let j = 0; j < tokenKeys.length; j++) {
        let tokenKey = tokenKeys[j];
        if (newTokenList[tokenKey] == null) {
          newTokenList[tokenKey] = {};
        }
        newTokenList[tokenKey][poolKey] = dashboardData[poolKey][tokenKey];
      }
    }
    setTokenListData(newTokenList);
  };

  useEffect(() => {
    if (!library) return;
    library.on('block', async () => {
      await fetchTokensData();
    });
  }, [library]);

  useEffect(async () => {
    await fetchDashboardData();
    // getAssetData()
  }, [poolListData]);

  useEffect(() => {
    getAssetData();
  }, [dashboardData]);

  const marketData = useMemo(() => {
    let tokens = Object.keys(tokenListData);
    let marketData = tokens.map((token, idx) => {
      let pools = Object.keys(tokenListData[token]).map((pool) => {
        // const key = `${token.name}-${pool}`;
        const temp = {
          key: token,
          token: token,
          name: pool,
          icon: '',
          ltv: parseInt(tokenListData[token][pool].ltv) || 0,
          totalSupply: parseInt(tokenListData[token][pool].totalSupply),
          totalBorrow: parseInt(tokenListData[token][pool].totalBorrow) || 0,
          supplyApr: parseInt(tokenListData[token][pool].supplyApr) || 0,
          borrowApr: parseInt(tokenListData[token][pool].borrowApr) || 0,
        };
        if (temp.key == 'ETH') {
          temp.icon = '/eth.svg';
        }
        if (temp.key == 'USDC') {
          temp.icon = '/usdc.svg';
        }
        if (temp.key == 'MATIC') {
          temp.icon = '/matic.svg';
        }
        console.log('hjhjhj icon temp', temp);
        return temp;
      });

      const stats = {
        ltv: pools.reduce((prev, pool) => prev + pool.ltv, 0) / pools.length,
        totalBorrow: pools.reduce((prev, pool) => prev + pool.totalBorrow, 0),
        totalSupply: pools.reduce((prev, pool) => prev + pool.totalSupply, 0),
        borrowApr:
          pools.reduce((prev, pool) => prev + pool.borrowApr, 0) / pools.length,
        supplyApr:
          pools.reduce((prev, pool) => prev + pool.supplyApr, 0) / pools.length,
      };
      console.log('hjhjhj icon token before return', pools[0].icon);

      return {
        key: token,
        icon: pools[0].icon,
        name: token,
        pools,
        ...stats,
      };
    });
    console.log('debug check:', tokenList, ' :', latestPrices);

    // console.log('debug, marketData: ', marketData);
    return marketData;
  }, [tokenListData, latestPrices]);

  const poolData = useMemo(() => {
    let pools = Object.keys(dashboardData);
    let poolData = pools.map((pool, idx) => {
      let tokens = Object.keys(dashboardData[pool]).map((token) => {
        const temp = {
          key: pool,
          token: pool,
          name: token,
          ltv: parseInt(dashboardData[pool][token].ltv) || 0,
          totalSupply: parseInt(dashboardData[pool][token].totalSupply),
          totalBorrow: parseInt(dashboardData[pool][token].totalBorrow) || 0,
          supplyApr: parseInt(dashboardData[pool][token].supplyApr) || 0,
          borrowApr: parseInt(dashboardData[pool][token].borrowApr) || 0,
        };
        return temp;
      });

      const stats = {
        ltv:
          tokens.reduce((prev, token) => prev + token.ltv, 0) / tokens.length,
        totalBorrow: tokens.reduce(
          (prev, token) => prev + token.totalBorrow,
          0,
        ),
        totalSupply: tokens.reduce(
          (prev, token) => prev + token.totalSupply,
          0,
        ),
        borrowApr:
          tokens.reduce((prev, token) => prev + token.borrowApr, 0) /
          tokens.length,
        supplyApr:
          tokens.reduce((prev, token) => prev + token.supplyApr, 0) /
          tokens.length,
      };
      return {
        key: pool,
        icon: pool.icon,
        name: pool,
        tokens,
        ...stats,
      };
    });
    console.log('debug check:', tokenList, ' :', latestPrices);

    // setPoolData(poolDataTmp)
    return poolData;
  }, [dashboardData, latestPrices]);

  useEffect(() => {
    let newPoolData = [];
    if (marketData) {
      console.log('debug, poolData expanded: ', expandedRowKeys);
      newPoolData = marketData[expandedRowKeys]?.pools;
      console.log(
        'debug, poolData: ',
        marketData,
        expandedRowKeys,
        newPoolData,
      );
    }
    // setPoolData(newPoolData);
  }, [marketData, expandedRowKeys]);

  // only expand one row at a time: https://stackoverflow.com/questions/67295603/react-and-expandedrow-render-in-ant-design
  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.key); // I have set my record.id as row key. Check the documentation for more details.
    }
    setExpandedRowKeys(keys);
  };

  const totalSupply = useMemo(() => {
    if (marketData) {
      return marketData.reduce(
        (prev, token) =>
          prev + token.totalSupply * (latestPrices[token.name] || 0),
        0,
      );
    }
    return 0;
  }, [marketData]);
  const totalBorrows = useMemo(() => {
    if (marketData) {
      return marketData.reduce(
        (prev, token) =>
          prev + token.totalBorrow * (latestPrices[token.name] || 0),
        0,
      );
    }
    return 0;
  }, [marketData]);

  return (
    <div className={styles.market}>
      <Row>
        <Col className={styles.main} span={24}>
          <KpRpc totalSupply={totalSupply} totalBorrows={totalBorrows} />
          <Row>
            <Col span={16}>
              <div>
                <Tabs
                  defaultActiveKey="1"
                  onChange={onChange}
                  type="card"
                  style={{
                    width: '200px',
                    border: '1px solid #1b1d23',
                    borderBottom: '0',
                    transform: 'translateY(1px)',
                  }}
                >
                  <TabPane tab="Assets" key="1"></TabPane>
                  <TabPane tab="Pools" key="2"></TabPane>
                </Tabs>
              </div>
              {(key == '1' && (
                <>
                  <Table
                    style={{ border: '1px solid #1b1d23' }}
                    columns={columns}
                    dataSource={marketData}
                    expandedRowKeys={expandedRowKeys}
                    onExpand={onTableRowExpand}
                    expandable={{
                      expandRowByClick: true,
                      expandedRowRender: (record1) => (
                        <div style={{ background: '#1b1d23' }}>
                          <KpChildTable
                            style={{ margin: '0' }}
                            columns={childColumns}
                            showHeader={false}
                            pagination={false}
                            dataSource={record1.pools}
                            onRow={(record2) => {
                              return {
                                onClick: (event) => {
                                  setR1(record1);
                                  setR2(record2);
                                }, // 点击行
                              };
                            }}
                          />
                        </div>
                      ),
                    }}
                    pagination={false}
                  />
                  <MarketDashboard />
                </>
              )) || (
                <Table
                  style={{ border: '1px solid #1b1d23' }}
                  columns={columns}
                  dataSource={poolData}
                  expandable={{
                    expandRowByClick: true,
                    expandedRowRender: (record) => (
                      <div style={{ background: '#1b1d23' }}>
                        <KpChildTable
                          style={{ margin: '0' }}
                          columns={childColumns}
                          showHeader={false}
                          pagination={false}
                          dataSource={record.tokens}
                          onRow={(record2) => {
                            return {
                              onClick: (event) => {
                                setR1(record2);
                                setR2(record);
                              }, // 点击行
                            };
                          }}
                        />
                      </div>
                    ),
                  }}
                  pagination={false}
                />
              )}
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ paddingLeft: '25px' }}
            >
              <Affix offsetTop={10}>
                <div className={styles.action}>
                  <KpTabs
                    tabType="market"
                    setSelectedTab={setSelectedTab}
                    onChange={() => {}}
                  />
                  <KpBuy
                    onSelectPool={onSelectPool}
                    onSelectToken={onSelectToken}
                    selectedTab={selectedTab}
                    dataSource={{
                      r1,
                      r2,
                    }}
                    open={() => props.setVisibleMetaMask(true)}
                  />
                  <Drawer
                    title="Select a Token"
                    className={styles.h100}
                    placement="bottom"
                    onClose={onClose}
                    visible={visible}
                    getContainer={false}
                    maskClosable={false}
                    // closeIcon={false}
                    style={{ position: 'absolute' }}
                  >
                    <div className={styles.title}>
                      <div>
                        <p>Token Name</p>
                      </div>
                      <div>
                        <p>Balance</p>
                      </div>
                    </div>
                    <hr />

                    <div className={styles.tokenlist}>
                      {getTokenList(chainId).map((item) => (
                        <div
                          className={styles.item}
                          onClick={() => onSelectTokenCurrent(item)}
                        >
                          <div>
                            <img src={item.icon} />
                            <p>{item.name}</p>
                          </div>
                          <div>
                            <p>0</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Drawer>
                </div>
              </Affix>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Page;
