import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="ga-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-JVHGHX9E9T"
    />,
    <script
      key="ga-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JVHGHX9E9T');
        `,
      }}
    />,
  ]);
};
