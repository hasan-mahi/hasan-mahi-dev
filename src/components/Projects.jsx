import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  { title: "Garage Management System", description: "React, Node, MongoDB – manage car repair workflows.", link: "#" },
  { title: "Job Portal", description: "Full‑stack job search app with filters and admin panel.", link: "#" },
];

export default function Projects() {
  return (
    <Box>
      <Typography variant="h4" className="section-title">Projects</Typography>
    <Grid container spacing={4}>
  {projects.map((p, i) => (
    <Grid item xs={12} md={6} key={i}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: i * 0.2,
          ease: "easeOut"
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6">{p.title}</Typography>
            <Typography color="text.secondary">{p.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={p.link} target="_blank">View</Button>
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>
    </Box>
  );
}
