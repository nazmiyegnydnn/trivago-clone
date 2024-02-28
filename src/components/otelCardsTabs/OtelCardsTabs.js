import React from 'react'
import './OtelCardsTabs.scss'
import { Tabs } from 'antd';
import OtelCardsDetail from '../otelCardsDetail/OtelCardsDetail'

const OtelCardsTabs = () => {
  const { TabPane } = Tabs;
  const tabsData = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab ${id}`,
      key: id,
      name: `Name ${id}`
    };
  });


  return (
    <div className='otelCardsTabs'>
<Tabs defaultActiveKey="1" centered>
        {tabsData.map(tab => (
          <TabPane tab={tab.label} key={tab.key}>
            <OtelCardsDetail tabKey={tab.key} name={tab.name} />
          </TabPane>
        ))}
      </Tabs>
   </div>
  )
}

export default OtelCardsTabs