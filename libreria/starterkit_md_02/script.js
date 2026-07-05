        let dimensioneForma = 40;

        /* TELA DA DISEGNI */
        function setup() {
            createCanvas(windowWidth, windowHeight);
            background(26);
            noStroke();     
        }

        /* SCIA DI COLORI */
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

        /* ADATTAMENTO DESKTOP */
        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
            background(26);
        }

        /* SALVATAGGIO TELA*/
        function salvaDisegno() {
            saveCanvas('disegno', 'jpg');
        }