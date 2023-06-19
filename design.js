var runs=0;
var truns=0;
var cruns;
var out=0;
var ctruns=0;
function one(){
    if(out == 0)
    {
    runs=1;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=1;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }

}
function two(){
    if(out == 0)
    {
    runs=2;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=2;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }
}
function thr(){
    if(out == 0)
    {
    runs=3;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=3;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }
}
function fou(){
    if(out == 0)
    {
    runs=4;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=4;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }
}
function fiv(){
    if(out == 0)
    {
    runs=5;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=5;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }
}
function six(){
    if(out == 0)
    {
    runs=6;
    truns=truns+runs;
    cruns= Math.ceil(Math.random()*6);
    document.getElementById("cs").textContent = cruns;
    document.getElementById("ys").textContent = runs;
    check(runs,cruns);
    document.getElementById("yt").textContent = truns;
    }
    else if(out == 1)
    {
        runs=6;
        cruns= Math.ceil(Math.random()*6);
        ctruns=ctruns+cruns;
        document.getElementById("cs").textContent = cruns;
        document.getElementById("ys").textContent = runs;
        check(runs,cruns);
        document.getElementById("ct").textContent = ctruns;
        if(ctruns > truns)
        {
            check(runs,cruns);
        }
    }
}
function check(r,c)
{
    var o= 'OUT';
    if(r == c)
    { 
        truns=truns-runs;
       document.getElementById("sta").textContent = o;
       document.getElementById("sta").style.color = "red";
       document.getElementById("bb").textContent = "Bowling";
       out++;

       if(out == 2)
      {
          ctruns=ctruns-cruns;
          if(truns > ctruns)
             document.getElementById("wins").textContent = "YOU WON THE MATCH";
          else 
          document.getElementById("wins").textContent = "COM WON THE MATCH";
             
      }
    }
    else if(ctruns > truns)
    {
        out++;
        if(truns > ctruns)
        document.getElementById("wins").textContent = "YOU WON THE MATCH";
     else 
     document.getElementById("wins").textContent = "COM WON THE MATCH";

    }
}



