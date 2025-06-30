const buttons = [
    {label: "Mr. Sheesh - Downloads", href:"mrsheesh.html"},
    {label: "Skynet - Fiber Optics - Downloads", href:"skynet.html"},
    {label: "GV Computer Shop - Downloads", href:"gvcomputer.html"},
    {label: "Funny Ice Cream - Downloads", href:"funnyicecream.html"},
    {label: "Tip Top Dry Cleaners - Downloads", href:"tiptop.html"},
    {label: "Al-Buraq International - Downloads", href:"al-buraq.html"},
    {label: "Nobel Hospital - Downloads", href:"nobel.html"},
    {label: "JIS - Downloads", href:"jis.html"},
    {label: "Elegent Industries - Downloads", href:"elegent.html"},
    {label: "Al-Falah Traders - Downloads", href:"al-falah.html"},
    {label: "SMC - Downloads", href:"smc.html"},
    {label: "Dress Care - Downloads", href:"dress.html"},
    {label: "Nehal Book Center - Downloads", href:"nehal.html"},
    {label: "Modern Oils - Downloads", href:"modern.html"},
    {label: "Geo Hospital - Downloads", href:"geo.html"},
    {label: "GIWH - Downloads", href:"giwh.html"},
    {label: "RGS - Downloads", href:"rgs.html"},
    {label: "Kalma Heights - Downloads", href:"kalma.html"},
    {label: "Kamran Industries - Downloads", href:"kamran.html"},
    {label: "Royal Mart - Downloads", href:"royal.html"},
    {label: "Bata Brand Store - Downloads", href:"bata.html"},
    {label: "Service Shoes - Downloads", href:"service.html"},
    {label: "Service Fashion Store - Downloads", href:"service-fashion.html"},
    {label: "Amir Traders - Downloads", href:"amir.html"},
    {label: "Chaudhary Traders - Downloads", href:"chaudhary.html"},
    {label: "Service Warehouse - Downloads", href:"service-warehouse.html"},
    {label: "Hassan Medical Store - Downloads", href:"hassan.html"},
    {label: "KCSS - Downloads", href:"kcss.html"},
    {label: "Jalandhar Sweets - Downloads", href:"jalandhar.html"},
    {label: "Hassan Traders - Downloads", href:"hassan-traders.html"},
    {label: "Shaheen Laboratories - Downloads", href:"shaheen.html"},
    {label: "ASPSC - Downloads", href:"aspsc.html"},
    {label: "Nazir Chemical Industries - Downloads", href:"nazir.html"},
    {label: "Service Brand Store - Downloads", href:"service-brand.html"},
    {label: "Mohsin Autos - Downloads", href:"mohsin.html"},
    {label: "Usmania Feeds - Downloads", href:"usmania.html"},
    {label: "Daffodils Fast Food - Downloads", href:"daffodils.html"},
    {label: "Bahrain Oil Trading - Downloads", href:"bahrain.html"},
    {label: "Arshad Poultry Forms - Downloads", href:"arshad.html"},
    {label: "Malik Clinic - Downloads", href:"malik.html"},
    {label: "Iqra Jannat-Ul-Atfal - Downloads", href:"iqra.html"},
];

const grid = document.getElementById('buttonGrid');

grid.innerHTML = buttons
    .map(b => `<a class="btn" href="${b.href}"><span>${b.label}</span></a>`)
    .join('');

const oberver = new IntersectionObserver(
    entries => {
        entries.forEach((entry, idx) => {
            if(entry.isIntersecting){
                entry.target.style.animation = `fadeUp .6s ${idx * 60}ms both`;
                oberver.unobserve(entry.target);
            }
        });
    },
    {threshold: 0.2}
);


document.querySelectorAll('.btn').forEach(btn => oberver.observe(btn));