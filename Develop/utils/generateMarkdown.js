// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license = 'EPL 1.0')
  {return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)';};
 if (license = 'Apache 2.0')
  {return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';};
 if (license = 'MIT')
  {return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';};
 if (license = 'GPL 3.0')
  {return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';};
 if (license = 'BSD 3.0')
  {return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';}
 else{
   return 'No license badge is affiliated with this repository'
 };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = 'EPL 1.0' )
    {return 'https://www.eclipse.org/legal/epl-v10.html';};
  if (license = 'Apache 2.0')
    {return 'https://choosealicense.com/licenses/apache-2.0/';};
  if (license = 'MIT')
    {return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';};
  if (license = 'GPL 3.0')
    {return 'https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt';};
  if (license = 'BSD 3.0')
    {return 'https://github.com/thomasjbradley/micromodel/blob/master/BSD-3-CLAUSE-LICENSE.txt';}
  else{
      return 'No license is affiliated with this repository';
    };  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license) {
   var section =
   `## License\nThis application is licensed under [${license}](${renderLicenseLink(license)})`;
   return section;
  }
   else {
     return 'No Readme section for license';
   };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const markdownTemplate = 
  `# ${data.title}
  
  ## Description
  ${data.description} 
  ## Table of Contents 
  ## License 
  ${licenseSection}
  ${licenseLink}
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  You can reach me at ${data.email} or visit my github at https://github.com/${data.github}
  ## Installation
  To install necessary dependencies, install the following
  \`\`\`
  ${data.install}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
 
  ${data.tests}
 
  ## Questions;
  
  ${data.questions}
  `;

  return markdownTemplate;
};

// export the generateMarkdown function
module.exports = generateMarkdown;
