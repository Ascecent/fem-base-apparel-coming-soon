import heroMobileImage from "Images/hero-mobile.jpg";
import heroDesktopImage from "Images/hero-desktop.jpg";
import baseApparelLogo from "Images/logo.svg";
import Swal from "sweetalert2";

const createSomeElement = (element) => document.createElement(element);
const validateEmail = (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

function createHeroImage() {
  const heroImage = new Image();

  heroImage.title = "Hero image";
  heroImage.alt = "Hero image";

  return heroImage;
}

function createHeading() {
  const span = createSomeElement("span");
  span.innerHTML = "We're";

  const h1 = createSomeElement("h1");
  h1.appendChild(span);
  h1.innerHTML += " coming soon";
  h1.classList = "coming-soon__heading";

  return h1;
}

function createDescription() {
  const presentation = createSomeElement("p");
  presentation.innerHTML =
    "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.";
  presentation.classList = "coming-soon__description";

  return presentation;
}

function createHero(src) {
  const heroImage = createHeroImage();
  heroImage.src = src;

  return heroImage;
}

function createForm() {
  const form = createSomeElement("form");
  const input = createSomeElement("input");
  const sendBtn = createSomeElement("button");
  const iconArrow = createSomeElement("span");
  const iconError = createSomeElement("span");
  const errorMessage = createSomeElement("small");

  errorMessage.innerHTML = "Please provide a valid email";

  iconArrow.classList = "icon icon--arrow";
  iconError.classList = "icon icon--error";

  input.type = "email";
  input.placeholder = "Email Address";

  sendBtn.type = "submit";
  sendBtn.classList = "button--send";
  sendBtn.appendChild(iconArrow);

  form.classList = "coming-soon__form";
  form.appendChild(input);
  form.appendChild(sendBtn);
  form.appendChild(iconError);
  form.appendChild(errorMessage);

  form.onsubmit = function (e) {
    e.preventDefault();

    if (validateEmail(input.value)) {
      this.classList = "coming-soon__form";
      this.reset();

      Swal.fire({
        title: "Success!",
        text: "You are now subscribed to our newsletter!!",
        icon: "success",
        timer: 2000,
        confirmButtonText: "Great",
      });
    } else this.classList = "coming-soon__form error";
  };

  return form;
}

function createLogo() {
  const logo = new Image();
  logo.src = baseApparelLogo;
  logo.title = "Base apparel logo";
  logo.alt = "Base apparel logo";

  const logoContainer = createSomeElement("div");
  logoContainer.classList = "coming-soon__logo";
  logoContainer.appendChild(logo);

  return logoContainer;
}

export default function createApp() {
  const app = createSomeElement("main");
  app.classList = "coming-soon";

  const heroMobileImageContainer = createSomeElement("div");
  heroMobileImageContainer.classList =
    "hide-for-desktop coming-soon__mobile-hero";
  heroMobileImageContainer.appendChild(createHero(heroMobileImage));

  const heroDesktopImageContainer = createSomeElement("div");
  heroDesktopImageContainer.classList =
    "hide-for-mobile coming-soon__desktop-hero";
  heroDesktopImageContainer.appendChild(createHero(heroDesktopImage));

  const comingSoonContent = createSomeElement("div");
  comingSoonContent.classList = "coming-soon__content";
  comingSoonContent.appendChild(createHeading());
  comingSoonContent.appendChild(createDescription());
  comingSoonContent.appendChild(createForm());

  const section = createSomeElement("section");
  section.classList = "coming-soon__side-1";
  section.appendChild(createLogo());
  section.appendChild(heroMobileImageContainer);
  section.appendChild(comingSoonContent);

  app.appendChild(section);
  app.appendChild(heroDesktopImageContainer);

  return app;
}
