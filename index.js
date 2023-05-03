const input = document.getElementById("input-field");
const addCartBtn = document.getElementById("add-button");
const displayBox = document.getElementById("shopping-list");
const clearCart= document.getElementById("clear-button");
const cartItems=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];

appendItemToShoppingListEl();

addCartBtn.addEventListener("click", ()=>{  
    const inputValue=input.value;
    cartItems.push(inputValue);
    appendItemToShoppingListEl();
    localStorage.setItem("items",JSON.stringify(cartItems));
    clearInputValue();
});


clearCart.addEventListener("click",()=>{

    // console.log("hell")
       cartItems.map(()=>{
             cartItems.splice(0,cartItems.length);
             localStorage.setItem("items",JSON.stringify(cartItems));
             appendItemToShoppingListEl();

       })
});

function clearInputValue() {
    input.value = "";
}

function appendItemToShoppingListEl(){
    displayBox.innerHTML = "";

     cartItems.map((x,index)=>{
        let li = document.createElement("li");
        li.textContent = x;

        li.addEventListener("click",()=>{
            li.style.textDecoration = 'line-through';

        })

        displayBox.append(li);

     });

   

    // li.addEventListener("click", function () {
    //     cartItems.map((x,index)=>{
    //       cartItems.splice(index,1);
    // })
    // });

    

}