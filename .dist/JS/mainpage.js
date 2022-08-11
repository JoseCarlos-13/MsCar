
let nav_list=[{link:"../HTML/mainpage.html",label:"Inicio"},{link:"../HTML/services.html",label:"Serviços"},{link:"../HTML/contact.html",link:"Contato"}]
const to_create_nav_elements=()=>{document.querySelector('.navbar-nav').innerHTML=nav_list.map(item=>`<li class="nav-link" href="${item.link}"><a>${item.label}</a></li>`).join("")};to_create_nav_elements()