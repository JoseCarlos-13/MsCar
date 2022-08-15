let nav_list = [
  { link: "../HTML/mainpage.html", label: "Inicio" },
  { link: "../HTML/services.html", label: "Serviços" },
  { link: "../HTML/contact.html", label: "Contato" }
]

let logo_cars_list = [
  { link: "../assets/logos/agrale-logo-EBD2F31CBA-seeklogo.com.png" },
  { link: "../assets/logos/volare-logo.png" },
  { link: "../assets/logos/marca-auto-pecas-ford.png" },
  { link: "../assets/logos/Iveco-logo-silver-3840x2160.png" },
  { link: "../assets/logos/volkswagen-vw-logo.png" },
  { link: "../assets/logos/mercedes-benz-1024x536.png" }
]

let services_list = [
  { label: "Injeção Eletrônica" },
  { label: "Câmbio" },
  { label: "Freio em Geral" },
  { label: "Diferencial" },
  { label: "Motor" },
  { label: "Suspensão" },
  { label: "Troca de Óleo" },
  { label: "Parte Elétrica" },
  { label: "Embuchamento Dianteiro" },
]

let contacts_list = [
  {
    icon: "../assets/SocialIcons/iconfinder_social-01_3146791.svg",
    link: "https://wa.me/5582998098710",
    label: "(82) 99809-8710"},
  {
    icon: "../assets/SocialIcons/phone.svg",
    link: "",
    label: "(82) 98718-7437"
  },
  {
    icon: "../assets/SocialIcons/gmail.svg",
    link: "mailto:contato.mscardiesel@gmail.com",
    label: "contato.mscardiesel@gmail.com"
  },
]

let addresses_list = [
  {
    svg_class: "bi bi-geo-alt",
    svg_width: "1.5em",
    svg_viewBox: "0 0 16 16",
    svg_fill: "white",
    svg_xmlns: "http://www.w3.org/2000/svg",
    path_fill_rule: "evenodd",
    path_d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    label: "Endereço: ",
    paragraph: 'Rua Rad. Waldomiro M Barbosa, 2 - Cidade Universitária, Maceió - AL, 57072-240, próximo à "Churrascaria Porteira Gaúcho"',  },
  {
    svg_class: "bi bi-clock-fill",
    svg_width: "1.5em",
    svg_viewBox: "0 0 16 16",
    svg_fill: "white",
    svg_xmlns: "http://www.w3.org/2000/svg",
    path_fill_rule: "evenodd",
    path_d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z",
    label: "Horário de funcionamento: ",
    paragraph: "Abre de Segunda a Sexta, das 07:00 às 17:00",
  }
]

let navbar_nav_ul = document.querySelector('.navbar-nav')
let logo_cars_list_ul = document.querySelector('.logo-cars')
let services_list_ul = document.querySelector('.list-group-services')
let contacts_list_ul = document.querySelector('.contact')
let addresses_list_ul = document.querySelector('.address')

const to_create_nav_itens = () => {
  navbar_nav_ul.innerHTML = nav_list.map(item =>
    `<li class="nav-item">
      <a class="nav-link" href="${item.link}">
        ${item.label}
      </a>
    </li>`).join("")
};to_create_nav_itens()

const to_create_logo_cars_list = () => {
  logo_cars_list_ul.innerHTML = logo_cars_list.map(logo =>
    `<li><img src="${logo.link}" class="logo-car"></li>`
  ).join("")
};to_create_logo_cars_list()

const to_create_services_list = () => {
  services_list_ul.innerHTML = services_list.map(service =>
    `<li class="list-group-item">${service.label}</li>`
  ).join("")
};to_create_services_list()

const to_create_contacts_list = () => {
  contacts_list_ul.innerHTML = contacts_list.map(contact =>
    `<li class="link-media">
      <img src="${contact.icon}" class="icon-media">
      <a href="${contact.link}">${contact.label}</a>
    </li>`
  ).join("")
};to_create_contacts_list()

const to_create_addresses_list = () => {
  addresses_list_ul.innerHTML = addresses_list.map(address =>
    `<li>
      <svg class="${address.class}", width="${address.svg_width}",
           fill="${address.svg_fill}" viewBox="${address.svg_viewBox}"
           xmlns="${address.svg_xmlns}">
        <path fill-rule="${address.path_fill_rule}", d="${address.path_d}"/>
      </svg>

      <strong>${address.label}</strong>

      <p>${address.paragraph}</p>
    </li>`).join("")
};to_create_addresses_list()
