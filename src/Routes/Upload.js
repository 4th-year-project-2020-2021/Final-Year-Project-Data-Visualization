/**
 * @author Shirin Nagle
 *
 * user can upload csv file
 * 
 */
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { Chart, Interval, Tooltip } from 'bizcharts';
import { Line, Pie, Bar, Doughnut, Scatter } from 'react-chartjs-2';

const paragraphStyle = {
  marginTop: '10px',
  marginBottom: '10px'
}

function Upload() {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);


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

  function makeChart(data) {


  }

  return (
    <div style={{
      fontSize: "22px",
      fontFamily: "Nanum Gothic",
      color: "dark",
      position: 'absolute',
      width: "40%"
    }}>
      <h3 style={paragraphStyle}>Upload a CSV file to display data, please ensure at least two of the column names are titled year and cases to
      display a chart of the data</h3>

      <br></br>

      <br></br>

      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <div>


      </div>
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
      <React.Fragment>
        <div>
          <Bar
            data={data}
            //columns={columns}
            interactions={['active-region']}
            options={{
              title: { display: true, text: '', fontSize: 20 },
              legend: { display: true, position: 'right' }
            }}
          />
        </div>
      </React.Fragment>
    </div>
  );
}

export default Upload;

//https://www.cluemediator.com/read-csv-file-in-react

//code for flask
//"start-api": "cd api && ..\\envs\\dataviz\\Scripts\\activate &&  flask run --no-debugger",
