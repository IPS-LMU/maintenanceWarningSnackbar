(async function() {
    let txtURL = "maintenanceText.txt";
    let snackbarCss = /*css*/`
    #maintenance-warning-snackbar {
        visibility: hidden;
        width: 75%;
        margin-left: -125px;
        background-color: #faed27;
        color: #f00;
        text-align: center;
        border-radius: 7px;
        border: 2px solid #F00;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 25%;
        bottom: 30px;
        font-size: 17px;
      }
      
      #maintenance-warning-snackbar.show {
        visibility: visible;
        -webkit-animation: maintenance-warning-snackbar-fadein 0.5s, maintenance-warning-snackbar-fadeout 0.5s 9.5s;
        animation: maintenance-warning-snackbar-fadein 0.5s, maintenance-warning-snackbar-fadeout 0.5s 9.5s;
      }
      
      @-webkit-keyframes maintenance-warning-snackbar-fadein {
        from {bottom: 0; opacity: 0;} 
        to {bottom: 30px; opacity: 1;}
      }
      
      @keyframes maintenance-warning-snackbar-fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
      }
      
      @-webkit-keyframes maintenance-warning-snackbar-fadeout {
        from {bottom: 30px; opacity: 1;} 
        to {bottom: 0; opacity: 0;}
      }
      
      @keyframes maintenance-warning-snackbar-fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
      }
    
      .maintenance-warning-snackbar-close-button {
        background: transparent;
        border: none;
        color: black;
        position: absolute;
        right: 0px;
        text-align: center;
        top: 3px;
        width: 30px;
        height: 30px;
        z-index: 99999;
    }
    .maintenance-warning-snackbar-close-button:hover{
        filter: invert(100%);
    }
    
    `;
    // get text
    let resp = await fetch(txtURL);
    console.log(resp.status);
    if(resp.status === 200){
        // div that is the snackbar container
        let snackbarEl = document.createElement('div');
        snackbarEl.innerHTML = await resp.text(); // Insert text
        snackbarEl.id = 'maintenance-warning-snackbar';
        snackbarEl.style.cssText = snackbarCss;
        document.body.appendChild(snackbarEl);
        
        // close button
        let closeBtn = document.createElement('button');
        closeBtn.className = "maintenance-warning-snackbar-close-button";
        closeBtn.innerHTML = "X";
        closeBtn.onclick = () => {
            snackbarEl.className = snackbarEl.className.replace("show", "");
        };
        snackbarEl.appendChild(closeBtn);
        
        // add styling via style element
        let styleEl = document.createElement('style');
        styleEl.innerText = snackbarCss;
        document.body.appendChild(styleEl);

        // finally show snackbar 
        snackbarEl.className = "show";
        setTimeout(() => { snackbarEl.className = snackbarEl.className.replace("show", ""); }, 10000);
    } else {
        // console.log("no maintenance text found!")
    }
})();
