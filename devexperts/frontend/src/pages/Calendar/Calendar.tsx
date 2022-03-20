import React, { useState } from 'react';
import { Calendar as AntdCalendar, Badge, Popover } from 'antd';

export const Calendar = () => {
  return (
    <div>
      <AntdCalendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 25:
      listData = [
        { id: 1, type: 'warning' },
        { id: 2, type: 'success' },
      ];
      break;
    case 10:
      listData = [
        { id: 3, type: 'warning' },
        { id: 4, type: 'success' },
        { id: 5, type: 'error' },
      ];
      break;
    case 15:
      listData = [
        { id: 6, type: 'warning' },
        {
          id: 7,
          type: 'success',
        },
        { id: 8, type: 'error' },
        { id: 9, type: 'error' },
        { id: 10, type: 'error' },
        { id: 11, type: 'error' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return <DateCell value={value} eventList={listData} />;
}

function DateCell({ value, eventList }) {
  const [popoverState, setPopoverState] = useState(
    Object.fromEntries(eventList.map((event) => [event.id, false]))
  );
  const mappings = {
    warning: '2 дня до закрытия реестра',
    success: 'Выплата Дивидендов',
    error: 'Закрытие реестра',
  };
  // ключ это айди ивента, значение = это обьект с ивентом
  return (
    <ul className="events">
      {eventList.map(
        ({ id, type, content, dividentGap = 0.05, tickerSymbol = 'AAPL' }) => (
          <li key={id}>
            <Popover
              content={
                <>
                  <p>{content}</p>
                  <p>Divident GAP: {dividentGap * 100}%</p>
                </>
              }
              title="Event description"
              trigger="click"
              placement="left"
              visible={popoverState[id]}
              onVisibleChange={(newState) =>
                setPopoverState((prev) => ({ ...prev, [id]: newState }))
              }
            >
              <Badge status={type} text={`${mappings[type]} ${tickerSymbol}`} />
            </Popover>
          </li>
        )
      )}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
