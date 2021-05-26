import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import styles from './styles/tabView.module.css'

/**
 * CustomTabs is the customized version of Tabs
 */
export const CustomTabs = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <Tabs {...otherProps} className={`react-tabs ${styles.tabs} ${className} `}>
      {children}
    </Tabs>
  )
}

CustomTabs.tabsRole = 'Tabs'

/**
 * CustomTab is the customized version of Tab
 */
export const CustomTab = (props) => {
  const { children, className, index, ...otherProps } = props
  return (
    <Tab
      {...otherProps}
      className={`react-tabs__tab ${styles.tab} ${className}`}
      selectedClassName={styles.specificTab}
      style={{ zIndex: `${20 - index}`, left: `-${index}%` }}
    >
      <h3 className={styles.tabHeading}>{children}</h3>
    </Tab>
  )
}

CustomTab.tabsRole = 'Tab'

/**
 * CustomTabList is the customized version of TabList
 */
export const CustomTabList = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <TabList
      {...otherProps}
      className={`react-tabs__tab-list ${styles.tablist} ${className}`}
    >
      {children}
    </TabList>
  )
}

CustomTabList.tabsRole = 'TabList'

/**
 * CustomTabPanel is the customized version of TabPanel
 */
export const CustomTabPanel = (props) => {
  const { children, className, ...otherProps } = props
  return (
    <TabPanel
      {...otherProps}
      className={`react-tabs__tab-panel ${styles.tabPanel} ${className}`}
    >
      {children}
    </TabPanel>
  )
}

CustomTabPanel.tabsRole = 'TabPanel'
