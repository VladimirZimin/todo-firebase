import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButton({ type, title, color, deleteTask, id }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        sx={{ width: "150px" }}
        variant="contained"
        color={color}
        type={type ? type : "button"}
        onClick={deleteTask ? () => deleteTask(id) : () => console.log("click")}
      >
        {title ? title : "button"}
      </Button>
    </Stack>
  );
}
