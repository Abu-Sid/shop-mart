import {
    AppBar,
    Button,
    Container,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logo from '../../assets/Images/logo.jpeg';
import './Navbar.css';
    // eslint-disable-next-line
    const useStyles = makeStyles((theme) => ({
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      logo: {
        width: "230px",
      },
      custombtn: {
        background: "#3F90FC",
        color: "#fff",
        padding: "10px 36px",
        margin: "0 12px",
      },
      sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
          display: "flex",
        },
      },
      sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
    }));
    const iconStyle = (fontsize) => {
        return {
          fill: "transparent",
          stroke: "#1a1a2c",
          strokeWidth: 1,
          fontSize: fontsize,
        };
      };
  
  const Navbar = () => {
      const [loggedUser, setLoggedUser] = useContext(UserContext);
    const classes = useStyles();
    const history = useHistory();
  
    const cart = useSelector(state=> state.basket.cart)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <Button color="default" onClick={() => history.push("/")}>
            Home
          </Button>
        </MenuItem>
        <MenuItem>
        <NavLink
          to="/order"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Cart"
          data-for="sidebarTooltip"
        >
          <ShoppingCartIcon
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
          <span className="sidebar__itemValue">{cart?.length || 0}</span>
        </NavLink>
        </MenuItem>
        <MenuItem>
          <Button color="default">Contact Us</Button>
        </MenuItem>
        {loggedUser?.displayName ? (
              <MenuItem>
                <Button style={{ color: 'white' }} variant='text'>
                  {loggedUser.displayName}
                </Button>
                </MenuItem>
                
            ) :(
        <MenuItem>
          <Button color="default" className={classes.custombtn}onClick={() => history.push("/login")}>
            Login
          </Button>
        </MenuItem>)}
        <MenuItem>
          <Button
            color="default"
            className={classes.custombtn}
            style={{ background: "#434141" }}
            onClick={() => history.push("/addProduct")}
          >
            Admin
          </Button>
        </MenuItem>
      </Menu>
    );
      return (
        <>
          <div className={classes.grow}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <div className={classes.logo}>
                <Link to="/">
                  <img style={{ width: "50%" }} src={logo} alt="logo" />
                </Link>
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button color="default" onClick={() => history.push("/")}>
                  Home
                </Button>
                <NavLink
                    to="/order"
                    className="sidebar__menuItem"
                    activeClassName="active"
                    data-tip="Cart"
                    data-for="sidebarTooltip"
                    >
                    <ShoppingCartIcon
                        className="sidebar__menuIcon"
                        style={iconStyle(34)}
                    />
                    <span className="sidebar__itemValue">{cart?.length || 0}</span>
                </NavLink>
                <Button color="default">Contact Us</Button>
                {loggedUser?.displayName ? (
              <>
                <Button color="default" className={classes.custombtn} onClick={() => history.push("/")}>
                  {loggedUser.displayName}
                </Button>
  
                <Button color="default" className={classes.custombtn} onClick={() => setLoggedUser({})} style={{ color: 'white' }}>
                  Sign Out
                </Button>
              </>
            ) :(
                <Button color="default" className={classes.custombtn}onClick={() => history.push("/login")}>
                  Login
                </Button>)}
                <Button
                  color="default"
                  className={classes.custombtn}
                  style={{ background: "#434141" }}
                  onClick={() => history.push("/addProduct")}
                >
                  Admin
                </Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
      </div>
        </>
      );
  };
  
  export default Navbar;