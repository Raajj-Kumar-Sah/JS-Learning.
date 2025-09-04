// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//NOTE: break is important otherwise it will execute all the cases after the matched case also.
//NOTE: IF BREAK IS NOT THERE IT WILL EXECUTE ALL THE CASES AFTER THE MATCHED CASE ALSO  except default.
//NOTE: DEFAULT IS OPTIONAL IT WILL EXECUTE IF NO CASES MATCH.