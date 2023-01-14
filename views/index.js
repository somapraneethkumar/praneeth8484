<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./css/style.css" rel="stylesheet"> 
    <title>Document</title>
</head>
<body>
    <%- include("header.ejs"); %>
    <table>
        <% for(let i=0;i<allTodos.length;i++) {%>
            <tr>
                <td>
                    <%= allTodos[i].title%>
                </td>
            </tr>
        <%}%>
    </table>
    <%- include("footer.ejs"); %>
    
</body>
</html>
