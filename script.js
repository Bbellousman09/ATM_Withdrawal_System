const correctPin = "1234";   
        let attempts = 0;  
        let balance = 50000;  

        document.getElementById("submitPin").addEventListener("click", function() {  
            const inputPin = document.getElementById("pin").value;  
            const message = document.getElementById("message");  

            if (inputPin === correctPin) {  
                document.getElementById("step1").style.display = "none";  
                document.getElementById("step2").style.display = "block";  
                message.textContent = "";   
                attempts = 0; 
            } else {  
                attempts++;  
                message.textContent = `Incorrect PIN. Attempts left: ${3 - attempts}`;  
                if (attempts >= 3) {  
                    message.textContent = "Your card is blocked.";  
                    document.getElementById("submitPin").classList.add("disabled");  
                    document.getElementById("submitPin").disabled = true;  
                    document.getElementById("step1").style.display = "none";   
                }  
            }  
        });  

        document.getElementById("submitAmount").addEventListener("click", function() {  
            const amountInput = Number(document.getElementById("amount").value);  
            const message = document.getElementById("message");  

            if (isNaN(amountInput) || amountInput <= 0) {  
                message.textContent = "Please enter a valid amount.";  
                return;  
            }  

            if (amountInput > balance) {  
                message.textContent = "Insufficient funds.";  
                document.getElementById("receipt").style.display = "none";  
            } else {  
                balance -= amountInput;   
                document.getElementById("receipt").textContent = `Cash dispensed: ₦${amountInput}. Remaining balance: ₦${balance}.`; 
                document.getElementById("receipt").style.display = "block";  
                message.textContent = ""; 
            }  
            document.getElementById("amount").value = "";   
        });  
