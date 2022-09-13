import React, { useState } from 'react';
import style from './Tabs.module.css';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className={style.tabs}>
            {/* This nav handles the navigation between tabs  */}
            <ul className={style.nav} >
                <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul >

            { /* This outlet will render the contents of the active tab */}
            <div className={style.outlet} >
                <TabContent id="tab1" activeTab={activeTab}>
                    <FirstTab />
                </TabContent>

                <TabContent id="tab2" activeTab={activeTab}>
                    <SecondTab />
                </TabContent>

                <TabContent id="tab3" activeTab={activeTab}>
                    <ThirdTab />
                </TabContent>
            </div>
        </div>
    )
}

export default Tabs;