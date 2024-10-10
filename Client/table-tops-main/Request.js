document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();  

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const order = document.getElementById('order123').value;
        const extraFood = document.getElementById('extraFood').value;
        const dateTime = document.getElementById('dateTime').value;
        const address = document.getElementById('address').value;
        const message = document.getElementById('message').value;

        const orderData = {
            name: name,
            number: number,
            order: order,
            extraFood: extraFood,
            amount: dateTime,
            amount: dateTime,
            address: address,
            message: message
        };

        console.log("Order Data:", orderData); 

        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(orderData)  
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 500) {
                    throw new Error('Internal Server Error. Please try again later.');
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }
            return response.json();  
        })
        .then(data => {
            console.log('Success:', data);
            alert('Order submitted successfully!');
            displayError('');
        })
        .catch(error => {
            console.error('Error:', error.message);
            displayError(error.message); 
        });
    });

    function displayError(message) {
        let errorDiv = document.getElementById('error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.marginTop = '10px'; 
            document.getElementById('orderForm').appendChild(errorDiv);
        }
        errorDiv.textContent = message; 
    }
});
