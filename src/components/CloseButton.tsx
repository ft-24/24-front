import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Button = styled.button`
	height: 2rem;
	padding: 0 1rem;
	bottom: 10px;
	right: 10px;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: rgba(0, 0, 0, 0);
`

export const CloseButton = ({ close }: any) => (
  <Button onClick={close} className="close">
    X
  </Button>
);
