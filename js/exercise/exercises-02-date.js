// Viet chuong trinh nhap vao nam sinh va in ra so tuoi
function myAge(yourYear){
    if(typeof yourYear !== 'number' || yourYear < 0) return 0;
    const now = new Date();
    const year = now.getFullYear();
    return year - yourYear;
}

console.log(myAge(2000));


// Viet countdown
// function countDown(number=10){
//     let count = 0;
//     const myCountDown = setInterval(()=>{
//         count +=1;
//         console.log(count);
//         if(count === number){
//             clearInterval(myCountDown);
//             console.log("End");
//         }
//     },1000)

// } 

// countDown(10)


// 3: Viết hàm timeSince hiện ra bạn đó đã offline trong bao lâu

function timeSince(date){
    const now = new Date();
    const yourDate = new Date(date)
    // Ta su dung timestring de tinh ra so milisecond
    const second = Math.floor((now.getTime() - yourDate.getTime()) / 1000); //chia 1000 vi doi ra giay

    // Year
    let timer = second / 31536000;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} năm trước`);
    }

    // Month
    timer = second / 2592000;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} tháng trước`);
    }

    // Day
    timer = second / 86400;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} ngày trước`);
    }

    // Hour
    timer = second / 3600;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} giờ trước`);
    }

    // Minutes
    timer = second / 60;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} phút trước`);
    }
    
    // Second
    timer = second;
    if(timer > 1){
        console.log(`hoạt động vào ${Math.trunc(timer)} giấy trước`);
    }
    
    
}

timeSince("Wed Feb 17 2022 11:51:00 GMT+0700 (GMT+07:00)");