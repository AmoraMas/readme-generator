// DEFAULT ANSWERS  (the key should be the id of each input/textarea field)
const defaultValues = {
  screenshot: "/images/screenshot.png",
  contributors: "None",
  email: "amoramas1984@gmail.com",
  technologies: "CSS3, HTML5, JavaScript",
  setup: "None Needed. Click on demonstration link below.",
  demo: "https://AmoraMas.github.io/RepoName/",
  license: "",
};

let $submitButton = $(".submitButton");
$submitButton.click(function () {
  createReadme();
});

let $resetButton = $(".resetButton");
$resetButton.click(resetPage);

function resetPage() {
  let $allInputs = $("input[type=text], input[type=email], textarea");
  for (let i = 0; i < $allInputs.length; i++) {
    let id = $($allInputs[i]).attr("id");
    if (id in defaultValues) {
      $($allInputs[i]).val(defaultValues[id]);
    } else {
      $($allInputs[i]).val("");
    }
  }
}

function createTOC() {
  let content = `## Table of Contents
  - [General Information](#general-information)
    - [Technologies Used](#technologies-used)
    - [Features](#features)
    - [Screenshots](#screenshots)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Current Status](#current-status)
  - [Room For Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
  - [License](#license)
`;
  return content;
}

// Function that generates the Readme text based on the information the user provided.
function createReadme() {
  let content = `# ${$("#name").val()}

> ${$("#description").val()}

${createTOC()}

## General Information
  > ${$("#info").val()}

## Technologies Used
  > ${$("#technologies").val()}

## Features
  - ${$('input[name="project_features_1"]').val()}
  - ${$('input[name="project_features_2"]').val()}
  - ${$('input[name="project_features_3"]').val()}
  - ${$('input[name="project_features_4"]').val()}
  - ${$('input[name="project_features_5"]').val()}

## Screenshot(s)
  > ![ScreenShot](${$("#screenshot").val()})

## Setup
  ${$("#setup").val()}
  
[Project Demonstration](${$("#demo").val()})

## Usage
  ${$("#usage").val()}

## Current Status
  > ${$("#status").val()}

## Room For Improvement
  - Ideas:
    - ${$('input[name="project_improvements_1"]').val()}
    - ${$('input[name="project_improvements_2"]').val()}
    - ${$('input[name="project_improvements_3"]').val()}
  - Todo:
    - ${$('input[name="project_todo_1"]').val()}
    - ${$('input[name="project_todo_2"]').val()}
    - ${$('input[name="project_todo_3"]').val()}

## Acknowledgements
  - Inspired By:
    - ${$("#inspiredBy").val()}
  - Based On:
    - ${$("#basedOn").val()}
  - Contributors:
    - ${$("#contributors").val()}

## Contact
  > [${$("#email").val()}](mailto:${$("#email").val()})

## License
  > ${$("#license").val()}
`;
  let $contentBlock = $("<pre></pre>").addClass("contentBlock");
  $contentBlock.append(content);
  $(".readmeSection").empty();
  $(".readmeSection").append($contentBlock);
}
