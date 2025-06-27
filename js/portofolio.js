document.addEventListener("DOMContentLoaded", function () {
    const remarksDiv = document.getElementById("portofolio-text");

    remarksDiv.innerHTML = `
      <h3 style="color: var(--porto-txt-);">Portfolio Projects</h3>
      <div class="table-scroll-wrapper"> <table style="width:98%; border-collapse: collapse; font-family: sans-serif; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
      <table style="width:98%; border-collapse: collapse; font-family: sans-serif; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
        <thead ">
          <tr>
            <th style="padding: 8px; text-align: left; color:var(--accent-color); border-bottom: 1px solid #ccc;">Title</th>
            <th style="padding: 8px; text-align: left; color:var(--accent-color); border-bottom: 1px solid #ccc;">Stack</th>
            <th style="padding: 8px; text-align: left; color:var(--accent-color); border-bottom: 1px solid #ccc;">Description</th>
            <th style="padding: 8px; text-align: left; color:var(--accent-color); border-bottom: 1px solid #ccc;">Year</th>
          </tr>
        </thead>
        <tbody style="color: var(--porto-txt-);">
        <tr>
            <td style="padding: 8px;">Migrasi .NET (VB) ke NET Core (C#)</td>
            <td style="padding: 8px;">VB, .NET, C#, NET Core</td>
            <td style="padding: 8px;">Migrasi technology REST API NCS</td>
            <td style="padding: 8px;">2023 - 2025</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">BRI DTS Tracking</td>
            <td style="padding: 8px;">VB, .NET, MySql</td>
            <td style="padding: 8px;">REST API untuk tracking + autentikasi</td>
            <td style="padding: 8px;">2023</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Kiriminaja</td>
            <td style="padding: 8px;">VB, .NET, MySql</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2023</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Delivery Mandiri</td>
            <td style="padding: 8px;">VB, .NET, MySql</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2023</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Service API BCA</td>
            <td style="padding: 8px;">VB, .NET, MySql, Oauth 2</td>
            <td style="padding: 8px;">REST API untuk request pickup autentikasi</td>
            <td style="padding: 8px;">2023</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">LiveTracking Mandiri </td>
            <td style="padding: 8px;">C#, NET Core, MySql</td>
            <td style="padding: 8px;">REST API untuk tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Mobitek BCA</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Oauth 2 + Jwt</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Blibli</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk request pickup, cancel order & tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">BNI LCAP</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - DANA</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Mayapada</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Permata</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk tracking + autentikasi</td>
            <td style="padding: 8px;">2024</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Bukopin</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk tracking + autentikasi</td>
            <td style="padding: 8px;">2025</td>            
          </tr>
          <tr>
            <td style="padding: 8px;">Integrasi NCS - Lupromax</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk request pickup & tracking + autentikasi</td>
            <td style="padding: 8px;">2025</td>     
                   
          </tr> 
          <tr>
            <td style="padding: 8px;">Integrasi NCS - UNJ</td>
            <td style="padding: 8px;">C#, NET Core, MySql, Jwt</td>
            <td style="padding: 8px;">REST API untuk cek harga pengiriman + autentikasi</td>
            <td style="padding: 8px;">2025</td>                        
          </tr>          
        </tbody>
      </table>
    `;
});
