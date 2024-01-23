// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const today = new Date();
function renderLicenseBadge(data) {
  let badge;
  const licenses = {
    'MIT License': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'GNU GPL v3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Mozilla Public License 2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    'BSD 3-Clause License': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  }
  if (data.license) {
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
  if (data.license) {
    licenseLink = links[data.license];
  } else {
    licenseLink = '';
  }
  return licenseLink;
};

function renderLicenseText(data) {
  let licenseText;
  const text = {
    'MIT License': `Copyright ${today.getFullYear()} ${data.githubName}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this 
    software and associated documentation files (the “Software”), to deal in the 
    Software without restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so, subject to the 
    following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
    OTHER DEALINGS IN THE SOFTWARE.`,
    'Apache License 2.0': `Copyright ${today.getFullYear()} ${data.githubName}
    
    Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
   You may obtain a copy of the License at`,
    'GNU GPL v3': `Copyright (C) ${today.getFullYear()} ${data.githubName}
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see`,
    'Mozilla Public License 2.0': `Copyright (C) ${today.getFullYear()} ${data.githubName}

    This Source Code Form is subject to the terms of the Mozilla Public License, 
    v. 2.0. If a copy of the MPL was not distributed with this file, You can 
    obtain one at https://mozilla.org/MPL/2.0/.`,
    'BSD 3-Clause License': `Copyright ${today.getFullYear()} ${data.githubName}
    
    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, 
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors 
    may be used to endorse or promote products derived from this software without 
    specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND 
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE 
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  }
  if (data.license) {
    licenseLink = text[data.license];
  } else {
    licenseLink = '';
  }
  return licenseText
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
  const licenseText = renderLicenseText(data);
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

  ${licenseText}
  
  ${licenseLink}
  
  ## Questions
  
  GitHub user name: ${data.githubName}

  github.com/${data.githubName}

  Please direct questions to my email: ${data.email}
  
  
  
`
  //call generate liscense stuff here
};

module.exports = generateMarkdown;

