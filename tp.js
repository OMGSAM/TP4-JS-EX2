<!DOCTYPE html>
<html>

<head>
  <title>Exercice 2</title>
  <style>
    body {
      background-color: rgb(22, 22, 22);
      color: rgb(184, 184, 184);
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      margin-top: 350px;
    }
  </style>
  <script>
    function f1() { document.body.style.backgroundColor = "yellow"; }
    function f2() { document.body.style.backgroundColor = "red"; }
    function f3() { document.body.style.backgroundColor = "green"; }
    function f4() { document.body.style.backgroundColor = "black"; }
  </script>
</head>

<body>
  <main>
    <button onclick="f1()">Jaune</button>
    <button onclick="f2()">Rouge</button>
    <button onclick="f3()">Vert</button>
    <button onclick="f4()">Noir</button>
  </main><br>
  <div>Modifier la couleur de l'arrière plan</div>
</body>

</html>
