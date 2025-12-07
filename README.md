![MoldeKit](https://moldekit-assets.s3.sa-east-1.amazonaws.com/MoldeKit.png)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

MoldeKit is an UI design system created to help speed up the start of new projects by providing a basic set of reusable components and styles.
MoldeKit offers a ready-made foundation to get projects off the ground faster.

## Background and Purpose

MoldeKit was born out of the Mangos project, where an intentional constraint was set: avoid using existing UI libraries and components to turn the work into a hands‑on learning opportunity.
That constraint led to designing, prototyping, and refining a set of primitives and patterns, revealing the value of consolidating them into a cohesive system.

## Non‑commercial notice

MoldeKit is an independent, non‑commercial project created for study, experimentation, and personal productivity.
It is not affiliated with, endorsed by, or officially supported by any company or client.
Use it at your own discretion and evaluate fitness for your specific use case.

## What to Expect

- A collection of essential UI components with consistent styling.
- Basic design tokens like colors and typography to unify appearance.
- Practical, straightforward documentation to guide usage.

## What’s not in scope (yet)

- Extensive component coverage, edge‑case theming, and heavy customization layers.
- Cross‑framework ports. Initial focus is React with room to evolve later.
- MoldeKit support commitments. Issues and improvements are addressed as time allows.

## Acknowledgements

- Icons are provided by the Lucide collection and integrated as React components.
- Storybook powers the documentation site, with MDX for guidance and live examples.

## Running Locally

If you want to develop or test the library locally:

- Clone repo

```bash
   git clone https://github.com/andersonvnieves/moldekit-react.git
```

- Install package dependencies

```bash
    npm install
```

- Install browser dependencies (for tests)

```bash
    npx playwright install
```

- Run storybook

```bash
    npm run dev
```

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). Please see the LICENSE file for more details.

Third-party credits This project uses icons from Lucide Icons, licensed under the MIT License. The Lucide Icons license is MIT, which allows use, copying, modification, and distribution with attribution and without warranty.
