var images = [
    'https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1576225410873-a28b2a79fd93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
]

var movies = [
    {
        motionPicture : 'Bollywood',
        name: 'Housefull 4',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3668/593668-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'Bony',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9298/1119298-h-9903519b7cde'
    },
    {
        motionPicture : 'Bollywood',
        name: 'DHISOOM',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/2229/1000152229/1000152229-h'
    },
    
    {
        motionPicture : 'Bollywood',
        name: 'Angrezi Medium',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6700/1026700-h-baab56827741'
    },
    {
        motionPicture : 'Bollywood',
        name: 'Hero',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4190/1000074190/1000074190-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'Ungalukkaga Oruvan',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6666/826666-h'
    },

    {
        motionPicture : 'Tollywood',
        name: 'Baahubali 2: The Conclusion',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/6247/1770016247/1770016247-h'
    },
    
    {
        motionPicture : 'Tollywood',
        name: 'O Kadhal Kanmani',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/2465/1000172465/1000172465-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'Prati Roju Pandage',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2437/632437-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'S/o Satyamurthy',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/4328/1000074328/1000074328-h'
    },
    {
        motionPicture : 'Bollywood',
        name: 'Tanhaji',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2886/892886-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'Sammy 2',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3505/133505-h'
    },
    {
        motionPicture : 'Tollywood',
        name: 'Bheemla Nayak',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1508/1161508-h-0a0b8c26fc76'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Black Panther',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5029/675029-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Thor: Ragnarok',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4576/674576-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Marvel\'s Avengers: Age Of Ultron',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4675/674675-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Deadpool',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3257/1770003257/1770003257-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Captain America: The First Avenger',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4581/674581-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Ant-Man',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4480/674480-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'The Wolverine',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/445/1770000445/1770000445-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Avatar',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7367/607367-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Prince Of Persia: The Sands Of Time',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4424/674424-h'
    },
    {
        motionPicture : 'Bollywood',
        name: 'MISSION MANGAL',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1527/571527-h'
    },
    {
        motionPicture : 'Hollywood',
        name: 'Pirates Of The Caribbean: On Stranger Tides',
        banner: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4350/644350-h'
    }
]

var slideshow = document.querySelector('#changingwindow');
function start(){
    let divImg = document.createElement('div');
    divImg.setAttribute('class', 'divImg');
    let img = document.createElement('img');
    
    img.src = movies[0].banner;
    divImg.append(img);
    slideshow.append(divImg);
    var i=1;
    setInterval(function(){
        if(i === movies.length){
            i=0;
        }
        
        img.src = movies[i].banner;
        i++
    },2000);
}
start();


var moviesDiv = document.querySelector('#movies');
function displayMovie(movies, filter){
    moviesDiv.innerHTML = null;
    movies.map((e,idx)=>{
        if(e.motionPicture === filter){
            var img = document.createElement('img');
            img.src = e.banner;
            moviesDiv.append(img);
        }
        else if('All Movies' === filter){
            var img = document.createElement('img');
            img.src = e.banner;
            moviesDiv.append(img);
        }
    });
}


displayMovie(movies, 'All Movies');
var sort_buttons = document.querySelector('#sort-buttons');
function sortList(movies){
    var motionPictureObj = {};
    for(var i=0; i<movies.length; i++){
        motionPictureObj[movies[i].motionPicture] = true;
    }
    var abc = ['abc','cde']
    var select = document.createElement('select');
    var option = document.createElement('option');
    option.textContent = 'All Movies';
    select.append(option);
    Object.keys(motionPictureObj).map((e, index)=> {
        var option = document.createElement('option');
        option.textContent = e;
        select.append(option);
    })
    sort_buttons.append(select);
    select.addEventListener('change', ()=> {
        displayMovie(movies, select.value);
    })
}

sortList(movies);