let customerEmail = ["Alveena@gmail.com" , "Aliya@gmail.com" , "Aleeza@gmail.com"]
let customerPassword = ["1111" , "2222", "3333"]
let customerBalance = [5000 , 6000 , 7000]
let customerStatment = [
    [], 
    [], 
    []
];
  
while(true){
    let  userInput = prompt("what do you want to do in our bank\n" + 
        "1. login\n" + 
        "2. Sign Up\n" + 
        "3. Exit "
     )
    

     let emailIndex;
     let passwordIndex;
      if(userInput === "3"){
        break;
      }else if (userInput === "1"){
        let email = prompt("enter your email")
        let password = prompt("enter your password")
         emailIndex = customerEmail.indexOf(email)
         passwordIndex = customerPassword.indexOf(password)
        if( emailIndex !== -1 && emailIndex === passwordIndex){
            alert("you have logged successfully")
            while(true){
        let BankMenu = prompt("1. Check Balance\n" + "2. Deposit\n" + "3. WithDraw\n" + "4. transfer\n" + "5. Logout\n" + "6. View Statment")
        if (BankMenu === "5"){
            break;
        }else if (BankMenu === "1"){
            alert("your balance is " + customerBalance[emailIndex])
        }else if (BankMenu === "2"){
            let deposit = +prompt("enter the amount you want to deposit");
            if(deposit > 0){
                customerBalance[emailIndex] += deposit
                alert("your new Balance is " + customerBalance[emailIndex])
            }else {
                alert("invalid depost amount")
            }
        } else if (BankMenu === "3"){
            let withDraw = +prompt("enter the amount you want to withDraw");
            if(withDraw <= customerBalance[emailIndex] && withDraw > 0){
                customerBalance[emailIndex] -= withDraw
                alert("your new balance is" + customerBalance[emailIndex])
            }else {
                alert("invalid withDraw")
            }
        }else if (BankMenu === "4"){
            let receiveEmail = prompt("enter the email you want to transfer to ")
          let   receiveIndex = customerEmail.indexOf(receiveEmail)
            if(receiveIndex === -1){
               alert("receiver not found please try again")
               continue;
            }else if (receiveIndex === emailIndex){
                alert("you can't trasnfer money to yourself")
                continue;
            }
            let transferAmount = +prompt("enter the amount you want to tranfer")
            if(transferAmount > 0 && transferAmount <= customerBalance[emailIndex] ){
             customerBalance[emailIndex] -= transferAmount;
             customerBalance[receiveIndex] += transferAmount
             alert("Transferred : " + transferAmount+ "\nTo: " + receiveEmail + "\nYour new balance is: " + customerBalance[emailIndex] + "\nReceiver's balance: " + customerBalance[receiveIndex])
            }else {
                alert("Invalid balance")
            }
        }else if (BankMenu === "6"){

        }
        }
      } else {
        alert("invalid email or password")
      }
      } else if (userInput === "2"){
        while(true){
        let newEmail = prompt("enter your email")
        if(customerEmail.indexOf(newEmail) !== -1 ){
            alert("email already exist")
             continue;
        }else {
            let newPassword = prompt("enter your password")
            let newBalance = +prompt("enter your balance")
            if(newBalance < 0){
                alert("Invalid balance")
                continue;
            }else {
                customerEmail.push(newEmail)
                customerPassword.push(newPassword)
                customerBalance.push(newBalance)
                customerStatment.push(newStatement)
                 alert("Signup successful")
                 break;
            }
        }
        }
      }
}

