// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
${data.description}
    
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
${data.istallationInstructions}
  
  ## Usage
  
  ${data.usageInformation}

  ## How to Contribute
  
  ${data.contributionGuidelines}

  ## Tests
  
  ${data.testInstructions}
    
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ## Questions
  
  ${data.githubName}

  github.com/${data.githubName}

  Please direct questions to my email: ${data.email}
  
  
  
`;
}

module.exports = generateMarkdown;
