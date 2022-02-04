import "../styles/Historique.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Historique = () => {
  const [bddChange, setBddChange] = useState(false);
  const [data, setData] = useState("");
  const [pageSizeAdmin, setPageSizeAdmin] = useState(10);

  const deleteData = (id) => {
    axios.delete("http://localhost:3030/historiques/historique", {
      data: { id: id },
    }) && setBddChange(!bddChange);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3030/historiques/historique")
      .then((response) => response.data)
      .then((data) => setData(data));
    setBddChange(!bddChange);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3030/historiques/historique")
      .then((response) => response.data)
      .then((data) => setData(data));
  }, [bddChange]);

  return (
    <div>
      <h2>Résumé de vos commandes</h2>
      <DataGrid
        style={{ height: 650 }}
        columns={[
          {
            field: "date",
            headerName: "Date",
            headerClassName: "headerTableau",
            minWidth: 110,
            flex: 0.5,
            align: "left",
            headerAlign: "left",
          },
          {
            field: "destination",
            headerName: "Destination",
            headerClassName: "headerTableau",
            type: "number",
            minWidth: 180,
            flex: 0.25,
            align: "center",
            headerAlign: "center",
          },
          {
            field: "cout",
            headerName: "Prix",
            headerClassName: "headerTableau",
            type: "number",
            minWidth: 75,
            flex: 0.25,
            align: "center",
            headerAlign: "center",
          },
          {
            field: "id",
            headerName: "Supprimer",
            headerClassName: "headerTableau",
            minWidth: 105,
            flex: 0.5,
            align: "center",
            headerAlign: "center",
            renderCell: (field) => (
              <i
                onClick={() => deleteData(field.id)}
                /*onClick={() => console.log(field.id)}*/
                class="fas fa-times-circle"
              ></i>
            ),
          },
        ]}
        sx={{
          /*fontFamily: 'var(--fontBody)',*/
          color: "white",
          borderColor: "var(--firstColor)",
          backdropFilter: "blur(20px)",
          boxShadow: "5px 5px 5px var(--shadowColor)",
          padding: "8px",
          "& .MuiDataGrid-cell:hover": {},
        }}
        rows={data}
        pageSize={pageSizeAdmin}
        onPageSizeChange={(newPageSize) => setPageSizeAdmin(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
        pagination
      />
    </div>
  );
};

export default Historique;
