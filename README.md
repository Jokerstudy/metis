<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://metis.so">
    <img src="https://assets.metis.so/logo-outlined.png" alt="Logo" width="120">
  </a>

  <h2 align="center">先飞有限公司</h3>

  <p align="center">
    METIS LIMITED
    <br />
    <a href="https://docs.metis.so"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.metis.so">View Demo</a>
    ·
    <a href="https://github.com/dyte-in/docs/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-in/docs/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Version History](#version-history)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [About](#about)

<!-- ABOUT THE PROJECT -->

## About The Project

[Docusaurus](https://docusaurus.io/) is a static site generator that helps you ship beautiful, accessible docs. For building our [documentation](https://docs.metis.so) portal, we have made certain modifications over the template generated by [Docusaurus](https://docusaurus.io) to be able to properly showcase all our SDKs with their respective versions.

We are delighted to see our documentation featured on [Docusaurus Site Showcase](https://docusaurus.io/showcase), and hope you like it!

### Built With

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)

<!-- GETTING STARTED -->

## Getting Started

This section describes how you can get our documentation portal up and running on your machine.

### Prerequisites

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/dyte-in/docs.git
```

2. Install NPM packages

```sh
npm install
```

3. Run the app

```sh
npm start
```

<!-- USAGE EXAMPLES -->

## Usage

<!-- In usage, mention how to edit the docs, how to update versions, etc. -->

### Writing Documentation

To just edit older documentation, go to the specified versioned folder for a section, for example, you want to edit documentation for React SDK v0.25.x, open up [react_versioned_docs/version-0.25.x](./react_versioned_docs/version-0.25.x) and edit the required files there.

To create a new version inside a section, for example, flutter. Make your changes in [docs/flutter](./docs/flutter). The `./docs` folder consists of the `next` version, which is unpublished, and is where you add your newer or _next_ version of documentation.

After your changes are done, to create a version, run the following command:

```sh
npm run docusaurus docs:version:flutter 1.2.3
```

This will create a new version `1.2.3` for flutter.

Reference: https://docusaurus.io/docs/versioning

### To add new sections

Create a new section in docusaurus by adding a new plugin entry in [docusaurus.config.js](./docusaurus.config.js).

If you're adding a new section, just add new section to `SECTIONS[]` array with the `defineSection()` utility easily.

Now, run `npm start` and you can access your Go docs at http://localhost:3000/go/introduction

Then, you can create versions and edit older versions as mentioned above.

### Adding new docs to the Context Switcher

To add a newly created section to the Sections Menu, edit [./src/sections.js](src/sections.js).

For example, for a section go, you will add:

```jsx
import { GoIcon } from '../assets/icons';

const SECTIONS = [
  // ...
  {
    id: 'go',
    name: 'Go',
    icon: GoIcon,
    section: false, // if it shouldn't have a sections menu
  },
];
```

You'll need to create a GoIcon component too.

That is it!

<!-- CHANGELOG -->

## Version History

See [CHANGELOG](./CHANGELOG.md).

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/dyte-in/docs/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Sincere thanks to all our contributors. Thank you, [contributors](https://github.com/dyte-in/docs/graphs/contributors)!

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) and code of conduct at [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) while contributing to the project :smile:.

## Support

Contributions, issues, and feature requests are welcome!
Give a ⭐️ if you like this project!

<!-- LICENSE -->

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

## About

`docs` is created & maintained by Dyte, Inc. You can find us on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at `dev [at] metis.so`.

The names and logos for Dyte are trademarks of Dyte, Inc.

We love open source software! See [our other projects](https://github.com/dyte-in) and [our products](https://metis.so).
