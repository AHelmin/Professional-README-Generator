// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge;
  const licenses = {
    'MIT License': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'GNU GPL v3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Mozilla Public License 2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    'BSD 3-Clause License': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  }
  if (licenses[data.license]) {
    badge = licenses[data.license];
  } else {
    badge = '';
  }
  return badge;
};

function renderLicenseLink(data) {
  let licenseLink;
  const links = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause'
  }
  if (links[data.license]) {
    licenseLink = links[data.license];
  } else {
    licenseLink = '';
  }
  return licenseLink;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //TODO 
  //GRAB THE LICENSE DATA AND SEND IT THROUGH THESE FUNCTIONS
  //FINISH THE FUNCTIONS
  const licenseBadge = renderLicenseBadge(data);
  const licenseLink = renderLicenseLink(data);
  // renderLicenseSection(data) 
  return `
  ${licenseBadge}
  # ${data.title}

  ## Description
  
  ${data.description}
    
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installationInstructions}
  
  ## Usage
  
  ${data.usageInformation}

  ## Contribute
  
  ${data.contributionGuidelines}

  ## Tests
  
  ${data.testInstructions}
  
  ## License

  ${data.license}
  
  ${licenseLink}
  
  ## Questions
  
  ${data.githubName}

  github.com/${data.githubName}

  Please direct questions to my email: ${data.email}
  
  
  
`
  //call generate liscense stuff here
};

module.exports = generateMarkdown;

