"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { firestore } from '@/firebase';

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1">Task Manager</Typography>

    </Box>
  );
}
