document.addEventListener('DOMContentLoaded', function () {
    fetch('https://casas-webservice.onrender.com/')
        .then(response => response.json())
        .then(data => {
            displayPersonalInfo(data.Personal_Information);
            displayAboutMe(data.About_Me);
            displaySkills(data.Skills);
            displayEducation(data.Education);
            displayWorkExperience(data.Work_Experience);
            displayPersonalReferences(data.Personal_References);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPersonalInfo(personalInfoArray) {
        const personalInfoDiv = document.getElementById('personal-info');
        personalInfoDiv.innerHTML = `
            <h2>Personal Information</h2>
            ${personalInfoArray.map(personalInfo => `
                <p>Name: ${personalInfo.Name}</p>
                <p>Birthdate: ${personalInfo.Birthdate}</p>
                <p>Gender: ${personalInfo.Gender}</p>
                <p>Contact No: ${personalInfo.Contact_No}</p>
                <p>Address: ${personalInfo.Address}</p>
            `).join('')}
        `;
    }

    function displayAboutMe(aboutMeArray) {
        const aboutMeDiv = document.getElementById('about-me');
        aboutMeDiv.innerHTML = `
            <h2>About Me</h2>
            ${aboutMeArray.map(aboutMe => `
                <p>${aboutMe.Description}</p>
            `).join('')}
        `;
    }

    function displaySkills(skillsArray) {
        const skillsDiv = document.getElementById('skills');
        skillsDiv.innerHTML = `
            <h2>Skills</h2>
            <ul>
                ${skillsArray.map(skills => `
                    ${skills.Languages.map(lang => <li>${lang}</li>).join('')}
                `).join('')}
            </ul>
        `;
    }

    function displayEducation(educationArray) {
        const educationDiv = document.getElementById('education');
        educationDiv.innerHTML = `
            <h2>Education</h2>
            <ul>
                ${educationArray.map(education => `
                    <li>
                        <p>Degree: ${education.Degree}</p>
                        <p>Institution: ${education.Institution}</p>
                        <p>Year: ${education.Year}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    function displayWorkExperience(workExperienceArray) {
        const workExperienceDiv = document.getElementById('work-experience');
        workExperienceDiv.innerHTML = `
            <h2>Work Experience</h2>
            <ul>
                ${workExperienceArray.map(workExperience => `
                    <li>
                        <p>Company: ${workExperience.Company}</p>
                        <p>Job Title: ${workExperience.Job_Title}</p>
                        <p>Start Date: ${workExperience.Start_Date}</p>
                        <p>End Date: ${workExperience.End_Date}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    function displayPersonalReferences(personalReferencesArray) {
        const personalReferencesDiv = document.getElementById('personal-references');
        personalReferencesDiv.innerHTML = `
            <h2>Personal References</h2>
            <ul>
                ${personalReferencesArray.map(personalReferences => `
                    <li>
                        <p>Name: ${personalReferences.Name}</p>
                        <p>Contact No: ${personalReferences.Contact_No}</p>
                        <p>Relationship: ${personalReferences.Relationship}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }
});