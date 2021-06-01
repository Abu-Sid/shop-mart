
import { CircularProgress, Container, Grid, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../app/slices/basketSlice";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: "36px",
    padding:"10px"
  },
  searchbox: {
    width: "90%",
    margin: "48px auto",
    [theme.breakpoints.up("md")]: {
      width: "480px",
    },
    
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchbar: {
    border: "1px solid #d6d6d6",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Home = () => {
    const classes = useStyles();
  const dispatch = useDispatch()
  useEffect(() => dispatch(getProducts()) , [dispatch])
  const products = useSelector((state)=> state.basket.products)
  console.log(products);
    return (
        <div style={{ backgroundColor: "#F4F7FC" }}>
      <Banner/>
      <Container className={classes.container}>
        <Typography className={classes.heading} variant="h5" gutterBottom>
        'Shop Mart' -- solution of your online shopping
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={3}>
          {products ? (
            products.map((data) => (
              <Products data={data} key={data.id}></Products>
            ))
          ) : (
            <div className={classes.spinner}>
              <LinearProgress />
              <CircularProgress />
              <LinearProgress color="secondary" />
            </div>
            
          )}
        </Grid>
      </Container>
    </div>
    );
};

export default Home;