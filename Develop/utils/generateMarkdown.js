// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = 'MIT')
    {return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';};
  if (license = 'Apache 2.0')
    {return 'https://choosealicense.com/licenses/apache-2.0/';};
  if (license = 'GPL 3.0')
    {return 'https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt';};
  if (license = 'BSD 3')
    {return 'https://github.com/thomasjbradley/micromodel/blob/master/BSD-3-CLAUSE-LICENSE.txt';}
    else{
      return 'No license is affiliated with this repository';
    };
}

  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
