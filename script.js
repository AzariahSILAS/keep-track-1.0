//---------hero section------------------------------
const savings = document.getElementById('savings');
const savingsInput = document.getElementById('savingsInput')





//----------first div------------------------------
const totalP = document.getElementById('totalP');
const titalInput = document.getElementById('titalInput');
const amountPaid = document.getElementById('amountPaid');
const apInput = document.getElementById('apInput');




//----------second div------------------------------




const formField = document.querySelector('.formField');
const totalCost = document.getElementById('totalCost');
const leftToSpend = document.getElementById('leftToSpend');
const editBtn = document.getElementById('editBtn');
// const percentBar = getElementById('percent-bar');

// ------------------variables end --------------------------

//--------------------functions---------------------------


function editMode() {
    //---------hero section------------------------------
    savings.style.display = 'none';
    savingsInput.style.display = 'inline-block';
    //----------first div------------------------------
    totalP.style.display = 'none';
    amountPaid.style.display = 'none';
    titalInput.style.display = 'inline-block';
    apInput.style.display = 'inline-block';
    //----------second div------------------------------
    totalCost.style.display = 'none';
    formField.style.display = 'inline-block';
    //-------btn----------------
    editBtn.textContent = 'Save';  
}



function viewMode() {
    //---------hero section------------------------------
    savingsInput.style.display = 'none';
    savings.style.display = 'inline-block';
    savings.textContent = savingsInput.value;
    //----------first div------------------------------
    totalP.textContent = titalInput.value;
    amountPaid.textContent = apInput.value;
    titalInput.style.display = 'none';
    apInput.style.display = 'none';
    totalP.style.display = 'inline-block';
    amountPaid.style.display = 'inline-block';
    //----------second div------------------------------
    totalCost.textContent = formField.value;
    totalCost.style.display = 'inline-block';
    formField.style.display = 'none';
    if(totalCost.textContent === ''){
        totalCost.textContent = 'default'
    }
    //-------btn----------------
    editBtn.textContent = 'Edit';
}
editMode()

// function percentbar(){
//     percentBar.style.width = amountPaid.value / totalCost.value;
// }
// percentbar()


editBtn.addEventListener('click', function() {
    if (editBtn.textContent === 'Edit') {
          editMode();
    } else {
          viewMode();
    }
    if(apInput.value !== formField.value){
        leftToSpend.textContent = savingsInput.value - apInput.value
    } else{
        leftToSpend.textContent = '0.00'
    } 
    
});



