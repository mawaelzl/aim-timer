import * as React from "react";
import styled from "styled-components";
import { CSSProperties, FC } from "react";

const ArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  cursor: pointer;
`;

export const DownArrow: FC<{ onClick: () => void; style?: CSSProperties }> = ({
  onClick,
  style
}) => (
  <ArrowContainer onClick={onClick} style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.002 492.002">
      <g>
        <path
          fill="white"
          d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z"
        />
      </g>
    </svg>
  </ArrowContainer>
);

export const UpArrow: FC<{ onClick: () => void; style?: CSSProperties }> = ({
  onClick,
  style
}) => (
  <ArrowContainer onClick={onClick} style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.002 492.002">
      <g>
        <path
          fill="white"
          d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844
			L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124
			c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064
			c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132
			C494.624,356.041,494.624,338.965,484.136,328.473z"
        />
      </g>
    </svg>
  </ArrowContainer>
);
