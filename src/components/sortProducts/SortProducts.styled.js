import styled from "styled-components";
import media from "styled-media-query";
import { Flex, space } from "../../config/variables";

export const SProducts = styled.div`
  ${Flex.flexRow}
  width: 100%;
  font-size: 0.8rem;
  flex: 1;
  padding-inline: ${space.mdSpacing};
  span {
    padding-inline: ${space.smSpacing};
    text-align: right;
    flex: 0.25;
  }

  ${media.lessThan("large")`
  span{
    flex: 0.35;
  }
  `}
`;

export const Select = styled.select`
  flex: 1;
  cursor: pointer;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  color: ${({ theme }) => theme.text};
  border-color: #999;
  border-radius: var(--radius);
  outline: none;
  padding: ${space.smSpacing};
  background-color: ${({ theme }) => theme.bg};
  background-image: linear-gradient(var(--baseFg), var(--baseFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
  background-position: right 20px center, right bottom, right bottom,
    right bottom;
  font-size: 0.8rem;

  &:hover {
    background-image: linear-gradient(var(--accentFg), var(--accentFg)),
      linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
      linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
  }
`;

export const SortOptGroup = styled.optgroup`
  option {
    color: var(--primary);
  }
`;
