import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
  const actionColumne = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewBtn">View</div>
            <div className="deletBtn">Delet</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumne)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
