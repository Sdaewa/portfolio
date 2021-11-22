import {
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ReactTyped from "react-typed";
import data from "../data.json";
import LandAni from "./animations/LandAni";
const { landing } = data;

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    paddingBottom: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    padding: theme.spacing(2),
  },
}));

export default function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.cont}>
      <Grid item xs={12} lg={6}>
        <Typography variant={mdDown ? "h2" : "h1"}>{landing.title}</Typography>
        <Typography
          variant={mdDown ? "h5" : "h4"}
          component="h2"
          className={classes.subtitle}>
          <ReactTyped
            strings={landing.subtitles}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Grid>

      <Hidden mdDown>
        <Fade in={true} style={{ transitionDelay: "100ms" }}>
          <Grid item lg={6}>
            <LandAni />
          </Grid>
        </Fade>
      </Hidden>
    </Grid>
  );
}
