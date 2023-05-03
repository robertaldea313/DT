function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getNonReturnToZeroMark(bits) {
    var result = [];
    var flag = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
         if (parseInt(bits[i].value) == 1){
             if (flag==1){
                flag = 0;
                symbol = '∣▁▁'; 
             } 
             else if(flag==0){
              flag = 1;
              symbol = '∣▔▔';
            }
        } 
        else if (flag==1) symbol = '▔▔';
        else if (flag==0) symbol = '▁▁';
        result.push(symbol);
    }
    return result;
}

function getNonReturnToZeroSpace(bits) {
    var result = [];
    var flag = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
         if (parseInt(bits[i].value) == 0){
             if (flag==1){
                flag = 0;
                symbol = '∣▁▁'; 
             } 
             else if(flag==0){
              flag = 1;
              symbol = '∣▔▔';
            }
        } 
        else if (flag==1) symbol = '▔▔';
        else if (flag==0) symbol = '▁▁';
        result.push(symbol);
    }
    return result;
}

function getReturnToZero(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol ='∣▔∣▁';
        if (parseInt(bits[i].value) == 0) symbol ='▁▁';
        result.push(symbol);
    }
    return result;
}

function getBiphaseLevel(bits){
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 0 && i>0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▁∣▔';
        if ((parseInt(bits[i].value) == 1 && i>0 && parseInt(bits[i - 1].value) == 1) || ((bits[i].value) == 1 && i==0)) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getBiphaseMark(bits) {
    var result = [];
    var flag = 0;
    for (var i = 0; i < bits.length; i++) 
    {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1){
             if (flag==1){
                symbol = '∣▁∣▔'; 
             } 
             else if(flag==0){
                symbol = '∣▔∣▁';
            }
        } 
        else if (parseInt(bits[i].value) == 0){
             if (flag==1){
                flag = 0;
                symbol = '∣▁▁'; 
             } 
             else if(flag==0){
              flag = 1;
              symbol = '∣▔▔';
            }
        }
        result.push(symbol);
      } 
    
    return result;
    }