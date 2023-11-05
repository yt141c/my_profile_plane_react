// ButtonComponent.tsx
import { FC } from 'react';
import { LinkButtonComponent } from './button.styles';

import { ReactComponent as GithubIconSvg } from '../../assets/github-alt.svg';
import { ReactComponent as LinkIconSvg } from '../../assets/link-solid.svg';

type LinkButtonProps = {
  content: string;
  url: string;
  buttonType?: 'default' | 'github';
};

const LinkButton: FC<LinkButtonProps> = ({
  content,
  url,
  buttonType = 'default',
}) => {
  return (
    <LinkButtonComponent
      href={url}
      className="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonType === 'github' && <GithubIconSvg className="icon" />}
      {buttonType === 'default' && <LinkIconSvg className="icon" />}
    </LinkButtonComponent>
  );
};

export default LinkButton;
