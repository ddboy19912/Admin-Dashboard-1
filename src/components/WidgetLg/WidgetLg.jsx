import React from 'react'
import './WidgetLg.css'

function WidgetLg() {

const Button = ({type}) => {
return <button className={"WidgetLgButton " + type}>{type}</button>
};

  return (
    <div className="WidgetLg">
    <h3 className="WidgetLgTitle">Latest Transactions</h3>
    <table className="WidgetLgTable">
      <tr className="WidgetLgTr">
        <th className="WidgetLgTh">Customer</th>
           <th className="WidgetLgTh">Date</th>
              <th className="WidgetLgTh">Amount</th>
                 <th className="WidgetLgTh">Status</th>
      </tr>
      <tr className="WidgetLgTr">
<td className="WidgetLgUser">
  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='WidgetLgImage' />
  <span className="WidgetLgName">Roger Vincent</span>
</td>
<td className="WidgetLgDate">2 Jun 2021</td>
<td className="WidgetLgAmount">$4,400.00</td>
<td className="WidgetLgStatus"><Button type="Approved"/></td>
      </tr>


 <tr className="WidgetLgTr">
<td className="WidgetLgUser">
  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='WidgetLgImage' />
  <span className="WidgetLgName">Roger Vincent</span>
</td>
<td className="WidgetLgDate">2 Jun 2021</td>
<td className="WidgetLgAmount">$4,400.00</td>
<td className="WidgetLgStatus"><Button type="Declined"/></td>
      </tr>



       <tr className="WidgetLgTr">
<td className="WidgetLgUser">
  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='WidgetLgImage' />
  <span className="WidgetLgName">Roger Vincent</span>
</td>
<td className="WidgetLgDate">2 Jun 2021</td>
<td className="WidgetLgAmount">$4,400.00</td>
<td className="WidgetLgStatus"><Button type="Pending"/></td>
      </tr>


       <tr className="WidgetLgTr">
<td className="WidgetLgUser">
  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='WidgetLgImage' />
  <span className="WidgetLgName">Roger Vincent</span>
</td>
<td className="WidgetLgDate">2 Jun 2021</td>
<td className="WidgetLgAmount">$4,400.00</td>
<td className="WidgetLgStatus"><Button type="Approved"/></td>
      </tr>

      
    </table>
    </div>
  )
}

export default WidgetLg