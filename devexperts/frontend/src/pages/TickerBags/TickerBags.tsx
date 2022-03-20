import { Button, Card, Col, Row } from 'antd';
import { FolderAddOutlined } from '@ant-design/icons';

import React from 'react';
import { Link } from 'react-router-dom';

export const TickerBags = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Link to="/tickerBags/123">
            <Card title="IT">Количестов компаний внутри: 8</Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/tickerBags/123">
            <Card title="Цветная металлургия">
              Количестов компаний внутри: 3
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/tickerBags/123">
            <Card title="Топливная промышленность">
              Количестов компаний внутри: 2
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Card bodyStyle={{ textAlign: 'center' }}>
            <Button type="primary" size="large" icon={<FolderAddOutlined />}>
              Создать портфель
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
