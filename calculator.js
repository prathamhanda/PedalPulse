// JavaScript for Calorie Burn Calculator
document.addEventListener('DOMContentLoaded', function () {
    const activitySelect = document.getElementById('activity');
    const durationInput = document.getElementById('duration');
    const weightInput = document.getElementById('weight');
    const resultInput = document.getElementById('result');
    const calculateBtn = document.getElementById('calculateBtn');

    // Event listener for calculating calories on button click
    calculateBtn.addEventListener('click', calculateCalories);

    // Function to calculate calories based on user input
    function calculateCalories() {
        const activity = activitySelect.value;
        const duration = parseFloat(durationInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(duration) || isNaN(weight) || duration <= 0 || weight <= 0) {
            alert('Please enter valid values for duration and weight.');
            return;
        }

        let caloriesBurned;


        switch (activity) {
            
            case 'cycling':
                caloriesBurned = calculateCyclingCalories(duration, weight);
                break;
          
        }

        // Update the result input with the calculated calories
        resultInput.innerText = Calories Burned: ${caloriesBurned.toFixed(2)} cal;
    }

    

    // Function to calculate calories for cycling
    function calculateCyclingCalories(duration, weight) {
        // Sample formula for cycling calories burned estimation
        const caloriesPerMinute = 0.08; // Adjust this value based on your formula
        return caloriesPerMinute * duration * weight;
    }

});