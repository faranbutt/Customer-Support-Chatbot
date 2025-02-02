'use client'
import React from "react";
import { Box, Stack } from "@mui/material";
import { TextGenerateEffect } from "../ui/textgenerate_effect";
import { FlipWords } from "../ui/flips-words";
import SignUp from "./singup";
export default function Main() {
  const words = ["Modern UI", "Intelligent Answers", "Ask Anything"];

  return (
    <Stack width={"100%"} height={"80%"} direction={"row"}>
      <Stack
        width={"50%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={4}
        paddingY={5}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          bgcolor={"black"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={2}
        >
          <Stack color={"white"}>
            <Box fontSize={50} fontWeight={900}>
              <TextGenerateEffect words={"HeadStarter Chatbot"} />
            </Box>
            <Box fontSize={20} fontWeight={200}>
              <FlipWords words={words} /> <br />
            </Box>
            <Stack
              bgcolor={"white"}
              color={"black"}
              width={120}
              height={40}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={2}
              sx={{
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  border: 2,
                  borderColor: "white",
                },
              }}
            >
              Join
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack width={"50%"}
        height={"100%"}
        
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={4}
        paddingY={5}>
        <Stack
          width={"100%"}
          height={"100%"}
          bgcolor={"black"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={2}
        >
          <Stack color={"white"}>
            <SignUp />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
