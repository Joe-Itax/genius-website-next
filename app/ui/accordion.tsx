"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { barlow } from "@/app/ui/fonts";

export default function AccordionsFaq({
  question,
  response,
  numFaq,
}: {
  question?: string;
  response?: React.ReactNode;
  numFaq?: string;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <div className={`num-faq`}>
        <span
          className={`${
            expanded === "panel1" ? "text-[#B97AE0]" : "text-white"
          } `}
        >
          {numFaq}
        </span>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          fontFamily: "Barlow",
          justifySelf: "start",
          alignSelf: "start",
          width: "100%",
        }}
        className={`${barlow.className} accordion-custom-class max-[800px]:w-full`}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              className={`${
                expanded === "panel1" ? "text-[#B97AE0]" : "text-white"
              } text-3xl`}
            />
          }
          aria-controls="panel1bh-content"
          // id="panel1bh-header"
          className="panel1bh-header-custom p-0"
        >
          <Box
            sx={{
              width: "100%",
              flexShrink: 0,
              fontFamily: `Barlow`,
            }}
            className={`${barlow.className}`}
          >
            <span
              className={`${barlow.className} ${
                expanded === "panel1" ? "text-[#ca8af1]" : "text-white"
              } text-[1.4rem] max-[800px]:text-xl`}
            >
              {question}
            </span>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <div className={`${barlow.className}`}>
            <span>{response}</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
