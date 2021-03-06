import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  Container,
} from "@material-ui/core";
import Layout from "../../components/layout";
import styles from "./style";
import { motion } from "framer-motion";
import Link from "next/link";

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Layout>
        <Container>
          <Grid
            container
            spacing={3}
            display="flex"
            style={{ height: "82vh", justifyContent: "center" }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              display="flex"
              style={{ alignSelf: "center", height: "50vh" }}
            >
              <Link as="/products" href="/products" color="inherit">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9, borderRadius: "100%" }}
                  animate={{ scale: 1 }}
                  transformTemplate={(props, transform) =>
                    // Disable GPU acceleration to prevent blurry text
                    transform.replace(" translateZ(0)", "")
                  }
                >
                  <Card
                    style={{
                      width: "100%",
                      height: "50vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className={classes.parentBox}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      Products
                    </Typography>
                  </Card>
                </motion.div>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ alignSelf: "center", height: "50vh" }}
            >
              <Grid container spacing={3} display="flex" flexDirection="column">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9, borderRadius: "100%" }}
                  animate={{ scale: 1 }}
                  transformTemplate={(props, transform) =>
                    // Disable GPU acceleration to prevent blurry text
                    transform.replace(" translateZ(0)", "")
                  }
                >
                  <Card
                    style={{
                      width: "31vw",
                      height: "23vh",
                      margin: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className={classes.parentBox}
                  >
                    <Typography>
                      <Link as="/brands" href="/brands" color="inherit">
                        <Typography
                          variant="h5"
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          Brands
                        </Typography>
                      </Link>
                    </Typography>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9, borderRadius: "100%" }}
                  animate={{ scale: 1 }}
                  transformTemplate={(props, transform) =>
                    transform.replace(" translateZ(0)", "")
                  }
                >
                  <Card
                    style={{
                      width: "31vw",
                      height: "23vh",
                      margin: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className={classes.parentBox}
                  >
                    <Typography>
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Suppliers
                      </Typography>
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};

export default HomePage;
