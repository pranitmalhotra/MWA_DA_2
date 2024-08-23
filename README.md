# MWA_DA_2

## Overview

This project provides a vibrant, dynamic registration form for volunteers interested in helping out at a large music festival. The form is designed to cater to the needs of festival organizers by offering different benefits based on the volunteer's age. The project leverages HTML, CSS, and JavaScript to create a user-friendly, interactive experience that adjusts the benefits list dynamically based on the age entered by the volunteer.

## Project Structure

```plaintext
music-festival-volunteer-registration/
│
├── index.html        # Main HTML structure of the registration form
├── styles.css        # CSS styling for the form and confirmation message
└── script.js         # JavaScript for dynamic benefits and form submission
```

### index.html
- Contains the structure of the registration form, including fields for name, age, contact details, preferred role, and T-shirt size.
- Dynamically displays the benefits section based on the volunteer's age.

### styles.css
- Implements the festival-themed design, including custom fonts, colors, and animations.
- Ensures the form is responsive and visually appealing across different devices.

### script.js
- Includes the logic to adjust the benefits list based on the age entered by the volunteer.
- Handles the form submission process, including generating a personalized confirmation message.

## Usage

1. **Fill Out the Form**: 
   - Volunteers can enter their name, age, contact details, preferred volunteer role, and T-shirt size.
   - The benefits list will automatically update based on the age entered.

2. **Submit the Form**: 
   - Upon clicking the "Register" button, the form will validate the input, and a personalized confirmation message will be displayed.
   - The confirmation message will include the volunteer's assigned role, the benefits they will receive, and any additional instructions.