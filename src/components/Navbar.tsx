import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

// const pages = ["Index"];

interface Ipages {
  name: string;
  icon: JSX.Element;
}

const pages: Ipages[] = [
  {
    name: "Index",
    icon: <HomeIcon sx={{ marginTop: "-0.2em" }} />,
  },
  {
    name: "Projects",
    icon: <EngineeringIcon sx={{ marginTop: "-0.2em" }} />,
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: COLORS.customBlack,
        display: "flex",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
            to={{
              pathname: "https://github.com/MikeNotu",
            }}
            target="_blank"
          >
            <LogoDevIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: COLORS.customBlue,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: COLORS.customBlue,
                textDecoration: "none",
              }}
            >
              MIKE
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Link
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
              to={{
                pathname: "https://github.com/MikeNotu",
              }}
              target="_blank"
            >
              <LogoDevIcon
                sx={{
                  display: { xs: "flex", md: "none", color: COLORS.customBlue },
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: COLORS.customBlue,
                  textDecoration: "none",
                }}
              >
                MIKE
              </Typography>
            </Link>
            <div></div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  style={{
                    textDecoration: "none",
                    color: COLORS.customBlack,
                  }}
                  to={`/front-portfolio/${page.name}`}
                >
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI, Arial, sansSerif",
                      }}
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                style={{
                  textDecoration: "none",
                }}
                to={`/front-portfolio/${page.name}`}
              >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: COLORS.customWhite,
                    display: "block",
                    fontFamily: "Segoe UI, Arial, sansSerif",
                  }}
                >
                  {page.name}
                  {page.icon}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Mike Bateman"
                  src="https://avatars.githubusercontent.com/u/43997532?v=4"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                style={{ color: COLORS.customBlack, textDecoration: "none" }}
                to={{
                  pathname: "https://github.com/MikeNotu",
                }}
                target="_blank"
              >
                <MenuItem key="GitHub" onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{
                      fontFamily: "Segoe UI, Arial, sansSerif",
                    }}
                    textAlign="center"
                  >
                    GitHub
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
