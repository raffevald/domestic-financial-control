import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";


export const CardDataGrid = ({handleExcluir, handleUpdate, dados }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDados = () => {
    const dadosTratados = [];
    for (let i = 0; i < dados?.length; i++) {
      dadosTratados.push({
        id: dados[i].codigo,
        cartao: dados[i].cartao,
        tipo: dados[i].tipo,
      });
    };
    return dadosTratados;
  };

  const columns = [
    {
      field: "id",
      headerName: "Codigo",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cartao",
      headerName: "Cartão",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "tipo",
      headerName: "Tipo de Cartão",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "editar",
      headerName: "Editar",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              colors.grey[600]
            }
            borderRadius="4px"
            value={ id }
            onClick={handleUpdate}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              Editar
              <div className="esconder">
                {id}
              </div>
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "excluir",
      headerName: "Excluir",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              colors.redAccent[600]
            }
            borderRadius="4px"
            value={ id }
            onClick={handleExcluir}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              Excluir
              <div className="esconder">
                {id}
              </div>
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      m="40px 0 0 0"
      height="63vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid
        rows={handleDados()}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};
