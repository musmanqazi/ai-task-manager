"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(firestore, "tasks"));
    setTasks(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const addTask = async () => {
    if (!task.trim()) return;
    await addDoc(collection(firestore, "tasks"), {
      text: task,
      completed: false,
    });
    setTask("");
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await updateDoc(doc(firestore, "tasks", id), { completed: !completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(firestore, "tasks", id));
    fetchTasks();
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      <Typography variant="h3" gutterBottom>
        Task Manager
      </Typography>

      {/* Task Input */}
      <Box display="flex" gap={2} mb={2}>
        <TextField
          variant="outlined"
          label="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ width: "250px" }}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add Task
        </Button>
      </Box>

      {/* Task List */}
      {tasks.length > 0 && (
        <List
          sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        >
          {tasks.map((t) => (
            <ListItem key={t.id} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={t.completed}
                onChange={() => toggleTask(t.id, t.completed)}
              />
              <ListItemText
                primary={t.text}
                sx={{ textDecoration: t.completed ? "line-through" : "none" }}
              />
              <IconButton onClick={() => deleteTask(t.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
