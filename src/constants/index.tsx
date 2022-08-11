// available networks
const networks = [
  {
    name: 'Polygon',
    img: '/polygon.svg',
    id: 80001,
    checked: false,
  },
  {
    name: 'Optimism',
    img: '/optimism.png',
    id: 69,
    checked: false,
  },
  {
    name: 'HardHat',
    img: '/polygon.svg',
    id: 31337,
    checked: false,
  },
  {
    name: 'Ganache',
    img: '/polygon.svg',
    id: 1337,
    checked: false,
  },
];

const defaultChainId = 80001;

export const getNetworks = () => networks;
export const getDefaultNetwork = () =>
  networks.find((net) => net.id == defaultChainId);

// lending pools
export const pools = {
  'main pool': {
    id: 1,
    address: '0xCd5f773C4A1c398f4312aD589ea590A3bf5a1003',
  },
  'eth-usdc pool': {
    id: 2,
    address: '0x5197DD5932e64E4b4a4FACf4CA7172780109aEa1',
  },
};

export const getPoolAddr = (key) => pools[key].address;

// tokenlist
export const tokenListPolygon = [
  // {
  //   key: '1',
  //   name: 'BTC',
  //   pools: [1],
  //   icon: '/btc.svg',
  // },
  {
    key: '2',
    name: 'MATIC',
    address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    decimals: 18,
    pools: ['main pool', 'eth-usdc pool'],
    icon: '/matic.svg',
  },
  {
    key: '3',
    name: 'ETH',
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    decimals: 18,
    icon: '/eth.svg',
    pools: ['main pool', 'eth-usdc pool'],
  },
  {
    key: '4',
    name: 'USDC',
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    decimals: 6,
    icon: '/usdc.svg',
    pools: ['main pool'],
  },
];

// tokenlist
export const tokenListGanache = [
  // {
  //   key: '1',
  //   name: 'BTC',
  //   pools: [1],
  //   icon: '/btc.svg',
  // },
  {
    key: '2',
    name: 'MATIC',
    address: '0x1Df2FAa18c6D0EAa5CE77feEC82AF5e7ae03D56e',
    decimals: 18,
    pools: ['main pool', 'eth-usdc pool'],
    icon: '/matic.svg',
  },
  {
    key: '3',
    name: 'ETH',
    address: '0x632e32C4003B6e71DA94eD5D05ED15044F97Bf7a',
    decimals: 18,
    icon: '/eth.svg',
    pools: ['main pool', 'eth-usdc pool'],
  },
  {
    key: '4',
    name: 'USDC',
    address: '0x74E3fcEB6D94F1445E2Ed3a2A495578B3E04Af63',
    decimals: 6,
    icon: '/usdc.svg',
    pools: ['main pool'],
  },
];

export const tokenListOp = [
  // {
  //   key: '1',
  //   name: 'BTC',
  //   pools: [1],
  //   icon: '/btc.svg',
  // },
  // {
  //   key: '2',
  //   name: 'OP',
  //   pools: [1, 2],
  //   icon: '/optimism.png',
  // },
  {
    key: '3',
    name: 'ETH',
    icon: '/eth.svg',
    pools: ['main pool'],
  },
  {
    key: '4',
    name: 'USDC',
    icon: '/usdc.svg',
    pools: ['main pool'],
  },
];

export const getTokenList = (chainId: Number | undefined) =>
  ({
    69: tokenListOp,
    80001: tokenListPolygon,
    31337: tokenListPolygon,
    1337: tokenListGanache,
  }[chainId || defaultChainId]);

export const getToken = (chainId, symbol) => {
  const tokenList = getTokenList(chainId);
  return tokenList.find((token) => token.name == symbol);
};

export const getTokenByAddress = (chainId, address) => {
  const tokenList = getTokenList(chainId);
  return tokenList.find((token) => token.address == address);
};
