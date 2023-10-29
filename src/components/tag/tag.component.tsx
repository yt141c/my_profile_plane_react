import React from 'react';
import { TechFrontTag, TechBackTag, TechOtherTag } from './tag.styles';

export const TAG_TYPE_CLASSES = {
  front: 'tech-front',
  back: 'tech-back',
  other: 'tech-other',
};

const getTag = (tagType = TAG_TYPE_CLASSES.front) =>
  ({
    [TAG_TYPE_CLASSES.front]: TechFrontTag,
    [TAG_TYPE_CLASSES.back]: TechBackTag,
    [TAG_TYPE_CLASSES.other]: TechOtherTag,
  }[tagType]);

interface TagProps {
  tagType: string;
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ tagType, children }) => {
  const CustomTag = getTag(tagType);
  return <CustomTag>{children}</CustomTag>;
};

export default Tag;
