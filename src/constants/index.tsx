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
  'Main Pool': {
    id: 1,
    address: '0xf5d71A8E2ED90bB924b8E966BAe08B7Cf65517c6',
  },
  'MATIC Pool': {
    id: 2,
    address: '0xCC16E0Ab978cecB711506699E76afa174368f120',
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
    pools: ['Main Pool', 'MATIC Pool'],
    icon: '/matic.svg',
  },
  {
    key: '3',
    name: 'ETH',
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    decimals: 18,
    icon: '/eth.svg',
    pools: ['Main Pool', 'MATIC Pool'],
  },
  {
    key: '4',
    name: 'USDC',
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    decimals: 6,
    icon: '/usdc.svg',
    pools: ['Main Pool'],
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
    address: '0xC3708839f1E46F64178C05370a4735E9861c5d2b',
    decimals: 18,
    pools: ['Main Pool', 'MATIC Pool'],
    icon: '/matic.svg',
  },
  {
    key: '3',
    name: 'ETH',
    address: '0x713d4F6baEb75B9Cc6E5CB923481BACEF4F7029F',
    decimals: 18,
    icon: '/eth.svg',
    pools: ['Main Pool', 'MATIC Pool'],
  },
  {
    key: '4',
    name: 'USDC',
    address: '0xE478C855925b849cd10DDDBC6DBcE15F0142e0AA',
    decimals: 6,
    icon: '/usdc.svg',
    pools: ['Main Pool'],
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
    pools: ['Main Pool'],
  },
  {
    key: '4',
    name: 'USDC',
    icon: '/usdc.svg',
    pools: ['Main Pool'],
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
