document.getElementById("complaintForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let vehicle = document.getElementById("vehicle").value.trim();
  let complaint = document.getElementById("complaint").value.trim();

  let isValid = true;

  // Reset errors
  document.querySelectorAll("small").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  // Validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Full name is required.";
    isValid = false;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits.";
    isValid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (vehicle === "") {
    document.getElementById("vehicleError").textContent = "Vehicle details required.";
    isValid = false;
  }

  if (complaint === "") {
    document.getElementById("complaintError").textContent = "Complaint cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    let submission = { name, phone, email, vehicle, complaint };

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));

    document.getElementById("successMessage").textContent = "✅ Data saved successfully!";
    document.getElementById("complaintForm").reset();
  }
});
