import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useSelector, useDispatch } from "react-redux";


export const ExpensesDataGrid = ({handleModalExcluirSaida, handleModalEditarSaida, handleModalValorJaPago, handleModalValorPago, gridCompleta }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const usuarioLogado = useSelector((state) => state.userDatas.values);
  const valorHaPagar = useSelector((state) => state?.valorHaPagarDatas?.valoresAPagarByUserAtivos);


  const handleDadosTratados = () => {
    const dadosTratados = [];
    for (let i = 0; i < valorHaPagar?.length; i++) {
      dadosTratados.push({
        id: valorHaPagar[i].codigo,
        data_de_cadastro: `${valorHaPagar[i].data_cadastro[0]}${valorHaPagar[i].data_cadastro[1]}${valorHaPagar[i].data_cadastro[2]}${valorHaPagar[i].data_cadastro[3]}${valorHaPagar[i].data_cadastro[4]}${valorHaPagar[i].data_cadastro[5]}${valorHaPagar[i].data_cadastro[6]}${valorHaPagar[i].data_cadastro[7]}${valorHaPagar[i].data_cadastro[8]}${valorHaPagar[i].data_cadastro[9]}`,
        data_vencimento: `${valorHaPagar[i].data_vencimento[0]}${valorHaPagar[i].data_vencimento[1]}${valorHaPagar[i].data_vencimento[2]}${valorHaPagar[i].data_vencimento[3]}${valorHaPagar[i].data_vencimento[4]}${valorHaPagar[i].data_vencimento[5]}${valorHaPagar[i].data_vencimento[6]}${valorHaPagar[i].data_vencimento[7]}${valorHaPagar[i].data_vencimento[8]}${valorHaPagar[i].data_vencimento[9]}`,
        valor_total: `R$ ${valorHaPagar[i].valor_total.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
        parcelas_pagas: valorHaPagar[i].parcelas_pagas,
        descricao: valorHaPagar[i].descricao,
        statos: valorHaPagar[i].status,
        excluir: valorHaPagar[i].codigo,
        editar: valorHaPagar[i].codigo,
        valor_pago: `R$ ${valorHaPagar[i].valor_total_pago.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
      });
    };
    return dadosTratados;
  };

  const columns = [
    {
      field: "id",
      headerName: "Codigo",
      flex: 0.3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "statos",
      headerName: "Statos",
      flex: 0.3,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "data_vencimento",
      headerName: "Data de Vencimento",
      type: "number",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { id, descricao } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="space-between"
              // backgroundColor={
              //   colors.redAccent[600]
              // }
            borderRadius="4px"
            value={ id }
            onClick={handleModalValorPago}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              {descricao}
              <div className="esconder" >
                {id}
              </div>
            </Typography>
            <TaskAltOutlinedIcon />
          </Box>
        );
      },
    },
    // {
    //   field: "parcelas_totais",
    //   headerName: "Parcelas Totais",
    //   flex: 0.5,
    //   headerAlign: "center",
    //   align: "center",
    // },
    
    // {
    //   field: "parcelas_pagas",
    //   headerName: "Parcelas Pagas",
    //   flex: 0.5,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "valor_total",
      headerName: "Valor Total",
      flex: 0.5,
      headerAlign: "center",
      align: "right",
    },
    {
      field: "valor_pago",
      headerName: "Valor Pago",
      flex: 0.6,
      headerAlign: "center",
      align: "right",
      renderCell: ({ row: { id, valor_pago } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="space-between"
              // backgroundColor={
              //   colors.redAccent[600]
              // }
            borderRadius="4px"
            value={ id }
            onClick={handleModalValorPago}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >

            <TaskAltOutlinedIcon />
            <Typography color={colors.grey[100]}>
              {valor_pago}
              <div className="esconder" >
                {id}
              </div>
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "data_de_cadastro",
      headerName: "Data de Cadastro",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "editar",
      headerName: "Editar",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { editar } }) => {
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
            value={ editar }
            onClick={handleModalEditarSaida}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              Editar
              <div className="esconder">
                {editar}
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
      renderCell: ({ row: { excluir } }) => {
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
            value={ excluir }
            onClick={handleModalExcluirSaida}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              Excluir
              {/* <DeleteForeverOutlinedIcon /> */}
              <div className="esconder">
                {excluir}
              </div>
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "pagar",
      headerName: "Pagar",
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
              colors.greenAccent[600]
            }
            borderRadius="4px"
            value={ id }
            onClick={handleModalValorJaPago}
            onBlur={() => {  }}
            className="ativarCursoDoMouser"
          >
            <Typography color={colors.grey[100]}>
              Pagar
              <div className="esconder">
                { id }
              </div>
            </Typography>
          </Box>
        );
      },
    },
  ];


  return (
    <DataGrid
      rows={handleDadosTratados()}
      columns={columns}
      components={{ Toolbar: GridToolbar }}
    />
  );
};
