import client_HomePage from '@/components/client_HomePage.vue';
import { getAllRestaurants } from '@/services/HandlerGetAllRest';

export default {
  name: 'client_HomePage',
  components: {
    client_HomePage
  },
  data() {
    return {
      restaurants: []
    };
  },
  async mounted() {
    try {
      const restaurants = await getAllRestaurants();
      this.restaurants = restaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  },
};




/* eslint-disable */
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".referral button");
  const emailInput = document.querySelector(".referral .text");

  console.log("Button:", button);
  console.log("Email Input:", emailInput);

  if (button && emailInput) {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = () => {
      emailjs.init("qW1Ea3nn6YSeahlbA");

      button.addEventListener("click", function() {
        const toEmail = emailInput.value;
        if (validateEmail(toEmail)) {
          sendReferralEmail(toEmail);
        } else {
          alert("Veuillez entrer une adresse email valide.");
        }
      });

      function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

      function sendReferralEmail(toEmail) {
        emailjs.send("service_lgpn366", "template_8a8z0cg", {
          to_email: toEmail
        })
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert("Email de parrainage envoyé avec succès !");
        }, function(error) {
          console.log('FAILED...', error);
          alert("Erreur lors de l'envoi de l'email de parrainage.");
        });
      }
    };
    document.head.appendChild(script);
  } else {
    console.error("Button or Email Input not found in the DOM.");
  }
});
/* eslint-enable */
