document.getElementById('age').addEventListener('input', function() {
    const age = parseInt(this.value);
    const benefitsList = document.getElementById('benefitsList');
    benefitsList.innerHTML = '';  // Clear the current list

    if (!isNaN(age)) {
        const benefits = age < 18
            ? ['Free T-shirt', 'Meal Vouchers']
            : ['Free T-shirt', 'Meal Vouchers', 'Festival Pass'];

        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
    }
});

document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the usual way

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const benefitsList = document.getElementById('benefitsList').innerHTML;

    document.body.innerHTML = `
        <div class="confirmation-message">
            <h1>Thank You, ${name}!</h1>
            <p>You are registered as a volunteer for the role of <strong>${role}</strong>.</p>
            <h2>Your Benefits:</h2>
            <ul>${benefitsList}</ul>
            <p>Please pick up your T-shirt at the registration desk when you arrive.</p>
        </div>
    `;
});