        // Set the maximum countdown time in seconds (10 minutes = 600 seconds)
        const maxCountdownTime = 600;
        var countdownTime = maxCountdownTime; // Initialize countdown time to maximum
        var countdownInterval;

        const startButton = document.getElementById("startButton");
        const pauseButton = document.getElementById("pauseButton");
        const resetButton = document.getElementById("resetButton");
        // const addOneSecond = document.getElementById("addOneSecond");
        // const addTenSeconds = document.getElementById("addTenSeconds");
        // const addSixtySeconds = document.getElementById("addSixtySeconds");
        // const subtractOneSecond = document.getElementById("subtractOneSecond");
        // const subtractTenSeconds = document.getElementById("subtractTenSeconds");
        // const subtractSixtySeconds = document.getElementById("subtractSixtySeconds");

        function startCountdown() {
            let timerDisplay = document.getElementById('timer');

            function updateTimer() {
                let minutes = Math.floor(countdownTime / 60);
                let seconds = countdownTime % 60;

                // Display the remaining time in the 'timer' div
                timerDisplay.innerHTML = (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);
                startButton.disabled = true;
                pauseButton.disabled = false;
                resetButton.disabled = true;
                // addOneSecond.disabled = true;
                // addTenSeconds.disabled = true;
                // addSixtySeconds.disabled = true;
                // subtractOneSecond.disabled = true;
                // subtractTenSeconds.disabled = true;
                // subtractSixtySeconds.disabled = true;

                if (countdownTime <= 0) {
                    // Countdown timer has reached zero
                    timerDisplay.innerHTML = '00:00';
                } else {
                    // Decrease the remaining time by 1 second
                    countdownTime--;
                }
            }

            // Call updateTimer once immediately to display the initial time
            updateTimer();

            // Start the countdown timer
            countdownInterval = setInterval(updateTimer, 1000); // Update the timer every second
            resetButton.disabled = true;
        }

        function pauseCountdown() {
            clearInterval(countdownInterval);
            startButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = false;
            // addOneSecond.disabled = false;
            // addTenSeconds.disabled = false;
            // addSixtySeconds.disabled = false;
            // subtractOneSecond.disabled = false;
            // subtractTenSeconds.disabled = false;
            // subtractSixtySeconds.disabled = false;
        }

        function resetCountdown() {
            clearInterval(countdownInterval);
            countdownTime = maxCountdownTime; // Reset countdown time to maximum
            let timerDisplay = document.getElementById('timer');
            timerDisplay.innerHTML = '10:00';
            startButton.disabled = false;
            pauseButton.disabled = true;
            resetButton.disabled = true;
        }

        // function addSeconds(secondsToAdd) {
        //     if (countdownTime + secondsToAdd <= maxCountdownTime) {
        //         countdownTime += secondsToAdd;
        //         updateTimer();
        //     }
        // }
        
        // function subtractSeconds(secondsToSubtract) {
        //     if (countdownTime - secondsToSubtract >= 0) {
        //         countdownTime -= secondsToSubtract;
        //         updateTimer();
        //     }
        // }

        // addOneSecond.addEventListener("click", () => addSeconds(1));
        // addTenSeconds.addEventListener("click", () => addSeconds(10));
        // addSixtySeconds.addEventListener("click", () => addSeconds(60));
        // subtractOneSecond.addEventListener("click", () => subtractSeconds(1));
        // subtractTenSeconds.addEventListener("click", () => subtractSeconds(10));
        // subtractSixtySeconds.addEventListener("click", () => subtractSeconds(60));

        startButton.addEventListener("click", startCountdown);
        pauseButton.addEventListener("click", pauseCountdown);
        resetButton.addEventListener("click", resetCountdown);