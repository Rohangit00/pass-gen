const lengthel=document.getElementById("length");
const upperEl=document.getElementById("upper");
const lowerEl=document.getElementById("lower");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const headerEl=document.getElementById("header");
const generateEl=document.getElementById("generate");
const copyEl=document.getElementById("copy");
const upperletters='ABCDEFGHILKLMNOPQRSTUVWXYZ'
const Lowerletters='abscdefghijklmnopqrstuvwxy';
const numbers='0123456789';
const symbols='!@#$%^*&*()_+';
function getLower()
{
   const low=Lowerletters[Math.floor(Math.random()*Lowerletters.length)];
   return low;
}
function getUpper()
{
   const low=upperletters[Math.floor(Math.random()*upperletters.length)];
   return low;
}
function getNumber()
{
   const low=numbers[Math.floor(Math.random()*numbers.length)];
   return low;
}
function getSymbol()
{
   const low=symbols[Math.floor(Math.random()*symbols.length)];
   return low;
}
let password='';

generate.addEventListener("click",()=>
{
const len=lengthel.value;
const uppercheck=upperEl.checked;
const lowercheck=lowerEl.checked;
const numbercheck=numbersEl.checked;
const symbolcheck=symbolsEl.checked;

    console.log(len);
    for(let i=0;i<len;i++)
    {
        let a=[]
        let j=0;
          if(uppercheck==true)
          {
           a[j]=getUpper();
           j++;
          }
          if(lowercheck==true)
          {
            a[j]=getLower();
           j++;
          }
          if(numbercheck==true)
          {
            a[j]=getNumber();
           j++;
          }
          if(symbolcheck==true)
          {
            a[j]=getSymbol();
           j++;
          }
        //console.log(a);
        const m=a[Math.floor(Math.random()*a.length)];
        if(m==undefined)
         m='';
        password+=m
     
        //console.log(password);
       
    }
    document.getElementById("text").innerHTML=`${password}`;
    password='';
})
copyEl.addEventListener("click",()=>
{
    var text_to_copy = document.getElementById("text").innerHTML;

if (!navigator.clipboard){
    // use old commandExec() way
} else{
    navigator.clipboard.writeText(text_to_copy).then(
        function(){
            alert("copied to clipboard"); // success 
        })
      .catch(
         function() {
            alert("err"); // error
      });
}    
});