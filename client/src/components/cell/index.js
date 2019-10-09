// Library Imports
import React from "react";

// Relative Imports
import {
  Container,
  Column,
  Title,
  Subtitle,
  Icon,
  Inner,
  Wrapper
} from "./styles";
import chevron from "../../assets/icons/chevron.svg";

const Cell = ({ tokenName, ticker, price, change, fullwidth }) => {
  return (
    <Container fullwidth={fullwidth} to={`/wallet/assets/${ticker}`}>
      <Column>
        <Title left>{ticker}</Title>
        <Subtitle>{price}</Subtitle>
      </Column>

      <Wrapper>
        <Column>
          <Title>{tokenName}</Title>
          <Subtitle>{change}</Subtitle>
        </Column>
        <Inner>
          <Icon src={chevron} />
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default Cell;
