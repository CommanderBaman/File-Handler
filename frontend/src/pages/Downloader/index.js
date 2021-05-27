import { useState } from 'react'
import styles from './styles/downloader.module.css'
import GlobalTab from './Tabs/GlobalTab'
import PersonalTab from './Tabs/PersonalTab'
import SharedTab from './Tabs/SharedTab'

import {
  CustomTab,
  CustomTabList,
  CustomTabPanel,
  CustomTabs
} from '../../components/TabView'

const Downloader = () => {
  const [tabIndex, updateTabIndex] = useState(0)
  const onTabSwitch = (index) => {
    updateTabIndex(index)
  }

  const TabNames = ['Personal', 'Shared', 'Global']
  const TabComponents = [<PersonalTab />, <SharedTab />, <GlobalTab />]

  return (
    <div className='downloader-wrapper'>
      Downloader
      <CustomTabs
        selectedIndex={tabIndex}
        onSelect={(index) => onTabSwitch(index)}
        className={styles.tabsWrapper}
      >
        <CustomTabList>
          {TabNames.map((heading, index) => (
            <CustomTab key={index} index={index}>
              {heading}
            </CustomTab>
          ))}
        </CustomTabList>
        {TabComponents.map((component, index) => (
          <CustomTabPanel key={index} index={index}>
            <div
            // className={`${styles.tabPanel} ${
            //   tabSwitchSignal
            //     ? styles.opacityAppear300ms
            //     : styles.opacityDisappear300ms
            // }`}
            >
              {component}
            </div>
          </CustomTabPanel>
        ))}
      </CustomTabs>
    </div>
  )
}

export default Downloader
