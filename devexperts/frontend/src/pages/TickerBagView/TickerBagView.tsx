import { Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const TickerBagView = () => {
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
      <h1>Количестов компаний в портфеле: {tickers.length}</h1>
      <Link to="/tickerBags/123/calendar">Каледарь</Link>
      <br />
      <Link to="/tickerBags/123/edit">Редактирование</Link>
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
];
