import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gradient-to-r from-gray-100 to-blue-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
