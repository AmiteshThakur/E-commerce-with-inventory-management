const ele=document.getElementById('form-selector');
const customer=document.getElementById('form-customer');
const seller=document.getElementById('form-seller');
const inventory=document.getElementById('form-inventory-management');




function handleFormSelection(){
    if(ele.value=='customer'){
        customer.style.display='block';
        seller.style.display='none';
        inventory.style.display='none';
    }else if(ele.value=='seller'){
        seller.style.display='block';
        customer.style.display='none';
        inventory.style.display='none';
    }
    else if(ele.value=='inventory'){
        seller.style.display='none';
        customer.style.display='none';
        inventory.style.display='block';
    }
    else{
        customer.style.display='none';
        seller.style.display='none';
        inventory.style.display='none';
    }
    
}
ele.addEventListener('change',handleFormSelection);
handleFormSelection();