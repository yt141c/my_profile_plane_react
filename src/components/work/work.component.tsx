import { FC } from 'react';

import { Skills, SkillsProps } from '../skills/skills.component';
import { WorkComponent } from './work.styles';

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  img: {
    imageUrl: string;
    imageAlt: string;
  };
  links: Link[];
} & SkillsProps;

type Link = {
  name: string;
  url: string;
};

type WorkProps = {
  work: WorkItem;
};

const Work: FC<WorkProps> = ({ work }) => {
  const { title, description, img, links, skills } = work;

  return (
    <WorkComponent>
      <div className="infos">
        <div className="img-container">
          <img className="img" src={img.imageUrl} alt={img.imageAlt} />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Skills skills={skills} />
        <div className="links">
          {links.map((link) => {
            return (
              <a href={link.url} key={link.name} className="link">
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </WorkComponent>
  );
};

export default Work;
