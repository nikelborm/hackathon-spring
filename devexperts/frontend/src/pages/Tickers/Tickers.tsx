import { Table } from 'antd';
import React from 'react';

export const Tickers = () => {
  const columns = [
    {
      title: 'Тикер',
      ...humanTextColumn('symbol'),
      width: '30%',
    },
    {
      title: 'Название компании',
      ...humanTextColumn('companyName'),
      width: '70%',
    },
  ];
  return (
    <>
      <h1>Количестов компаний в системе: 2600</h1>
      <Table
        tableLayout="fixed"
        dataSource={tickers}
        columns={columns}
        pagination={false}
        style={{ width: '100%', marginTop: '40px' }}
      />
    </>
  );
};

const humanTextColumn = (key) => ({
  dataIndex: key,
  key,
  sorter: (a, b) => a[key].localeCompare(b[key]),
  // sortDirections: ['ascend', 'descend'],
});

const tickers = [
  { symbol: 'AVB', companyName: 'AvalonBay Communities, Inc.' },
  { symbol: 'AXS', companyName: 'Axis Capital Holdings Limited' },
  { symbol: 'ITUB', companyName: 'Itau Unibanco Banco Holding SA' },
  { symbol: 'TCFC', companyName: 'The Community Financial Corporation' },
  { symbol: 'ELP', companyName: 'Companhia Paranaense de Energia (COPEL)' },
  { symbol: 'EVGBC', companyName: 'Eaton Vance NextShares Trust' },
  { symbol: 'EVLMC', companyName: 'Eaton Vance NextShares Trust II' },
  {
    symbol: 'FCT',
    companyName: 'First Trust Senior Floating Rate Income Fund II',
  },
  {
    symbol: 'SKOR',
    companyName: 'FlexShares Credit-Scored US Corporate Bond Index Fund',
  },
  {
    symbol: 'FDEU',
    companyName: 'First Trust Dynamic Europe Equity Income Fund',
  },
  { symbol: 'FIF', companyName: 'First Trust Energy Infrastructure Fund' },
  { symbol: 'FSD', companyName: 'First Trust High Income Long Short Fund' },
  {
    symbol: 'FTHY',
    companyName: 'First Trust High Yield Opportunities 2027 Term Fund',
  },
  {
    symbol: 'FPF',
    companyName: 'First Trust Intermediate Duration Preferred & Income Fund',
  },
  { symbol: 'FEI', companyName: 'First Trust MLP and Energy Income Fund' },
  { symbol: 'FMY', companyName: 'First Trust' },
  {
    symbol: 'FPL',
    companyName: 'First Trust New Opportunities MLP & Energy Fund',
  },
  {
    symbol: 'FAM',
    companyName: 'First Trust/Aberdeen Global Opportunity Income Fund',
  },
  { symbol: 'GL', companyName: 'Globe Life Inc.' },
  { symbol: 'HTA', companyName: 'Healthcare Trust of America, Inc.' },
  { symbol: 'INGR', companyName: 'Ingredion Incorporated' },
  {
    symbol: 'SLQD',
    companyName: 'iShares 0-5 Year Investment Grade Corporate Bond ETF',
  },
  { symbol: 'SHY', companyName: 'iShares 1-3 Year Treasury Bond ETF' },
  {
    symbol: 'IGSB',
    companyName: 'iShares 1-5 Year Investment Grade Corporate Bond ETF',
  },
  { symbol: 'TLT', companyName: 'iShares 20+ Year Treasury Bond ETF' },
  { symbol: 'IEI', companyName: 'iShares 3-7 Year Treasury Bond ETF' },
  { symbol: 'IEF', companyName: 'iShares 7-10 Year Treasury Bond ETF' },
  { symbol: 'IUSB', companyName: 'iShares Core Total USD Bond Market ETF' },
  { symbol: 'ISTB', companyName: 'iShares Core 1-5 Year USD Bond ETF' },
  {
    symbol: 'EMB',
    companyName: 'iShares J.P. Morgan USD Emerging Markets Bond ETF',
  },
  { symbol: 'MBB', companyName: 'iShares MBS ETF' },
  {
    symbol: 'PFF',
    companyName: 'iShares Preferred and Income Securities ETF',
  },
  {
    symbol: 'SUSB',
    companyName: 'iShares ESG Aware 1-5 Year USD Corporate Bond ETF',
  },
  {
    symbol: 'SUSC',
    companyName: 'iShares ESG Aware USD Corporate Bond ETF',
  },
  {
    symbol: 'IBTD',
    companyName: 'iShares iBonds Dec 2023 Term Treasury ETF',
  },
  {
    symbol: 'IBTE',
    companyName: 'iShares iBonds Dec 2024 Term Treasury ETF',
  },
  {
    symbol: 'IBTF',
    companyName: 'iShares iBonds Dec 2025 Term Treasury ETF',
  },
  {
    symbol: 'IBTG',
    companyName: 'iShares iBonds Dec 2026 Term Treasury ETF',
  },
  {
    symbol: 'IBTH',
    companyName: 'iShares iBonds Dec 2027 Term Treasury ETF',
  },
  {
    symbol: 'IBTI',
    companyName: 'iShares iBonds Dec 2028 Term Treasury ETF',
  },
  {
    symbol: 'IBTJ',
    companyName: 'iShares iBonds Dec 2029 Term Treasury ETF',
  },
  {
    symbol: 'IBTK',
    companyName: 'iShares iBonds Dec 2030 Term Treasury ETF',
  },
  {
    symbol: 'IBTL',
    companyName: 'iShares iBonds Dec 2031 Term Treasury ETF',
  },
  {
    symbol: 'HYXF',
    companyName: 'iShares ESG Advanced High Yield Corporate Bond ETF',
  },
  { symbol: 'FALN', companyName: 'iShares Fallen Angels USD Bond ETF' },
  {
    symbol: 'IGIB',
    companyName: 'iShares 5-10 Year Investment Grade Corporate Bond ETF',
  },
  {
    symbol: 'USIG',
    companyName: 'iShares Broad USD Investment Grade Corporate Bond ETF',
  },
  {
    symbol: 'KYN',
    companyName: 'Kayne Anderson Energy Infrastructure Fund, Inc.',
  },
  {
    symbol: 'KMF',
    companyName: 'Kayne Anderson NextGen Energy & Infrastructure, In',
  },
  { symbol: 'LDI', companyName: 'loanDepot, Inc.' },
  { symbol: 'NRZ', companyName: 'New Residential Investment Corp.' },
  { symbol: 'DOC', companyName: 'Physicians Realty Trust' },
  { symbol: 'PJT', companyName: 'PJT Partners Inc.' },
  { symbol: 'GENY', companyName: 'Principal Millennials ETF' },
  { symbol: 'USMC', companyName: 'Principal U.S. Mega-Cap ETF' },
  { symbol: 'PSET', companyName: 'Principal Quality ETF' },
  {
    symbol: 'PSC',
    companyName: 'Principal U.S. Small-Cap Multi-Factor ETF',
  },
  { symbol: 'PY', companyName: 'Principal Value ETF' },
  { symbol: 'SCVL', companyName: 'Shoe Carnival, Inc.' },
  { symbol: 'SCS', companyName: 'Steelcase Inc.' },
  { symbol: 'VIV', companyName: 'Telefonica Brasil S.A.' },
  {
    symbol: 'ANGL',
    companyName: 'VanEck Fallen Angel High Yield Bond ETF',
  },
  { symbol: 'PPH', companyName: 'VanEck Pharmaceutical ETF' },
  {
    symbol: 'VWOB',
    companyName: 'Vanguard Emerging Markets Government Bond ETF',
  },
  {
    symbol: 'VCIT',
    companyName: 'Vanguard Intermediate-Term Corporate Bond ETF',
  },
  {
    symbol: 'VGIT',
    companyName: 'Vanguard Intermediate-Term Treasury ETF',
  },
  { symbol: 'VCLT', companyName: 'Vanguard Long-Term Corporate Bond ETF' },
  { symbol: 'VGLT', companyName: 'Vanguard Long-Treasury ETF' },
  {
    symbol: 'VMBS',
    companyName: 'Vanguard Mortgage-Backed Securities ETF',
  },
  { symbol: 'VCSH', companyName: 'Vanguard Short-Term Corporate Bond ETF' },
  { symbol: 'VGSH', companyName: 'Vanguard Short-Term Treasury ETF' },
  {
    symbol: 'VTIP',
    companyName:
      'Vanguard Short-Term Inflation-Protected Securities Index Fund',
  },
  { symbol: 'BND', companyName: 'Vanguard Total Bond Market ETF' },
  { symbol: 'VTC', companyName: 'Vanguard Total Corporate Bond ETF' },
  { symbol: 'BNDX', companyName: 'Vanguard Total International Bond ETF' },
  { symbol: 'BNDW', companyName: 'Vanguard Total World Bond ETF' },
  {
    symbol: 'IAE',
    companyName: 'Voya Asia Pacific High Dividend Equity Income Fund',
  },
  {
    symbol: 'IGA',
    companyName: 'Voya Global Advantage and Premium Opportunity Fund',
  },
  {
    symbol: 'IDE',
    companyName: 'Voya Infrastructure, Industrials and Materials Fund',
  },
  {
    symbol: 'IHD',
    companyName: 'Voya Emerging Markets High Income Dividend Equity Fund',
  },
  {
    symbol: 'IGD',
    companyName: 'Voya Global Equity Dividend and Premium Opportunity Fund',
  },
  {
    symbol: 'WINC',
    companyName: 'Western Asset Short Duration Income ETF',
  },
  { symbol: 'WBND', companyName: 'Western Asset Total Return ETF' },
  { symbol: 'WERN', companyName: 'Werner Enterprises, Inc.' },
  {
    symbol: 'WMC',
    companyName: 'Western Asset Mortgage Capital Corporation',
  },
  { symbol: 'WSR', companyName: 'Whitestone REIT' },
  { symbol: 'A', companyName: 'Agilent Technologies, Inc.' },
  {
    symbol: 'FINS',
    companyName: 'Angel Oak Financial Strategies Income Term Trust',
  },
  { symbol: 'BBDO', companyName: 'Banco Bradesco Sa' },
  { symbol: 'BBD', companyName: 'Banco Bradesco Sa' },
  { symbol: 'BNS', companyName: 'Bank of Nova Scotia (The)' },
  { symbol: 'BKSC', companyName: 'Bank of South Carolina Corp.' },
  { symbol: 'BRX', companyName: 'Brixmor Property Group Inc.' },
  { symbol: 'CSCO', companyName: 'Cisco Systems, Inc.' },
  { symbol: 'CUZ', companyName: 'Cousins Properties Incorporated' },
  { symbol: 'DG', companyName: 'Dollar General Corporation' },
  { symbol: 'ERIE', companyName: 'Erie Indemnity Company' },
  { symbol: 'ING', companyName: 'ING Group, N.V.' },
  { symbol: 'DGX', companyName: 'Quest Diagnostics Incorporated' },
  { symbol: 'SAFM', companyName: 'Sanderson Farms, Inc.' },
  { symbol: 'MTN', companyName: 'Vail Resorts, Inc.' },
  { symbol: 'WY', companyName: 'Weyerhaeuser Company' },
  { symbol: 'BDN', companyName: 'Brandywine Realty Trust' },
  { symbol: 'CMCSA', companyName: 'Comcast Corporation' },
  { symbol: 'CVBF', companyName: 'CVB Financial Corporation' },
  { symbol: 'GPS', companyName: 'Gap, Inc. (The)' },
  { symbol: 'EFAS', companyName: 'Global X MSCI SuperDividend EAFE ETF' },
  { symbol: 'ALTY', companyName: 'Global X Alternative Income ETF' },
  { symbol: 'SRET', companyName: 'Global X SuperDividend REIT ETF' },
  { symbol: 'JPM', companyName: 'J P Morgan Chase & Co' },
  { symbol: 'PKBK', companyName: 'Parke Bancorp, Inc.' },
  { symbol: 'RRX', companyName: 'Regal Rexnord Corporation' },
  { symbol: 'ROP', companyName: 'Roper Technologies, Inc.' },
  { symbol: 'TTC', companyName: 'Toro Company (The)' },
  { symbol: 'ABM', companyName: 'ABM Industries Incorporated' },
  { symbol: 'CPB', companyName: 'Campbell Soup Company' },
  { symbol: 'FCPT', companyName: 'Four Corners Property Trust, Inc.' },
  { symbol: 'IMKTA', companyName: 'Ingles Markets, Incorporated' },
  { symbol: 'PFBC', companyName: 'Preferred Bank' },
  { symbol: 'PGR', companyName: 'Progressive Corporation (The)' },
  { symbol: 'RVSB', companyName: 'Riverview Bancorp Inc' },
  { symbol: 'SSD', companyName: 'Simpson Manufacturing Company, Inc.' },
  { symbol: 'TIMB', companyName: 'TIM S.A.' },
  { symbol: 'VLGEA', companyName: 'Village Super Market, Inc.' },
  { symbol: 'WNC', companyName: 'Wabash National Corporation' },
  {
    symbol: 'AFB',
    companyName: 'Alliance National Municipal Income Fund Inc',
  },
  { symbol: 'AEO', companyName: 'American Eagle Outfitters, Inc.' },
  { symbol: 'AXP', companyName: 'American Express Company' },
  { symbol: 'T', companyName: 'AT&T Inc.' },
  { symbol: 'BRC', companyName: 'Brady Corporation' },
  { symbol: 'CIO', companyName: 'City Office REIT, Inc.' },
  { symbol: 'CULP', companyName: 'Culp, Inc.' },
  { symbol: 'DRI', companyName: 'Darden Restaurants, Inc.' },
  { symbol: 'EBF', companyName: 'Ennis, Inc.' },
  { symbol: 'FLIC', companyName: 'The First of Long Island Corporation' },
  { symbol: 'FSFG', companyName: 'First Savings Financial Group, Inc.' },
  { symbol: 'GD', companyName: 'General Dynamics Corporation' },
  { symbol: 'GIS', companyName: 'General Mills, Inc.' },
  { symbol: 'GNTX', companyName: 'Gentex Corporation' },
  { symbol: 'HBNC', companyName: 'Horizon Bancorp, Inc.' },
  { symbol: 'INTU', companyName: 'Intuit Inc.' },
  { symbol: 'ISAA', companyName: 'Iron Spark I Inc.' },
  {
    symbol: 'LGI',
    companyName: 'Lazard Global Total Return and Income Fund',
  },
  { symbol: 'LMNR', companyName: 'Limoneira Co' },
  { symbol: 'LNC', companyName: 'Lincoln National Corporation' },
  { symbol: 'LOAN', companyName: 'Manhattan Bridge Capital, Inc' },
  { symbol: 'MMC', companyName: 'Marsh & McLennan Companies, Inc.' },
  { symbol: 'MRVL', companyName: 'Marvell Technology, Inc.' },
  { symbol: 'MA', companyName: 'Mastercard Incorporated' },
  { symbol: 'NTAP', companyName: 'NetApp, Inc.' },
  { symbol: 'NYT', companyName: 'New York Times Company (The)' },
  { symbol: 'SGA', companyName: 'Saga Communications, Inc.' },
  { symbol: 'TOL', companyName: 'Toll Brothers, Inc.' },
  { symbol: 'TD', companyName: 'Toronto Dominion Bank (The)' },
  { symbol: 'TTEC', companyName: 'TTEC Holdings, Inc.' },
  { symbol: 'UDR', companyName: 'UDR, Inc.' },
  { symbol: 'UVV', companyName: 'Universal Corporation' },
  { symbol: 'GROW', companyName: 'U.S. Global Investors, Inc.' },
  { symbol: 'WSBF', companyName: 'Waterstone Financial, Inc.' },
  { symbol: 'BBVA', companyName: 'Banco Bilbao Viscaya Argentaria S.A.' },
  {
    symbol: 'CPZ',
    companyName: 'Calamos Long/Short Equity & Dynamic Income Trust',
  },
  { symbol: 'CSQ', companyName: 'Calamos Strategic Total Return Fund' },
  {
    symbol: 'CHI',
    companyName: 'Calamos Convertible Opportunities and Income Fund',
  },
];
