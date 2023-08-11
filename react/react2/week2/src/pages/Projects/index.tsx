import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import NewProject from "./modal";
import Card from "./projectCard";
import "./index.css";

interface DataType {
  id: number;
  title: string;
  description: string;
}
function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("token");

  const getProjects = async () => {
    try {
      const response = await axios.get(
        "http://byrdbox-env.eba-4kxk4yka.eu-north-1.elasticbeanstalk.com/projects/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data, status } = response;
      if (status === 200) {
        setProjects(data);
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    getProjects();
  }, [projects]);
  const RenderProjects =
    projects.length === 0 ? (
      <p>no projects</p>
    ) : (
      projects.map((e: DataType) => {
        return <Card key={e.id} title={e.title} description={e.description} />;
      })
    );
  return (
    <div>
      <NewProject
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        token={token}
      />
      <div className="btn">
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Add project
        </Button>
      </div>
      <div className="cards"> {RenderProjects}</div>
    </div>
  );
}

export default ProjectsPage;
//
