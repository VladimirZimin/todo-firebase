import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButton from "../BasicButton/BasicButton";

export default function BasicCard({ task, id, timeStamp, deleteTask }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          My task for week
        </Typography>
        <Typography variant="h5" component="div">
          {task}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          day create task
        </Typography>
        <Typography variant="body2">{timeStamp}</Typography>
      </CardContent>
      <CardActions>
        <BasicButton
          size="small"
          title="Delete"
          color="primary"
          id={id}
          deleteTask={deleteTask}
        />
      </CardActions>
    </Card>
  );
}
