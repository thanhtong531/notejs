// const now = new Date(); //In ra ngay gio hien tai
// console.log(now);

// console.log(now.getTime()); //trả ve timestamp
// console.log(new Date(0));
// console.log(new Date("Wed Feb 16 2022 04:46:10 GMT+0700 (GMT+07:00)"));  //tham so truyen vao la date string
// const now = new Date();
const birthday = new Date(2000, 9, 5, 20, 10, 30); //Tháng 10 => 9

// In ra năm sinh
console.log(birthday.getFullYear()); //2000

// In ra tháng
console.log(birthday.getMonth()); //9

// In ra ngày
console.log(birthday.getDate()); //5

// In ra thứ trong tuần
console.log(birthday.getDay()); // 4 <=> thứ 5

// In ra giờ
console.log(birthday.getHours());

// Date string
// console.log(now.toDateString());

// In ra ngay / thang / nam hien tai neu so nao co mot so thi them so 0 vao truoc no
const now = new Date("Thu Feb 17 2022 09:50:35 GMT+0700 (GMT+07:00)");
// const myTime = now.toLocaleDateString();
const myYear = now.getFullYear();
const myMonth = now.getMonth() + 1;
const myDate = now.getDate();
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
