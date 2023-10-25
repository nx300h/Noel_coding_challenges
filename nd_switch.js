// // switch

let day = "Sunday"

switch (day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("5am");
        break;
    case 'Friday':
        console.log("8am");
        break;
    default:
        console.log("No Alarm Set");
}
console.log("bye");