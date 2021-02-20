import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { Chart, Interval, Tooltip } from 'bizcharts';
 
const paragraphStyle = {
  marginTop: '10px',
  marginBottom: '10px'
}

function Upload() {
 
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState(10);
  useEffect(() =>{
    fetch('/time').then(resp => resp.json()).then(data =>{
        setCurrentTime(data.time);
    });
  }, []);

  // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }
 
        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
 
    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));
 
    setData(list);
    setColumns(columns);
  }
 
  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  }
 
  return (
    <div>
      <h3 style={paragraphStyle}>Upload a CSV file to the app</h3>
      <br></br>
      <h3>The current time is {currentTime}</h3>
      <br></br>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
      />
      <Chart height={600} autoFit data={data} interactions={['active-region']} padding={[10, 10, 10, 10]} >
    <Interval position="year*cases" />
    <Tooltip shared />
  </Chart>
    </div>
  );
}
 
export default Upload;

//https://www.cluemediator.com/read-csv-file-in-react