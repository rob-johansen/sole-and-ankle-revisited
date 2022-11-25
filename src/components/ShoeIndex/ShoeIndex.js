import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <SpacerWrapper>
          <Spacer size={42} />
        </SpacerWrapper>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${BREAKPOINTS.tabletAndBelow} {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${BREAKPOINTS.tabletAndBelow} {
    flex: 0;
  }
`;

const SpacerWrapper = styled.div`
  @media ${BREAKPOINTS.tabletAndBelow} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${BREAKPOINTS.phoneAndBelow} {
    & > label {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
