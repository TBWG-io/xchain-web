// import React from "react";
import styled, { css } from "styled-components";

export const TextGray10Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-10);
`;

export const TextGray9Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-9);
`;

export const TextGray8Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-8);
`;

export const TextGray7Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-7);

  /* @media only screen and (max-width: 350px) {
    font-size: ${(props) =>
    props.size
      ? `calc(${props.size} - 2px)`
      : "calc(var(--base-font-size) - 2px)"};
  } */
`;

export const TextGray6Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-6);
`;

export const TextGray1Style = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--gray-color-1);
`;

export const TextPrimaryStyle = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--primary-color);
`;

export const TextLinkStyle = styled.a<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: var(--grey-color-1) !important;
  text-decoration: underline !important;
`;

export const TextUnderlineStyle = styled.span`
  text-decoration: underline !important;
`;

export const TextDarkStyle = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: #324158;
`;
