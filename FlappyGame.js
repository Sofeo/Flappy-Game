function startGame() {
    gameArea.start();
}

gameArea = {
    canvas : document.createElement('canvas');
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}