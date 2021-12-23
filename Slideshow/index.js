const images =[
    {
        id : 1, 
        img : "https://media.istockphoto.com/photos/african-american-student-attending-webinar-from-home-picture-id1300821205?b=1&k=20&m=1300821205&s=170667a&w=0&h=4w8jY3puiv8Qe3lM9UM9FC6ozRTTU8asziK4HJgfVog=",
        alt : "code1"
    },
    {
        id : 2, 
        img : "https://media.istockphoto.com/photos/serious-african-woman-working-at-home-using-a-phone-and-working-on-picture-id1336077109?k=20&m=1336077109&s=612x612&w=0&h=-SLazARTwww-GGOmaFrK_kBJn4Kqz9TnQ3_cpkuDi9A=",
        alt : "code2"
    },
    {
        id : 3, 
        img : "https://media.istockphoto.com/photos/casually-dressed-at-home-office-picture-id1283161260?k=20&m=1283161260&s=612x612&w=0&h=a6XrQk7mMG6s5kouG_89FKHk_9B_If5Dt_3N1UayLEA=",
        alt : "code3"
    },
    {
        id : 4, 
        img : "https://media.istockphoto.com/photos/software-developer-at-work-picture-id1144420465?k=20&m=1144420465&s=612x612&w=0&h=EYRzKZ-PupaQKbvk9Bvx1oZPxi2rehcqx8glOQzfQaw=",
        alt : "code4"
    },
    {
        id : 5, 
        img : "https://media.istockphoto.com/photos/two-girlfriends-roommates-students-relaxing-and-having-fun-in-a-picture-id1080793280?k=20&m=1080793280&s=612x612&w=0&h=LjQmpK_XVCu5VWWpkF3P4gEMbM-Px6wtY_Ir2MoI7pY=",
        alt : "code5"
    },
    {
        id : 6, 
        img : "https://media.istockphoto.com/photos/pensive-woman-calling-on-phone-picture-id1319717854?k=20&m=1319717854&s=612x612&w=0&h=HS4E9kazY28gp5Nt2bG2lUM4Oa_2c0lddSpDUnixeZY=",
        alt : "code6"
    },
    {
        id : 7, 
        img :"https://media.istockphoto.com/photos/accessing-the-internet-from-her-kitchen-picture-id535429643?k=20&m=535429643&s=612x612&w=0&h=kdcwa4AZ6dqqKdvkLhvKFrwl7rjhH2ImS7qovh4keM0=",
        alt : "code7"
    }
];
const img = document.getElementById('main-image');
const prev_btn = document.getElementById("prevbtn");
const next_btn = document.getElementById("nextbtn");
let currentitem = 0;
window.addEventListener('DOMContentLoaded' , function (){
  showImages();
});
function showImages (){
    const item = images[currentitem];
    img.src = item.img;

}

prev_btn.addEventListener('click', function (){
    currentitem--;
    if(currentitem < 0){
        currentitem = images.length - 1 ;
        next_btn.style.display ="block"
    }
    showImages(currentitem)
   
    });
 next_btn.addEventListener('click', function (){
        currentitem++;
        if(currentitem > images.length- 1){
            currentitem = 0;
            next_btn.style.display ="none"
        }
        showImages(currentitem)
  });
