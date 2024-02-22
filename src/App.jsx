import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost.jsx";
import { featuredPosts, sidebar } from "./Data/Data.js";
import PostCard from "./components/PostCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SideDrawer from './components/SideDrawer.jsx'
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
