import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function StudentsTable() {

    const [lastUpdatedTime, setLastUpdatedTime] = useState('')
    const [rowData, setRowData] = useState([])

    const columnDefs =  [{
        headerName: "Name of Student", field: "name", sortable:true, filter: true,
      }, {
        headerName: "Github Username", field: "username", sortable:true, filter: true,cellRenderer:cellRenderer,
      }, {
        headerName: "PRs(Merged/Open)", field: "prs", sortable:true, filter: true,
      },{
        headerName: "Commits", field: "commits", sortable:true, filter: true,
      },{
        headerName: "Lines(Added/Removed)", field: "lines", sortable:true, filter: true,
      }
    ]

    useEffect(() => {
        setRowData([
            { "name": "sammammmm", "username": "q", "prs": "11/2", "commits": 10, "lines": "+11/-11"},
            { "name": "qqaaaaaaa", "username": "qqq", "prs": "1333/2", "commits": 910, "lines": "+2311/-11"}
        ])
        setLastUpdatedTime('TIME_FROM_BACKEND')
        
    }, [])

    function cellRenderer(params) {
        const username = params.data.username
        const withHref =  `<a href="/stats/student/${username}">${username}</a>`
        return withHref
    }

    
    return(
       <div style={{textAlign: 'center'}}>
        <h3>Last Update at {lastUpdatedTime}. Stats are updated for every 3 hours </h3>
        <h5>You can sort the rows by clicking on headers, and also filter by clicking on the button by hovering</h5>
        <h5>Click on username to get detailed Stats</h5>
        
            <div
                className="ag-theme-alpine"
                style={{
                height: '90vh',
                width: '58vw',
                position: 'absolute',
                left: '50%',
                right: '50%',
                transform: 'translateX(-50%)' }}
                >   
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}>
                    </AgGridReact>
            </div>
       </div>
    )
}