import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarList } from '../hooks/routes';
import { Link, NavLink } from 'react-router-dom';
import { alpha, Drawer, InputBase, styled } from '@mui/material';
import { Context } from '../context';
import { getRequest } from '../service/getRequest';
import { API } from '../hooks/getEnv';
import SearchIcon from '@mui/icons-material/Search';


export default function HeaderCostum() {
  const { toggle, setToggle } = React.useContext(Context)
  
  
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  
  return (
    <Box className={"h-[6.7vh] !z-40 !bg-blue-950"}>
      <Drawer open={toggle} onClose={() => setToggle(false)}>
        <div className='!bg-blue-950 h-full flex flex-col p-10'>
          {navbarList.map(item => <Link key={item.id} className='text-[18px] text-white p-3 rounded-md hover:text-blu950 hover:bg-slate-300' to={item.path}>{item.title}</Link>)}
        </div>
      </Drawer>
      <AppBar className='!bg-blue-950' position="static">
        <Toolbar className='!bg-blue-950'>

          <IconButton
            onClick={() => setToggle(true)}
            size="large"
            edge="start"
            color="inherit" 
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to={"/"}>Movies</Link>
          </Typography>
          <Typography className='hidden md:flex items-center gap-8 !mr-[30px]'>
            {navbarList.map(item => <NavLink key={item.title} to={item.path}>{item.title}</NavLink>)}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Autocomplete
            disablePortal
            options={""}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
