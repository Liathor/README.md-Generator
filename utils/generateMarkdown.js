// Fetch license Badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      return '![License: Apache license 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
        ;
    case 'Boost Software License 1.0':
      return '![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
        ;
    case 'BSD 3-Clause License':
      return '![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
        ;
    case 'BSD 2-Clause License':
      return '![License: BSD 2-Clause License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
        ;
    case 'Creative Commons Zero v1.0 Universal':
      return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'
        ;
    case 'Creative Commons Attribution 4.0':
      return '![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)'
        ;
    case 'Creative Commons Attribution ShareAlike 4.0':
      return '![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)'
        ;
    case 'Eclipse Public License 1.0':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
        ;
    case 'GNU General Public License v3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        ;
    case 'GNU General Public License v2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
        ;
    case 'GNU Affero General Public License v3.0':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
        ;
    case 'GNU Lesser General Public License v3.0':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
        ;
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
        ;
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        ;
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
        ;
    case 'Artistic license 2.0':
      return '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)'
        ;
    case 'SIL Open Font License 1.1':
      return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)'
        ;
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
        ;
    case 'Do What The F*ck You Want To Public License':
      return '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)'
        ;
    case 'zLib License':
      return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)'
        ;
    default:
      return '';
  }
}

// Fetch license link
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache license 2.0':
      return '[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause License':
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Creative Commons Attribution 4.0':
      return '[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)';
    case 'Creative Commons Attribution ShareAlike 4.0':
      return '[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)';
    case 'Eclipse Public License 1.0':
      return '[License](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU General Public License v3.0':
      return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Affero General Public License v3.0':
      return '[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU Lesser General Public License v3.0':
      return '[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
      return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
    case 'Artistic license 2.0':
      return '[Artistic-2.0](https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL Open Font License 1.1':
      return '[Open Font-1.1](https://opensource.org/licenses/OFL-1.1)';
    case 'The Unlicense':
      return '[Unlicense](http://unlicense.org/)';
    case 'Do What The F*ck You Want To Public License':
      return '[WTFPL](http://www.wtfpl.net/about/)';
    case 'zLib License':
      return '[Zlib](https://opensource.org/licenses/Zlib)';
    default:
      return '';
  }
}

// generate license section
let licenseSection = '';
function renderLicenseSection(license) {
  if (license === null || license === 'No License') {
    licenseSection = '';
  }
  else {
    licenseSection = `Distributed under the ${license}. Visit ${renderLicenseLink(license)} for more information.`
  }
  return licenseSection;
}

// Markdown generator
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.licensePick)}

# ${data.title}

## Description
${data.description}

## Table Of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution Guidelines](#contribution)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.licensePick)}

## Contribution Guidelines
${data.contribution}

## Tests
${data.tests}

## Questions
Feel free to reach out to me if you have any questions, or if you'd like to find out what else I've worked on. My details are as follows:  
  Github: https://github.com/${data.username}  
  Email: ${data.email}  
`
    ;
}


export default generateMarkdown;
