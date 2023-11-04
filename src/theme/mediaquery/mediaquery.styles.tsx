import { css, CSSProp } from 'styled-components';

const breakPoints = {
  desktop: 992,
  tablet: 768,
  phone: 576,
} as const;

type SizeKey = keyof typeof breakPoints;

type Media = {
  [key in SizeKey]: (args: CSSProp) => CSSProp;
};

// サイズに基づいてメディアクエリのヘルパー関数を生成
const mediaquery = (Object.keys(breakPoints) as SizeKey[]).reduce<
  Partial<Media>
>((acc, label) => {
  acc[label] = (args: CSSProp) => css`
    @media (max-width: ${breakPoints[label] / 16}em) {
      ${args}
    }
  `;
  return acc;
}, {} as Partial<Media>);

export default mediaquery as Media;
