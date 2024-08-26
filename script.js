const nav = document.querySelector('#header');
fetch('/components/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
})

const footer = document.querySelector('#footer');
fetch('/components/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML = data
})

const campaign = document.querySelector('#campaign');
fetch('/components/campaign.html')
.then(res=>res.text())
.then(data=>{
    campaign.innerHTML = data
})

const navItems = document.querySelectorAll('.nav-link');

console.log(navItems);

navItems.forEach(navItem => {
    navItem.addEventListener('click', e => {
        document.querySelector('.nav-link.active').classList.remove('active');
        e.target.classList.add('active');
    });
});