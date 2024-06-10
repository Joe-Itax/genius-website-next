"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { barlow } from "@/app/ui/fonts";

export default function AccordionsFaq({
  question,
  response,
}: {
  question?: string;
  response?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          fontFamily: "Barlow",
          justifySelf: "start",
          alignSelf: "start",
        }}
        className={`${barlow.className} accordion-custom-class max-[800px]:w-full`}
      >
        <AccordionSummary
          expandIcon={<ExpandMore className="text-white" />}
          aria-controls="panel1bh-content"
          // id="panel1bh-header"
          className="panel1bh-header-custom"
        >
          <Box
            sx={{
              width: "100%",
              flexShrink: 0,
              fontFamily: `Barlow`,
            }}
            className={`${barlow.className} text-[1.8rem] font-normal`}
          >
            {question}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <div className={`${barlow.className}`}>{response}</div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
