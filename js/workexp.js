// Ambil elemen <p> dengan id tertentu dan isi teksnya
document.addEventListener("DOMContentLoaded", function () {
    const personalDataP = document.getElementById("workexp-text");
    personalDataP.innerHTML = `
    <div style="margin-top: 40px">
    <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
    <a href="https://ncskurir.com" target="_blank"
   style="color: inherit; text-decoration: underline; font-weight: bold; width:80%; max-width:35%"
   onmouseover="this.style.color='var(--accent-color)'"
   onmouseout="this.style.color='inherit'"> PT Nusantara Card Semesta   </a> <span style="margin-left: 2px;">(2023 – Present) </span>
    </p>
    <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
     Creating and maintaining more than 20+ production-ready APIs  
    </p>
     <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
     Improving API performance with logic code efficiency - query and indexing 
    </p>
     <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
      Fixing bugs  
    </p>
    <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
    Creating technical documentation and automated testing 
    </p>
    <p style= "display:flex; align-items:center; margin:10px 10px;">
    <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0"></span>
       Ensuring applications run smoothly to end users
    </p>
    </div>
   
    `
    });