import React from "react";
import {Button, Progress} from 'antd';


const Home = () => {
  return <div>
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