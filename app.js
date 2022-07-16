const data = [
    {
        song: 'Arcade',
        singer: 'Ducan Laurence ft. fletcher',
        avatar: 'https://i.discogs.com/5_V3G2n8zpk8YK8ZGuvbvMLZxLkfSVpKWmTRyigkpHs/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODYw/ODY2LTE1NjQ1MDkw/NjgtNjA5Ni5qcGVn.jpeg',
        mp3: './musics/arcade.m4a'
    },
    {
        song: 'Demons',
        singer: 'NIVIRO',
        avatar: 'https://i.ytimg.com/an/PbEGWtcUnK0/5555931165014097097_mq.jpg?v=628625e9',
        mp3: './musics/demons-niviro.m4a'
    },
    {
        song: 'Let Me Love You',
        singer: 'DJ Snake ft. Justin Bieber',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/a/a5/DJSnakeLetMeLoveYou.jpg',
        mp3: './musics/letmeloveyou.m4a'
    },
    {
        song: 'Lost',
        singer: 'Damon Empero ft. Timmy Commerford',
        avatar: 'https://i1.sndcdn.com/artworks-000251596033-42a5b3-t500x500.jpg',
        mp3: './musics/lost.m4a'
    },
    {
        song: 'Summertime',
        singer: 'K-391',
        avatar: 'https://i.ytimg.com/vi/25N1pdzvp4c/hqdefault.jpg',
        mp3: './musics/summertime-k391.m4a'
    },
    {
        song: 'Lonely Diva',
        singer: 'DJVI',
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/26/73/14/26731465-9e45-60fa-3ab3-64c8e7ecc584/053000165934_cover.jpg/600x600bf-60.jpg',
        mp3: './musics/lonelydiva.m4a'
    },
    {
        song: 'Outerspace',
        singer: 'BEAUZ ft. Dallas',
        avatar: 'https://imagestore.ffm.to/link/e1f6ad5bb2ddacd80dfb852a6d728ddf.jpg',
        mp3: './musics/outerspace.m4a'
    },
    {
        song: 'In Your Eyes',
        singer: 'DG812',
        avatar: 'https://i1.sndcdn.com/artworks-000593593128-i92tiy-t500x500.jpg',
        mp3: './musics/inyoureyes.m4a'
    },
    {
        song: 'Dusk Till Dawn',
        singer: 'ZAYN ft. Sia',
        avatar: 'https://i1.sndcdn.com/artworks-pqLsyoyCkiVRrjNw-XmJPzQ-t500x500.jpg',
        mp3: './musics/dusktilldawn.m4a'
    },
    {
        song: 'Hold On',
        singer: 'Chord Overstreet',
        avatar: 'https://i1.sndcdn.com/artworks-000606129727-tceg58-t500x500.jpg',
        mp3: './musics/holdon.m4a'
    },
    {
        song: 'Stay',
        singer: 'The Kid Laroi, Justin Bieber',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/1/1e/Poster_b%C3%A0i_h%C3%A1t_%22Stay%22.png',
        mp3: './musics/stay.m4a'
    },
    {
        song: 'Mama',
        singer: 'Jonas Blue ft. William Singe',
        avatar: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/20/f/c/e/7/1511165683644_640.jpg',
        mp3: './musics/mama.m4a'
    },
    {
        song: 'Vacation',
        singer: 'Damon Empero ft. Veronica',
        avatar: 'https://i1.sndcdn.com/artworks-000189831854-sw6912-t500x500.jpg',
        mp3: './musics/vacation.m4a'
    },
    {
        song: 'Lone Ranger',
        singer: 'Rachel Platten',
        avatar: './images/1.jpg',
        mp3: './musics/loneranger.m4a'
    },
    {
        song: 'The Nights ( Cover by AngieN )',
        singer: 'Avicii',
        avatar: './images/2.jpg',
        mp3: './musics/thenight.m4a'
    },
    {
        song: 'End Of The Night',
        singer: 'Danny Avila',
        avatar: './images/3.jpg',
        mp3: './musics/endofthenight.m4a'
    },
    {
        song: 'Unbreakable',
        singer: 'Faydee ft. Miracle',
        avatar: './images/4.jpg',
        mp3: './musics/unbreakable.m4a'
    },
]

//1. thêm số 0 vào đằng trước các số 0 đến 9
function addZero(number){
    if(number >= 0 && number <= 9) return `0${number}`
    else return number
}

//2. chuyển đổi giây thành phút và format lại 
function convertSecondsToMinutes(timeType, element = ''){
    let seconds = 0
    if(timeType === 'currentTime'){
        seconds = element.currentTime.toFixed(0)
    }else if(timeType === 'duration'){
        seconds = element.duration.toFixed(0)
    }else{
        seconds = timeType.toFixed(0)
    }
    const minutes = Math.trunc(seconds / 60)
    return  `${addZero(minutes)}:${addZero(seconds - minutes * 60)}`
}

//3. tối ưu việc random để 1 bài hát không lặp lại cho đến đã phát hết danh sách bài hát
let random = []
function randomOptimization(arr){
    const max = arr.length
    let numberRandom = Math.floor(Math.random() * max)
    
    if(random.length >= arr.length){
        random = []
    } 
        

    while(random.find(num => numberRandom == num) !== undefined){
        numberRandom = Math.floor(Math.random() * max)
    }

    random.push(numberRandom)
    return numberRandom
}

//4 lấy ra phần trăm chiều ngang của chuột và timeline
function percentTimeLine(e){
    let percent = ''
    const left = timeLine.offsetLeft
    const width = timeLine.offsetWidth
    if(clickDown && e.clientX >= left && e.clientX <= left + width){
        percent = (e.clientX - left) / width
    }else if(clickDown && e.clientX < left){
        percent = 0
    }else if(clickDown && e.clientX > left + width){
        percent = 1
    }
    
    return percent
}

//
function intervalCurrent(){
    playingTimeLeft.innerHTML = convertSecondsToMinutes('currentTime', document.querySelector('audio.active'))
    circle.style.left = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
    percentLine.style.width = document.querySelector('audio.active').currentTime / document.querySelector('audio.active').duration * 100 + '%'
}

const playList = document.getElementById('playlist')

//5. render danh sách phát
data.forEach((item, index) => {
    playList.insertAdjacentHTML('beforeend', `
    
    <div class="item" data-index="${index}">
    <audio class="audio${++index}" src="${item.mp3}"></audio>
    <span class="item__number">${addZero(index)}</span>
    <img src="${item.avatar}">
    <span class="oi item__icon" data-glyph="caret-right"></span>
    <div class="music">
    <div class="item__song">${item.song}</div>
    <div class="item__singer">${item.singer}</div>
    </div>
    <span class="item__time">00:00</span>
    </div>
    `)
});

//6. hiển thị thời gian bài hát của phần danh sách sau khi render xong
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('loadedmetadata', function(){
        audio.parentElement.querySelector('.item__time').innerHTML = convertSecondsToMinutes('duration', audio)
    })
})

 
const listAudio = document.querySelectorAll('audio')
const listItem = document.querySelectorAll('.item')
const playingImg = document.querySelector('#playing .thumbnail img')
const thumbnail = document.querySelector('#playing .thumbnail')
const playingSong = document.querySelector('#playing .song')
const playingSinger = document.querySelector('#playing .singer')
const playingTimeRight = document.querySelector('#playing .time .right')
const playingTimeLeft = document.querySelector('#playing .time .left')
const play = document.querySelector('.controls .play')
const pause = document.querySelector('.controls .pause')
const forWard = document.querySelector('.controls .forward')
const backward = document.querySelector('.controls .backward')
const timeLine = document.querySelector('#playing .time-line')
const circle = timeLine.querySelector('.circle')
const percentLine = timeLine.querySelector('.percent')
const loop = document.querySelector('.controls .loop')
const randomControl = document.querySelector('.controls .random')


listItem[0].classList.add('active')
listAudio[0].classList.add('active')

let currentTime = ''

//7. khi nhấn bài bài hát
listItem.forEach(item => {
    item.addEventListener('click', function(){

        thumbnail.classList.remove('pause')
        thumbnail.classList.remove('play')
        
        //6.1 hiệu ứng active 
        document.querySelector('.item.active').classList.remove('active')
        item.classList.add('active')

        //6.2 dừng audio đang phát vào đặt thời gian về 0
        document.querySelector('audio.active').pause()
        document.querySelector('audio.active').currentTime = 0

        //6.3 xóa, thêm class active cho audio
        document.querySelector('audio.active').classList.remove('active')
        item.querySelector('audio').classList.add('active')
        
        //6.4 hiệu ứng thay đổi ảnh, bài hát, ca sĩ, thời gian
        playingImg.setAttribute('src', item.querySelector('img').getAttribute('src'))
        playingSong.innerHTML = item.querySelector('.item__song').innerHTML
        playingSinger.innerHTML = item.querySelector('.item__singer').innerHTML
        playingTimeRight.innerHTML = item.querySelector('.item__time').innerHTML

        //6.5 hiệu ứng cuộn, clearInterval, xóa class active của loop
        item.scrollIntoView({behavior: "smooth", block: "center"})
        clearInterval(currentTime)
        loop.classList.remove('active')

        //6.6 nếu random có active và index không có trong mảng random thì thêm index đó vào mảng random 
        if(randomControl.classList.contains('active')){
            const itemId = document.querySelector('.item.active').dataset.index
            if(random.find(num => itemId == num) === undefined) random.push(itemId)
        }

        play.click()
    })
})

//8. khi ấn play
play.addEventListener('click', function(){

    thumbnail.classList.remove('pause')
    thumbnail.classList.add('play')

    //8.1 hiệu ứng đổi sang pause
    play.style.display = 'none'
    pause.style.display = 'block'
    
    //8.2 phát audio đang active
    document.querySelector('audio.active').play()
    
    //8.3 hiệu ứng thời giạn hiện tại của bài hát
    currentTime =  setInterval(()=>{
        intervalCurrent()
    }, 100)

    //8.4 khi audio active kết thúc
    document.querySelector('audio.active').onended = function(){
        clearInterval(currentTime)
        
        // nếu ấn chọn random
        if(randomControl.classList.contains('active')){
            listItem[randomOptimization(listItem)].click()
        }
        // nếu ấn chọn loop
        else if(loop.classList.contains('active')){
            play.click()
        // mặc định phát bài tiếp theo
        }else{
            forWard.click()
        }
    }
    

})

//9. khi ấn pause
pause.addEventListener('click', function(){
    pause.style.display = 'none'
    play.style.display = 'block'

    thumbnail.classList.remove('play')
    thumbnail.classList.add('pause')

    clearInterval(currentTime)
    document.querySelector('audio.active').pause()
})

//10. khi ấn forWard
forWard.addEventListener('click', function(){
    const nextItem = document.querySelector('.item.active').nextElementSibling
    if(nextItem){
        nextItem.click()
    }else{
        pause.click()
    }
})

//11. khi ấn backWard
backward.addEventListener('click', function(){
    const prevItem = document.querySelector('.item.active').previousElementSibling
    if(prevItem){
        prevItem.click()
    }
})

let clickDown = false

//12. hiệu ứng kéo thả time line
window.addEventListener('mousedown', function(e){
    if(e.target.matches('.circle') || e.target.matches('.time-line') || e.target.matches('.percent')){
        clickDown = true
        clearInterval(currentTime)
    }
})

window.addEventListener('mousemove', function(e){
    this.document.body.style.userSelect = 'none'

    let percent = percentTimeLine(e)

    if(clickDown){
        clearInterval(currentTime)
        playingTimeLeft.innerHTML =  convertSecondsToMinutes(percent * document.querySelector('audio.active').duration)
        circle.style.left = percent * 100 + '%'
        percentLine.style.width = percent * 100 + '%'
    }
    
})

window.addEventListener('mouseup', function(e){
    if(clickDown){
        document.querySelector('audio.active').currentTime = percentTimeLine(e) * document.querySelector('audio.active').duration
        currentTime =  setInterval(()=>{
            intervalCurrent()
        }, 100)
        clickDown = false
    }
})

timeLine.addEventListener('click', function(){
    intervalCurrent()
})


//13. khi ấn vào loop
loop.addEventListener('click', function(){
    randomControl.classList.remove('active')
    this.classList.toggle('active')
})

//14. khi ấn vào random
randomControl.addEventListener('click', function(){
    loop.classList.remove('active')
    this.classList.toggle('active')
    random = []
    if(this.classList.contains('active')){
        random.push(document.querySelector('.item.active').dataset.index)
    }
})

thumbnail.addEventListener('animationend', function(e){
    if(e.animationName === 'rotatePause'){
        thumbnail.classList.remove('pause')
        this.style.borderRadius = '20px'
    }
})