 function capital()
 {
   let cap=document.getElementById("cap").value;
    let capregex=/^\d+(\.\d+)?$/; 
   let resultado;
   if (capregex.test(cap))
   {
    resultado=cap*0.2
    document.getElementById("resul").value=resultado;
    document.getElementById("cap").value="";
   }
   else
   {
    alert("El capital no puede ser negativo ni letras (Si decimales)")
   }
    
 }
 function ejercicio2()
 {
    let checar=/^\d+(\.\d+)?$/;  
   let venta1=document.getElementById("venta1").value;
   let venta2=document.getElementById("venta2").value;
   let venta3=document.getElementById("venta3").value;
   let sueldo=document.getElementById("sueldobase").value;

   if (checar.test(venta1))
   {
      if(checar.test(venta2))
      {
        if(checar.test(venta3))
        {
          if(checar.test(sueldo))
          {
            let comision=(parseFloat(venta1)+parseFloat(venta2)+parseFloat(venta3))*0.1;
            let sueldototal=parseFloat(sueldo)+parseFloat(comision);
            document.getElementById("sueldobaseresul").value=sueldo;
            document.getElementById("comisionresul").value=comision;
            document.getElementById("sueldotresul").value=sueldototal;
            document.getElementById("venta1").value="";
            document.getElementById("venta2").value="";
            document.getElementById("venta3").value="";
            document.getElementById("sueldobase").value="";
          }
          else
          {
            alert("El sueldo no puede ser negativo ni letras (Si decimales)")
          }
        }
        else
        {
          alert("La venta 3 no pueden ser letras ni negativos (Si decimales)")
        }

      }
      else{
        alert("La venta 2 no pueden ser letras ni negativos (Si decimales)")
      }
   }
   else{
    alert("La venta 1 no pueden ser letras ni negativos (Si decimales)")
   }
 }
 function ejercicio3()
 {
   let compra=document.getElementById("compra").value;
   let compraregex=/^\d+(\.\d+)?$/; 
   if(compraregex.test(compra))
   {
    let descuento=parseFloat(compra)*0.15;
    let preciofinal=parseFloat(compra)-descuento;
    document.getElementById("compraresultado").value=preciofinal;
    document.getElementById("compra").value="";
   }
   else
   {
    alert("La compra no pueden ser letras ni negativos (Si decimales)")
   }
   
 }
 function ejercicio4()
 {
  let calificacionregex=/^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
   let calificacion1=document.getElementById("calificacion1").value;
   let calificacion2=document.getElementById("calificacion2").value;
   let calificacion3=document.getElementById("calificacion3").value;
   let califexamenfinal=document.getElementById("examenfinal").value;
   let trabajofinal=document.getElementById("trabajofinal").value;
   if(calificacionregex.test(calificacion1))
   {
    if(calificacionregex.test(calificacion2))
    {
      if(calificacionregex.test(calificacion3))
      {
        if (calificacionregex.test(califexamenfinal))
        {
          if(calificacionregex.test(trabajofinal))
          {
            let promediocalificaciones=(parseFloat(calificacion1)+parseFloat(calificacion2)+parseFloat(calificacion3))/3;
            let porcentajefinal=(promediocalificaciones*0.55)+(parseFloat(califexamenfinal)*0.30)+(parseFloat(trabajofinal)*0.15);
            document.getElementById("calificacionfinal").value=porcentajefinal;
            document.getElementById("calificacion1").value="";
            document.getElementById("calificacion2").value="";
            document.getElementById("calificacion3").value="";
            document.getElementById("examenfinal").value="";
            document.getElementById("trabajofinal").value="";
          }
          else
          {
            alert("La calificación del trabajo final no puede ser numeros negativos ni letras (Si decimales), también debe ser un número entre 0 y 10")
          }
        }
        else
        {
          alert("La calificación del examen final no puede ser numeros negativos ni letras (Si decimales), también debe ser un número entre 0 y 10")
        }
      }
      else
      {
        alert("La calificación 3 no puede ser numeros negativos ni letras (Si decimales), también debe ser un número entre 0 y 10")
      }
    }
    else
    {
      alert("La calificación 2 no puede ser numeros negativos ni letras (Si decimales), también debe ser un número entre 0 y 10")
    }
   }
   else
   {
    alert("La calificación 1 no puede ser numeros negativos ni letras (Si decimales), también debe ser un número entre 0 y 10")
   }
   
 }
 function ejercicio5()
 {
  let regex1=/^[1-9]\d*$/;
  let comprobar;
  let numeroalumnos=document.getElementById("numeroalumnos").value;
  let numeroalumnosh=document.getElementById("alumnosh").value;
  let numeroalumnosm=document.getElementById("alumnosm").value;
  if (regex1.test(numeroalumnos))
  {
    if (regex1.test(numeroalumnosh))
    {
      if (regex1.test(numeroalumnosm))
      {
        comprobar=parseInt(numeroalumnosh)+parseInt(numeroalumnosm);
        if (comprobar!=numeroalumnos)
        {
          alert("Los alumnos totales no son los mismos que los alumnos dados")
        }
        else{
          let porcentajealumnosh=(numeroalumnosh*100)/numeroalumnos;
          let porcentajealumnom=(numeroalumnosm*100)/numeroalumnos;
          document.getElementById("porcentajealumnos").value=porcentajealumnosh;
          document.getElementById("porcentajealumnas").value=porcentajealumnom;
          document.getElementById("numeroalumnos").value="";
          document.getElementById("alumnosh").value="";
          document.getElementById("alumnosm").value="";
        }
      }
      else
      {
        alert("El numero de alumnos mujeres no puede ser negativo ni letras ni decimales")
      }
    }
    else
    {
      alert("El numero de alumnos hombres no puede ser negativo ni letras ni decimales")
    }
  }
  else{
    alert("El numero total de alumnos no puede ser negativo ni letras ni decimales")
  }
 }
 function ejercicio6() {
  let fechan=new Date(document.getElementById("fechan").value);
  let fechaa=new Date();
  if (fechan>=fechaa)
  {
    alert("Esa fecha no es válida (porque es una fecha posterior a la actual)")
  }
  else
  {
    let años=fechaa.getFullYear()-fechan.getFullYear();
    let meses=fechaa.getMonth()-fechan.getMonth();
    let dias=fechaa.getDate()-fechan.getDate();
    if (meses<0 || (meses===0 && dias<0)) {
      años--;
      meses+=(dias<0?11:12);
    }
  
    if (dias<0) {
      let mesesdias=new Date(fechaa.getFullYear(), fechaa.getMonth(), 0).getDate();
      dias+=mesesdias;
      meses--;
    }
    
    let result= `Tienes ${años} años, ${meses} meses y ${dias-1} días de edad.`;
    document.getElementById('edadc').value = result;
  }
  
}
 
function ejercicio7()
{
  let n1=document.getElementById("n1").value;
  let n2=document.getElementById("n2").value;
  let regc=/^-?\d*\.?\d+$/;
  let resuk;
  if(regc.test(n1))
  {
    if(regc.test(n2))
    {
      
      if(parseFloat(n1)==parseFloat(n2))
      {
      resuk=parseFloat(n1)*parseFloat(n2);
      }
      if (parseFloat(n1)>parseFloat(n2))
      resuk=parseFloat(n1)-parseFloat(n2);
      if (parseFloat(n1)<parseFloat(n2))
      {
        resuk=parseFloat(n1)+parseFloat(n2);
      }
      document.getElementById("resuk").value=resuk;
      document.getElementById("n1").value="";
      document.getElementById("n2").value="";
    }
    else
    {
      alert("El número no pueden ser letras")
    }
  }
  else{
    alert("El número no pueden ser letras")
  }
  
}
function ejercicio8()
{
  let regd=/^-?\d*\.?\d+$/;
  let nu1=document.getElementById("nu1").value;
  let nu2=document.getElementById("nu2").value;
  let nu3=document.getElementById("nu3").value;
  if(regd.test(nu1))
  {
    if(regd.test(nu2))
    {
      if(regd.test(nu3))
      {
        let n1b=parseFloat(nu1)
        let n2b=parseFloat(nu2)
        let n3b=parseFloat(nu3)
        let mayor=n1b;
        if (n2b>mayor) 
        {
          mayor=n2b;
        }
        if (n3b>mayor) {
          mayor=n3b;
        }
          document.getElementById("resup").value=mayor;
          document.getElementById("nu1").value="";
          document.getElementById("nu2").value="";
          document.getElementById("nu3").value="";
      }
      else{
        alert("El número no pueden ser letras")
      }
    }
    else
    {
      alert("El número no pueden ser letras")
    }
  }
  else{
    alert("El número no pueden ser letras")
  }

  }
function ejercicio9()
 {
  let rege1=/^\d+$/;
  let rege2=/^\d*\.?\d+$/;
  let horastotales=document.getElementById("horastotales").value;
  let salariohora=document.getElementById("salario").value;
  let horasnormalestrabajadas;
  let pagototal;
  let pagonormal;
  let horasextra;
  let salariohorasextra2;
  let pagohorasextra;
  let salarioenhoratriple;
  let horasextratrabajadasp;
  let horasdobletrabajadas;
  let horastripletrabajadas;
  if(rege1.test(horastotales))
  {
    if(rege2.test(salariohora))
    {
      if (horastotales<=40)
      {
        pagototal=horastotales*salariohora;
      }
      else
      {
        pagonormal=40*salariohora;
        horasextra=horastotales-40;
        if(horasextra<=8)
        {
          pagohorasextra=salariohora*2;
          salariohorasextra2=pagohorasextra*horasextra;
          pagototal=pagonormal+salariohorasextra2;
        }
        else
        {
          pagohorasextra=salariohora*2;
          salariohorasextra2=pagohorasextra*8;
          horastriple=horasextra-8;
          salarioenhoratriple=salariohora*3;
          pagohorastriple=horastriple*salarioenhoratriple;
          pagototal=pagohorastriple+pagonormal+salariohorasextra2;
        }
      }
      if(horastotales<=40)
      {
        horasnormalestrabajadas=horastotales;
        horasdobletrabajadas=0;
        horastripletrabajadas=0;
      }
      else
      {
        horasnormalestrabajadas=40;
        horasextratrabajadasp=horastotales-40;
        if(horasextratrabajadasp<=8)
        {
          horasdobletrabajadas=horasextratrabajadasp;
          horastripletrabajadas=0;
        }
        else
        {
          horasnormalestrabajadas=40;
          horasdobletrabajadas=8;
          horastripletrabajadas=horasextratrabajadasp-8;
        }

      }
      document.getElementById("salariofinal").value=pagototal;
      document.getElementById("horasnormales").value=horasnormalestrabajadas;
      document.getElementById("horasdobles").value=horasdobletrabajadas;
      document.getElementById("horastriples").value=horastripletrabajadas;
      document.getElementById("horastotales").value="";
      document.getElementById("salario").value="";
    }
    else
    {
      alert("El salario por hora no pueden ser letras (Si decimales)")
    }
  }
  else{
    alert("Las horas trabajadas solo pueden ser enteros positivos")
  }
  
 }
   
function ejercicio10(){
  let regp1=/^[1-9]\d*$|^0$/
  let regp2=/^(1[0-2]|[0-9])$/
  let regp3=/^[0-9]\d*(\.\d+)?$/
  let años=document.getElementById("años").value;
  let meses=document.getElementById("meses").value;
  let pagomes=document.getElementById("pagomes").value;
  let mesesaaños;
  let utilidad;
  let añostotales;
  let salariob;
  let salariototal;
  let utilidadb;
  if(regp1.test(años))
  {
    if(regp2.test(meses))
    {
      if(regp3.test(pagomes))
      {
        let añosb=parseInt(años);
        let mesesb=parseInt(meses)
        let pagomesb=parseFloat(pagomes)
        mesesaaños=mesesb/12;
        añostotales=mesesaaños+añosb; 
        if(añostotales<1){
            utilidad=pagomesb*0.05;
        }
        if(añostotales>=1 && añostotales<2){
            utilidad=pagomesb*0.07;
        }
        if(añostotales>=2 && añostotales<5){
            utilidad=pagomesb*0.10;
        }
        if(añostotales>=5 && añostotales<10){
            utilidad=pagomesb*0.15;
        }
        if(añostotales>=10){
            utilidad=pagomesb*0.20;
        }
        
        utilidadb=utilidad*12;
        
        salariob=pagomes*12;
        salariototal=salariob+utilidadb;
        document.getElementById("sutilidad").value=salariototal;
        document.getElementById("utilidad").value=utilidadb;
        document.getElementById("años").value="";
        document.getElementById("meses").value="";
        document.getElementById("pagomes").value="";
      }
      else{
        alert("El pago por mes no pueden ser letras (Si decimales)")
      }
    }
    else
    {
      alert("Los meses solo pueden ir de 0 a 12 y no pueden ser letras ni decimales")
    }
  }
  else
  {
    alert("Los años deben ser enteros positivos")
  }
}
