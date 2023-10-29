import styled from 'styled-components';

export const Tag = styled.span`
  font-size: 11px;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const TechFrontTag = styled(Tag)`
  background-color: rgba(97, 218, 251, 0.5);
`;

export const TechBackTag = styled(Tag)`
  background-color: rgba(240, 219, 79, 0.5);
`;

export const TechOtherTag = styled(Tag)`
  background-color: #ccccccba;
`;
