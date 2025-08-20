 document.querySelectorAll('pre').forEach((pre)=>{
      const btn = document.createElement('button');
      btn.textContent = 'Copy';
      btn.className = 'copy';
      btn.addEventListener('click', ()=>{
        navigator.clipboard.writeText(pre.textContent).then(()=>{
          btn.textContent = 'Copied!';
          setTimeout(()=>btn.textContent='Copy',1000);
        },()=>{
          btn.textContent = 'Failed';
          setTimeout(()=>btn.textContent='Copy',1000);
        });
      });
      pre.style.position='relative';
      pre.parentNode.insertBefore(btn, pre.nextSibling);
    });

    document.getElementById('run-sim').addEventListener('click', ()=>{
      const fmt = document.getElementById('sim-format').value;
      const val = document.getElementById('sim-value').value;
      const type = document.getElementById('sim-type').value;
      let output = fmt;

      try {
        if(type === 'int') {
          output = fmt.replace(/%[0-9]*d/, parseInt(val,10));
        } else if(type === 'unsigned') {
          output = fmt.replace(/%[0-9]*u/, Math.abs(parseInt(val,10)) >>> 0);
        } else if(type === 'double') {
          if(/%[0-9]*\.?[0-9]*f/.test(fmt)) {
            const match = fmt.match(/%([0-9]*)\.?([0-9]*)f/);
            const width = match[1] ? parseInt(match[1]) : undefined;
            const precision = match[2] ? parseInt(match[2]) : undefined;
            let num = parseFloat(val).toFixed(precision ?? 6);
            if(width) num = num.toString().padStart(width,' ');
            output = fmt.replace(/%[0-9]*\.?[0-9]*f/, num);
          } else {
            output = fmt.replace(/%f/, parseFloat(val));
          }
        } else if(type === 'string') {
          output = fmt.replace(/%s/, val);
        } else if(type === 'char') {
          output = fmt.replace(/%c/, val.charAt(0));
        }
      } catch(e) {
        output = 'Error in simulation';
      }

      document.getElementById('sim-output').textContent = output;
    });