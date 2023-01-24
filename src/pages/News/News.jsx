import React from "react";
// import { Button } from "@mantine/core";
import { Grid } from "@mantine/core";
function News() {
  return (
    <Grid 
    // ml={"-10rem"}
     w={"80vw"} h={"40rem"} bg={"green"}>
      <Grid.Col bg={"red"} span={4}>
        1
      </Grid.Col>
      <Grid.Col bg={"green"} span={4}>
        2
      </Grid.Col>
      <Grid.Col bg={"blue"} span={4}>
        3
      </Grid.Col>
      <Grid.Col c="black" bg={"white"} span={4}>
        4
      </Grid.Col>
      <Grid.Col bg={"violet"} span={4}>
        5
      </Grid.Col>
      <Grid.Col c="black" bg={"orange"} span={4}>
        6
      </Grid.Col>
    </Grid>
    // </div>
  );
}

export default News;
