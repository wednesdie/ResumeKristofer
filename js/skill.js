// Ambil elemen <p> dengan id tertentu dan isi teksnya
document.addEventListener("DOMContentLoaded", function () {
    const personalDataP = document.getElementById("skill-text");
    personalDataP.innerHTML = `       
    <div style="margin-top: 40px" display: flex;>
        <p style= "display:flex; align-items:center; margin:10px 10px;">
        <span class="skill-line" style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0;"></span>
        Programming Languages: C#, VB, HTML5, CSS3, JavaScript
        </p>

        <p style= "display:flex; align-items:center; margin:10px 10px;">
        <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0;"></span>
        Backend Framework: .NET Core, .NET
        </p>

        <p style= "display:flex; align-items:center; margin:10px 10px;">
        <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0;"></span>
        Databases: MySQL, SQL Server
        </p>

        <p style= "display:flex; align-items:center; margin:10px 10px;">
            <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px;flex-shrink:0;"></span>
            API & Architecture: RESTful API, Webhook, API Gateway (Ocelot)
        </p>

        <p style= "display:flex; align-items:center; margin:10px 10px;">
            <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0;"></span>
            Source Control: Git, Git Bash
        </p>   

        <p style= "display:flex; align-items:center; margin:10px 10px;">
            <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0 ;"></span>
            Testing: Postman, Swagger, Integration Testing, Stress Testing
        </p>    

        <p style= "display:flex; align-items:center; margin:10px 10px;">
            <span style="display: inline-block; width: 90px; border-top: 2px  solid var(--accent-color); vertical-align: middle; margin-right: 8px; flex-shrink:0; "></span>
            Security: JWT, OAuth2, Rate Limiting, Load Balancing, SQL Injection Prevention, Input Validation
        </p>    
    </div>
   `});
