
//hidd main page and show success page
function nextPage(){
   /* if(inputText()){
        hiddElementById('header');
        hiddElementById('main');
        hiddElementById('footer');
        showElementById('next-section'); 
        return;
    }
    else{
        alert ('fill up the details');
    }*/
    hiddElementById('header');
    hiddElementById('main');
    hiddElementById('footer');
    showElementById('next-section');
    //console.log('Next page');
    //console.log(inputValue);
    inputText();
}

function inputText(){
    inputValue('passenger-name');
    inputValue('phone-number');
    inputValue('email-id');
    
}

//hidd success page and show main page
function returnPage(){
    hiddElementById('next-section');
    showElementById('header');
    showElementById('main');
    showElementById('footer');
    //console.log('return page');
    clearPreviousSelections();
}

function clearPreviousSelections() {
    document.getElementById('passenger-name').value = '';
    document.getElementById('phone-number').value = '';
    document.getElementById('email-id').value = '';
    
    const selectedSeatsDiv = document.getElementById('selected-seats');
    if (selectedSeatsDiv) {
        selectedSeatsDiv.innerHTML = '';
    }
    
    document.getElementById('total-price').textContent = '0';
    document.getElementById('grand-total').textContent = '0';
    
   /* const seats = document.querySelectorAll('.seat.bg-green-500');
    seats.forEach(seat => {
        seat.classList.remove('bg-green-500');
        seat.classList.add('bg-gray-200');
    });*/
}


function SeeMore(){
    showElementById('hidden-copun')
}

function byTicket() {
    const ticketSection = document.getElementById('ticket-moving');
    if (ticketSection) {
        showElementById('ticket-moving');
        window.scrollTo({ top: ticketSection.offsetTop, behavior: 'smooth' });
    } else {
        console.error('Ticket section not found');
    }
}




    document.addEventListener('DOMContentLoaded', function () {
    let selectedSeats = [];
    const seatPrice = 550;
    //const seats = document.querySelectorAll('.seat');
    const couponInput = document.getElementById('coupun-code');
    const applyCouponButton = document.getElementById('apply-coupon');
    
    couponInput.disabled = true;
    applyCouponButton.disabled = true;

    // Seat selection logic
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', function () {
            if (selectedSeats.length >= 4 && !selectedSeats.includes(this.value)) {
                alert('You can select a maximum of 4 seats.');
                return;
            }
            // Toggle seat selection
            if (selectedSeats.includes(this.value)) {
                // Deselect
                selectedSeats = selectedSeats.filter(seat => seat !== this.value);
                this.classList.remove('bg-green-500');
                this.classList.add('bg-gray-200');
            } else {
                // Select
                selectedSeats.push(this.value);
                this.classList.remove('bg-gray-200');
                this.classList.add('bg-green-500');
            }

            updateTotalPrice();
            toggleCouponInput();
        });
    });

    // Update total price based on selected seats
    function updateTotalPrice() {
        const selectedSeatsDiv = document.getElementById('selected-seats');
        selectedSeatsDiv.innerHTML = selectedSeats.map(seat => {
            return `<div class="grid grid-cols-3 p-3">
                        <p class="text-sm text-gray-400">${seat}</p>
                        <p class="text-sm text-gray-400">Economy</p>
                        <p class="text-sm text-gray-400">${550}</p>
                    </div>`;
        }).join('');
        const totalPrice = selectedSeats.length * 550;  // Assuming each seat costs 550
        document.getElementById('total-price').textContent = totalPrice;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = totalPrice;

        const cureentSeat = getTextElementValueById('cuurent-seat');
        const updateSeat = cureentSeat - 1;
        setTextElementValueById('cuurent-seat', updateSeat);
        const TotalSeat = getTextElementValueById('total-seat');
        const TotalSeats = TotalSeat + 1;
        setTextElementValueById('total-seat', TotalSeats);
        //document.getElementById('grand-total').textContent = totalPrice;
    }

    function toggleCouponInput() {
        if (selectedSeats.length === 4) {
            couponInput.disabled = false;
            applyCouponButton.disabled = false;
        } else {
            couponInput.disabled = true;
            applyCouponButton.disabled = true;
        }
    }
    // Set background color for the total count section
    document.querySelector('.total-count').style.backgroundColor = '#f1f1f1';
   
});
// Attach event listener to all seats
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', handleSeatSelection);
});

function couponCode() {
    const couponInput = document.getElementById('coupun-code');
    const couponValue = couponInput.value.trim();
    const grandTotalElement = document.getElementById('grand-total');
    let totalPrice = parseFloat(document.getElementById('total-price').textContent) || 0;
    
    couponInput.value = '';

    const coupons = {
        'NEW15': 0.15,
        'Couple20': 0.2
    };

    if (coupons.hasOwnProperty(couponValue)) {
        const discount = totalPrice * coupons[couponValue];
        const discountedTotal = totalPrice - discount;
        grandTotalElement.textContent = discountedTotal.toFixed(2);
    } 
    else {
        alert('Invalid coupon code');
    }
}
