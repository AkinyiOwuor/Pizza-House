
function selectPizzaSize(){
    var selectedSize=document.getElementById("sizes").value;
    return parseInt(selectedSize);
}
function selectPizzaTopping(){
    var selectedTopping=document.getElementById("toppings").value;
    return parseInt(selectedTopping);
}
function selectPizzaCrust(){
    var selectedCrust=document.getElementById("crusts").value;
    return parseInt(selectedCrust);
}
function selectPizzaQuantity(){
    var selectedQuantity=document.getElementById("quantity").value
    return parseInt(selectedQuantity);
}
function totalPizzaAmount(){
    var totalPrize=(selectPizzaSize() + selectPizzaTopping() + selectPizzaCrust()) * selectPizzaQuantity();
    alert("You ordered" + " " + selectPizzaQuantity('') + " " + "pizza." + '' + 'Your total charges are Ksh'+ " " + (totalPrize) + '');
    prompt("Enter your location for delivery purposes")
    alert('Your order will be delivered to your place at a cost of Ksh 200')
}
 $(document).ready(function(){
     $("#submit").click(function(event){
         event.preventDefault();
         var name=$("#name").val();
         var email=$("#email").val();
         var message=$("#message");
         if(name ==''||email ==''||message ==''){
            alert("Please let us here from you!");
        }
         else{
             alert(" Thank you " + name + " we have received your message.")
        }
    })
 })





