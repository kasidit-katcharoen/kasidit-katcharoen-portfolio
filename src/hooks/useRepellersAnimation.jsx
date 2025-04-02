import React, { useEffect, useRef } from "react";

const config = {
  widthToSpikeLengthRatio: 0.054,
};

const colorConfig = {
  particleOpacity: 0.2,
  baseHue: 350,
  hueRange: 9,
  hueSpeed: 0.04,
  colorSaturation: 100,
};

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  addTo(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }
  sub(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
  }
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  setLength(length) {
    let angle = Math.atan2(this.y, this.x);
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }
}

class Planet {
  constructor(x, y, g) {
    this.pos = new Vector(x, y);
    this.g = g;
  }
  draw(ctx) {
    ctx.fillStyle = "#AAA";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, spikeLength) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, spikeLength);
    this.spikeLength = spikeLength;
  }
  move(force) {
    if (force) {
      this.vel.addTo(force);
    }
    if (this.vel.getLength() > this.spikeLength) {
      this.vel.setLength(this.spikeLength);
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    let p2 = new Vector(this.pos.x + this.vel.x, this.pos.y + this.vel.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

const RepellersAnimation = ({ text = "Repellers", fontSizeRatio = 0.2 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let spikeLength = w * config.widthToSpikeLengthRatio;
    let hue = colorConfig.baseHue;
    let particles = [];
    let planets = [new Planet(w / 2, h / 2, 4000)];
    let tick = 0;

    function reset() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      spikeLength = w * config.widthToSpikeLengthRatio;
      drawText();
    }

    function mousemove(event) {
      planets[0].pos.x = event.clientX;
      planets[0].pos.y = event.clientY;
    }

    function drawText() {
      ctx.save();
      ctx.font = `bold ${w * fontSizeRatio}px Arial, Helvetica, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 1;
      ctx.strokeStyle = "white";
      ctx.strokeText(text, w / 2, h / 2);
      ctx.restore();
      
      let imageData = ctx.getImageData(0, 0, w, h);
      particles = [];
      
      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          let i = (x + w * y) * 4;
          let avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
          if (avg > 200) {
            particles.push(new Particle(x, y, spikeLength));
          }
        }
      }
      ctx.clearRect(0, 0, w, h);
    }

    function updateParticles() {
      hue += colorConfig.hueSpeed;
      let h = Math.sin(hue) * colorConfig.hueRange + colorConfig.baseHue;
      ctx.strokeStyle = `hsla(${h}, ${colorConfig.colorSaturation}%, 50%, ${colorConfig.particleOpacity})`;
      particles.forEach((p) => {
        planets.forEach((planet) => {
          let d = p.pos.sub(planet.pos);
          let length = d.getLength();
          let g = planet.g / length;
          if (g > 40) g = 40;
          d.setLength(g);
          p.move(d);
        });
        p.draw(ctx);
      });
    }

    function animate(now) {
      ctx.clearRect(0, 0, w, h);
      updateParticles();
      tick = now / 50;
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", reset);
    canvas.addEventListener("mousemove", mousemove);
    drawText();
    animate(0);
  }, [text, fontSizeRatio]);

  return <canvas ref={canvasRef} id="canvas" style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />;
};

export default RepellersAnimation;
