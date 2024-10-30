//console.log('hello');
// alert("sehifeye xos gelmisiniz")
// prompt("adinizi daxil edin")
// confirm("yasinizi daxil edin")
// document.write("hgfbnjuy")
// document.writeln("nhgfr")

// let user =prompt(" reqem daxil edin")

// user > 0 ? console.log("musbetdir") : console.log("menfidir");

// let number = 0;
// while(number <100){
//     console.log(number);
//     if(number == 50){
//        break

//     }
//     number++
// }

// let username = 10
// switch(username){
//     case 10: console.log("cavab 10 dur")
//     break;
//     case 7: console.log("cavab 7dir")
// }

// let number =5
// if(number % 2===0){
//     console.log(" cutdur")
// }else{
//     console.log("  tekdir")
// }


// let number1 =prompt("reqem daxil edin")

// if(number1>0){
//     console.log("musbetdir")
// }else{
//     console.log("menfidir")
// }

// var number3 = 4;
// let number2 = 4;
// console.log(number3 == number2)

// var number5=10
// let number6="20"
// console.log(number5 === number6)

// let name1= "meli"
// let name2= "meli"

// if(name1 && name2){
//     console.log("adlar bir-birine beraberdir ")
// }else{
//     console.log(" adlar bir-birine beraber deyil")
// }

// let name3= 10<5
// let name4= 5>10

// if(name3 || name4){
//     console.log("adlar bir-birine beraberdir ")
// }else{
//     console.log(" adlar bir-birine beraber deyil !")
// }


// let username2= true
// console.log(!username);

// let name8="meli"
// let name9="meleyke"


// if(name8 != name9){
//     console.log("adlar bir-birine beraber deyilll !")
// }

// let number4= 9
// if(number4 >5 && number4 <10 ){

//     console.log(" true ");

// }else{
//     console.log("false");
// }



// let number8 = prompt (" reqem daxil edin")

// if(number8 > 0){

//     console.log("musbet");

// }else if(number8==0){

//     console.log("cavab 0");
// }else{

//     console.log("menfidir");
// }

// let produckt= null;
// let result= produckt ?? "x mehsul"

// console.log(result);

// let number=0
// while(number>5){
//     console.log("hello");
//     number++
// }

// do{
//     console.log("hello");
//     number++
// }while(number>5)

// for ( let star=0; star < 5; star++) {
//     console.log("star");
// }



// TASK 2

//sual 1
// let height=5;

// for( let star=1; star<= height; star++) {

//     console.log('*'. repeat(star));
// }


// //sual 4
// for(let number=0; number<=100; number++){
//    if(number % 5===0){
//     console.log(number)
//    }
// }
// //sual 3
// let name1=prompt(" adinizi  daxil edin")

// let surname=prompt("soyadinzi daxil edin")

// let year = prompt("ilinizi daxil edin ")

// console.log("ali " + name1 + 'aliyev'+surname + 'siz 1999-cu ilde anadan olmusuz'+ year );

// //sual 5
// let password= prompt("kodu daxil edin")
// let username=prompt("adinizi daxil edin")

// if( password && username){
//     console.log("salam")
// }

// let number2=prompt("reqem daxil edin")

// for (let number2 = 1; number2 <= 100; number2++) {
//     if (number2 % 10 !== 0) {
//         console.log(number2);
//     }
// }


// function topla (){
//     let reqem1=10;
//     let reqem2=20;
//     console.log(reqem1+reqem2);

// }
// topla()

// function topla (numberone,numbertwo) {
//     console.log(numberone + numbertwo);
// }

// let usernumber1 = +(prompt("zehmet olamasa redqem daxil edin"));
// let usernumber2 = +(prompt("zehmet olamasa reqem  daxil edin"));

// topla(usernumber1,usernumber2)

// function userNumber  () {

//     let name2=prompt("adiniz")
//     let lastname=prompt("soayadiniz")
//     let age=prompt("yasiniz")
//     console.log( name2,lastname,"xos gelmisiz" , "sizin"  , age ,"yasiniz var");
// }


// userNumber()

// function topla (a,b){
//     console.log(".....");
//     console.log(".....");
//     console.log(".....");
//     console.log(".....");
//     return(a+b)
// }
// let result=topla(3,4)
// console.log(result);

// const number=(a,b)=>{
//     return a+b
// }
// console.log(number(4,5));

// TAPSIRIQ 3

// 1.----> 
// İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)



// 2.----> 
// İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.

function əməliyyatlar(a, b) {
    let cəmi = a + b;
    let vurma = a * b;
    return [cəmi, vurma];
  }

  let ədəd1 = parseInt(prompt("Birinci ədədi daxil edin: "));
  let ədəd2 = parseInt(prompt("İkinci ədədi daxil edin: "));

  let [cəmi, vurma] = əməliyyatlar(ədəd1, ədəd2);
  console.log(`Ədədlərin cəmi: ${cəmi}`);
  console.log(`Ədədlərin vurulması: ${vurma}`);



//   3.----> 
// Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın 
// Məsələn 6776 -- YES
//         8989 -- NO
//         6807 -- NO
//         9009 -- YES

function yoxla(number) {
    let number1 = ("number1 / 1000");
    let number2 = (("number2 % 1000")/100);
    let number3 = (("number3 % 100")/10);
    let number4 = ("number4 / 1000");

}
if (number1 === number4 && number2 === number3){
    console.log("yes");

}else{
    console.log("no");

}

yoxla(7667)

// 4.----> 
// İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.

function salamla() {
    let username = prompt("Username daxil edin: ");

    alert("Salam, " + username + "!");
}

salamla();

// 5.---->
// stifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür

// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.

function checkNumber(input) {
    
    if (typeof input !== 'number') {
        alert("Zəhmət olmasa bir ədəd daxil edin.");
        return;
    }

    
    if (input === 0 || input === 100) {
        alert("100 və 0 ədələrini daxil edə bilməzsiz.");
        return;
    }
    let sizeMessage = input > 100 ? `${input} 100-dən böyükdür` : `${input} 100-dən kiçikdir`;

    let signMessage = input > 0 ? `${input} müsbətdir` : `${input} mənfidir`;

    let parityMessage = input % 2 === 0 ? `${input} cütdür` : `${input} təkdir`;

    alert(sizeMessage);
    alert(signMessage);
    alert(parityMessage);
}
checkNumber(120);
