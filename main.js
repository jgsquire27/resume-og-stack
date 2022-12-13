




let hideVar = false;

function buttonFunction(){

  switch(hideVar) {
    case false:
      document.getElementById('yeet').style.visibility = 'hidden';
      hideVar = true;
      console.log(hideVar);
      return hideVar;

    case true: 
      document.getElementById('yeet').style.visibility = 'visible';
      hideVar = false;
      console.log(hideVar);
      return hideVar;

  }

}

