import { FC } from 'react';
import Tag, { TAG_TYPE_CLASSES } from '../tag/tag.component';

export type SkillsProps = {
  skills: {
    front?: string[];
    back?: string[];
    other?: string[];
  };
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const { front, back, other } = skills;

  return (
    <div className="skills">
      {front &&
        front.map((tech: string) => (
          <Tag tagType={TAG_TYPE_CLASSES.front} key={tech}>
            {tech}
          </Tag>
        ))}
      {back &&
        back.map((tech: string) => (
          <Tag tagType={TAG_TYPE_CLASSES.back} key={tech}>
            {tech}
          </Tag>
        ))}
      {other &&
        other.map((tech: string) => (
          <Tag tagType={TAG_TYPE_CLASSES.other} key={tech}>
            {tech}
          </Tag>
        ))}
    </div>
  );
};
