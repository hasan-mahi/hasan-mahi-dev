import { Box, Typography, Chip, Stack } from "@mui/material";

const skills = ["React", "Node.js", "MongoDB", "Express", "SQL", "Git", "Bootstrap", "MUI"];

export default function Skills() {
  return (
    <Box>
      <Typography variant="h4" className="section-title">Skills</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((s,i) => <Chip key={i} label={s} sx={{ m:0.5 }} />)}
      </Stack>
    </Box>
  );
}
