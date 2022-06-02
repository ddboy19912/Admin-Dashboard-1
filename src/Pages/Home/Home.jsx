import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'


function Home() {
return (

    <div className="home">
<FeaturedInfo />
<Chart data={userData} title='User Analytics' dataKey= "Active Users" grid/>
<div className="homeWidgets">
  <WidgetSm />
  <WidgetLg />
</div>
</div>

  )
}

export default Home