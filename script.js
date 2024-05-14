document.addEventListener('DOMContentLoaded', function () {
    fetch('https://casas-webservice.onrender.com')
        .then(response => response.json())
        .then(data => {
            displayPersonalInfo(data.Personal_Information);
            displayAboutMe(data.About_me);
            displaySkills(data.Skills);
            displayEducation(data.Education);
            displayWorkExperience(data.Work_Experience);
            displayPersonalReferences(data.Personal_Reference);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPersonalInfo(personalInfoArray) {
        const personalInfoDiv = document.getElementById('personal-info');
        personalInfoDiv.innerHTML = `
            ${personalInfoArray.map(personalInfo => `
                <p>Name: ${personalInfo.Name}</p>
                <p>Birthdate: ${personalInfo.Birthdate}</p>
                <p>Gender: ${personalInfo.Gender}</p>
                <p>Contact No: ${personalInfo.ContactNo}</p>
                <p>Address: ${personalInfo.Address}</p>
            `).join('')}
        `;
    }

    function displayAboutMe(aboutMeArray) {
        const aboutMeDiv = document.getElementById('about-me');
        aboutMeDiv.innerHTML = `
            ${aboutMeArray.map(aboutMe => `
                <p>${aboutMe.Description}</p>
            `).join('')}
        `;
    }

    function displaySkills(skillsArray) {
        const skillsDiv = document.getElementById('skills');
        skillsDiv.innerHTML = `
            <ul>
                ${skillsArray.map(skills => `
                    ${skills.Language.split(',').map(lang => `<li>${lang}</li>`).join('')}
                `).join('')}
            </ul>
        `;
    }

    function displayEducation(educationArray) {
        const educationDiv = document.getElementById('education');
        educationDiv.innerHTML = `
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
            <ul>
                ${workExperienceArray.map(workExperience => `
                    <li>
                        <p>Company: ${workExperience.Company}</p>
                        <p>Job Title: ${workExperience.Job_Title}</p>
                        <p>Start Date: ${workExperience.Start_Date}</p>
                        <p>End Date: ${workExperience.End_Date ? workExperience.End_Date : 'Present'}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    function displayPersonalReferences(personalReferencesArray) {
        const personalReferencesDiv = document.getElementById('personal-references');
        personalReferencesDiv.innerHTML = `
            <ul>
                ${personalReferencesArray.map(personalReferences => `
                    <li>
                        <p>Name: ${personalReferences.Name}</p>
                        <p>Contact No: ${personalReferences.Contact}</p>
                        <p>Relationship: ${personalReferences.Relationship}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }
});
