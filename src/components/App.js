import '../App.css';
function App() {
  return (
    <div className="main-body">
      <div id="msg">Account created successfully</div>
      <div class="main-heading">
        <h1>República Dominicana lo Tiene Todo</h1>
      </div>
      <div className="main-form">
        <h1>Suscríbete para más Destinos</h1>
        <form action="">
          <input type="email" name="email" id="email" placeholder="Enter your email" />
          <button id="sub-btn" type="submit" onclick="subMe()">SUBSCRIBE</button>
        </form>
      </div>
      <div className="sdg-container">
        <div className="box">
          <img src="https://todorepublicadominicana.com/wp-content/uploads/2018/05/r-puentes-de-samana-walking-brides-peninsula-provincia-santa-barbara-todo-republica-dominicana.jpg" alt="Samana" />
        </div>
        <div className="box">
          <img src="https://minoticia.net/wp-content/uploads/2016/02/monumento-santiago.jpg" alt="Santiago" />
        </div>
        <div className="box">
          <img src="https://www.maniguetatours.com/wp-content/uploads/2021/04/DUDU.jpg" alt="Laguna Dudu" />
        </div>
        <div className="box">
          <img src="https://antonioheras.com/patrimonio_humanidad/america/5056d.jpg" alt="Zona Colonial" />
        </div>
        <div className="box">
          <img src="https://www.cataloniahotels.com/es/blog/wp-content/uploads/2020/08/Lagos_Tres_Ojos-min-scaled.jpg" alt="Los 3 Ojos" />
        </div>
      </div>
    </div>
  );
}

export default App;
