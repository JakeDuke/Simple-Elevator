function goto(level,button){
    if(level > 3 || Number(button) > 3) {
    return 0;
    }  else if (level < -3 ||  Number(button) < -3) {
    return 0;
    }  else if (typeof level !== 'number' || typeof button !== 'string') {
    return 0;
      } else if (level % 1 !== 0 ||  Number(button) % 1 !== 0 ) {
    return 0;
    }  else if (button === undefined ||  button === '') {
    return 0;
     }  else if (level === undefined ||  level === '') {
    return 0;
    
    } else {
      return Math.floor(Number(button)) - Math.floor(level);
    }
  }