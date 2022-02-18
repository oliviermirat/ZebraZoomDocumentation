// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZebraZoom Documentation',
  tagline: 'Track animals, Analyze behavior',
  url: 'https://zebrazoom.org/',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'ZebraZoom', // Usually your GitHub org/user name.
  projectName: 'ZebraZoom', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/oliviermirat/ZebraZoomDocumentation/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'ZebraZoom Documentation',
          },
          {
            href: 'https://github.com/oliviermirat/ZebraZoom',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'ZebraZoom front page',
                href: 'https://zebrazoom.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZebraZoom, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
