import React from 'react'
import './FeaturedInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

function featuredInfo() {
  return (
    <div className="featured">
<div className="featuredItem">
<span className="featuredTitle">Revenue</span>

<div className="featuredMoneyContainer">
<span className="featuredMoney">$2,415</span>
<span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/> </span>
</div>
<span className="featuredItemSub">Compared to last month</span>
</div>

<div className="featuredItem">
<span className="featuredTitle">Sales</span>
<div className="featuredMoneyContainer">
<span className="featuredMoney">$4,213</span>
<span className="featuredMoneyRate">-4.7 <ArrowDownward className='featuredIcon negative'/> </span>
</div>
<span className="featuredItemSub">Compared to last month</span>
</div>

<div className="featuredItem">
<span className="featuredTitle">Costs</span>
<div className="featuredMoneyContainer">
<span className="featuredMoney">$2,415</span>
<span className="featuredMoneyRate">+9.7 <ArrowUpward className='featuredIcon'/> </span>
</div>
<span className="featuredItemSub">Compared to last month</span>
</div>
    </div>
  )
}

export default featuredInfo