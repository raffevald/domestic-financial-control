import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MoneyOffCsredOutlined from "@mui/icons-material/MoneyOffCsredOutlined";
import CreditCard from "@mui/icons-material/CreditCard";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";

import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  
  const userDados = useSelector((state) => state.userDatas.values);
  // const userinfos = useSelector((state) => state.userDatas.userInfos[0]);
  // const usuarioLogado = useSelector((state) => state.userDatas.values);
  // console.log(userinfos?.email ? '' : userinfos.email);

  // const [email, setEmail] = useState('');

  // if(userinfos !== undefined) {
  //   setEmail(userinfos?.email);
  // } 
  // console.log(email);


  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected ] = useState("Dashboard");
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",  
              color: colors.grey[100],
              // height: "120%"
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {userDados.perfilUser.toUpperCase()}
                  {/* {userinfos.perfil_do_usuario.toUpperCase()} */}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  // src={`../../assets/user.png`}
                  src={userDados.avatarUrl}
                  // src={userinfos.vatar_url}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  { `${userDados.firstName} ${userDados.lastName}` }
                  {/* { `${userinfos.primeiro_nome} ${userinfos.sobrenome}` } */}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {/* {userinfos.email === undefined ? '' : userinfos.email } */}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Cartões e Categorias
            </Typography>
            <Item
              title="Cartões"
              to="/cartao"
              icon={<CreditCard />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categorias"
              to="/categorias"
              icon={<CategoryOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Receitas e Saídas
            </Typography>
            <Item
              title="Saídas"
              to="/saidas"
              icon={<MoneyOffCsredOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default SideBar;
