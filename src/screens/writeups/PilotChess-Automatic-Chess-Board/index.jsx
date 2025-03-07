// src/components/MDXPost.js
import React from 'react';
import Content, {title, dateCreated, dateModified } from './content.mdx';
import WriteupLayout from '../mdx-components/WriteupLayout';

export default function PilotChessWriteup() {  
  return (
    <WriteupLayout title={title} dateCreated={dateCreated} dateModified={dateModified} githubLink={"https://github.com/CodingFactoryT/PilotChess-Automatic-Chess-Board"}>
      <Content/>
    </WriteupLayout>
  );
};