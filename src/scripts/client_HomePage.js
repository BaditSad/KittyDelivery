import client_HomePage from '@/components/client_HomePage.vue'
import emailjs from 'emailjs-com';

export default {
  name: 'client_HomePage',
  mounted() {
    emailjs.init("qW1Ea3nn6YSeahlbA");

    const button = this.$el.querySelector(".referral button");
    const emailInput = this.$el.querySelector(".referral .text");

    button.addEventListener("click", () => {
      const toEmail = emailInput.value;
      if (this.validateEmail(toEmail)) {
        this.sendReferralEmail(toEmail);
      } else {
        alert("Veuillez entrer une adresse email valide.");
      }
    });
  },
  methods: {
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    sendReferralEmail(toEmail) {
      emailjs.send("service_lgpn366", "template_8a8z0cg", {
        to_email: toEmail
      })
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email de parrainage envoyé avec succès !");
      }, error => {
        console.log('FAILED...', error);
        alert("Erreur lors de l'envoi de l'email de parrainage.");
      });
    }
  }
};