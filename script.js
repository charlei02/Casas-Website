// script.js

// Fetch data from server and populate into HTML
fetch('https://casas-webservice.onrender.com/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('personalInfo').innerHTML = `
            <p><strong>Name:</strong> ${data.Personal_Information[0].Name}</p>
            <p><strong>Address:</strong> ${data.Personal_Information[0].Address}</p>
            <p><strong>Contact No:</strong> ${data.Personal_Information[0].ContactNo}</p>
            <p><strong>Email:</strong> ${data.Personal_Information[0].Email}</p>
            <p><strong>Birthdate:</strong> ${data.Personal_Information[0].Birthdate}</p>
            <p><strong>Gender:</strong> ${data.Personal_Information[0].Gender}</p>
        `;
        document.getElementById('aboutMe').innerHTML = `
            <p>${data.About_me[0].Description}</p>
        `;
        document.getElementById('skills').innerHTML = `
            <p><strong>Language:</strong> ${data.Skills[0].Language}</p>
            <p><strong>Webdesign:</strong> ${data.Skills[0].Webdesign}</p>
        `;
        document.getElementById('education').innerHTML = `
            <p><strong>Degree:</strong> ${data.Education[0].Degree}</p>
            <p><strong>Institution:</strong> ${data.Education[0]. Institution}</p>
            <p><strong>Year:</strong> ${data.Education[0].Year}</p>
        `;
        
        document.getElementById('personalReference').innerHTML = `
            <p><strong>Name:</strong> ${data.Personal_Reference[0].Name}</p>
            <p><strong>Contact:</strong> ${data.Personal_Reference[0].Contact}</p>
            <p><strong>Relationship:</strong> ${data.Personal_Reference[0].Relationship}</p>
        `;
        document.getElementById('workExperience').innerHTML = `
            <p><strong>Company:</strong> ${data.Work_Experience[0].Company}</p>
            <p><strong>Job Title:</strong> ${data.Work_Experience[0].Job_Title}</p>
            <p><strong>Start Date:</strong> ${data.Work_Experience[0].Start_Date}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
