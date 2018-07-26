/* karşılaştırma operatorleri
< küçüktür
> büyüktür 
<= küçük ve eşittir
>= büyük ve eşittir
== eşit ise
!= eşit değil ise
*/
console.log(3==3);

// mantıksal operatörler
// ve = &&
// veya = ||

console.log(1==1 && 5==5 && 1<10);

console.log(1==5 && 5==5 && 1<10);

console.log(" ");

var sayi1 = 1;
var sayi2 = 5;
var sayi3 = 10;

var durum=(sayi1==5)&&(sayi2==2)&&(sayi3==10);// true olması için hepsinin doğru olması lazım

console.log(durum+" işleminiz => (sayi1==5) && (sayi2==2) && (sayi3==10)");

var durum2 =(sayi1==1) || (sayi2==2) || (sayi3==7); // biri bile doğru olursa true verir

console.log(durum2+(" işleminiz => (sayi1==1) || (sayi2==2) || (sayi3==7)"));

console.log(" ");


var seçim = 10;

if(seçim==10)
{
   console.log(" Seçiminiz gerçekleşti");
}
if(seçim!=10)
{
    console.log(" Seçiminiz gerçekleşemedi");
}



