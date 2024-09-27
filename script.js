// Image slideshow for the hero section
const images = [
    'https://pacificskydivinghonolulu.com/img/airplane-skydive/thumb_regular_new.jpg',
    'https://cdnp.flypgs.com/files/Ekstrem_Sporlar/dagcilik-nedir.jpg',
    'https://www.raindropsresorts.com/blog/wp-content/uploads/2019/09/river-rafting-in-wayanad-1024x577.jpg',
    'https://www.excursionmarmaris.com/wp-content/uploads/2021/05/par-1.jpg',
    'https://res.cloudinary.com/manawa/image/private/f_auto,c_limit,w_3840,q_auto/y5bpxssnrinkm3ho7k4j',
    'https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Surfing-in-goa_result.webp',
    'https://res.klook.com/image/upload/c_fill,w_750,h_750/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kwtytuw7pjigqsuewrec.jpg',
    'https://norskisports.com/wp-content/uploads/2022/12/Jumping-snowboarder-from-hill-1024x682.jpg',
    'https://www.exploresquamish.com/site/assets/files/22494/slab_riding_squamish.2000x1163.webp',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeBackgroundImage, 5000);
changeBackgroundImage(); // Initialize with the first image
