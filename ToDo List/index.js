document.addEventListener("DOMContentLoaded", function () {
    const Profile = document.getElementById("profile");
    const Upload = document.getElementById("Upload");
    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const profession = document.getElementById("profession");
    const skills = document.getElementById("Skills");
    const qualification = document.getElementById("qualification");
    const About = document.getElementById("About");
    const dob = document.getElementById("DoB"); 
    const contact = document.getElementById("contact");
    const email = document.getElementById("Email");
    const address = document.getElementById("Address");
    const line = document.getElementById("line");
    const hding = document.getElementById("hding");

    const addbtn = document.getElementById("btn");
    const themebtn1 = document.getElementById("theme1");
    const themebtn2 = document.getElementById("theme2");
    const themebtn3 = document.getElementById("theme3");
    const resultContainer = document.getElementById("result-container");
    const resultContainer2 = document.getElementById("result-container2");
    const resultContainer3 = document.getElementById("result-container3");

    // Initially hide headings and result containers
    hding.style.display = "none";
    line.style.display = "none";
    resultContainer.style.display = "none";
    resultContainer2.style.display = "none";
    resultContainer3.style.display = "none";

    let selectedTheme = null;

    // Handle file upload
    Upload.onchange = function () {
        if (Upload.files && Upload.files[0]) {
            Profile.src = URL.createObjectURL(Upload.files[0]); // Display the uploaded image in the profile element
        }
    };

    // Handle generate CV button click
    addbtn.addEventListener("click", () => {
        const firstnameText = firstname.value.trim();
        const lastnameText = lastname.value.trim();
        const professionText = profession.value.trim();
        const skillsText = skills.value.trim();
        const qualificationtext = qualification.value.trim();
        const AboutText = About.value.trim();
        const dobText = dob.value.trim();
        const contacttext = contact.value.trim();
        const emailtext = email.value.trim();
        const addresstext = address.value.trim();

        // Validation checks
        if (firstnameText === "") {
            alert("Please! Enter your first name");
            return;
        }

        if (lastnameText === "") {
            alert("Please! Enter your last name");
            return;
        }

        if (professionText === "") {
            alert("Please! Enter your profession");
            return;
        }

        if (skillsText === "") {
            alert("Please! Enter your skills");
            return;
        }

        if (dobText === "") {
            alert("Please! Enter your date of birth");
            return;
        }

        if (AboutText === "") {
            alert("Please! Enter your About");
            return;
        }

        if (emailtext === "") {
            alert("Please! Enter your Email");
            return;
        }

        if (addresstext === "") {
            alert("Please! Enter your Address");
            return;
        }

        if (qualificationtext === "") {
            alert("Please! Enter your Qualification");
            return;
        }

        if (contacttext === "") {
            alert("Please! Enter your Phone Number");
            return;
        }

        if (!selectedTheme) {
            alert("Please! Select a theme");
            return;
        }


        const resultDiv = document.createElement("div");

        const profileElement = document.createElement("img");
        profileElement.src = Profile.src; 
        profileElement.alt = "Profile Picture";
        profileElement.classList.add("profile-img"); 
        resultDiv.appendChild(profileElement);

        const fullNameElement = document.createElement("p");
        fullNameElement.textContent = `Full Name: ${firstnameText} ${lastnameText}`;
        resultDiv.appendChild(fullNameElement);

        const professionElement = document.createElement("p");
        professionElement.textContent = `Profession: ${professionText}`;
        resultDiv.appendChild(professionElement);

        const skillsElement = document.createElement("p");
        skillsElement.textContent = `Skills: ${skillsText}`;
        resultDiv.appendChild(skillsElement);

        const qualificationElement = document.createElement("p");
        qualificationElement.textContent = `Qualification: ${qualificationtext}`;
        resultDiv.appendChild(qualificationElement);

        const AboutElement = document.createElement("p");
        AboutElement.textContent = `About: ${AboutText}`;
        resultDiv.appendChild(AboutElement);

        const dobElement = document.createElement("p");
        dobElement.textContent = `Date of Birth: ${dobText}`;
        resultDiv.appendChild(dobElement);

        const contactElement = document.createElement("p");
        contactElement.textContent = `Contact: ${contacttext}`;
        resultDiv.appendChild(contactElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${emailtext}`;
        resultDiv.appendChild(emailElement);

        const addressElement = document.createElement("p");
        addressElement.textContent = `Address: ${addresstext}`;
        resultDiv.appendChild(addressElement);

        resultContainer.appendChild(resultDiv);
        resultContainer2.appendChild(resultDiv.cloneNode(true)); 
        resultContainer3.appendChild(resultDiv.cloneNode(true)); 

        hding.style.display = "block";
        line.style.display = "block";
    });

    // Theme button event listeners
    themebtn1.addEventListener("click", () => {
        selectedTheme = "theme1"; 
        // Show the content with theme1
        // resultContainer.classList.add("theme1");
        // resultContainer2.classList.add("theme1");
        // resultContainer3.classList.add("theme1");

        // Hide the other themes by removing their classes
        // resultContainer.classList.remove("theme2", "theme3");
        // resultContainer2.classList.remove("theme2", "theme3");
        // resultContainer3.classList.remove("theme2", "theme3");

        // Show the first container and hide others
        resultContainer.style.display = "flex";
        resultContainer2.style.display = "none";
        resultContainer3.style.display = "none";
    });

    themebtn2.addEventListener("click", () => {
        selectedTheme = "theme2";
        // Show the content with theme2
        // resultContainer.classList.add("theme2");
        // resultContainer2.classList.add("theme2");
        // resultContainer3.classList.add("theme2");

        // Hide the other themes by removing their classes
        // resultContainer.classList.remove("theme1", "theme3");
        // resultContainer2.classList.remove("theme1", "theme3");
        // resultContainer3.classList.remove("theme1", "theme3");

        // Show the second container and hide others
        resultContainer.style.display = "none";
        resultContainer2.style.display = "flex";
        resultContainer3.style.display = "none";
    });

    themebtn3.addEventListener("click", () => {
        selectedTheme = "theme3"; 
        // Show the content with theme3
        // resultContainer.classList.add("theme3");
        // resultContainer2.classList.add("theme3");
        // resultContainer3.classList.add("theme3");

        // Hide the other themes by removing their classes
        // resultContainer.classList.remove("theme1", "theme2");
        // resultContainer2.classList.remove("theme1", "theme2");
        // resultContainer3.classList.remove("theme1", "theme2");

      
        resultContainer.style.display = "none";
        resultContainer2.style.display = "none";
        resultContainer3.style.display = "flex";
    });
});

