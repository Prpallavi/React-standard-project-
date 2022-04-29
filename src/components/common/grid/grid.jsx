import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Grid(props) {
  //console.log(props);
  const [rows, setRows] = useState([]);
  const [column, setColumn] = useState([]);

  //console.log(props.header);
  useEffect(() => {
    setColumn(props.header);
    setRows(props.data);
  }, [props]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={column}
        pagination={true}
        paginationPageSize={5}
        onCellValueChanged={props.onCellValueChanged}
      ></AgGridReact>
    </div>
  );
}

export default Grid;
