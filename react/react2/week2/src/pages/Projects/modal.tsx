import { Modal, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "./modal.css";

interface NewProjectProps {
  open: boolean;
  handleClose: () => void;
  token: string | null;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 10,
};
function NewProject({ open, handleClose, token }: NewProjectProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const createProject = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://byrdbox-env.eba-4kxk4yka.eu-north-1.elasticbeanstalk.com/projects/create",
        data: {
          title,
          description,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="modal">
            <div>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Create New Project
              </Typography>
            </div>
            <div className="modal-form">
              <TextField
                value={title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(event.target.value);
                }}
                id="title"
                label="title"
                variant="outlined"
                fullWidth
              />
              <TextField
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setDescription(event.target.value);
                }}
                id="description"
                label="description"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={() => {
                  createProject();
                  handleClose();
                }}
              >
                Add project
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default NewProject;
