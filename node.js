const adviceList =[ 
    "Please ensure your delivery address and contact details are correct to avoid delays. We are committed to delivering your package safely and on time.",

"Kindly make sure you are available at the delivery location during the scheduled time to receive your package without inconvenience.",


"For your security, please inspect your package upon delivery and report any issues immediately.",


"Always confirm payment details through our official website to avoid errors or delays in processing your delivery.",

"Providing accurate landmarks and phone numbers helps our delivery team reach you faster.",

"Your satisfaction is our priority. Please provide accurate delivery details and stay available during delivery time to ensure a smooth and fast service."
];




let index = 0;

function changeAdvice() {
    document.getElementById("Advice").textContent = adviceList[index];
    index = (index + 1) % adviceList.length;
}
// change every 3 seconds
setInterval( changeAdvice, 8000);

// show first advice immediately
changeAdvice();

const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  toggle.onclick = () => {
    nav.classList.toggle('active');
  }


function trackPackage() {
  const trackingNumber = document.getElementById("trackingInput").value;

  if (trackingNumber === "") {
    alert("Please enter a tracking number");
  } else {
    // redirect to result page with data
    window.location.href = "tracking.html?code=" + trackingNumber;
  }
}


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

