document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const objective = document.getElementById("objective").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const qualification = document.getElementById("qualification").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;
    const experience = document.getElementById("experience").value;
  
    const resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Objective</h3>
      <p>${objective}</p>
      <h3>Qualification</h3>
      <p>${qualification}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <h3>Projects</h3>
      <p>${projects}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  });
  