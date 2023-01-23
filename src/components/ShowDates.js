import React, { useEffect, useState } from 'react';
import '../css/ShowDates.css'
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  const current = new Date();
  const currMonth = current.getMonth();
  const currDay = current.getDate();

  console.log(currDay);

  useEffect(() => {
    axios.get('https://skylershows-dce3.restdb.io/rest/skyler-whitfield-live-shows?&apikey=63a290def43a573dae095661')
    .then((incomingData) => {
      setAPIdata(incomingData.data)
      console.log(incomingData.data)
    })  
  }, [])

  return (
    <div className='showDatesTile'>
      <div className='showTable'>
        <Table>
          <Table.Body>
            {APIdata.filter((data)=>{
                  return data.MonthNum === currMonth
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month.substring(0,3)} {data.Day} : {data.Place} {data.City} {data.Time.substring(0, 9)}</Table.Cell>
                    </Table.Row>
                  )
                })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

