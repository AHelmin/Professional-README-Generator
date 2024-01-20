// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge;
  if (data.license === 'MIT License'){
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (data.license === 'Apache License 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (data.license === 'GNU GPL v3') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else if (data.license === 'BSD 3-Clause License') {
    licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else {
    licenseBadge = ''
  }
  return licenseBadge
}
'MIT License', 'Apache License 2.0', 'GNU GPL v3','Mozilla Public License 2.0','BSD 3-Clause License'
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink;
  if (data.license === 'MIT License'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (data.license === 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (data.license === 'GNU GPL v3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else if (data.license === 'BSD 3-Clause License') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    licenseLink = ''
  }
  return licenseLink
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
    
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${licenseLink}
  
  ## Questions
  
  ${data.githubName}

  github.com/${data.githubName}

  Please direct questions to my email: ${data.email}
  
  
  
`
//call generate liscense stuff here
};

module.exports = generateMarkdown;

