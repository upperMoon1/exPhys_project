// risk class calculator //

    function calc() 
    {
      // initialization:
      var Signs   = 0; 
      var Risk    = 0;
      var Disease = 0;
    
        
      // ************ disease to be deceased of calculation: ***********
      if( document.forms[0].CVD.checked )
        Disease += parseInt(document.forms[0].CVD.value);
      
      if( document.forms[0].PD.checked )
        Disease += parseInt(document.forms[0].PD.value);
      
      if( document.forms[0].MD.checked )
        Disease += parseInt(document.forms[0].MD.value);
    
        
      // ********* signs of the time calculation: ***************
      if( document.forms[0].Angina.checked )
        Signs += parseInt(document.forms[0].Angina.value); 
      
      if( document.forms[0].Breath.checked )
        Signs += parseInt(document.forms[0].Breath.value);
      
      if( document.forms[0].Faint.checked )
        Signs += parseInt(document.forms[0].Faint.value);
      
      if( document.forms[0].Apnea.checked )
        Signs += parseInt(document.forms[0].Apnea.value); 
      
      if( document.forms[0].Edema.checked )
        Signs += parseInt(document.forms[0].Edema.value); 
      
      if( document.forms[0].Palp.checked )
        Signs += parseInt(document.forms[0].Palp.value);
      
      if( document.forms[0].Claud.checked )
        Signs += parseInt(document.forms[0].Claud.value);
      
      if( document.forms[0].Murmur.checked )
        Signs += parseInt(document.forms[0].Murmur.value);
      
      if( document.forms[0].Fatigue.checked )
        Signs += parseInt(document.forms[0].Fatigue.value);
    
      // ****************** risk makes life exciting *************
      if( document.forms[0].Age.checked )
        Risk += parseInt(document.forms[0].Age.value);
      
      if( document.forms[0].Smoke.checked )
        Risk += parseInt(document.forms[0].Smoke.value);
       
      if( document.forms[0].BP.checked )
        Risk += parseInt(document.forms[0].BP.value);
       
      if( document.forms[0].Chol.checked )
        Risk += parseInt(document.forms[0].Chol.value);
      
      if( document.forms[0].Glucose.checked )
        Risk += parseInt(document.forms[0].Glucose.value);
      
      if( document.forms[0].Fat.checked )
        Risk += parseInt(document.forms[0].Fat.value); 
      
      if( document.forms[0].FH.checked )
        Risk += parseInt(document.forms[0].FH.value); 
      
      if( document.forms[0].Act.checked )
        Risk += parseInt(document.forms[0].Act.value);
      
      if( document.forms[0].HDL.checked )
        Risk += parseInt(document.forms[0].HDL.value);
      
      
      // for debugging purposes only:
      //alert( "Disease: " + Disease + ", signs: " + Signs + ", risk: " + Risk );
      
      if( (Disease==1) || (Signs > 0) )
      {
        document.forms[0].Risk.value ="High";
        document.forms[0].Sub.value  ="Recommended";
        document.forms[0].Max.value  ="Recommended";
        document.forms[0].Mod.value  ="Recommended";
        document.forms[0].Vig.value  ="Recommended"; 
        return;
      }   
      
      if ( Risk > 1 )
      {
        document.forms[0].Risk.value ="Moderate"
        document.forms[0].Sub.value  ="Not Necessary"
        document.forms[0].Max.value  ="Recommended"
        document.forms[0].Mod.value  ="Not Necessary";
        document.forms[0].Vig.value  ="Recommended"; 
        return;
      }
      
        if( Risk <= 1 )
      {
        document.forms[0].Risk.value ="Low"
        document.forms[0].Sub.value  ="Not Necessary"
        document.forms[0].Max.value  ="Not Necessary"
        document.forms[0].Mod.value  ="Not Necessary"
        document.forms[0].Vig.value  ="Not Necessary"
      }
    }
    