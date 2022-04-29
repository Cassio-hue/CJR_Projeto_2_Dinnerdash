import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getUsers } from "./users";
import { useEffect, useState } from "react";
import { BotaoStyledEdit, BotaoStyledDelete } from "./styled"

function Table() {
  const columns = [
    {
      field: "fullName",
      headerName: "Nome",
      sortable: true,
      width: 200,
      valueGetter: (params) =>
        `${params.row.first_name || ""} ${params.row.last_name || ""}`,
    },

    { field: "email", headerName: "Email", width: 230 },
    { field: "created_at", headerName: "Cadastrado em", width: 200 },

    {
      renderCell: ( cell ) => (
        <div>
          <BotaoStyledEdit href=''>Editar</BotaoStyledEdit>
          <BotaoStyledDelete href='' onClick={() => buttonDelete(cell)}>Excluir</BotaoStyledDelete>
        </div>
      ),
      width: 150,
      sortable: false,
      headerClassName: "lastcolumnSeparator",
    },
  ];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(getUsers);
  }, []);

  function buttonDelete(cell) {
      const newUsers = users.filter((user) => {
          return user.id !== cell.row.id
              
        })
        setUsers(newUsers)
  }

  return (
    <div style={{ 
      height: 400, width: "50%",
      paddingTop: "2rem",
      margin: 'auto',      
     }}>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu={true}
      />
    </div>
  );
}

export default Table;
