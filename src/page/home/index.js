import React from "react";
import {Button, Progress} from 'antd';
import styles from './index.less';


const Home = () => {
  return <div className={styles['home']}>
    <Button
      type="primary"
      size="small"
    >
      Home
    </Button>
    <Progress type="circle" percent={75} />
  </div>;
}

export default Home;