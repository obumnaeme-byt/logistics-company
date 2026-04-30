const adviceList = [
  "Please ensure your delivery address and contact details are correct to avoid delays. We are committed to delivering your package safely and on time.",

  "Kindly make sure you are available at the delivery location during the scheduled time to receive your package without inconvenience.",


  "For your security, please inspect your package upon delivery and report any issues immediately.",


  "Always confirm payment details through our official website to avoid errors or delays in processing your delivery.",

  "Providing accurate landmarks and phone numbers helps our delivery team reach you faster.",

  "Your satisfaction is our priority. Please provide accurate delivery details and stay available during delivery time to ensure a smooth and fast service."
];



const TrackingID = [
  "IGL8980982627",
  "IGL8980982625"
];

let index = 0;

function changeAdvice() {
  document.getElementById("Advice").textContent = adviceList[index];
  index = (index + 1) % adviceList.length;
}
// change every 3 seconds
setInterval(changeAdvice, 8000);

// show first advice immediately
changeAdvice();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.onclick = () => {
  nav.classList.toggle('active');
}


  function validatingId(){
    const trackingNumber = document.getElementById("trackingInput").value.trim();
    const error = document.getElementById("errormsg")
    if(TrackingID.includes(trackingNumber)){
       window.location.href = "tracking.html";
    }else{
      error.textContent = "wrong Tracking id (please get your tracking from the owner)"
      error.style.color = "red"
      error.style.display = "block"
    }
  }
  

const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
  const section = document.querySelector('.counter-section');
  const triggerPoint = section.offsetTop - window.innerHeight;


  if (window.scrollY > triggerPoint && !started) {
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

    started = true; // prevent re-running
  }
});

