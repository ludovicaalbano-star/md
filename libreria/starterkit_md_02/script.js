        let dimensioneForma = 40;

        function setup() {
            createCanvas(windowWidth, windowHeight);
            background(26);
            noStroke();     
        }

        function draw() {
    
            if (mouseIsPressed) {
                let rosso = map(mouseX, 0, width, 50, 255);
                let verde = map(mouseY, 0, height, 50, 255);
                let blu = 180; 

                fill(rosso, verde, blu);

                if (keyIsPressed) {
                    rectMode(CENTER); 
                    rect(mouseX, mouseY, dimensioneForma, dimensioneForma);
                } else {
                    circle(mouseX, mouseY, dimensioneForma);
                }
            }
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
            background(26);
        }

        function salvaDisegno() {
            saveCanvas('disegno', 'jpg');
        }