// src/App.tsx

import React from 'react';
import Layout from '@/APIs/Layout';

const Api: React.FC = () => {
  return (
    <Layout>
      <div className="p-4">
        {/* Your scrollable middle content */}
        {/* You can add more components, text, images, etc. */}
      </div>
    </Layout>
  );
};

export default Api;
