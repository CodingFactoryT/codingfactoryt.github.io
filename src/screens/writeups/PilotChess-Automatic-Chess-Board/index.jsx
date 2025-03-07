import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Content from './index.mdx';

const App = () => {
  return (
    <MDXProvider>
      <div>
        <h1>React with MDX</h1>
        <Content />
      </div>
    </MDXProvider>
  );
};

export default App;