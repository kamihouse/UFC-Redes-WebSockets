(function() {
  var App;
  App = {};
  
  /*
  	Inicializando o Script
  	Define as propriedades do canvas para desenhar e do evento Draw
  */
  App.init = function() {
    App.canvas = document.createElement('canvas');
    App.canvas.height = 600;
    App.canvas.width = 800;
    document.getElementsByTagName('article')[0].appendChild(App.canvas);
    App.ctx = App.canvas.getContext("2d");
    App.ctx.fillStyle = "solid";
    App.ctx.strokeStyle = "rgba(220,220,220,0.3)";
    App.ctx.lineWidth = 3;
    App.ctx.lineCap = "round";
    
    // Faz a conexão com o socket
    App.socket = io.connect('http://localhost:8081');
    
    App.socket.on('draw', function(data) {
      return App.draw(data.x, data.y, data.type);
    });
    
    App.draw = function(x, y, type) {
      if (type === "dragstart") {
        App.ctx.beginPath();
        return App.ctx.moveTo(x, y);
      } else if (type === "drag") {
        App.ctx.lineTo(x, y);
        return App.ctx.stroke();
      } else {
        return App.ctx.closePath();
      }
    };
  };
  
  /*
  	Eventos de Desenho baseado no Canvas
  */
  $('canvas').live('drag dragstart dragend', function(e) {
    var offset, type, x, y;
    type = e.handleObj.type;
    offset = $(this).offset();
    e.offsetX = e.layerX;
    e.offsetY = e.layerY;
    x = e.offsetX;
    y = e.offsetY;
    
    App.draw(x, y, type);
    
    App.socket.emit('drawClick', {
      x: x,
      y: y,
      type: type
    });
  });
  
  $(function() {
    return App.init();
  });
}).call(this);
