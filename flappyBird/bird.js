class Bird {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.vy = 0;
    this.width = 20;
    this.height = 10;
    this.weight = 0.7;
  }
  update() {
    let curve = Math.sin(angle) * 10;
    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }

    if (spacePressed) this.flap();
  }
  draw() {
    ctx.fillStyle = "#30f";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  flap() {
    this.vy -= 2;
  }
  





}

const bird = new Bird();
