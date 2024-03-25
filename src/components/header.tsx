import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { PAGES } from '../routes/pages';
import { NavLink } from 'react-router-dom';
import { PROJECT_NAME } from '../constants/setup';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { COLORS } from '../constants/color';

const myStyle = {
  navlink: {
    color: COLORS.BLACK,
    fontSize: '16px',
    textDecoration: 'none'
  },
}
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderMobileNav = () => {
    const PagesEl = [];

    for (const Page in PAGES) {
      PagesEl.push(<MenuItem key={PAGES[Page].link} onClick={handleCloseNavMenu}>
        <NavLink
          style={myStyle.navlink}
          to={PAGES[Page].link}
          key={PAGES[Page].link}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <Typography textAlign="center">{PAGES[Page].text}</Typography>
        </NavLink>
      </MenuItem>)
    }
    return PagesEl;
  };


  const renderNavLink = () => {
    const PagesEl = [];

    for (const Page in PAGES) {
      PagesEl.push(<NavLink
        style={myStyle.navlink}
        to={PAGES[Page].link}
        key={PAGES[Page].link}
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        <Button
          key={PAGES[Page].link}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >

          {PAGES[Page].text}
        </Button>
      </NavLink>)
    }
    return PagesEl;
  };

  return (
    <AppBar position="static">
      <Container >
        <Toolbar disableGutters>
          <LaptopChromebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {PROJECT_NAME}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {renderMobileNav()}
            </Menu>
          </Box>
          <LaptopChromebookIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {PROJECT_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {renderNavLink()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
